import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";

import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Proposal",
  description:
    "Boost your Upwork success with Quick Proposal: the simplest SAAS app to craft winning job proposals effortlessly. Say goodbye to writer's block and hello to more jobs!",
};

export default async function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 grid">{children}</div>
      </body>
    </html>
  );
}
