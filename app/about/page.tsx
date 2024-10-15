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
          <h1 className="w-full text-7xl font-neuehaasroman font-semibold flex flex-col items-center text-center whitespace-nowrap">
            <span>Curious about us? here&apos;s the</span>
            <span>inside scoop.</span>
          </h1>
        </div>
        <Image
          src="/assets/about-banner.svg"
          width={720}
          height={240}
          alt="about-down"
          className="object-contain mt-8"
        />
        <div className="py-24 flex items-end justify-center">
          <p className="font-medium text-start font-neuehaasroman max-w-xl text-4xl md:text-5xl leading-loose">
            We are not content with just blending in - we are on a mission to
            stand out, with vision to become one of the leading agencies in
            Southern Nigeria.
          </p>
        </div>
      </div>
      {/* <OurJourney /> */}
      <WhoWeAre />
      <OurValues />
      <OurTeams />
      <GetInTouch />
    </main>
  );
};

export default page;
