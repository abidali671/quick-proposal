"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import Input from "@/components/Input";
import AuthLayout from "@/components/AuthLayout";
import Button from "@/components/Button";
import { clientAPI } from "@/utils/api";

import "./style.css";

function ForgotPassword() {
  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/auth/forgot-password", data);
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
          Forgot Password
        </h1>
        <p className="text-sm font-medium text-center text-gray-400 ">
          Fill the form to continue
        </p>
        <div className="fields_wrapper">
          <Input
            label="Email"
            value={values.email}
            error={errors.email}
            onChange={(event) => setFieldValue("email", event.target.value)}
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

export default ForgotPassword;
