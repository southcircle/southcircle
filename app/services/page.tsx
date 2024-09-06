"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="pt-10 mt-10 container mx-auto px-4 max-w-8xl ">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="relative w-full flex gap-20 justify-center max-w-7xl">
          <p className="max-w-sm text-lg text-start font-neuehaaslight">
            From innovative strategies to striking designs, we turn your vision
            into
          </p>
          <h1 className="text-4xl md:text-9xl font-baseneue font-bold flex flex-col items-center text-center uppercase whitespace-nowrap">
            <span>Empowering</span>
            <span>your brand&apos;s next</span>
            <span>big move.</span>
          </h1>
          <p className="max-w-sm text-lg text-start font-neuehaaslight">
            From innovative strategies to striking designs, we turn your vision
            into a powerful reality. Explore how our expertise drives your
            brand&apos;s success.
          </p>
        </div>
        <Image src="/assets/arrow-down.svg" width={32} height={32} alt="arrow-down" className="p-6 border border-black rounded-full object-contain"/>
      </div>
     
    </section>
  );
};

export default page;
