"use client";
import GetInTouch from "@/components/GetInTouch";
import Meta from "@/components/Meta";
import Newsletter from "@/components/Newsletter";
import RecentInsights from "@/components/RecentInsights";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Define the Selected Works type
interface Blogs {
  id?: number;
  title: string;
  category?: string;
  description?: string;
  imageSrc: string;
  slug?: string;
  date?: string;
}

const blogs: Blogs[] = [
  {
    id: 1,
    title: "Art Is Dead",
    category: "Branding",
    description:
      "People often say, “I love what you do, but I’m just not the artsy type” or, “I can’t draw to save my life.”",
    imageSrc: "/assets/blogs/art-is-dead.png",
    slug: "art-is-dead",
    date: "September 24, 2024",
  },
];

// Categories to filter by
const categories = [
  "All Topic",
  "Branding",
  "Product design",
  "Visual Identity",
  "Marketing",
  "Development",
];

const Page = () => {
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All Topic");

  // Filter works based on selected category
  const filteredBlogs =
    selectedCategory === "All Topic"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <section className="pt-10 mt-32 mx-auto px-2 md:px-10 w-full">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mx-auto">
        <div className="relative w-full flex flex-col items-center gap-8 justify-center max-w-7xl">
          <h1 className="text-6xl sm:text-7xl scale-125 sm:scale-95 md:text-[160px] font-baseneue flex flex-col items-start text-start uppercase whitespace-nowrap">
            <span>Insights for your</span>
            <span>journey.</span>
          </h1>
          <p className="max-w-xs text-xl sm:text-2xl text-start font-neuehaaslight md:hidden">
            Explore the narratives that shape our work and reveal the
            inspiration behind our projects.
          </p>
          <div className="max-w-3xl w-full px-2">
            <div>
              <label className="flex items-center justify-between w-full p-4 md:py-4 md:pl-12 rounded-full border transition-colors duration-300 ease-in-out bg-transparent border-gray-400">
                <input
                  type="text"
                  name="subscribe"
                  className="bg-transparent border-none focus:border-none outline-none w-full h-full py-6 placeholder:font-neuehaaslight placeholder:text-xl font-neuehaaslight pl-4"
                  placeholder="Enter email here"
                />
                <Button
                  text="Subscribe"
                  className="px-16 py-12 w-48 rounded-full font-normal text-sm sm:text-base md:text-lg flex justify-center border-gray-400"
                  variant="outline"
                />
              </label>
            </div>
          </div>
          <p className="absolute max-w-xs text-2xl text-start font-neuehaaslight right-32 sm:right-24 md:right-32 lg:right-64 bottom-48 hidden md:inline-block">
            Explore the narratives that shape our work and reveal the
            inspiration behind our projects
          </p>
        </div>
      </div>

      {/* RECENT INSIGHTS */}
      <RecentInsights />

      {/* Filter Section */}
      <div className="mx-auto mb-16 mt-32 flex items-center justify-center w-full px-2">
        <div className="flex justify-center gap-16 overflow-x-scroll md:overflow-visible no-scrollbar relative">
          {/* Full border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>

          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-10">
              <button
                className={`relative py-4 text-sm hover:border-b-[2px] hover:border-black hover:text-black uppercase whitespace-nowrap font-medium tracking-[2px] font-neuehaasroman transition-all duration-300 ease-in-out ${
                  selectedCategory === category
                    ? "text-black border-b-[2px] border-black transition-all duration-500 ease-in-out"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
              <span className={index === categories.length - 1 ? "hidden" : ""}>
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div className="max-w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Link key={index} href={`/blog/${blog.slug || "/"}`}>
                <div className="w-full">
                  <div className="relative w-full h-0 pb-[80%] md:pb-[80%] overflow-hidden">
                    <Image
                      src={blog.imageSrc}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-sm hover:scale-105 transition-transform duration-500 ease-in-out"
                      width={1000}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col gap-1 items-start py-4">
                    <span className="text-sm text-gray-500 font-neuehaasroman">
                      {blog.date}
                    </span>
                    <h3 className="text-xl font-medium font-neuehaasroman">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 font-neuehaasroman">
                      {blog.description}
                    </p>
                  </div>
                  <a
                    href={`/blog/${blog.slug || "/"}`}
                    className="text-sm underline font-neuehaasroman"
                  >
                    Read blog
                  </a>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center w-full col-span-full py-10">
              <p className="text-6xl font-baseneue font-medium text-gray-500">
                No blog in here
              </p>
            </div>
          )}
        </div>
        <div className="py-10 flex items-center justify-center">
          <Button
            text="See all blogs"
            className="px-6 py-5 w-32 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </div>
      </div>

      <Newsletter />
      {/* Get In Touch Section */}
      <div className="mx-auto px-4 mt-16">
        <GetInTouch />
      </div>
    </section>
  );
};

export default Page;
