import { ObjectId } from "mongoose";

export interface IHistory {
  _id: ObjectId;
  user_id: ObjectId;
  content: string;
  title: string;
}
