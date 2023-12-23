"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

import AuthLayout from "@/components/AuthLayout";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { clientAPI } from "@/utils/api";

function Verify() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const searchParams = useSearchParams();

  const [id, token] = ["id", "token"].map((i) => searchParams.get(i));

  useEffect(() => {
    const handleVerify = async () => {
      try {
        const response = await clientAPI.post("/auth/verify", { id, token });
        toast(response.data.msg, { type: "success" });
        setSuccess(true);
      } catch (error: any) {
        error?.response?.data?.non_field_error &&
          toast(error?.response?.data?.non_field_error, { type: "error" });
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    handleVerify();
  }, []);

  return (
    <AuthLayout>
      <div>
        <h1 className="font-bold text-2xl text-center text-white">
          Verify Email
        </h1>
        <p className="text-sm font-medium text-center text-gray-400 ">
          Email Verification By Token
        </p>
        <div
          className={
            "h-48 flex items-center flex-col " +
            (loading ? "justify-center" : "justify-between")
          }
        >
          {loading ? (
            <Spinner className="!h-12 !w-12" />
          ) : (
            <React.Fragment>
              <div />
              <p className={"text-center text-white"}>
                {success
                  ? "Congratulations! Your account has been successfully verified"
                  : "We regret to inform you that your email verification was unsuccessful"}
              </p>
              <Link href="/login" className="w-full">
                <Button label="Go to login" />
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </AuthLayout>
  );
}

export default Verify;
