import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log("connections: ", mongoose.connections[0].readyState);
      return true;
    }

    const uri = process.env.MONGO_DB_URI;

    await mongoose.connect(uri ?? "");
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed: ", error);
  }
};

export default ConnectDB;
