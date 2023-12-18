"use client";

import React from "react";
import { useFormik } from "formik";
import Input from "@/components/Input";
import "./style.css";
import Button from "@/components/Button";
import { clientAPI } from "@/utils/api";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";

function Login() {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      const response = await clientAPI.post("/auth/login", data);
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
            onChange={(event) => setFieldValue("email", event.target.value)}
          />
          <Input
            label="Password"
            value={values.password}
            onChange={(event) => setFieldValue("password", event.target.value)}
            type="password"
          />
          <Link className="text-gray-400 text-sm" href="/register">
            Forgot password?
          </Link>
        </div>
        <Button label="Continue" type="submit" />
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
