"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Selected Works type
interface SelectedWorks {
  id?: number;
  title: string;
  category?: string[];
  description?: string;
  imageSrc: string;
  slug?: string;
}

const works: SelectedWorks[] = [
  {
    id: 1,
    title: "Vash Affairs",
    category: ["Visual Identity"],
    description: "Your go-to Brand for premium skincare solutions",
    imageSrc: "/assets/selected/visha.jpg",
    slug: "https://www.behance.net/gallery/168315499/Visual-Identity-Vash-Affairs",
  },
  {
    id: 2,
    title: "Xuse Gold",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Building Trust Through Stability with Gold.",
    imageSrc: "/assets/selected/xuse.webp",
    slug: "https://www.behance.net/gallery/184814461/Xuse-Brand-Strategy-Visual-Identity",
  },
  {
    id: 3,
    title: "GameBox",
    category: ["Visual Identity", "Brand Strategy"],
    description: "Your Ultimate Gaming Destination.",
    imageSrc: "/assets/selected/gamebox.webp",
    slug: "https://www.behance.net/southcircle",
  },
  {
    id: 4,
    title: "Ciange Fiuim",
    category: ["Product/UIUX Design"],
    description: "Short body text and description of the brand",
    imageSrc: "/assets/selected/ciange.png",
    slug: "/",
  },
];

const SelectedWorks = () => {
  return (
    <section className="pt-16 md:pt-16 md:mt-28 mx-auto px-4 md:px-10">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-neuehaasroman">
            Our work
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-normal font-neuehaasroman">
              Selected Works
            </h2>
            <Button
              text="See all works"
              className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight hidden md:inline-block"
              variant="outline"
            />
          </div>
        </div>
        {/* Grid layout for work items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-6 w-full mt-10">
          {works.map((work, index) => (
            <Link key={index} href={`${work.slug || "/"}`}>
              <div className="w-full">
                <div className="relative w-full md:h-[460px] overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="rounded-sm object-cover hover:scale-125 transition-all ease-in-out duration-500"
                    width={1000}
                    height={500}
                    objectFit="cover"
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <h3 className="text-lg font-medium font-neuehaasroman">
                    {work.title}
                  </h3>
                  <div className="md:flex items-center gap-1 hidden">
                    {work?.category &&
                      work?.category.map((cat, index) => (
                        <span
                          key={index}
                          className="border-[1px] text-sm border-black px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight"
                        >
                          {cat}
                        </span>
                      ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 md:hidden">
                  {work?.category &&
                    work?.category.map((cat, index) => (
                      <span
                        key={index}
                        className="border-[1px] text-sm border-black px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight"
                      >
                        {cat}
                      </span>
                    ))}
                </div>
                <p className="text-gray-600 font-neuehaaslight mt-3">
                  {work.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-10 flex items-center justify-center">
          <Button
            text="See all works"
            className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight md:hidden"
            variant="outline"
          />
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
