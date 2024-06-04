import { NextRequest, NextResponse } from "next/server";
import optGenerator from "otp-generator";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schema/auth";
import { ErrorHandler, registerMail } from "@/utils";
import config from "@/utils/config";
import UserModel from "@/model/User";
import ConnectDB from "@/lib/ConnectDB";

export async function POST(request: NextRequest) {
  try {
    await ConnectDB();
    const { name, email, password } = await request.json();

    await RegisterSchema.validate(
      { name, email, password },
      { abortEarly: false, strict: true }
    );
    const existingUserByEmail = await UserModel.findOne({ email });

    if (existingUserByEmail) {
      throw { email: "Email already registered", existingUserByEmail };
    }

    const token = optGenerator.generate(12, {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: false,
    });

    const bcryptPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name,
      email,
      token,
      verified: false,
      password: bcryptPassword,
      credits: config.initialFreeCredits,
    });

    await user.save();

    await registerMail({ id: user._id, email, name, token });

    return NextResponse.json(
      { msg: `Verification link sent to: ${email}` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
