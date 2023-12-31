import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler, supabase } from "@/utils";
import { FeedbackSchema } from "@/schema/feedback";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message, rating } = await request.json();

    await FeedbackSchema.validate(
      { email, name, message, rating },
      { abortEarly: false, strict: true }
    );

    let { data: existingFeedback } = await supabase
      .from("Feedback")
      .select("*")
      .eq("email", email);

    const feedback = existingFeedback?.[0];

    if (feedback) {
      const { error } = await supabase
        .from("Feedback")
        .update({ email, name, message, rating })
        .eq("id", feedback.id)
        .select();
      if (error)
        throw { msg: "Something is wrong. Please try again later", error };
    } else {
      const { error } = await supabase
        .from("Feedback")
        .insert([{ email, name, message, rating }])
        .select();
      if (error)
        throw { msg: "Something is wrong. Please try again later", error };
    }

    return NextResponse.json(
      { msg: "Feedback submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
