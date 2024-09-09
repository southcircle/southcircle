import React from "react";


const OurProcess = () => {
  return (
    <div className="pt-32 mt-32 container mx-auto px-4 mb-32">
      <div className="container w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-wide uppercase font-neuehaasroman">
            Our Process
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="space-y-10 mt-24">
          <div className="grid grid-cols-2 gap-10 align-text-bottom mb-20">
            <h1 className="text-4xl md:text-[170px] gap-28 font-baseneue font-bold flex flex-col items-start text-start uppercase whitespace-nowrap">
              <span>How We Make</span>
              <span>it happen.</span>
            </h1>
            <p className="max-w-xs text-2xl text-start font-neuehaaslight align-bottom ">
              We approach every project with a collaborative process that drives
              alignment and lays the foundation for long-term success.
            </p>
          </div>
          {/* Process Grid */}
          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-12 flex flex-col items-start gap-3 bg-[#5975FF0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Research
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-neuehaaslight">
                  We dive deep into understanding your market, audience, and
                  challenges. This phase is all about gathering crucial insights
                  that fuel our innovative strategies and set the foundation for
                  a successful project.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">01</p>
                </div>
              </div>
              <div className="p-12 flex flex-col items-start gap-3 bg-[#FF4A4A0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Definition
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-neuehaaslight">
                  We take the insights from research and refine your vision.
                  This involves setting clear goals, outlining project scope,
                  and ensuring we&apos;re aligned with your objectives.
                  It&apos;s about getting everything in focus before we start
                  creating.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">02</p>
                </div>
              </div>
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0ACC920D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Conceptualization
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-neuehaaslight">
                  Here, we let creativity take the lead. Our team brainstorms
                  and develops bold ideas, transforming your vision into
                  actionable plans. This stage is where creative solutions are
                  crafted, setting the stage for impactful results.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">03</p>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="p-12 flex flex-col items-start gap-3 bg-[#FFC02E0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Delivery & follow-up
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-neuehaaslight">
                  We execute the plans with precision, turning concepts into
                  reality. Once the project is live, we don&apos;t just walk
                  away; we follow up to ensure everything meets your
                  expectations, and make any necessary adjustments to ensure
                  flawless execution.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">04</p>
                </div>
              </div>
              <div className="p-12 flex flex-col items-start gap-3 bg-[#8F00FF0D] rounded-sm">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Continuous partnership
                </h4>
                <p className="text-[#0C0C0CA3] text-base font-normal font-neuehaaslight">
                  Our relationship doesn&apos;t end with delivery. We stay
                  connected, providing ongoing support and collaboration. This
                  stage is all about evolving together, keeping your brand ahead
                  of the curve, and achieving sustained success.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">05</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
