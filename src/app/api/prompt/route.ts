import { API, ErrorHandler } from "@/utils";
import authenticate from "@/utils/Authenticate";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import UserModel from "@/model/User";
import HistoryModel from "@/model/History";
import { IUser } from "@/types/User";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const authorization = headers().get("authorization");
    const decoded = authenticate(authorization ?? "") as Record<string, string>;

    const user = await UserModel.findById(decoded._id);

    if (user.credits < 1) {
      throw { error: "You are out of credits" };
    }

    const prompt = `
    generate a job proposal with the title and description.
    The words tone should be confident, simple, easy and like human written.
    the response should target this points
    "
    Restate their core problem.
    Provide a Solution.
    Tell them you can help solve their problem, and that you can start right away.
    Describe the process you’ll guide them through and inquire about more details.
    URL list of previous work.
    "

    ${payload.emojis ? "include some" : "don't"} emojis.
    title: "${payload.title}"
    description: "${payload.description}"

    Note: The data should be formatted for textarea value
    `;

    const response = await API.openAI.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      n: 1,
    });

    const proposalResult = {
      user_id: user._id,
      title: payload.title,
      content: response.data?.choices?.[0]?.message?.content,
    };

    const proposal = new HistoryModel(proposalResult);

    proposal.save();

    const updatedUser = await UserModel.findByIdAndUpdate(
      user._id,
      {
        credits: user.credits - 1,
        history: [proposal, ...user?.history],
      },
      { new: true }
    )
      .populate("history")
      .lean();

    let newUser = { ...updatedUser } as IUser;
    delete newUser.token;
    delete newUser.password;

    return NextResponse.json({ user: newUser, result: proposalResult });
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
