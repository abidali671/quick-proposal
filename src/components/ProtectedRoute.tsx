"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn !== "true") {
    router.push("/login?redirect" + pathname);
  }

  return children;
};

export default ProtectedRoute;
