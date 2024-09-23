"use client";
import GetInTouch from "@/components/GetInTouch";
import MoreInsights from "@/components/MoreInsights";
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

  // Function to handle opening social share links
  const openShareLink = (url: string) => {
    window.open(url, "_blank");
  };

  const twitterUrl = `https://twitter.com/share?url=${encodeURIComponent(
    slug
  )}`;

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    slug
  )}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    slug
  )}`;

  console.log(slug);

  // const work = await getDetailRecent(slug) || await getDetailPost(slug);
  // console.log(work);
  // console.log(work.title);

  return (
    <section className="pt-10 mt-32 mx-auto w-full px-3 md:px-10">
      {/* Hero Section */}
      <div className="flex flex-col items-start justify-start text-start mb-20 mx-auto w-full">
        <div className="flex flex-col items-start justify-start max-w-7xl md:px-0 w-full">
          <div className="flex items-center gap-3 py-5 text-gray-400 text-xs md:text-sm text-nowrap font-neuehaaslight">
            <p>BRANDING</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>AUGUST 14, 2024</p>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <p>8 MINS READ</p>
          </div>
          <div className="w-full text-5xl md:text-[120px] font-baseneue font-bold flex gap-6 items-center justify-start text-start uppercase whitespace-nowrap">
            <span>Why South Circle</span>
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

      {/* BLOG CONTENT */}
      <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-[480px,_1fr]">
        {/* LEFT HAND SIDE */}
        <div className="md:flex flex-col gap-4 hidden">
          <h2 className="text-lg font-medium mb-4 font-neuehaasroman uppercase text-gray-400 tracking-wider">
            Share this news
          </h2>
          <button
            onClick={() => openShareLink(twitterUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/x.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-neuehaasroman pr-2">Twitter</p>
          </button>
          <button
            onClick={() => openShareLink(linkedInUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/linkedin.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-neuehaasroman pr-2">LinkedIn</p>
          </button>
          <button
            onClick={() => openShareLink(facebookUrl)}
            className="p-2 border border-[#2d2d2d] rounded-full flex items-center justify-start w-fit gap-4"
          >
            <Image src="/assets/facebook.svg" width={26} height={26} alt="X" />
            <p className="text-lg font-neuehaasroman pr-2">Facebook</p>
          </button>
        </div>

        {/* RIGHT HAND SIDE */}
        <div className="flex flex-col items-start">
          <h1 className="font-neuehaasroman text-3xl">
            South Circle is redefining brands, beyond conformity from the south
            and risus duis leo ac nunc sapien sit vestibulum. Convallis amet
            aliquam odio qraesen cursus risus duis leo.
          </h1>
          <div className="space-y-6 mt-6 mb-10">
            <h2 className="text-4xl font-neuehaasroman">
              Creating a memorable brand identity
            </h2>
            <div className="space-y-4 pb-12">
              <p className="text-xl text-gray-500 font-neuehaaslight tracking-wide">
                In today&apos;s competitive marketplace, having a strong brand
                positioning is more crucial than ever. It is the foundation upon
                which successful businesses build their identity and connect
                with their target audience. A strong brand positioning helps
                your business stand out from the competition, creates a lasting
                impression, and shapes how your audience perceives your brand.
              </p>
              <p className="text-xl tracking-wide text-gray-500 font-neuehaaslight">
                Creating a memorable brand identity starts with understanding
                your target audience and the unique value your brand offers. It
                involves crafting a brand story that resonates with your
                audience, effectively communicating your brand&apos;s
                personality, values, and purpose. Through strategic messaging,
                visual elements, and consistent brand voice, you can create a
                brand identity that captures the essence of your business and
                leaves a lasting impact on your customers.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/assets/blogs/team.png"
                width={2000}
                height={400}
                alt="team image"
                className="object-cover w-[100vw]"
              />
            </div>
          </div>
          <div className="space-y-6 mt-6 mb-10">
            <h2 className="text-4xl font-neuehaasroman">
              Setting your brand apart
            </h2>
            <div className="space-y-4 pb-12">
              <p className="text-xl text-gray-500 font-neuehaaslight tracking-wide">
                In a crowded marketplace, it is essential to differentiate your
                brand from competitors. A strong brand positioning allows you to
                highlight what sets you apart and communicate the unique value
                you bring to your customers. It helps establish a clear and
                distinct identity that resonates with your target audience and
                fosters brand loyalty.
              </p>
              <p className="text-xl tracking-wide text-gray-500 font-neuehaaslight">
                To differentiate your brand, it is crucial to conduct thorough
                market research and understand your competition. Identify gaps
                in the market, analyze consumer preferences, and uncover unique
                selling points that make your brand stand out. By focusing on
                these differentiators and effectively communicating them through
                your brand positioning, you can position your business as the
                preferred choice in the minds of your target audience.
              </p>
            </div>
            <div className="w-full mt-20">
              <Image
                src="/assets/blogs/chidera.png"
                width={2000}
                height={400}
                alt="team image"
                className="object-cover w-[100vw]"
              />
            </div>
          </div>
          <div className="space-y-6 mt-6 mb-10">
            <h2 className="text-4xl font-neuehaasroman">
              Creating emotional connections
            </h2>
            <div className="space-y-4">
              <p className="text-xl text-gray-500 font-neuehaaslight tracking-wide">
                A strong brand positioning builds trust and fosters loyalty
                among your customers. When your brand consistently delivers on
                its promises and aligns with the expectations of your audience,
                it creates a sense of trust and reliability. A well-defined
                brand positioning helps establish this trust by consistently
                delivering a positive and consistent brand experience across all
                touchpoints.
              </p>
              <p className="text-xl tracking-wide text-gray-500 font-neuehaaslight">
                By understanding your audience&apos;s needs, values, and
                aspirations, you can develop a brand positioning that resonates
                with their emotions. Emotional connections are powerful drivers
                of brand loyalty and advocacy. By crafting a brand positioning
                that evokes positive emotions, you can create long-lasting
                relationships with your customers, turning them into brand
                ambassadors who actively promote and support your brand.
              </p>
            </div>
            <div className="w-full pt-16 flex items-start">
              <div className="flex flex-col gap-3 items-start max-w-md">
                <p className="font-neuehaasroman">Written by:</p>
                <div className="flex items-center gap-3">
                  <div className="">
                    <Link
                      href="https://www.linkedin.com/in/gold-nelson/"
                      className="font-neuehaasroman underline"
                    >
                      Gold Nelson
                    </Link>
                    <p className="text-gray-400 font-neuehaasroman">
                      Strategy and Client Relation, South Circle
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex flex-col gap-2 mt-6">
                  <h2 className="text-base font-medium mb-2 font-neuehaasroman uppercase text-gray-400 tracking-wider">
                    Share this news
                  </h2>
                  <div className="w-full flex items-center justify-between gap-2">
                    <button
                      onClick={() => openShareLink(twitterUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/x.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-xs font-neuehaasroman pr-2">Twitter</p>
                    </button>
                    <button
                      onClick={() => openShareLink(linkedInUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/linkedin.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-xs font-neuehaasroman pr-2">
                        LinkedIn
                      </p>
                    </button>
                    <button
                      onClick={() => openShareLink(facebookUrl)}
                      className="p-2 md:p-4 border border-[#2d2d2d] rounded-full text-nowrap flex items-center justify-start w-fit gap-2 md:gap-4"
                    >
                      <Image
                        src="/assets/facebook.svg"
                        width={20}
                        height={20}
                        alt="X"
                      />
                      <p className="text-xs font-neuehaasroman pr-2">
                        Facebook
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE INSIGHTS */}
      <MoreInsights />

      {/* GET IN TOUCH */}
      <GetInTouch />
    </section>
  );
};

export default WorkDetail;
