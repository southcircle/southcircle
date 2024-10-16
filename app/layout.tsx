import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
// import SmoothScroll from "@/components/ui/SmoothScroll";
// import CustomCusor from "@/components/CustomCusor";

// const neueHaasRoman = localFont({
//   src: [
//     {
//       path: "../public/fonts/NeueHaasDisplay-Mediu.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/NeueHaasDisplay-Mediu.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/NeueHaasDisplay-Mediu.eot",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-neuehaasroman",
// });

// const neueHaasLight = localFont({
//   src: [
//     {
//       path: "../public/fonts/NeueHaasDisplay-Roman.woff",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/NeueHaasDisplay-Roman.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/NeueHaasDisplay-Roman.eot",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-neuehaaslight",
// });

const neueHaasLight = localFont({
  src: "../public/fonts/NeueHaasDisplay-Roman.woff",
  variable: "--font-neuehaaslight",
});

const neueHaasRoman = localFont({
  src: "../public/fonts/NeueHaasDisplay-Mediu.woff",
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
