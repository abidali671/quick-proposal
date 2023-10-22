import Axios from "axios";

export const clientAPI = Axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: "Bearer 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",
  },
});

export const openAI = Axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: "Bearer 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",
  },
});

export default { clientAPI, openAI };
