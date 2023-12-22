import nodemailer from "nodemailer";
import config from "./config";

const nodeConfig = {
  service: "gmail",
  auth: {
    user: config.mailerEmail,
    pass: config.mailerPassword,
  },
};

async function resetMail({ email, name, token, id }: any) {
  try {
    const transporter = nodemailer.createTransport(nodeConfig);
    const verification_link = `${config.clientBaseUrl}/reset-password?id=${id}&token=${token}`;

    await transporter.sendMail({
      from: config.mailerEmail,
      to: email,
      subject: "Reset Password - Quick Proposal",
      html: `<div><b>Dear ${name},</b>
        <p>
        To reset your account password, please click the link below:<br/>
        <a target='_blank' href='${verification_link}'>${verification_link}</a></p><br/>
        <p>Cheers</p>
        <p>Abid Ali</p>
        </div>`,
    });
  } catch (error) {
    throw error;
  }
}

export default resetMail;
