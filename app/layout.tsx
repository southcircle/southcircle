import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
// import SmoothScroll from "@/components/ui/SmoothScroll";
// import CustomCusor from "@/components/CustomCusor";

const baseNeue = localFont({
  src: [
    {
      path: "../public/fonts/BaseNeueTrial-SuperCondBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BaseNeueTrial-SuperCondBold.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BaseNeueTrial-SuperCondBold.ttf",
      weight: "400",
      style: "normal",
    },
  ],
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
  title: "SouthCircle | World-Class Brand Design Consultancy.",
  description:
    "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
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
      <body
        className={`${baseNeue.variable} ${neueHaasLight.variable} ${neueHaasRoman.variable}`}
      >
        <Header />
        {/* <SmoothScroll> */}
          <main className="flex justify-center items-center flex-col mx-auto">
            {children}
          </main>
        {/* </SmoothScroll> */}
        <Footer />
      </body>
    </html>
  );
}
