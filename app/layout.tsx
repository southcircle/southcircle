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
  title: "South Circle - World-class Brand Design Consultancy",
  description: "We're a Global Brand Design Company crafting World-class identities that make a profound impact on the way brands are perceived.",
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
