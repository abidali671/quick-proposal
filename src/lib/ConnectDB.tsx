import mongoose from "mongoose";

const ConnectDB = async () => {
  const message = "DB connected successfully";
  const username = process.env.MONGO_DB_CLUSTER_USERNAME;
  const password = process.env.MONGO_DB_CLUSTER_PASSWORD;
  const name = process.env.MONGO_DB_NAME;

  const uri = `mongodb+srv://${username}:${password}@cluster0.4cmzhxm.mongodb.net/${name}?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log("connections: ", mongoose.connections[0].readyState);
      return message;
    }

    await mongoose.connect(uri);
    return message;
  } catch (error) {
    throw error;
  }
};

export default ConnectDB;
