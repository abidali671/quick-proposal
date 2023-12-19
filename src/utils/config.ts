const mongoUri =
  "mongodb+srv://admin:admin@cluster0.2yfgxuc.mongodb.net/quick_proposal?retryWrites=true&w=majority";

const clientBaseUrl = process.env.NEXT_PUBLIC_CLIENT_BASE_URL;

const mailerEmail = "abid.saeed.ali92@gmail.com";
const mailerPassword = "zyti mjqw kshi cwkp";

const config = {
  mongoUri,
  mailerEmail,
  mailerPassword,
  clientBaseUrl,
};

export default config;
