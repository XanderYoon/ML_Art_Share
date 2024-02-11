import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { Suspense } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pArt",
  description: "Revolutionizing art ownership",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <section>
          <Suspense fallback={<div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
            <Navbar></Navbar>
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {children}
          </main>
        </body>
    </html>
  )
}
