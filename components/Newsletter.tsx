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
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
          <h1 className="text-7xl md:text-8xl font-neuehaasroman font-semibold flex-1 flex flex-col items-start text-start">
            <span>Get our</span>
            <span>newsletter</span>
            <span>straight to you.</span>
          </h1>
          <p className="max-w-sm text-xl sm:text-2xl text-start font-neuehaasroman mt-auto mr-0 md:mr-52">
            Subscribe for more insights and trending updates delivered to your
            doorstep mailbox.
          </p>
        </div>
        <div className="mt-10">
          <label className="flex items-center justify-between w-full p-4 md:py-4 md:pl-12 rounded-full border transition-colors duration-300 ease-in-out bg-transparent border-gray-400">
            <input
              type="email"
              name="subscribe"
              className="bg-transparent border-none focus:border-none outline-none w-full h-full py-6 placeholder:font-neuehaaslight placeholder:text-base md:placeholder:text-lg font-neuehaaslight text-base md:text-lg pl-2 md::pl-4"
              placeholder="Enter email here"
            />
            <Button
              text="Subscribe"
              className="px-16 py-12 w-48 rounded-full font-normal text-sm text-center md:text-lg flex justify-center border-gray-400"
              variant="outline"
            />
          </label>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
