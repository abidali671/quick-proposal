import User from "@/models/user";
import connectMongoDB from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  await connectMongoDB();
  await User.create({ email, password });

  NextResponse.json(
    { msg: `Verification mail sent to ${email}.` },
    { status: 201 }
  );
}
