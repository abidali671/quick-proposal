import { API, ErrorHandler, supabase } from "@/utils";
import authenticate from "@/utils/Authenticate";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const authorization = headers().get("authorization");
    const decoded = authenticate(authorization ?? "") as Record<string, string>;

    let { data } = await supabase
      .from("Users")
      .select("*")
      .eq("email", decoded.email)
      .eq("id", decoded.id);

    const user = data?.[0];

    delete user.password;
    delete user.token;

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

    ${payload.emojis ? "include some":"don't"} emojis.
    title: "${payload.title}"
    description: "${payload.description}"

    Note: The data should be formatted for textarea value
    `;

    const response = await API.openAI.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      n: 1,
    });

    const { data: data2 } = await supabase
      .from("Users")
      .update({
        credits: user.credits - 1,
        history: [{ ...response.data, title: payload.title }, ...user?.history],
      })
      .eq("email", decoded.email)
      .eq("id", decoded.id)
      .select();

    const updatedUser = data2?.[0];

    delete updatedUser.password;
    delete updatedUser.token;

    return NextResponse.json({ user: updatedUser, result: response.data });
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}