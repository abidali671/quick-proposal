import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    const buffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(buffer);

    return NextResponse.json(uint8Array, { status: 200 });
  } catch (error) {
    return NextResponse.json(error?.response?.data, { status: 500 });
  }
}
