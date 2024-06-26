"use client";

import React, { ChangeEvent } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useFormik } from "formik";

import AuthLayout from "@/components/AuthLayout";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { clientAPI } from "@/utils/api";

import "./style.css";

function Register() {
  const { values, errors, setFieldValue, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/auth/register", data);
          toast(response.data.msg, { type: "success" });
        } catch (error: any) {
          formikHelpers.setErrors(error.response.data);
        }
      },
    });

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-center text-white">Register</h1>
        <p className="text-sm font-medium text-center text-gray-400">
          Create a new account
        </p>
        <div className="fields_wrapper">
          <Input
            label="Name"
            value={values.name}
            error={errors.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue("name", event.target.value)
            }
          />
          <Input
            label="Email"
            value={values.email}
            error={errors.email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue("email", event.target.value)
            }
          />
          <Input
            label="Password"
            value={values.password}
            error={errors.password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFieldValue("password", event.target.value)
            }
            type="password"
          />
        </div>
        <Button label="Continue" type="submit" loading={isSubmitting} />
        <p className="text-white text-sm mt-2">
          <span className="font-medium">Already have an account?</span>{" "}
          <Link className="text-gray-400" href="/login">
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Register;
