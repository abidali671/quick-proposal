import jwt from "jsonwebtoken";
import config from "./config";

const generateToken = (user: Record<string, any>) => {
  const token = jwt.sign(user, config.secretAccessToken, {
    expiresIn: "1h",
  });
  return token;
};

export default generateToken;
