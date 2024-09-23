import React from "react";
import Button from "./ui/Button";
import Link from "next/link";

const CallUsNow = () => {
  return (
    <section className="py-32 mb-40 mt-40 mx-auto">
      <div className="max-w-8xl w-full flex items-center justify-center">
        <div className="flex flex-col gap-8 md:gap-16 items-center">
          <p className="flex flex-col text-center gap-1 items-center font-neuehaasroman font-normal text-3xl md:text-7xl">
            <span>Or call us and we&apos;ll</span>
            <span>contact you.</span>
          </p>
          <Link href="tel:+2349053934">
            <Button
              text="Call us"
              className="px-36 md:px-52 py-20 md:py-28 w-full rounded-full font-medium text-2xl md:text-3xl border-2 whitespace-nowrap mx-auto"
              variant="outline"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallUsNow;
