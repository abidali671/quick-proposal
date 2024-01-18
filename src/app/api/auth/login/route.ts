import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";
import { ErrorHandler, generateToken, registerMail, supabase } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    let { data: existingUserByEmail } = await supabase
      .from("Users")
      .select("*")
      .eq("email", email);

    const user = existingUserByEmail?.[0];

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
        non_field_error: "Invalid username or password",
      };

    delete user.password;
    delete user.token;
    delete user.history;

    const accessToken = generateToken(user);

    return NextResponse.json({ accessToken, user }, { status: 201 });
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
