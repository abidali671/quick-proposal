import mongoose from "mongoose";
import config from "./config";

const connectMongoDB = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(config.mongoUri);
};

export default connectMongoDB;
