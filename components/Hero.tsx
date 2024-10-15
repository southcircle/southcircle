"use client";
import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="pt-16 mt-16 max-w-8xl h-[60vh]">
      <div className="relative mx-auto w-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-4 sm:mb-12 sm:justify-center text-7xl md:text-8xl font-bold text-center font-neuehaasroman w-full">
          <h1>Empowering your</h1>
          <h1>brand&apos;s next big move.</h1>
        </div>
        <div className="flex flex-col items-center text-center max-w-3xl">
          <p className="font-normal text-lg sm:text-xl md:text-2xl text-[#0C0C0CB0] mb-10 font-neuehaaslight w-full px-2">
            Ambitious leaders turn to us to craft world-class identities and
            experiences. We push the boundaries of what&apos;s possible,
            blending creativity with strategy to shape brand perception.
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
