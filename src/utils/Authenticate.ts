import jwt from "jsonwebtoken";
import config from "./config";

const authenticate = (authToken: string) => {
  try {
    const token = authToken.split(" ")[1];

    const user = jwt.verify(token, config.secretAccessToken);

    return user;
  } catch (error) {
    throw { auth: "Authentication failed", error };
  }
};

export default authenticate;
