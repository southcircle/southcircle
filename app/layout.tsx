import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
// import CustomCusor from "@/components/CustomCusor";

const baseNeue = localFont({
  src: "../public/fonts/BaseNeueTrial-SuperCondBold.ttf",
  variable: "--font-baseneue",
});

const neueHaasLight = localFont({
  src: "../public/fonts/NeueHaasDisplayLight.ttf",
  variable: "--font-neuehaaslight",
});

const neueHaasRoman = localFont({
  src: "../public/fonts/NeueHaasDisplayRoman.ttf",
  variable: "--font-neuehaasroman",
});

export const metadata: Metadata = {
  title: "South Circle - Imagine more",
  description: "Ambitious leaders turn to us to craft world-class identities and experiences. We push the boundaries of what&apos;s possible, blending creativity with strategy to shape brand perception.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baseNeue.variable} ${neueHaasLight.variable} ${neueHaasRoman.variable}`}>
        {/* <CustomCusor /> */}
        <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
          <div className="w-full">
            <Header />
          </div>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
