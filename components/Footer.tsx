import Link from "next/link";
import React from "react";
import CustomLink from "./ui/Link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bottom-0 right-0 left-0 container space-y-8 py-20 bg-transparent w-full">
      <div className="flex flex-col md:flex-row gap-10 items-start md:items-center justify-between w-full">
        <div>
          <div className="text-[88px] md:text-8xl font-bold uppercase tracking-wide text-center font-baseneue w-full leading-none">
            Imagine More.
          </div>
        </div>
        <div className="flex gap-10 align-top">
          <h4 className="text-[#0C0C0CA3] text-lg font-neuehaaslight">
            Contact
          </h4>
          <div className="flex flex-col gap-5 items-start font-neuehaasroman">
            <div className="flex flex-col gap-2 items-start font-medium">
              <CustomLink
                href="tel:+234905333432"
                animate={false}
                text="+23458-034-5353"
              />
              <CustomLink
                href="mailto:hello@southcircle.co"
                animate={false}
                text="hello@southcircle.co"
              />
            </div>
            <div className="max-w-sm text-start font-neuehaasroman">
              <p>44 Okumagba Avenue, </p>
              <p>Opposite FCMB Bank, Estate,</p>
              <p>Warri, 332213, Delta State,</p>
              <p>Nigeria.</p>
            </div>
          </div>
        </div>
        <div className="flex gap-14 align-top">
          <h4 className="text-[#0C0C0CA3] text-lg font-neuehaaslight">Links</h4>
          <div className="flex flex-col gap-5 items-start">
            <div className="flex flex-col gap-2 items-start font-neuehaasroman">
              <CustomLink
                href="linkedin.com"
                animate={true}
                text="LinkedIn"
                className="underline"
              />
              <CustomLink
                href="instagram.com"
                animate={true}
                text="Instagram"
                className="underline"
              />
              <CustomLink
                href="twiiter.com"
                animate={true}
                text="Twitter"
                className="underline"
              />
              <CustomLink
                href="facebook.com"
                animate={true}
                text="Facebook"
                className="underline"
              />
              <CustomLink
                href="behance.com"
                animate={true}
                text="Behance"
                className="underline"
              />
              <CustomLink
                href="dribbble.com"
                animate={true}
                text="Dribbble"
                className="underline"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-400" />
      <div className="flex flex-col-reverse md:flex-row gap-6 items-center justify-between w-full pt-8">
      
        <div className="flex flex-col  md:flex-row items-center gap-5 text-gray-500 font-neuehaaslight">
          <p>&copy; {year} South Circle LLC, All right reserved.</p>
        </div>
        <div className="hidden md:inline-block">
          <Link className="" href="/">
            <Image src="/assets/logo.png" width={32} height={32} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center gap-6 text-gray-500 font-neuehaaslight">
          <CustomLink href="/privacy" animate={true} text="Privacy" />
          <CustomLink href="/terms" animate={true} text="Terms of use" />
        </div>
        <div className="inline-block md:hidden">
          <Link className="" href="/">
            <Image src="/assets/logo.png" width={32} height={32} alt="logo" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
