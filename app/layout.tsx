import type { Metadata } from "next";

import "./globals.css";
import ClientLayout from "./client-layout";

export const metadata: Metadata = {
  title: "元道化学 - 精细化学品的绿色合成与应用创新",
  description: "以分子科技为核心，致力于精细化学品的绿色合成与应用创新",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
