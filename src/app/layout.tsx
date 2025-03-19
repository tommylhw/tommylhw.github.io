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
import * as amplitude from "@amplitude/analytics-browser";

amplitude.init("5c87539850106bef11f0c600774d75df", { autocapture: true });

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
          {/* Top shadow */}
          <div
            className="fixed top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-100 to-transparent z-100"
            style={{ pointerEvents: "none" }} // Prevent interaction
          ></div>

          {/* Bottom shadow */}
          <div
            className="fixed bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-100 to-transparent z-100"
            style={{ pointerEvents: "none" }} // Prevent interaction
          ></div>

          <div className="fixed w-full z-1000">
            <Navbar />
          </div>

          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
