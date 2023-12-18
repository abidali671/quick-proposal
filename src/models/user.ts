import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  token: string;
  verified: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String, trim: true },
    password: { type: String },
    token: { type: String },
    verified: { type: Boolean },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
