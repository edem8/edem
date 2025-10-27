import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "../styles/globals.css";
import "../styles/shimmer.css";
import Header from "@/components/layout/header";

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Edem Kwaku",
  description: " portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} scroll-smooth antialiased bg-primary`}
      >
        <main className="container flex flex-col  mx-auto px-4 sm:px-20 lg:px-30 xl:px-40">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
