"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Service {
  title?: string;
  answer?: string;
  question?: string;
  serviceImg?: string;
  serviceStyle?: string;
  services?: Array<Service>;
}

const services: Service[] = [
  {
    title: "Branding",
    serviceImg: "/assets/services/branding-service.svg",
    serviceStyle: "bg-[#5975FF0D]",
    services: [
      { question: "Naming", answer: "-" },
      { question: "Visual identity", answer: "+" },
      { question: "Verbal design", answer: "+" },
      { question: "Sound & motion design", answer: "+" },
      { question: "Typography", answer: "+" },
      { question: "Illustrations", answer: "+" },
      { question: "Brand guidelines", answer: "+" },
    ],
  },
  {
    title: "Strategy",
    serviceImg: "/assets/services/strategy-service.svg",
    serviceStyle: "bg-[#FF4A4A0D]",
    services: [
      { question: "Product discovery and strategy", answer: "+" },
      { question: "Positioning and alignment", answer: "+" },
      { question: "Market research and insights", answer: "+" },
      { question: "Brand positioning", answer: "+" },
      { question: "Brand architecture and narrative", answer: "+" },
    ],
  },
  {
    title: "Marketing",
    serviceImg: "/assets/services/marketing-service.svg",
    serviceStyle: "bg-[#0ACC920D]",
    services: [
      { question: "Social media campaign", answer: "+" },
      { question: "Search engine optimization", answer: "+" },
      { question: "Email marketing", answer: "+" },
      { question: "Billboard campaign", answer: "+" },
      { question: "TV and display ad", answer: "+" },
      { question: "Broadcasting", answer: "+" },
      { question: "PR and press release", answer: "+" },
    ],
  },
  {
    title: "Product Design",
    serviceImg: "/assets/services/product-design.svg",
    serviceStyle: "bg-[#FFC02E0D]",
    services: [
      { question: "User research & insights", answer: "+" },
      { question: "Concept development", answer: "+" },
      { question: "UI/UX design", answer: "+" },
      { question: "Design systems & guidelines", answer: "+" },
      { question: "Design consultation", answer: "+" },
    ],
  },
  {
    title: "Development",
    serviceImg: "/assets/services/development-service.svg",
    serviceStyle: "bg-[#8F00FF0D]",
    services: [
      { question: "Mobile app development", answer: "+" },
      { question: "Web development", answer: "+" },
      { question: "Front-end development", answer: "+" },
      { question: "Back-end development", answer: "+" },
      { question: "Maintenance and support", answer: "+" },
    ],
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-32 mt-32 mx-auto max-w-full w-full">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 uppercase font-neuehaaslight tracking-[2px]">
            What We Do
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-[360px,_1fr]">
          {/* Left Column - Title and Button */}
          <div className="max-w-sm md:w-full space-y-6">
            <h2 className="text-4xl font-medium mb-4 font-neuehaasroman">
              Building a Strong Foundation
            </h2>
            <div>
            <Button
              text="Get in touch"
              className="px-6 py-4 w-28 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight"
              variant="outline"
            />
            </div>
          </div>

          {/* Services Grid */}
          <div className="gap-12">
            {services.map((service, idx) => (
              <div className="mt-8 md:mt-0" key={idx}>
                <div
                  className={`w-full flex items-center justify-center p-20 ${service.serviceStyle}`}
                >
                  <Image
                    src={service.serviceImg || ""}
                    width={160}
                    height={160}
                    alt={service.title || "Service image"}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-8 mt-6 md:mt-0 w-full items-start justify-between py-4 md:pt-0">
                  <h3 className="text-lg  tracking-[2px] font-neuehaasroman uppercase md:mt-6">
                    {service.title}
                  </h3>
                  <div className="space-y-6 divide-y-[1px] divide-gray-300 w-full md:max-w-2xl md:w-[620px]">
                    {service?.services &&
                      service?.services.map((faq, index) => (
                        <div key={index} className="">
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left text-lg font-medium py-4 font-neuehaasroman"
                          >
                            {faq.question}
                            {activeIndex === index ? (
                              <div className="w-12 h-12 flex items-center justify-center border-[1px] border-gray-400 rounded-full">
                                <Image
                                  src="/assets/minus.svg"
                                  width={20}
                                  height={20}
                                  alt="plus"
                                />
                              </div>
                            ) : (
                              <div className="w-12 h-12 flex items-center justify-center border-[1px] border-gray-400 rounded-full">
                                <Image
                                  src="/assets/plus.svg"
                                  width={20}
                                  height={20}
                                  alt="minus"
                                />
                              </div>
                            )}
                          </button>
                          {activeIndex === index && (
                            <p className="mt-2 text-gray-600 font-neuehaaslight">
                              {faq.answer}
                            </p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
