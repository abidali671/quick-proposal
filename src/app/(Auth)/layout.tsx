import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Background from "@/assets/auth-background.jpg";
import Header from "@/components/Header";

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
        <div className="grid grid-rows-[auto_1fr] h-screen w-full">
          <Header />
          <div className="relative flex items-center p-5 md:p-20 max-md:justify-center">
            <img
              className="left-0 top-0 absolute h-full w-full object-cover grayscale"
              src={Background.src}
              alt="background"
            />
            <div className="bg-gray-dark shadow p-5 relative w-full max-w-sm rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
