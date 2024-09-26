"use client";
import GetInTouch from "@/components/GetInTouch";
import Meta from "@/components/Meta";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

// Define the Selected Works type
interface SelectedWorks {
  id?: number;
  title: string;
  category?: string[];
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: SelectedWorks[] = [
  {
    id: 1,
    title: "Vash Affairs",
    category: ["Visual Identity"],
    description: "Your go-to Brand for premium skincare solutions",
    imageSrc: "/assets/selected/visha.jpg",
    slug: "https://www.behance.net/gallery/168315499/Visual-Identity-Vash-Affairs",
  },
  {
    id: 2,
    title: "Xuse Gold",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Building Trust Through Stability with Gold.",
    imageSrc: "/assets/selected/xuse.webp",
    slug: "https://www.behance.net/gallery/184814461/Xuse-Brand-Strategy-Visual-Identity",
  },
  {
    id: 3,
    title: "GameBox",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Your Ultimate Gaming Destination.",
    imageSrc: "/assets/selected/gamebox.webp",
    slug: "https://www.behance.net/southcircle",
  },
  {
    id: 4,
    title: "Coming Soon...",
    category: ["UI/UX Design"],
    description: "Coming soon...",
    imageSrc: "/assets/selected/ciange.png",
    slug: "https://www.behance.net/southcircle",
  },
];

// Categories to filter by
const categories = [
  "All",
  "Brand Strategy",
  "Marketing",
  "Development",
  "Visual Identity",
  "UI/UX Design",
];

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const underlineRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const worksRef = useRef<HTMLDivElement>(null);

  // Filter works based on selected category
  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category?.includes(selectedCategory));

  useLayoutEffect(() => {
    // Ensure the underline is positioned correctly on page load
    const selectedIndex = categories.indexOf(selectedCategory);
    const selectedCategoryEl = categoryRefs.current[selectedIndex];

    if (selectedCategoryEl && underlineRef.current) {
      const { left, width } = selectedCategoryEl.getBoundingClientRect();
      gsap.set(underlineRef.current, {
        x: left,
        width: width,
      });
    }
  }, []); // Empty dependency array to run only on mount

  useEffect(() => {
    // Update the underline position whenever the category changes
    const selectedIndex = categories.indexOf(selectedCategory);
    const selectedCategoryEl = categoryRefs.current[selectedIndex];

    if (selectedCategoryEl && underlineRef.current) {
      const { left, width } = selectedCategoryEl.getBoundingClientRect();
      gsap.to(underlineRef.current, {
        x: left,
        width: width,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }, [selectedCategory]);

  // Animate works display
  useEffect(() => {
    if (worksRef.current) {
      gsap.fromTo(
        worksRef.current.children,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, [filteredWorks]);

  return (
    <section className="pt-10 mt-28 mx-auto px-4 md:px-10 max-w-8xl w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto">
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 md:gap-28 justify-center max-w-7xl">
          <p className="max-w-sm text-xl md:text-lg text-start font-neuehaaslight">
            Explore our top projects that showcase our creativity and expertise.
            See how we turn bold ideas into impactful results and push the
            boundaries of design.
          </p>
          <h1 className="text-7xl md:text-9xl font-baseneue font-bold flex flex-col items-start text-start uppercase">
            <span>A collection</span>
            <span>of our most</span>
            <span>inspiring work.</span>
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mx-auto mb-16 mt-32 flex items-center justify-center w-full px-2">
        <div className="flex justify-center gap-16 overflow-x-scroll md:overflow-visible no-scrollbar relative">
          {/* Full border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 w-full"></div>

          {/* Animated underline */}
          {/* <div
            ref={underlineRef}
            className="absolute  bottom-0 h-[2px] bg-black"
            style={{ width: "0px" }}
          ></div> */}

          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-10">
              <button
              ref={(el) => {
                categoryRefs.current[index] = el;
              }}
              className={`relative py-4 text-sm hover:border-b-[2px] hover:border-black hover:text-black uppercase whitespace-nowrap font-medium tracking-[2px] font-neuehaasroman transition-all duration-300 ease-in-out ${
                selectedCategory === category
                  ? "text-black border-b-[2px] border-black transition-all duration-500 ease-in-out"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
            <span className={index === categories.length - 1 ? "hidden" : ""}>·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div ref={worksRef} className="max-w-full w-full mx-auto">
        <div className="grid grid-cols-1 gap-12 w-full">
          {filteredWorks.map((work, index) => (
            <Link key={index} href={work.slug || "#"} target="_blank">
              <div className="w-full">
                <div className="relative w-full h-0 pb-[80%] md:pb-[40%] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-500 ease-in-out"
                    width={2800}
                    height={400}
                  />
                </div>
                <div className="flex items-center justify-between pt-3">
                  <h3 className="text-lg font-semibold font-neuehaaslight">
                    {work.title}
                  </h3>
                  <div className="md:flex items-center gap-1 hidden mt-2">
                    {work?.category &&
                      work?.category.map((cat, index) => (
                        <span
                          key={index}
                          className="border-[0.8px] text-sm border-gray-200 px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight"
                        >
                          {cat}
                        </span>
                      ))}
                  </div>
                </div>
                <p className="text-gray-600 font-neuehaaslight">
                  {work.description}
                </p>
                <div className="flex items-center gap-1 md:hidden mt-2">
                  {work?.category &&
                    work?.category.map((cat, index) => (
                      <span
                        key={index}
                        className="border-[0.8px] text-sm border-gray-200 px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="https://www.behance.net/southcircle"
          className="py-10 flex items-center justify-center"
        >
          <Button
            text="See more works"
            className="px-6 py-4 w-28 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </Link>
      </div>

      {/* Get In Touch Section */}
      <div className="mx-auto px-6 md:px-10 mt-16">
        <GetInTouch />
      </div>
    </section>
  );
};

export default Page;
