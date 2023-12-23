import { UnknownKey } from "@/utils";
import { object, string, ref } from "yup";

export const RegisterSchema = object()
  .shape({
    name: string().required("Name is required"),
    email: string().required("Email is required"),
    password: string().required("Password is required"),
  })
  .noUnknown(UnknownKey);

export const ResetSchema = object()
  .shape({
    confirm_password: string()
      .oneOf([ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    password: string().required("Password is required"),
  })
  .noUnknown(UnknownKey);
