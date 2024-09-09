"use client";
import React, { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";

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
    <section className="pt-32 mt-32 container mx-auto px-4">
      <div className="container w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-tight uppercase font-neuehaaslight">
            What We Do
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="mt-10 w-full grid grid-cols-[500px,_1fr]">
          {/* Left Column - Title and Button */}
          <div className="p-3">
            <h2 className="text-4xl font-semibold mb-4">
              Building a Strong Foundation
            </h2>
            <Button
              text="Get in touch"
              className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight"
              variant="outline"
            />
          </div>

          {/* Services Grid */}
          <div className="gap-12">
            {services.map((service, idx) => (
              <div key={idx}>
              <div className={`w-full flex items-center justify-center p-16 ${service.serviceStyle}`}>
                <Image
                  src={service.serviceImg || ''}
                  width={160}
                  height={160}
                  alt={service.title || 'Service image'}
                />
              </div>
              <div className="flex w-full items-start justify-between py-4">
                <h3 className="text-base tracking-wide font-neuehaasroman uppercase">{service.title}</h3>
                <div className="space-y-6 divide-y-[1px] divide-gray-300 max-w-2xl w-[620px]">
                  {service?.services && service?.services.map((faq, index) => (
                    <div
                      key={index}
                      className=""
                    >
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
                        <p className="mt-2 text-gray-600 font-neuehaaslight">{faq.answer}</p>
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
