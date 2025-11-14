import type { Metadata } from "next";
import type { ReactNode } from "react";

import "antd/dist/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Samuel Lam | Portfolio",
  description:
    "Personal portfolio for Samuel Lam showcasing projects, experience, and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
