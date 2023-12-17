"use client";

import React from "react";
import { useFormik } from "formik";
import Input from "@/components/Input";
import "./style.css";
import Button from "@/components/Button";

function Register() {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (val) => {
      console.log(val);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <h1 className="font-bold text-2xl text-center text-white">Register</h1>
      <p className="text-sm font-medium text-center text-gray-400">
        Create a new account
      </p>
      <div className="fields_wrapper">
        <Input
          label="Name"
          value={values.name}
          onChange={(event) => setFieldValue("name", event.target.value)}
        />
        <Input
          label="Email"
          value={values.email}
          onChange={(event) => setFieldValue("email", event.target.value)}
        />
        <Input
          label="Password"
          value={values.password}
          onChange={(event) => setFieldValue("password", event.target.value)}
        />
      </div>
      <Button label="Continue" type="submit" />
    </form>
  );
}

export default Register;
