"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { clientAPI } from "@/utils/api";
import { useStore } from "@/lib/Context";

import Spinner from "./Spinner";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { accessToken, updateUser, user } = useStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await clientAPI.get("/user", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });

        updateUser(response.data);
        setLoading(false);
      } catch (error) {
        updateUser(null);
        router.push("/login");
        console.log(error);
      }
    };

    fetchUser();
  }, [accessToken]);

  if (loading)
    return (
      <div className="flex items-center justify-center">
        <Spinner />
      </div>
    );

  if (!user) {
    router.push("/login");
  }

  return children;
};

export default ProtectedRoute;
