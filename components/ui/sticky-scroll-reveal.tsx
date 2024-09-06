"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // Uncomment the line below and comment the next line if you DON'T want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="container h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 w-full no-scrollbar"
      ref={ref}
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 md:px-8 w-full">
        <div>
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 w-[420px]">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={cn(
                  "text-3xl font-bold",
                  activeCard === index ? "text-black" : "text-gray-500"
                )}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={cn(
                  "text-xl mt-6",
                  activeCard === index ? "text-black" : "text-gray-500"
                )}
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-52" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block lg:h-60 w-full rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
