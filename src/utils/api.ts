import Axios from "axios";
import config from "./config";

const openAISecretKey = process.env.OPEN_AI_SECRET_KEY;

export const clientAPI = Axios.create({
  baseURL: config.clientBaseUrl + "/api",
});

export const openAI = Axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: "Bearer " + openAISecretKey,
  },
});

export default { clientAPI, openAI };
