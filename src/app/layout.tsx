import type { Metadata } from "next";
import { createElement } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import cursor from "@/components/cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gaurav Pandey | Cybernetics",
  description: "Portfolio of a Cybernetics Specialist and Security Architect.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {createElement(cursor)}
        {children}
      </body>
    </html>
  );
}
