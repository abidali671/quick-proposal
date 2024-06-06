import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler } from "@/utils";
import { FeedbackSchema } from "@/schema/feedback";
import FeedbackModel from "@/model/Feedback";

export async function POST(request: NextRequest) {
  try {
    const { email, name, message, rating } = await request.json();

    await FeedbackSchema.validate(
      { email, name, message, rating },
      { abortEarly: false, strict: true }
    );

    const feedback = await FeedbackModel.findOne({ email });

    if (feedback) {
      feedback.name = name;
      feedback.message = message;
      feedback.rating = rating;
      await feedback.save();
    } else {
      const newFeedback = new FeedbackModel({ email, name, message, rating });
      await newFeedback.save();
    }

    return NextResponse.json(
      { msg: "Feedback submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
