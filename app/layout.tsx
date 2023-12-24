import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Kanit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const Kanits = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Utopia",
  description:
    "Utopia is payment gateway for the future, built on top of Stripe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${Kanits.className}  `}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
