"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./ui/Button";
import CustomLink from "./ui/Link";

const Header = () => {
  const pathname = usePathname(); // Access the current route
  const [toggle, setToggle] = useState(false);

  // Function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between items-center py-6 bg-transparent w-full px-4 bg-white fixed left-0 right-0 z-[999]">
      <Link href="/" className="hidden md:inline-block">
        <img
          src="/logo.svg"
          alt="South Circle"
          className="w-32 h-auto md:w-40"
        />
      </Link>
      <Link href="/" className="inline-block md:hidden">
        <img
          src="/assets/logo.svg"
          alt="South Circle"
          className="w-10 h-auto"
        />
      </Link>
      <div className="md:flex flex-row items-center gap-6 relative font-neuehaasroman hidden">
        {/* Add active class based on the current route */}
        <CustomLink
          href="/works"
          animate={true}
          text="Work"
          className={isActive("/works") ? "text-gray-400" : ""}
        />
        <CustomLink
          href="/services"
          animate={true}
          text="Services"
          className={isActive("/services") ? "text-gray-400" : ""}
        />
        <CustomLink
          href="/about"
          animate={true}
          text="About us"
          className={isActive("/about") ? "text-gray-400" : ""}
        />
        <CustomLink
          href="/blog"
          animate={true}
          text="Blog"
          className={isActive("/blog") ? "text-gray-400" : ""}
        />
        <Link href="/contact" className="font-normal flex items-center">
          <Button
            text="Contact us"
            className={`px-8 py-3 rounded-full whitespace-nowrap ${
              isActive("/contact") ? "" : ""
            }`}
            variant="outline"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <div className=" border-[1px] border-gray-300 py-2 px-3" onClick={handleMenu}>
          <img
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="South Circle"
            className="w-8 h-8 transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
      {toggle && (
        <div  onClick={handleMenu} className="absolute top-24 right-0 left-0 px-6 py-10 bg-white shadow-lg z-[9999] transition-all duration-700 ease-in-out">
          <div className="border-[1px] border-gray-300 px-10 py-5 flex flex-col gap-6 items-start w-full">
            <Link
              href="/works"
              onClick={handleMenu}
              className={
                isActive("/works")
                  ? "text-gray-400 uppercase text-5xl font-baseneue w-full pb-5 border-b-[1px] border-gray-300"
                  : "font-baseneue uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300"
              }
            >
              Work
            </Link>
            <Link
              href="/services"
              onClick={handleMenu}
              className={
                isActive("/services")
                  ? "text-gray-400 uppercase text-5xl font-baseneue w-full pb-5 border-b-[1px] border-gray-300"
                  : "font-baseneue uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300"
              }
            >
              Servives
            </Link>
            <Link
              href="/about"
              onClick={handleMenu}
              className={
                isActive("/about")
                  ? "text-gray-400 uppercase text-5xl font-baseneue w-full pb-5 border-b-[1px] border-gray-300"
                  : "font-baseneue uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300"
              }
            >
              About Us
            </Link>
            <Link
              href="/blog"
              onClick={handleMenu}
              className={
                isActive("/blog")
                  ? "text-gray-400 uppercase text-5xl font-baseneue w-full pb-5 border-b-[1px] border-gray-300"
                  : "font-baseneue uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300"
              }
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={handleMenu}
              className={
                isActive("/contact")
                  ? "text-gray-400 uppercase text-5xl font-baseneue w-full pb-5 border-b-[1px] border-gray-300"
                  : "font-baseneue uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300"
              }
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
