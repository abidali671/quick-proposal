import mongoose from "mongoose";
import config from "./config";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoUri);
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
