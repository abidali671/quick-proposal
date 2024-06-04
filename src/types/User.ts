import { ObjectId } from "mongoose";
import { IHistory } from "./History";

export interface IUser {
  _id: ObjectId;
  email: string;
  password: string;
  name: string;
  token: string;
  verified: boolean;
  credits: number;
  history: IHistory[];
}
