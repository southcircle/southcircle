import type { Metadata } from "next";
import Header from "@/components/Header";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import "./globals.css";


const HelveticaNowDisplayRegular = localFont({
  src: "../public/fonts/HelveticaNowDisplay-Regular.woff",
  variable: "--font-helveticaNowDisplayRegular",
});

const HelveticaNowDisplayBold = localFont({
  src: "../public/fonts/HelveticaNowDisplay-Bold.woff",
  variable: "--font-helveticaNowDisplayBold",
});

// app/layout.js or app/page.js
export const metadata: Metadata = {
  title: "South Circle | World-Class Brand Design Consultancy",
  description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "South Circle | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    url: "https://southcircle.co",  // Replace with your actual URL
    images: [
      {
        url: "https://southcircle.vercel.app/thumbnail.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "South Circle Brand Design Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Circle | World-Class Brand Design Consultancy",
    description: "We're a global brand design company crafting world-class identities that make a profound impact on the way brands are perceived.",
    images: ["https://southcircle.vercel.app/thumbnail.png"], // Replace with actual image URL
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
        className={`${HelveticaNowDisplayRegular.variable} ${HelveticaNowDisplayBold.variable} antialiased`}
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
