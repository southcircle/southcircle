"use client";
import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="pt-10 sm:pt-10 md:pt-10 mt-24 max-w-8xl h-[60vh] pb-40">
      <div className="relative mx-auto w-full flex flex-col justify-center items-center">
        <div className="flex flex-col md:flex-row md:gap-8 items-center sm:gap-1 sm:mb-12 sm:justify-center text-9xl sm:text-[170px] md:text-[180px] lg:text-[300px] font-bold uppercase tracking-wide text-center font-baseneue w-full leading-none">
          <h1>Imagine</h1>
          <h1>More</h1>
        </div>
        <div className="flex flex-col items-center text-center md:text-center lg:text-start lg:items-start md:items-center max-w-lg md:absolute md:top-1/2 md:right-0 md:translate-y-[50%] md:translate-x-[-24%]">
          <p className="font-normal text-lg sm:text-xl md:text-2xl text-black mb-10 font-neuehaaslight w-full px-2">
          Visionary leaders come to us to craft iconic brand identities and memorable experiences. We challenge the ordinary, blending bold creativity with data-driven strategy to redefine how your audience sees and engages with your brand.
          </p>
          <Link href="/contact">
            <Button
              text="Start a conversation"
              className=" w-[230px] h-20 rounded-full whitespace-nowrap font-normal text-base sm:text-lg md:text-[18px]"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
