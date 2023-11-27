import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "@/context/AuthProvider";
import { getServerSession } from "next-auth/next";

import "./globals.css";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Proposal",
  description:
    "Boost your Upwork success with Quick Proposal: the simplest SAAS app to craft winning job proposals effortlessly. Say goodbye to writer's block and hello to more jobs!",
};

export default async function RootLayout({ children }: any) {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </AuthProvider>
  );
}
