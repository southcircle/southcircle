import Image from "next/image";
import React from "react";

const ContactHero = () => {
  return (
    <section className="pb-16 pt-10 sm:pt-16 md:pt-16">
      <div className="relative mx-auto w-full flex flex-col gap-10 md:flex-row justify-center items-center">
        <h1 className="text-6xl sm:text-8xl font-semibold font-neuehaasroman flex flex-col items-start text-start whitespace-nowrap">
          <span>Start the</span>
          <span>that changes</span>
          <span>conversation</span>
          <span>everything.</span>
        </h1>
        <p className="text-xl md:text-2xl text-start font-neuehaaslight max-w-sm px-2 mt-auto mb-4">
          We believe in long-term collaboration for the best results. Our team
          integrates with yours, working remotely but fully committed to your
          success.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
