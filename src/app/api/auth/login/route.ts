import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";
import { ErrorHandler, generateToken, registerMail } from "@/utils";
import ConnectDB from "@/lib/ConnectDB";
import UserModel from "@/model/User";

export async function POST(request: NextRequest) {
  try {
    await ConnectDB();

    const { email, password } = await request.json();

    const user = await UserModel.findOne({ email });

    const isCorrectPassword =
      user && (await bcrypt.compare(password, user.password));

    if (isCorrectPassword) {
      const { verified } = user;

      if (!verified) {
        await registerMail({
          id: user.id,
          name: user.name,
          token: user.token,
          email,
        });

        throw {
          non_field_error: `Email is not verified. Verification link sent to: ${email}`,
        };
      }
    } else
      throw {
        non_field_error: "Invalid email or password",
      };

    const { _id } = user;

    const accessToken = generateToken({ _id });

    return NextResponse.json({ accessToken }, { status: 201 });
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
