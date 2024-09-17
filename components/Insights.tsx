"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Blog type
interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Why South Circle",
    date: "August 28, 2024",
    description:
      "South Circle is redefining brands, beyond conformity from the south...",
    imageSrc: "/assets/blogs/imagine-more.png",
  },
  {
    id: 2,
    title: "Turning businesses into brands",
    date: "August 14, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam...",
    imageSrc: "/assets/blogs/brain-stretched.png",
  },
  {
    id: 3,
    title: "The impact of social media on branding",
    date: "August 03, 2024",
    description:
      "Creating a consistent brand identity across all touchpoints...",
    imageSrc: "/assets/blogs/cd-player.png",
  },
  {
    id: 4,
    title: "Turning businesses into brands",
    date: "August 14, 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam...",
    imageSrc: "/assets/blogs/brain-stretched.png",
  },
  {
    id: 5,
    title: "Why South Circle",
    date: "August 28, 2024",
    description:
      "South Circle is redefining brands, beyond conformity from the south...",
    imageSrc: "/assets/blogs/imagine-more.png",
  },
  {
    id: 6,
    title: "The impact of social media on branding",
    date: "August 03, 2024",
    description:
      "Creating a consistent brand identity across all touchpoints...",
    imageSrc: "/assets/blogs/cd-player.png",
  },
];

const Insights: React.FC = () => {
  // Type the scrollRef as an HTMLDivElement or null
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Type the state values as numbers
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);

  useEffect(() => {
    if (scrollRef.current) {
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  }, [scrollRef]);

  //   console.log(maxScroll);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      const newScrollPos = Math.min(scrollPos + 50, maxScroll);
      scrollRef.current.scrollLeft = newScrollPos;
      setScrollPos(newScrollPos);
    }
    // console.log("Right");
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      const newScrollPos = Math.max(scrollPos - 50, 0);
      scrollRef.current.scrollLeft = newScrollPos;
      setScrollPos(newScrollPos);
    }
    // console.log("Left");
  };

  //   console.log("Current Scroll Position:", scrollPos);
  //   console.log("Maximum Scroll Value:", maxScroll);

  return (
    <section className="pt-16 md:pt-32 md:mt-40 mx-auto px-4 md:px-10 max-w-full w-full">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-tight uppercase font-neuehaaslight">
            Insights
          </span>
          <hr />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-2xl md:ext-3xl mb-6 w-full md:max-w-sm font-neuehaasroman">
              Read through the wonderful insights from our Journey.
            </h2>
            <Button
              text="See all blogs"
              className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap hidden md:inline-block"
              variant="outline"
            />
          </div>
        </div>

        {/* Scrollable Blogs Section */}
        <div className="relative">
          {/* Blogs */}
          <div
            className="flex items-center overflow-x-auto gap-4 no-visible-scrollbar py-4"
            ref={scrollRef}
            style={{ scrollBehavior: "smooth" }}
          >
            {blogs.map((blog) => (
              <div key={blog.id} className="w-[360px] max-w-md flex-shrink-0">
                <Image
                  src={blog.imageSrc}
                  alt={blog.title}
                  width={400}
                  height={400}
                  className="object-cover  h-[320px]"
                  objectFit="cover"
                />
                <div className="text-sm text-gray-500 my-2 font-neuehaaslight">
                  {blog.date}
                </div>
                <h3 className="text-lg font-medium truncate font-neuehaasroman">
                  {blog.title}
                </h3>
                <p className="text-gray-600 max-w-[340px] font-neuehaaslight">
                  {blog.description}
                </p>
                <a
                  href="#"
                  className="text-black underline my-5 inline-block text-[15px] font-neuehaasroman"
                >
                  Read blog
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll Buttons */}
        <div className="flex items-center justify-center gap-4 py-2 mx-auto text-center">
          <button
            className={`text-4xl z-10 p-2 text-black'}`}
            onClick={handleScrollLeft}
          >
            <Image
              src="/assets/arrow-back.svg"
              width={24}
              height={24}
              alt="Arrow left"
            />
          </button>
          <button
            className={`text-4xl z-10 p-2 text-black'}`}
            onClick={handleScrollRight}
          >
            <Image
              src="/assets/arrow-right.svg"
              width={24}
              height={24}
              alt="Arrow right"
            />
          </button>
        </div>
        <div className="py-10 flex items-center justify-center">
          <Button
            text="See all blogs"
            className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default Insights;
