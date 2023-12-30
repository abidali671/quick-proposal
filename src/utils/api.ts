import Axios from "axios";
import config from "./config";

export const clientAPI = Axios.create({
  baseURL: config.clientBaseUrl + "/api",
});

export const openAI = Axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: "Bearer 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",
  },
});

export default { clientAPI, openAI };
