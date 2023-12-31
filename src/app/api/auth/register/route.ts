import { NextRequest, NextResponse } from "next/server";
import optGenerator from "otp-generator";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schema/auth";
import { ErrorHandler, registerMail, supabase } from "@/utils";
import config from "@/utils/config";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    await RegisterSchema.validate(
      { name, email, password },
      { abortEarly: false, strict: true }
    );

    let { data: existingUserByEmail } = await supabase
      .from("Users")
      .select("*")
      .eq("email", email);

    if (existingUserByEmail?.length) {
      throw { email: "Email already registered" };
    }

    const token = optGenerator.generate(12, {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: false,
    });

    const bcryptPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          name,
          email,
          token,
          verified: false,
          password: bcryptPassword,
          credits: config.initialFreeCredits,
        },
      ])
      .select();

    if (error)
      throw { msg: "Something is wrong. Please try again later", error };

    await registerMail({ id: data[0].id, email, name, token });

    return NextResponse.json(
      { msg: `Verification link sent to: ${email}` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
