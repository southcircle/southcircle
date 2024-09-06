import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./ui/Button";
import CustomLink from "./ui/Link";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10 bg-transparent w-full">
      <Link href="/">
        <img
          src="/logo.svg"
          alt="South Circle"
          className="w-32 h-auto md:w-40"
        />
      </Link>
      <div className="flex flex-row items-center gap-6 relative font-neuehaasroman">
        <CustomLink href="/works" animate={true} text="Work" />
        <CustomLink href="/services" animate={true} text="Services" />
        <CustomLink href="/about" animate={true} text="About us" />
        <CustomLink href="/blog" animate={true} text="Blog" />
        <Link href="/contact" className="font-normal flex items-center">
          <Button
            text="Contact us"
            className="px-8 py-3 rounded-full whitespace-nowrap"
            variant="outline"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
