import type { Metadata } from "next";
import "./globals.css";
import "./layout.css";

import Header from "../components/Header";

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
        <main>
          <section className="max-w-5xl mx-auto">{children}</section>
        </main>
      </body>
    </html>
  );
}
