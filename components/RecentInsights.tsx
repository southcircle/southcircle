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
                  <div className="relative overflow-hidden">
                    <Image
                      src="/assets/blogs/imagine-more.png"
                      alt="Imagine more"
                      className="rounded-sm object-contain hover:scale-110 transition-all ease-in-out duration-500"
                      width={700}
                      height={200}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between gap-6 md:gap-16 md:px-3">
                    <div className="flex flex-col items-start gap-1">
                      <span className="text-sm text-gray-500 font-neuehaaslight">
                        August 8, 2024
                      </span>
                      <h3 className="text-xl font-medium font-neuehaasroman">
                        Why South Circle
                      </h3>
                      <p className="text-lg text-gray-600 font-neuehaaslight max-w-2xl">
                        South Circle is redefining brands, beyond conformity
                        from the south and risus duis leo ac nunc sapien sit
                        vestibulum. Convallis amet aliquam odio qraesen cursus.
                      </p>
                    </div>
                    <a
                      href="/blog/build-up-a-tech-career"
                      className="text-sm underline font-neuehaasroman"
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
