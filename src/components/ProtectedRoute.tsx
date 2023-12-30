"use client";

import { clientAPI } from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  let accessToken = "";

  if (typeof window !== "undefined") {
    accessToken = localStorage?.getItem("accessToken") ?? "";
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await clientAPI.get("/user", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });

        localStorage.setItem("user", response.data);
        localStorage.setItem("isLoggedIn", "true");
        setLoading(false);
      } catch (error) {
        localStorage.setItem("isLoggedIn", "false");
        router.push("/login");
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (isLoggedIn !== "true") {
    router.push("/login");
  }

  return children;
};

export default ProtectedRoute;
