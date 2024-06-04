import { IHistory } from "@/types/History";
import mongoose from "mongoose";

const HistorySchema = new mongoose.Schema<IHistory>({
  _id: mongoose.Schema.Types.ObjectId,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  title: String,
});

const HistoryModel =
  mongoose?.models?.History || mongoose.model("History", HistorySchema);

export default HistoryModel;
