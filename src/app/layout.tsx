import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";

export const metadata: Metadata = { title: "soonwoolog" };

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="h-screen">
          <section className="max-w-5xl mx-auto pb-[80px] mt-0 pt-[52px]">{children}</section>
        </main>
      </body>
    </html>
  );
}
