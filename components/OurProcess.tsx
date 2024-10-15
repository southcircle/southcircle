import React from "react";

const OurProcess = () => {
  return (
    <section className="pt-32 mt-32 mx-auto mb-32">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-neuehaasroman">
            Our Process
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="space-y-10 mt-12">
          <div className="mb-20">
            <h1 className="text-5xl max-w-3xl font-neuehaasroman font-semibold text-start">
              We approach every project with a collaborative process that drives
              alignment and lays the foundation for long-term success.
            </h1>
          </div>
          {/* Process Grid */}
          <div className="w-full grid grid-cols-1 gap-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Research
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
                  We dive deep into understanding your market, audience, and
                  challenges. This phase is all about gathering crucial insights
                  that fuel our innovative strategies and set the foundation for
                  a successful project.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">01</p>
                </div>
              </div>
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Definition
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
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
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Conceptualization
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
                  Here, we let creativity take the lead. Our team brainstorms
                  and develops bold ideas, transforming your vision into
                  actionable plans. This stage is where creative solutions are
                  crafted, setting the stage for impactful results.
                </p>
                <div className="w-full flex justify-end py-4 pt-6">
                  <p className="font-baseneue text-5xl text-gray-400">03</p>
                </div>
              </div>
              <div className="hidden lg:hidden p-12 md:flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Delivery & follow-up
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
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
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="hidden md:hidden p-12 lg:flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Delivery & follow-up
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
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
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl md:hidden">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Delivery & follow-up
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
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
              <div className="p-12 flex flex-col items-start gap-3 bg-[#0C0C0C05] rounded-3xl">
                <h4 className="font-medium font-neuehaasroman text-lg tracking-tight">
                  Continuous partnership
                </h4>
                <p className="text-[#0C0C0CA3] text-lg font-normal font-neuehaaslight">
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
    </section>
  );
};

export default OurProcess;
