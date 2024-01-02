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

    const prompt = `Compose a response applying for a job opportunity with the given skills, title and description. The response should start with a 2 lines of hook that target the given description point. and the response should contains inquire about more details regarding the job and add previous work URL list. The response should not Highlight my skill and ability. The words should be less than 100, simple, easy and like human written, includes some emojis and the words tone should be confident.
    title: "${payload.title}"
    description: "${payload.description}"

    Note: The data should be formatted for html textarea
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
