import type { Metadata } from "next";
import "./globals.css";

import Header from "components/Header";
import Footer from "components/Footer";

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
        <main className="min-h-screen">
          <section className="pt-14">{children}</section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
