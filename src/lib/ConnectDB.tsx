import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    if (mongoose.connections[0].readyState === 1) {
      console.log("connections: ", mongoose.connections[0].readyState);
      return true;
    }

    await mongoose.connect(
      "mongodb+srv://abidali671:5CkksU0y1rpNOc96@cluster0.4cmzhxm.mongodb.net/quick_proposal_dashboard?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("DB connected successfully");
  } catch (error) {
    console.log("DB connection failed: ", error);
  }
};

export default ConnectDB;
