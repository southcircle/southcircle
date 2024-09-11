import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <section className="pb-16 pt-10 sm:pt-16 md:pt-16">
      <div className="relative mx-auto w-full flex flex-col justify-center items-center">
        <h1 className="font-baseneue text-8xl sm:text-8xl md:text-[120px] lg:text-[160px] font-bold tracking-wide text-center uppercase">
          Start the Conversation
          <br />
          that Changes Everything.
        </h1>
        <div className="flex flex-col-reverse items-center md:flex-row gap-10 relative max-w-6xl w-full">
          <div className="p-5 rounded-full border-[1px] border-black w-fit mt-10 absolute -bottom-40 left-80 rotate-45 hidden md:inline-block">
            <Image
              src="/assets/arrow-down.svg"
              width={32}
              height={32}
              alt="arrow-down"
              className="object-contain animate-bounce rotate-6"
            />
          </div>
          <div className="p-5 rounded-full border-[1px] border-black w-fit md:hidden rotate-45">
            <Image
              src="/assets/arrow-down.svg"
              width={32}
              height={32}
              alt="arrow-down"
              className="object-contain animate-bounce rotate-6"
            />
          </div>
          <p className="text-xl md:text-2xl text-start font-neuehaaslight max-w-sm absolute mt-32 right-14 hidden md:inline-block">
            We believe in long-term collaboration for the best results. Our team
            integrates with yours, working remotely but fully committed to your
            success.
          </p>
          <p className="text-xl md:text-2xl text-center font-neuehaaslight max-w-sm px-2 mt-2 md:hidden">
            We believe in long-term collaboration for the best results. Our team
            integrates with yours, working remotely but fully committed to your
            success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
