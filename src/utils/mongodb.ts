import mongoose from "mongoose";
import config from "./config";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
  } catch (error) {
    throw { msg: "Unable to connection to DB", error };
  }
};

export default connectMongoDB;
