import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";

// import connectMongoDB from "@/utils/mongodb";
import Header from "@/components/Header";

import "react-toastify/dist/ReactToastify.css";
import "../styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Proposal",
  description:
    "Boost your Upwork success with Quick Proposal: the simplest SAAS app to craft winning job proposals effortlessly. Say goodbye to writer's block and hello to more jobs!",
};

export default async function RootLayout({ children }: any) {
  // let isConnected = false;

  // const handleConnect = async () => {
  //   try {
  //     await connectMongoDB();
  //     isConnected = true;

  //     console.log("Mongo connection succeed");
  //   } catch (err) {
  //     console.log("Mongo connection failed: ", err);
  //   }
  // };

  // !isConnected && handleConnect();

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-1 grid">{children}</div>
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
  );
}
