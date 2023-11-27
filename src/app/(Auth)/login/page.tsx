"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function Login() {
  const { data: session } = useSession();

  console.log("session: ", session);

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}

export default Login;
