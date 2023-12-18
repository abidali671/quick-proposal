import { UnknownKey } from "@/utils";
import { object, string } from "yup";

export const RegisterSchema = object()
  .shape({
    name: string().required("Name is required"),
    email: string().required("Email is required"),
    password: string().required("Password is required"),
  })
  .noUnknown(UnknownKey);
