"use client";
import React from "react";
import Link from "next/link";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <section className="container pb-16 pt-10 sm:pt-16 md:pt-16">
      <div className="relative mx-auto w-full flex flex-col justify-center items-center">
        <div className="text-5xl sm:text-7xl md:text-[220px] lg:text-[310px] font-bold uppercase tracking-wide text-center font-baseneue w-full leading-none">
          Imagine More
        </div>
        <div className="flex flex-col items-center text-center md:text-start md:items-start mt-8 max-w-lg md:absolute md:top-1/2 md:right-0 md:translate-y-[50%] md:translate-x-[-32%]">
          <p className="font-normal text-2xl text-black mb-10 font-neuehaaslight w-full">
            Ambitious leaders turn to us to craft world-class identities and experiences. We push the boundaries of what&apos;s possible, blending creativity with strategy to shape brand perception.
          </p>
          <Link href="/contact">
            <Button
              text="Start a conversation"
              className="px-10 py-5 rounded-full font-normal text-[18px]"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
