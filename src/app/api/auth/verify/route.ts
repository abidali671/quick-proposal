import { NextRequest, NextResponse } from "next/server";

import { ErrorHandler } from "@/utils";
import UserModel from "@/model/User";

export async function POST(request: NextRequest) {
  try {
    const { id, token } = await request.json();

    const user = await UserModel.findById(id);

    if (user && user.token === token) {
      await UserModel.updateOne({ _id: id }, { verified: true });
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
