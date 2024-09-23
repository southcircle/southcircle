import React from "react";
import Button from "./ui/Button";

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
              Powered by intellect driven by values.
            </h2>
            <div>
            <Button
              text="Get in touch"
              className="px-6 py-4 w-28 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight"
              variant="outline"
            />
            </div>
          </div>
          {/* Services Grid */}
          <div className="gap-12">
            <div>
              <div className="w-full flex items-start text-xl md:text-lg font-neuehaaslight mb-8">
                <p>
                  At South Circle, our culture is rooted in collaboration and
                  flexibility. We have a few traditions, like our monthly
                  Thursday brainstorm over coffee, where we catch up and plan
                  our next steps together. We&apos;ve adopted a five-day
                  workweek, with some of us taking Fridays off and others
                  Saturdays—an idea that came from a team discussion. Here,
                  every voice matters, and everyone shares in the success of our
                  projects through commissions. We value flexibility and keep
                  things adaptable. Oh, and we love having friendly friends come
                  visiting the office too.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-400">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Driven by ambition
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                    We&apos;re hungry to lead, constantly pushing ourselves to
                    set new standards in the design world.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-400">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Resilient by nature
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                    Challenges? Bring them on. We tackle every obstacle with
                    grit and a relentless pursuit of excellence.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-400">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Integrity always
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                    We keep it real, delivering top-tier work with honesty and
                    transparency every step of the way.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-400">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Genuine interest
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                    Understanding, helping, learning—that&apos;s how we approach
                    relationships. Everyone receives top-notch treatment,
                    without exception.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start justify-between w-full py-8 border-b-[1px] border-gray-400">
                  <h4 className="font-neuehaasroman font-medium whitespace-nowrap">
                    Playful spirit
                  </h4>
                  <p className="max-w-lg font-neuehaaslight text-[#656565]">
                    Like us, South Circle is a child at heart: curious, filled
                    with wonder, and intense. The day we lose that is the day we
                    step aside.
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
