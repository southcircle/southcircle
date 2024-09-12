"use client";
import GetInTouch from "@/components/GetInTouch";
import Meta from "@/components/Meta";
import Button from "@/components/ui/Button";
// import WorkHero from "@/components/WorkHero";
// import Works from "@/components/Works";
// import { Post, getPosts } from "@/sanity/queries/posts";
// import { Recent, getRecents } from "@/sanity/queries/recents";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define the Selected Works type
interface SelectedWorks {
  id?: number;
  title: string;
  category?: string;
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: SelectedWorks[] = [
  {
    id: 1,
    title: "Inventorisk",
    category: "Branding",
    description: "Short body text and description of the brand",
    imageSrc: "/assets/selected/inventorisk.png",
    slug: "/",
  },
  {
    id: 2,
    title: "Mac not Donalds",
    category: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam...",
    imageSrc: "/assets/selected/mac.png",
    slug: "/",
  },
  {
    id: 3,
    title: "Vechia Wase",
    category: "Visual Identity",
    description:
      "Creating a consistent brand identity across all touchpoints...",
    imageSrc: "/assets/selected/wase.png",
    slug: "/",
  },
  {
    id: 4,
    title: "Ciange Fiuim",
    category: "Product/UIUX Design",
    description: "Short body text and description of the brand",
    imageSrc: "/assets/selected/ciange.png",
    slug: "/",
  },
];

// Categories to filter by
const categories = [
  "All",
  "Branding",
  "Marketing",
  "Visual Identity",
  "Product/UIUX Design",
];

const Page = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter works based on selected category
  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);
  return (
    <>
    <Meta title="SouthCircle - Works" description="Imagine more than you see.." />
    <section className="pt-10 mt-28 container mx-auto px-2 max-w-8xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20 mx-auto px-2">
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 md:gap-20 justify-center max-w-7xl">
          <p className="max-w-md text-xl md:text-lg text-start font-neuehaaslight">
            Explore our top projects that showcase our creativity and expertise.
            See how we turn bold ideas into impactful results and push the
            boundaries of design.
          </p>
          <h1 className="text-8xl md:text-9xl font-baseneue font-bold flex flex-col items-start text-start uppercase">
            <span>A collection</span>
            <span>of our most</span>
            <span>inspiring work.</span>
          </h1>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto mb-10 mt-32 px-2 flex items-center justify-center">
        <div className="flex gap-4 overflow-x-scroll md:overflow-visible no-scrollbar relative">
          {/* Full border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-400"></div>

          {categories.map((category, index) => (
            <button
              key={index}
              className={`relative px-6 py-2 text-sm uppercase whitespace-nowrap font-medium font-neuehaasroman ${
                selectedCategory === category
                  ? "text-black after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-black"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div className="container max-w-full">
        <div className="grid grid-cols-1 gap-12 w-full">
          {filteredWorks.map((work, index) => (
            <Link key={index} href={`/works/${work.slug || "/"}`}>
              <div className="w-full">
                <div className="relative w-full h-0 pb-[80%] md:pb-[40%] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-500 ease-in-out"
                    width={1000}
                    height={300}
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <h3 className="text-lg font-semibold font-neuehaaslight">
                    {work.title}
                  </h3>
                  <span className="border-[1px] text-sm border-black px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight">
                    {work.category}
                  </span>
                </div>
                <p className="text-gray-600 font-neuehaasroman">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-10 flex items-center justify-center">
          <Button
            text="See all works"
            className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="container mx-auto px-4 mt-16">
        <GetInTouch />
      </div>
    </section>
    </>
  );
};

export default Page;
