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
    title: "Why South Circle",
    category: "Branding",
    description:
      "Short body text and description of the brand from the south and risus duis leo ac nunc sapien sit",
    imageSrc: "/assets/blogs/imagine-more.png",
    slug: "/why-south-circle",
    date: "August 24, 2024",
  },
  {
    id: 2,
    title: "Turning businesses into brands",
    category: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam text and description of the brand from the south and risus...",
    imageSrc: "/assets/blogs/brain-stretched.png",
    slug: "/turning-businesses-into-brands",
    date: "September 2, 2024",
  },
  {
    id: 3,
    title: "The impact of social media on branding",
    category: "Visual Identity",
    description:
      "Creating a consistent brand identity across all touchpoints...",
    imageSrc: "/assets/blogs/cd-player.png",
    slug: "/the-impact-of-social-media-on-branding",
    date: "August 14, 2024",
  },
  {
    id: 4,
    title: "Why Designers love music?",
    category: "Product/UIUX Design",
    description: "Short body text and description of the brand",
    imageSrc: "/assets/blogs/headset.png",
    slug: "/why-designers-love-music",
    date: "August 24, 2024",
  },
  {
    id: 5,
    title: "Build up a tech career",
    category: "Branding",
    description: "Short body text and description of the brand",
    imageSrc: "/assets/blogs/medical.png",
    slug: "/build-up-a-tech-career",
    date: "August 24, 2024",
  },
  {
    id: 6,
    title: "Are no-code products successful?",
    category: "Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam...",
    imageSrc: "/assets/blogs/apple.png",
    slug: "/build-up-a-tech-career",
    date: "September 2, 2024",
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
  "Insights",
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
              <label className="flex items-center justify-between w-full p-4 md:p-6 rounded-full border transition-colors duration-300 ease-in-out bg-transparent border-gray-400">
                <input
                  type="text"
                  name="subscribe"
                  className="bg-transparent border-none focus:border-none outline-none w-full h-full py-6 placeholder:font-neuehaaslight placeholder:text-xl font-neuehaaslight pl-4"
                  placeholder="Enter email here"
                />
                <Button
                  text="Subscribe"
                  className="px-6 py-6 w-32 rounded-full font-normal text-sm sm:text-base md:text-base flex justify-center border-gray-400"
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
      <div className="mx-auto mb-10 mt-32 flex items-center justify-center w-full px-2">
        <div className="flex justify-center gap-16 overflow-x-scroll md:overflow-visible no-scrollbar relative">
          {/* Full border line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200"></div>

          {categories.map((category, index) => (
            <button
              key={index}
              className={`relative py-4 text-sm hover:border-b-[1px] border-gray-600 uppercase whitespace-nowrap font-medium tracking-[2px] font-neuehaasroman transition-all duration-300 ease-in-out ${
                selectedCategory === category
                  ? "text-black border-b-[2px] border-black transition-all duration-500 ease-in-out"
                  : "text-gray-400"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div className="max-w-full px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {filteredBlogs.map((blog, index) => (
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
          ))}
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
