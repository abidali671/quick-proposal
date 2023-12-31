import { UnknownKey } from "@/utils";
import { object, string, number } from "yup";

export const FeedbackSchema = object()
  .shape({
    name: string().required("Name is required"),
    email: string().required("Email is required"),
    message: string().required("Password is required"),
    rating: number(),
  })
  .noUnknown(UnknownKey);
