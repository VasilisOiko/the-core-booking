import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import crossfitLogo from "public/THE+CORE+logo+final.png"
import LocalesDropdown from "./components/organisms/LocalesDropdown/tailwind"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The core booking",
  description: "The unofficial booking website of The core",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative h-screen w-screen overflow-hidden">
        <img
         src={crossfitLogo.src}
         alt="crossfit logo"
         className="absolute inset-5 w-2/12 h-2/12"
        />
        <LocalesDropdown/>
          {children}
      </body>
    </html>
  );
}
