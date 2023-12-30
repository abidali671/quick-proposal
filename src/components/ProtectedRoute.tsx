"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    router.push("/login");
  }

  return children;
};

export default ProtectedRoute;
