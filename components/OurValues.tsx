import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const OurValues = () => {
  return (
    <section className="pt-32 mt-32 mx-auto px-1">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight tracking-[2px]">
          <span className="text-sm text-gray-400 tracking-wider uppercase font-neuehaaslight">
            Our Values
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-[500px,_1fr] gap-20">
          <div className="max-w-sm">
            <h2 className="text-4xl font-neuehaasroman mb-4">
              Powered by intellect, driven by values.
            </h2>
            <div>
            <Link href="/contact">
                <Button
                  text="Get in touch"
                  className="w-44 h-12 py-2 text-center text-lg font-medium rounded-full whitespace-nowrap tracking-tight font-neuehaaslight hidden md:inline-block"
                  variant="outline"
                />
              </Link>
            </div>
          </div>
          {/* Services Grid */}
          <div className="gap-12">
            <div>
              <div className="w-full flex items-start text-xl md:text-lg font-neuehaaslight mb-8">
                <p>
                At South Circle, collaboration and flexibility are the heartbeat of our culture. Whether it&apos;s our Thursday coffee brainstorms or our flexible workweek, every decision reflects our commitment to balance our creativity. Your voice matters here, and every success is shared by the whole team.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Driven by ambition
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                  We never settle. We&apos;re on a constant quest to set new benchmarks in design, always aiming higher.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Resilient by nature
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                  Challenges are opportunities. With grit and determination, we tackle obstacles head-on, turning them into stepping stones for greatness.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Integrity always
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                  Honesty is non-negotiable. We deliver outstanding results while being transparent and trustworthy in every project.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Genuine interest
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                  People first. We approach every relationship with empathy, offering nothing but the best in service and connection.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-200">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Playful spirit
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                  Curiosity fuels us. At South Circle, we embrace wonder and creativity—it&apos;s how we stay innovative and passionate in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
