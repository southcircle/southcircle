
'use client'
import Button from "@/components/ui/Button";
// import { client } from "@/sanity/lib/client";
// import { getDetailPost } from "@/sanity/queries/posts";
// import { default as ImageUrlBuilder } from "@sanity/image-url";
// import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { getDetailRecent } from "@/sanity/queries/recents";


const WorkDetail =  ({ params }: { params: { slug: string, recent: boolean } }) => {
  const { slug } = params;

  console.log(slug)

  // const work = await getDetailRecent(slug) || await getDetailPost(slug);
  // console.log(work);
  // console.log(work.title);

  return (
    <section className="pt-10 mt-24 mx-auto px-2 max-w-8xl">
        {/* Hero Section */}
        <div className="flex flex-col items-start justify-start text-start">
          <div className="relative w-full flex flex-col items-start gap-8 md:gap-10 justify-start max-w-7xl mt-4">
            <h1 className="text-6xl sm:text-7xl scale-125 sm:scale-95 md:text-[160px] font-baseneue flex flex-col items-start text-start uppercase whitespace-nowrap">
              <span>Still in</span>
              <span>Development.</span>
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
                    className="bg-transparent border-none focus:border-none outline-none w-full h-full py-6 placeholder:font-neuehaaslight placeholder:text-xl"
                    placeholder="Enter email here"
                  />
                  <Button
                    text="Subscribe"
                    className="px-10 py-5 rounded-full font-normal text-base sm:text-lg md:text-[18px] flex justify-center"
                    variant="outline"
                  />
                </label>
              </div>
            </div>
            {/* <p className="absolute max-w-xs text-2xl text-start font-neuehaaslight right-32 sm:right-24 md:right-32 lg:right-64 bottom-48 hidden md:inline-block">
              Explore the narratives that shape our work and reveal the
              inspiration behind our projects
            </p> */}
          </div>
        </div>
    </section>
  );
};

export default WorkDetail;
