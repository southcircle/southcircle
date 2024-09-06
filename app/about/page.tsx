"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="pt-10 mt-10 container mx-auto px-4 max-w-8xl ">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="w-full flex gap-20 justify-center max-w-7xl">
          <h1 className="text-4xl md:text-9xl font-baseneue font-bold flex flex-col items-start text-start uppercase whitespace-nowrap">
            <span>Curious about</span>
            <span>us? here&apos;s the</span>
            <span>inside scoop.</span>
          </h1>
          <p className="max-w-sm text-lg align-bottom
           text-start justify-end font-neuehaaslight">
          Discover what drives us, what we&apos;re passionate about, and how we&apos;re shaping the future. Get the details that make us tick.
          </p>
        </div>
        <Image src="/assets/about-banner.png" width={600} height={240} alt="about-down" className="object-contain"/>
      </div>
     
    </section>
  );
};

export default page;
