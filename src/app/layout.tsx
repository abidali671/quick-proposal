import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import { ContextProvider } from "@/lib/Context";

import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Proposal",
  description:
    "Boost your Upwork success with Quick Proposal: the simplest SAAS app to craft winning job proposals effortlessly. Say goodbye to writer's block and hello to more jobs!",
};

export default async function RootLayout({ children }: any) {
  return (
    <ContextProvider>
      <html lang="en">
        <body
          className={`${inter.className} min-h-screen grid grid-rows-[auto_1fr]`}
        >
          <Header />
          <div className="grid relative">{children}</div>
          <ToastContainer
            autoClose={5000}
            position="top-center"
            theme="dark"
            pauseOnHover
            closeOnClick
            draggable
            closeButton={false}
          />
        </body>
      </html>
    </ContextProvider>
  );
}
