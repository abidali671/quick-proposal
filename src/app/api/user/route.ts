import { ErrorHandler, supabase } from "@/utils";
import authenticate from "@/utils/Authenticate";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  try {
    const authorization = headers().get("authorization");

    const decoded = authenticate(authorization ?? "") as Record<string, string>;

    let { data } = await supabase
      .from("Users")
      .select("*")
      .eq("email", decoded.email)
      .eq("id", decoded.id);

    const user = data?.[0];

    delete user.password;
    delete user.token;

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
