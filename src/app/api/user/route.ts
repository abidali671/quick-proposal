import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { ErrorHandler } from "@/utils";
import authenticate from "@/utils/Authenticate";
import ConnectDB from "@/lib/ConnectDB";
import UserModel from "@/model/User";
import "@/model/History";

export async function GET() {
  try {
    await ConnectDB();
    const authorization = headers().get("authorization");
    const decoded = authenticate(authorization ?? "") as Record<string, string>;
    const user = await UserModel.findById(decoded._id).populate("history");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}
