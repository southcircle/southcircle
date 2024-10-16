import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentInsights = () => {
  return (
    <section className="pt-16 md:pt-32 md:mt-32 mx-auto px-2">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-neuehaaslight">
          <span className="text-sm text-gray-400 tracking-[2px] font-neuehaaslight uppercase">
            Recent Insight
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="w-full flex flex-col md:flex-row align-top gap-28 mt-10">
            <div className="w-full">
              <Link href="/blog/build-up-a-tech-career">
                <div className="w-full flex flex-col md:flex-row gap-4 md:gap-20 items-center">
                  <div className="relative rounded-3xl overflow-hidden h-[420px]">
                    <Image
                      src="/assets/blogs/art-is-dead.png"
                      alt="Imagine more"
                      className="object-cover hover:scale-110 transition-all ease-in-out duration-500"
                      width={700}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-6 md:gap-16 md:px-3">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-sm text-gray-500 font-neuehaaslight uppercase">
                      September 24, 2024
                      </span>
                      <h3 className="text-2xl font-semibold font-neuehaasroman">
                        Art Is Dead.
                      </h3>
                      <p className="text-lg text-gray-600 font-neuehaaslight max-w-2xl">
                      People often say, &quot;I love what you do, but I&apos;m just not the artsy type&quot; or, &quot;I can&apos;t draw to save my life.&quot; It&apos;s almost like there&apos;s this invisible standard everyone thinks they need to reach in order to be considered an artist. But that&apos;s a misconception. Art isn&apos;t about skill alone; it&apos;s about expression. And guess what? Life itself is art.
                      </p>
                    </div>
                    <a
                      href="/blog/art-is-dead"
                      className="text-sm font-medium underline font-neuehaaslight"
                    >
                      Read blog
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentInsights;
