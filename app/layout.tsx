import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import CustomCursor from "../components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S2A Studio",
  description: "Phase 1 Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Added bg-cad-grid here to overlay the blueprint lines globally */}
      <body className={`${inter.className} bg-[#030303] bg-cad-grid text-[#FAFAFA]`}>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}