import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

import connectMongoDB from "@/utils/mongodb";
import User from "@/models/user";
import { ErrorHandler } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    await connectMongoDB();

    const user = await User.findOne({
      email,
    });

    const isCorrectPassword =
      user && (await bcrypt.compare(password, user.password));

    if (isCorrectPassword) {
      const { verified } = user;

      if (!verified)
        throw {
          non_field_error: "User is not verified",
        };
    } else
      throw {
        non_field_error: "Invalid username or password",
      };

    return NextResponse.json({ msg: "Login Successful" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
