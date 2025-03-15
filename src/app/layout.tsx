import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Pacifico,
  Montserrat,
  Caveat,
  Kalam,
} from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import "aos/dist/aos.css";
import ScrollProvider from "@/providers/ScrollProvider";

// components
import Navbar from "@/components/navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: "400",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Tommy Wong",
  description: "Personal website of Tommy Wong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${pacifico.variable} ${montserrat.variable} ${kalam.variable} antialiased`}
      >
        <ScrollProvider>
          
          <div className="fixed w-full z-100">
            <Navbar />
          </div>

          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
