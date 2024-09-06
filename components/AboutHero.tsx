import React from "react";

const AboutHero = () => {
  return (
    <section className="container pb-20 pt-16 md:pt-28">
      <div className="max-w-7xl relative z-10 w-full flex flex-col gap-8 items-center justify-center mx-auto px-4 pb-20">
        <h1 className="text-3xl md:text-6xl font-bold">
          About Vimerge
        </h1>
        <p className="font-normal text-2xl md:text-4xl text-neutral-700 max-w-6xl mb-8 text-center">
          At Vimerge, your visions come to life. Our name, derived from
          <b> Visions</b> and <b>Emerge</b>, reflects our commitment to
          transforming your ideas into impactful realities. Inspired by the
          prophetic words of Habakkuk 2:2:{" "}
          <b>&quot;Write the vision and make it plain,&quot;</b> we are not just
          a design studio we are storytellers.
        </p>
        <p className="font-normal text-2xl md:text-4xl text-neutral-700 max-w-6xl text-center">
          Each stroke of our designs transforms thoughts into tangible, visual
          narratives, ensuring your message is seen and profoundly understood.
          Here, your visions don&apos;t just exist; they emerge with purpose and
          impact.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 py-20 px-4 mx-auto w-full">
        <div className="text-center max-w-5xl pb-8">
          <h3 className="text-3xl font-medium mb-1">
            The 3 C&apos;s of Vimerge
          </h3>
          <p className="text-6xl font-medium mb-6">
            Through the years, we have been shaped and formed by what we&apos;ve
            handled.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-40 px-10">
          <div className="text-center flex flex-col gap-4 items-center -mt-10">
            <img
              src="/assets/listen.webp"
              alt="focus"
              width="240px"
              height="240px"
              className=""
            />
            <h3 className="text-4xl font-semibold mb-4">Clarity</h3>
            <p className="text-4xl">Write the Vision.</p>
          </div>
          <div className="-mb-40 text-center flex flex-col gap-4 items-center">
            <img
              src="/assets/focus.gif"
              alt="focus"
              width="240px"
              height="240px"
              className=""
            />
            <h3 className="text-4xl font-semibold mb-4">Creativity</h3>
            <p className="text-4xl">Designing through God&apos;s Lens.</p>
          </div>
          <div className="text-center flex flex-col gap-4 items-center mt-40 md:-mt-10">
            <img
              src="/assets/conviction.webp"
              alt="focus"
              width="240px"
              height="240px"
              className=""
            />
            <h3 className="text-4xl font-semibold mb-4">Conviction</h3>
            <p className="text-4xl">Faith-centric...</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 py-40 px-10">
        <div className="text-center -mt-10">
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-4xl">
            To be a beacon of creativity and faith, crafting designs that
            inspire, uplift, and communicate with clarity and purpose.
          </p>
        </div>
        <div className="-mb-40 text-center">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-4xl">
            To transform your visions into impactful visual narratives through
            innovative, faith-centric design, while upholding the highest
            standards of excellence, clarity, and collaboration. .
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
