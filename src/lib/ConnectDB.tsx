import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log("connections: ", mongoose.connections[0].readyState);
      return true;
    }

    const username = process.env.MONGO_DB_CLUSTER_USERNAME;
    const password = process.env.MONGO_DB_CLUSTER_PASSWORD;
    const name = process.env.MONGO_DB_NAME;

    const uri = `mongodb+srv://${username}:${password}@cluster0.4cmzhxm.mongodb.net/${name}?retryWrites=true&w=majority&appName=Cluster0`;

    await mongoose.connect(uri ?? "");
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed: ", error);
  }
};

export default ConnectDB;
