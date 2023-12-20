const mongoUri =
  "mongodb+srv://abidali671:3qExTPaZjAJ6WX43@cluster0.cbh5wlu.mongodb.net/client";

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
