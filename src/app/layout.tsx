import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "进化日记 | 心理咨询与成长",
  description: "一名心理咨询师的跨界、迷茫、探索，以及那些微小但确定的改变。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
