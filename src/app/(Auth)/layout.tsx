import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "@/assets/auth-background.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Proposal | Auth",
  description:
    "Boost your Upwork success with Quick Proposal: the simplest SAAS app to craft winning job proposals effortlessly. Say goodbye to writer's block and hello to more jobs!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[64px_1fr] h-screen w-full">
          <div className="bg-gray-600 flex items-center justify-between px-5">
            <p className="font-semibold text-white text-lg">Quick Proposal</p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-white">
                Available Credits: <b>1</b>
              </p>
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden"></div>
            </div>
          </div>
          <div className="relative flex items-center p-20">
            <img
              className="left-0 top-0 absolute h-full w-full object-cover"
              src={Background.src}
              alt="background"
            />
            <div className="bg-white shadow p-5 relative w-full max-w-sm rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
