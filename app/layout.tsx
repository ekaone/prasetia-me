"use client";

import { useState } from "react";
import {
  Geist,
  Geist_Mono,
  Radio_Canada,
  Radio_Canada_Big,
} from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/magicui/particles";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const radioCanadaBig = Radio_Canada_Big({
  variable: "--font-radio-canada-big",
  subsets: ["latin"],
});

const radioCanada = Radio_Canada({
  variable: "--font-radio-canada",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [color] = useState<string>("#ffffff");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${radioCanadaBig.variable} ${radioCanada.variable} antialiased min-h-screen p-4`}
      >
        {children}
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </body>
    </html>
  );
}
