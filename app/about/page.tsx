"use client";
import GetInTouch from "@/components/GetInTouch";
// import OurJourney from "@/components/OurJourney";
import OurProcess from "@/components/OurProcess";
import OurTeams from "@/components/OurTeams";
import OurValues from "@/components/OurValues";
import WhatWeDo from "@/components/WhatWeDo";
// import WhoWeAre from "@/components/WhoWeAre";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="pt-10 mt-28 mx-auto px-4 md:px-10 w-full overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="w-full mx-auto text-4xl text-start items-start md:text-6xl font-neuehaasroman font-semibold flex flex-col md:items-center md:text-center">
            <span>Curious about us?</span>
            <span>Here&apos;s the inside scoop.</span>
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
          <p className="font-medium text-start font-neuehaaslight max-w-xl text-2xl md:text-5xl">
            We are not content with just blending in - we are on a mission to
            stand out, with vision to become one of the leading agencies in
            Southern Nigeria.
          </p>
        </div>
      </div>
      {/* <OurJourney /> */}
      <WhatWeDo />
      {/* <WhoWeAre /> */}
      <OurValues />
      <OurProcess />
      <OurTeams />
      <GetInTouch />
    </main>
  );
};

export default page;
