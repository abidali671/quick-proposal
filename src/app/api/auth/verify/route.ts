import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler, supabase } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    const { id, token } = await request.json();

    let { data: existingUserById } = await supabase
      .from("Users")
      .select("*")
      .eq("id", id);

    const user = existingUserById?.[0];

    if (user && user.token === token) {
      await supabase
        .from("Users")
        .update({ verified: true })
        .eq("id", id)
        .select();
    } else
      throw {
        non_field_error: "Invalid token or user ID",
      };

    return NextResponse.json(
      { msg: "Email verification successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
