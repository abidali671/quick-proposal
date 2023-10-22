import { API } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
};

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    const prompt = `Compose a response applying for a job opportunity with the given skills, title and description. Highlight your ability, and start immediately for a quick delivery. Inquire about more details. Inquire about more details regarding the job. The words should be less than 100, simple , easy and like human written. Also and some emojis. Add previous work URL list.
    title: "${payload.title}"
    description: "${payload.description}"
    skills: "${payload.skills}"

    Note: The data should be formatted for html textarea
    `;

    const response = await API.openAI.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json(error);
  }
}
