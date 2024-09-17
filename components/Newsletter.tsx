import React from "react";
import Button from "./ui/Button";

const Newsletter = () => {
  return (
    <section className="pt-32 mt-32 mx-auto px-2 mb-32">
      <div className="w-full mx-auto p-6 md:p-12 border-[1px] border-gray-300 rounded-b-[60px] md:rounded-b-[100px] space-y-6 md:space-y-8">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-neuehaasroman">
            Stay Above The Curve
          </span>
        </div>
        <div className="w-full max-w-7xl">
          <h1 className="text-7xl md:text-9xl font-baseneue font-bold flex flex-col items-start text-start uppercase">
            <span>Get our</span>
            <span>Newsletter</span>
            <span>Straight to you.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-start font-neuehaaslight md:hidden mt-2">
              Explore the narratives that shape our work and reveal the
              inspiration behind our projects.
            </p>
        </div>
        <div>
          <label className="flex items-center justify-between w-full px-3 py-2 md:p-6 rounded-full border transition-colors duration-300 ease-in-out bg-transparent border-gray-400">
            <input
              type="email"
              name="subscribe"
              className="bg-transparent border-none focus:border-none outline-none w-full h-full py-6 placeholder:font-neuehaaslight placeholder:text-lg font-neuehaaslight text-lg"
              placeholder="Enter email here"
            />
            <Button
              text="Subscribe"
              className="px-6 md:px-10 py-3 md:py-5 rounded-full font-normal text-sm text-center sm:text-lg md:text-[18px] flex justify-center"
              variant="outline"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
