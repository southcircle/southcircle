import Image from "next/image";
import React from "react";
import CountUp from "./ui/CountUp";

const OurJourney = () => {
  return (
    <section className="py-32 container mx-auto px-4">
      <div className="container max-w-8xl w-full mx-auto">
        <div className="flex items-center justify-center gap-20 text-center">
          <Image
            src="/assets/team/groupOne.png"
            alt="group team one"
            width={600}
            height={400}
            className="object-cover"
          />
          <Image
            src="/assets/team/groupTwo.png"
            alt="group team two"
            width={500}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="py-20 flex items-end justify-center">
          <p className="max-w-md font-medium font-neuehaasroman text-5xl">
            We are not content with just blending in - we are on a mission to
            stand out, with vision to become one of the leading agencies in
            Southern Nigeria.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-32">
            <div className="flex flex-col items-start gap-3 border-b-[1px] border-gray-400">
              <p className="font-neuehaaslight text-xl">Members</p>
              <CountUp amount={5} duration={2000} />
            </div>
            <div className="flex flex-col items-start gap-3 border-b-[1px] border-gray-400">
              <p className="font-neuehaaslight text-xl">Office</p>
              <CountUp amount={1} duration={200} />
            </div>
            <div className="flex flex-col items-start gap-3 border-b-[1px] border-gray-400">
              <p className="font-neuehaaslight text-xl">Projects</p>
              <CountUp amount={20} duration={100} />
            </div>
            <div className="flex flex-col items-start gap-3 border-b-[1px] border-gray-400">
              <p className="font-neuehaaslight text-xl">Years</p>
              <CountUp amount={2} duration={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
