"use client";
import GetInTouch from "@/components/GetInTouch";
import OurJourney from "@/components/OurJourney";
import OurTeams from "@/components/OurTeams";
import OurValues from "@/components/OurValues";
import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="pt-10 mt-28 mx-auto px-4 md:px-10 w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center max-w-7xl md:px-0">
          <h1 className="w-full text-7xl md:text-[160px]  font-baseneue font-bold flex flex-col items-start text-start uppercase whitespace-nowrap">
            <span>Curious about</span>
            <span>us? here&apos;s the</span>
            <span>inside scoop.</span>
          </h1>
          <p
            className="w-full md:max-w-xs text-xl align-bottom
           text-start font-neuehaaslight"
          >
            Discover what drives us, what we&apos;re passionate about, and how
            we&apos;re shaping the future. Get the details that make us tick.
          </p>
        </div>
        <Image
          src="/assets/about-banner.svg"
          width={720}
          height={240}
          alt="about-down"
          className="object-contain mt-12"
        />
      </div>
      <WhoWeAre />
      <OurValues />
      <OurJourney />
      <OurTeams />
      <GetInTouch />
    </main>
  );
};

export default page;
