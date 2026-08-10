import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBook",
  description: "NextBook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        data-theme="luxury"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-screen bg-base-100">
          <Navbar />

          <div className="flex">
            <aside className="w-72 shrink-0 border-r border-base-300 bg-base-100 p-4">
              <Sidebar />
            </aside>

            <main className="min-w-0 flex-1">{children}</main>
          </div>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
