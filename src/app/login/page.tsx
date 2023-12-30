"use client";

import React, { ChangeEvent } from "react";
import { useFormik } from "formik";
import Input from "@/components/Input";
import "./style.css";
import Button from "@/components/Button";
import { clientAPI } from "@/utils/api";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import { toast } from "react-toastify";

function Login() {
  const { values, setFieldValue, handleSubmit, isSubmitting, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: async (data, formikHelpers) => {
        try {
          const response = await clientAPI.post("/auth/login", data);
          toast("Login Successful", { type: "success" });
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("user", response.data.user);
          localStorage.setItem("isLoggedIn", "true");
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
        <h1 className="font-bold text-2xl text-center text-white">Login</h1>
        <p className="text-sm font-medium text-center text-gray-400">
          Fill the form to continue
        </p>
        <div className="fields_wrapper">
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
          <Link className="text-gray-400 text-sm" href="/register">
            Forgot password?
          </Link>
        </div>
        <Button label="Continue" type="submit" loading={isSubmitting} />
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

export default Login;
