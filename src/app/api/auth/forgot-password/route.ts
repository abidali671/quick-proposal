import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler, registerMail, resetMail } from "@/utils";
import UserModel from "@/model/User";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    const user = await UserModel.findOne({ email });

    if (user) {
      const { verified } = user;

      if (!verified) {
        await registerMail({
          id: user._id,
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
        non_field_error: "Email is not registered",
      };

    await resetMail({
      email,
      name: user.name,
      token: user.token,
      id: user._id,
    });

    return NextResponse.json(
      { msg: "Reset password link sent, Please check your mail inbox" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
