import { NextRequest, NextResponse } from "next/server";
import optGenerator from "otp-generator";
import bcrypt from "bcrypt";

import { ErrorHandler, registerMail, supabase } from "@/utils";
import { ResetSchema } from "@/schema/auth";

export async function POST(request: NextRequest) {
  try {
    const { id, token, password, confirm_password } = await request.json();

    await ResetSchema.validate(
      { password, confirm_password },
      { abortEarly: false, strict: true }
    );

    let { data: existingUserByEmail } = await supabase
      .from("Users")
      .select("*")
      .eq("id", id);

    const user = existingUserByEmail?.[0];

    if (user) {
      const { verified } = user;

      if (!verified) {
        await registerMail({
          id,
          name: user.name,
          token: user.token,
          email: user.email,
        });

        throw {
          non_field_error: `Email is not verified. Verification link sent to: ${user.email}`,
        };
      } else if (user.token !== token) {
        throw {
          non_field_error: "Invalid token or user ID",
        };
      }
    } else
      throw {
        non_field_error: "Invalid token or user ID",
      };

    const newToken = optGenerator.generate(12, {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: false,
    });
    const bcryptPassword = await bcrypt.hash(password, 10);

    await supabase
      .from("Users")
      .update({ password: bcryptPassword, token: newToken })
      .eq("id", id)
      .select();

    return NextResponse.json(
      { msg: "Your password has been successfully reset" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
