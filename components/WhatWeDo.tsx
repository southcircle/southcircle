"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

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
      { question: "Naming", answer: "We create memorable and meaningful names that capture the essence of your brand, aligning with your mission and values." },
      { question: "Visual identity", answer: "Our design team crafts visual elements—logos, colour palettes, and more—that reflect your brand's personality and vision." },
      { question: "Verbal design", answer: "We refine your brand's voice through tailored messaging and tone, ensuring consistency in communication." },
      { question: "Sound & motion design", answer: "We integrate sound and motion into your brand experience, enhancing emotional connections with your audience." },
      { question: "Typography", answer: "Our typography solutions enhance readability and visual appeal, aligning with your brand identity." },
      { question: "Illustrations", answer: "Unique illustrations add personality and depth to your branding, making it more relatable and memorable." },
      { question: "Brand guidelines", answer: "We compile all brand elements into a comprehensive brand book, ensuring consistency across all communications and empowering your team." },
    ],
  },
  {
    title: "Strategy",
    serviceImg: "/assets/services/strategy-service.svg",
    serviceStyle: "bg-[#FF4A4A0D]",
    services: [
      { question: "Product Discovery and Strategy", answer: "We employ strategic user research to deeply understand your audience's problems and needs." },
      { question: "Positioning and Alignment", answer: "Our team helps position your brand effectively in the market, ensuring alignment with your values and goals." },
      { question: "Market Research and Insights", answer: "In-depth market research informs your brand strategy and positioning." },
      { question: "Brand Positioning", answer: "We develop clear brand positioning to differentiate you from competitors." },
      { question: "Brand Architecture and Narrative", answer: "We organize your brand's portfolio and narrative for clarity and impact." },
    ],
  },
  {
    title: "Marketing",
    serviceImg: "/assets/services/marketing-service.svg",
    serviceStyle: "bg-[#0ACC920D]",
    services: [
      { question: "Social Media Campaign", answer: "We create tailored social media campaigns that amplify your brand's voice and connect with your audience." },
      { question: "Search Engine Optimization", answer: "Our SEO strategies enhance your online visibility and drive organic traffic to your website." },
      { question: "Email Marketing", answer: "We design personalized email campaigns that nurture leads and drive customer engagement." },
      { question: "Billboard Campaign", answer: "Our striking billboard designs grab attention and elevate brand awareness in high-traffic areas." },
      { question: "TV and Display Ad", answer: "We create captivating TV and display ads that communicate your brand's message effectively." },
      { question: "Broadcasting", answer: "Our broadcasting strategies ensure your message is heard across multiple channels." },
      { question: "PR and Press release", answer: "We manage your public relations to shape perceptions and maintain a positive brand image." },
    ],
  },
  {
    title: "Product Design",
    serviceImg: "/assets/services/product-design.svg",
    serviceStyle: "bg-[#FFC02E0D]",
    services: [
      { question: "User Research & Insights", answer: "We conduct thorough user research to gain deep insights into user behaviors, preferences, and pain points." },
      { question: "Concept Development", answer: "Our team collaborates with you to develop innovative concepts that solve real user problems." },
      { question: "UI/UX Design", answer: "We design user interfaces and experiences that seamlessly blend functionality with aesthetic appeal." },
      { question: "Design Systems & Guidelines", answer: "We create comprehensive design systems that ensure consistency across all platforms and touchpoints." },
      { question: "Design Consultation", answer: "Our design consultation services provide expert guidance to refine your design approach and strategy." },
    ],
  },
  {
    title: "Development",
    serviceImg: "/assets/services/development-service.svg",
    serviceStyle: "bg-[#8F00FF0D]",
    services: [
      { question: "Mobile App Development", answer: "We design and develop mobile applications that offer exceptional user experiences across all devices." },
      { question: "Web Development", answer: "Our web development services create responsive websites that effectively showcase your brand and meet your business goals." },
      { question: "Frontend Development", answer: "We focus on crafting intuitive user interfaces that enhance user interaction and experience." },
      { question: "Backend Development", answer: "Our back-end development ensures that your applications run smoothly and efficiently, managing data and server interactions." },
      { question: "Maintenance and Support", answer: "We provide ongoing maintenance and support to ensure your digital products remain up-to-date and perform optimally." },
    ],
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pt-32 mt-32 mx-auto w-full">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 uppercase font-neuehaaslight tracking-[2px]">
            What We Do
          </span>
          <hr className="text-gray-400 bg-gray-400" />
        </div>
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-[390px,_1fr]">
          {/* Left Column - Title and Button */}
          <div className="max-w-sm md:w-full space-y-6">
            <h2 className="text-4xl font-medium mb-4 font-neuehaasroman">
              Building a Strong Foundation
            </h2>
            <div>
              <Link href="/contact">
                <Button
                  text="Get in touch"
                  className="w-36 h-12 py-4 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight"
                  variant="outline"
                />
              </Link>
            </div>
          </div>

          {/* Services Grid */}
          <div className="gap-12">
            {services.map((service, idx) => (
              <div className="mt-8 md:mt-4" key={idx}>
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
                  <div className="space-y-6 divide-y-[1px] divide-gray-300 w-full md:max-w-3xl md:w-[820px]">
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
