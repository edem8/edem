import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Edem Kwaku",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-rows-[auto_1fr_auto] justify-items-center bg-background min-h-screen gap-16 p-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
