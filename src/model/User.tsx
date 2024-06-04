import { IUser } from "@/types/User";
import mongoose, { Model } from "mongoose";

type UserModelT = Model<IUser>;

const UserSchema = new mongoose.Schema<IUser, UserModelT>({
  email: String,
  password: String,
  name: String,
  token: String,
  verified: Boolean,
  credits: Number,
  history: [{ type: mongoose.Schema.Types.ObjectId, ref: "History" }],
});

const UserModel = mongoose?.models?.User || mongoose.model("User", UserSchema);

export default UserModel;
