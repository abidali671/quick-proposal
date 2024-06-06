import { IFeedback } from "@/types/Feedback";
import mongoose, { Model } from "mongoose";

type FeedbackModelT = Model<IFeedback>;

const FeedbackSchema = new mongoose.Schema<IFeedback, FeedbackModelT>({
  email: String,
  name: String,
  message: String,
  rating: Number,
});

const FeedbackModel =
  mongoose?.models?.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;
