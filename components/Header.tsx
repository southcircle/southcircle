"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import CustomLink from "./ui/Link";
import gsap from "gsap";

const Header = () => {
  const pathname = usePathname(); // Access the current route
  const [toggle, setToggle] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLImageElement>(null);

  // Function to determine if the link is active
  const isActive = (path: string) => pathname === path;

  const handleMenu = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, scaleY: 0, transformOrigin: "top", y: 20 },
        { opacity: 1, scaleY: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      gsap.to(menuIconRef.current, {
        rotation: 180,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        scaleY: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.in",
        transformOrigin: "top",
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.display = "none";
          }
        }
      });
      gsap.to(menuIconRef.current, {
        rotation: 0,
        duration: 0.5,
        ease: "power2.in"
      });
    }
  }, [toggle]);

  return (
    <div className="flex justify-between items-center py-6 bg-transparent w-full px-4 md:px-10 bg-white fixed left-0 right-0 z-[999]">
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
          text="Works"
          className={isActive("/works") ? "text-gray-400" : ""}
        />
        {/* <CustomLink
          href="/services"
          animate={true}
          text="Services"
          className={isActive("/services") ? "text-gray-400" : ""}
        /> */}
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
            className={`w-[120px] h-10 rounded-full whitespace-nowrap ${
              isActive("/contact") ? "" : ""
            }`}
            variant="outline"
          />
        </Link>
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <div className="border-[1px] border-gray-300 py-2 px-3" onClick={handleMenu}>
          <img
            ref={menuIconRef}
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt="South Circle"
            className="w-8 h-8 transition-all duration-700 ease-in-out"
          />
        </div>
      </div>
      {toggle && (
        <div ref={mobileMenuRef} onClick={handleMenu} className="absolute top-24 right-0 left-0 px-6 py-10 bg-white shadow-lg z-[9999]">
          <div className="border-[1px] border-gray-300 px-10 pt-10 pb-14 flex flex-col gap-6 items-start w-full ">
            {["/works", "/about", "/blog", "/contact"].map((href, index) => (
              <Link
                key={index}
                href={href}
                onClick={handleMenu}
                className={`font-neuehaasroman uppercase text-5xl text-black w-full pb-5 border-b-[1px] border-gray-300 ${isActive(href) ? "text-gray-400" : ""}`}
                style={{ opacity: 100, transform: `translateY(${index * 10}px)` }}
              >
                {href.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
