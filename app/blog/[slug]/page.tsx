"use client";
import Button from "@/components/ui/Button";
// import { client } from "@/sanity/lib/client";
// import { getDetailPost } from "@/sanity/queries/posts";
// import { default as ImageUrlBuilder } from "@sanity/image-url";
// import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { getDetailRecent } from "@/sanity/queries/recents";

const WorkDetail = ({
  params,
}: {
  params: { slug: string; recent: boolean };
}) => {
  const { slug } = params;

  console.log(slug);

  // const work = await getDetailRecent(slug) || await getDetailPost(slug);
  // console.log(work);
  // console.log(work.title);

  return (
    <section className="pt-10 mt-24 mx-auto px-2 max-w-8xl w-full">
      {/* Hero Section */}
      <div className="container flex flex-col items-start justify-start text-start mb-20 mx-auto w-full">
        <div className="flex flex-col items-start justify-start max-w-7xl px-4 md:px-0 w-full">
          <div className="flex items-center gap-3 py-5 text-gray-400 text-sm text-nowrap">
            <p>BRANDING</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>AUGUST 14, 2024</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>8 MINS READ</p>
          </div>
          <div className="w-full text-5xl md:text-[120px] font-baseneue font-bold flex gap-4 items-center justify-start text-start uppercase whitespace-nowrap">
            <span>Why South Circle?</span>
            <div className="p-2 md:p-5 rounded-full border-[1px] border-black w-fit -rotate-45">
              <Image
                src="/assets/arrow-down.svg"
                width={32}
                height={32}
                alt="arrow-down"
                className="object-contain w-6 h-6 md:w-10 md:h-10 animate-bounce rotate-6"
              />
            </div>
          </div>
        </div>
        <div className="w-full py-8">
          <Image
            src="/assets/blogs/imagine-more.png"
            width={1000}
            height={200}
            alt="imagine more"
            className="object-contain w-[100vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkDetail;
