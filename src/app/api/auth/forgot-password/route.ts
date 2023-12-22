import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler, registerMail, resetMail, supabase } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    let { data: existingUserByEmail } = await supabase
      .from("Users")
      .select("*")
      .eq("email", email);

    const user = existingUserByEmail?.[0];

    if (user) {
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
        non_field_error: "Email is not registered",
      };

    await resetMail({ email, name: user.name, token: user.token, id: user.id });
    return NextResponse.json(
      { msg: "Reset password link sent, Please check your mail inbox" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
