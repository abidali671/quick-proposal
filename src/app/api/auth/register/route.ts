import { NextRequest, NextResponse } from "next/server";
import optGenerator from "otp-generator";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

import { RegisterSchema } from "@/schema/auth";
import { ErrorHandler } from "@/utils";
import config from "@/utils/config";
import User from "@/models/user";
import mongoose from "mongoose";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

    return NextResponse.json(
      { msg: mongoose?.connection?.readyState },
      { status: 201 }
    );

    await RegisterSchema.validate(
      { name, email, password },
      { abortEarly: false, strict: true }
    );

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw { email: "Email already registered" };
    }

    const token = optGenerator.generate(12, {
      upperCaseAlphabets: true,
      lowerCaseAlphabets: true,
      specialChars: false,
    });

    const bcryptPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      token,
      password: bcryptPassword,
      verified: false,
    });

    await RegisterMail({ id: user._id, email, name, token });

    return NextResponse.json(
      { msg: `Verification mail sent to: ${email}` },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(ErrorHandler(error), { status: 500 });
  }
}

const nodeConfig = {
  service: "gmail",
  auth: {
    user: config.mailerEmail,
    pass: config.mailerPassword,
  },
};

async function RegisterMail({ email, name, token, id }: any) {
  try {
    const transporter = nodemailer.createTransport(nodeConfig);
    const verification_link = `${config.clientBaseUrl}/verify?id=${id}&token=${token}`;

    await transporter.sendMail({
      from: config.mailerEmail,
      to: email,
      subject: "Verify Your Account - Sign-Up Confirmation",
      html: `<div><b>Dear ${name},</b>
      <p>
      To complete your sign-up, please click the verification link below:<br/>
      <a target='_blank' href='${verification_link}'>${verification_link}</a></p>
      <p>Thank you for joining Quick Proposal!</p>
      <p>Cheers</p>
      <p>Abid Ali</p>
      </div>`,
    });
  } catch (error) {
    throw error;
  }
}
