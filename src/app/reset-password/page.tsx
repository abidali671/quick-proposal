"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useFormik } from "formik";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { clientAPI } from "@/utils/api";
import AuthLayout from "@/components/AuthLayout";

import "./style.css";

function ResetPassword() {
  const searchParams = useSearchParams();

  const [id, token] = ["id", "token"].map((i) => searchParams.get(i));

  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        password: "",
        confirm_password: "",
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/auth/reset-password", {
            id,
            token,
            ...data,
          });
          toast(response.data.msg, { type: "success" });
        } catch (error: any) {
          if (error.response.data.non_field_error)
            toast(error.response.data.non_field_error, { type: "error" });
          else formikHelpers.setErrors(error.response.data);
        }
      },
    });

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-center text-white">
          Reset Password
        </h1>
        <p className="text-sm font-medium text-center text-gray-400">
          Fill the form to continue
        </p>
        <div className="fields_wrapper">
          <Input
            label="New password"
            value={values.password}
            error={errors.password}
            onChange={(event) => setFieldValue("password", event.target.value)}
            type="password"
          />
          <Input
            label="Confirm new password"
            value={values.confirm_password}
            error={errors.confirm_password}
            onChange={(event) =>
              setFieldValue("confirm_password", event.target.value)
            }
            type="password"
          />
        </div>
        <Button label="Submit" type="submit" loading={isSubmitting} />
        <p className="text-white text-sm mt-2">
          <span className="font-medium">Don&apos;t have an account?</span>{" "}
          <Link className="text-gray-400" href="/register">
            Register
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
