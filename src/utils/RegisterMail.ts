import nodemailer from "nodemailer";
import config from "./config";

const nodeConfig = {
  service: "gmail",
  auth: {
    user: config.mailerEmail,
    pass: config.mailerPassword,
  },
};

async function registerMail({ email, name, token, id }: any) {
  try {
    const transporter = nodemailer.createTransport(nodeConfig);
    const verification_link = `${config.clientBaseUrl}/verify?id=${id}&token=${token}`;

    await transporter.sendMail({
      from: config.mailerEmail,
      to: email,
      subject: "Verify Your Account - Quick Proposal",
      html: `<div><b>Dear ${name},</b>
        <p>
        To complete your sign-up, please click the verification link below:<br/>
        <a target='_blank' href='${verification_link}'>${verification_link}</a></p>
        <p>Thank you for joining Quick Proposal!</p><br/>
        <p>Cheers</p>
        <p>Abid Ali</p>
        </div>`,
    });
  } catch (error) {
    throw error;
  }
}

export default registerMail;
