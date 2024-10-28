import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";


const neueHaasLight = localFont({
  src: "../public/fonts/Helvetica.ttf",
  variable: "--font-neuehaaslight",
});

const neueHaasRoman = localFont({
  src: "../public/fonts/Helvetica-Bold.ttf",
  variable: "--font-neuehaasroman",
});

export const metadata: Metadata = {
  title: "South Circle | World-Class Brand Design Consultancy.",
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
        className={`${neueHaasLight.variable} ${neueHaasRoman.variable} antialiased`}
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
