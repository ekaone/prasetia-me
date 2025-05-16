import { Analytics } from "@vercel/analytics/next";
import {
  Geist,
  Geist_Mono,
  Radio_Canada,
  Radio_Canada_Big,
} from "next/font/google";
import "./globals.css";
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${radioCanadaBig.variable} ${radioCanada.variable} antialiased min-h-screen p-4`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
