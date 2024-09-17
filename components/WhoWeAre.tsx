import React from "react";
import Button from "./ui/Button";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="pt-20 mt-20 mx-auto px-2">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-neuehaaslight">
            Who We Are
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-normal mb-6 font-neuehaasroman">
              Proudly pioneering brand and business design.
            </h2>
            <Button
              text="See our services"
              className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight hidden md:inline-block"
              variant="outline"
            />
          </div>
        </div>
        <div className="space-y-10 mt-10">
          {/* Process Grid */}
          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#5975FF0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-xl md:text-lg tracking-tight">
                  Full-service design agency
                </h4>
                <p className="text-[#0C0C0CA3] text-xl md:text-lg font-normal font-neuehaaslight">
                  South Circle is an agency that combines expertise in design,
                  technology, and psychology to deliver measurable business
                  outcomes for growing startups and established companies. We
                  strategically curate our client roster, focusing on
                  relationships where we can deliver distinct, quantifiable
                  results.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/bolt.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#FF4A4A0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-xl md:text-lg tracking-tight">
                  Design, development and marketing
                </h4>
                <p className="text-[#0C0C0CA3] text-xl md:text-lg font-normal font-neuehaaslight">
                  Our partnership doesn&apos;t end at launch. We&apos;re in it
                  for the long haul, continuously refining and evolving our
                  strategies to ensure sustained success. Together, we adapt and
                  grow, keeping your brand at the forefront.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/circle.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col items-start gap-3 bg-[#0ACC920D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-xl md:text-lg tracking-tight">
                  Smooth makes us worried
                </h4>
                <p className="text-[#0C0C0CA3] text-xl md:text-lg font-normal font-neuehaaslight">
                  Business design isn&apos;t manufacturing. We don&apos;t try to
                  remove friction. In fact, we embrace it, even thrive from it.
                  That means crashing ideas, roles, and processes right into
                  each other. Friction brings the energy needed to create and
                  provoke change. A state when creative ideation nurtures
                  strategic thinking and vice versa.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <Image
                    src="/assets/services/brand.svg"
                    alt="Full Service"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-10 flex items-center justify-center">
          <Button
            text="See our services"
            className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
