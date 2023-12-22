"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import AuthLayout from "@/components/AuthLayout";
import Button from "@/components/Button";

import { clientAPI } from "@/utils/api";

import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import { useFormik } from "formik";

function ForgotPassword() {
  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/auth/forgot", data);
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
      <div>
        <h1 className="font-bold text-2xl text-center text-white">
          Forgot Password
        </h1>
        <p className="text-sm font-medium text-center text-gray-400 ">
          Fill the form to continue
        </p>
        <Button label="Submit" />
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;
