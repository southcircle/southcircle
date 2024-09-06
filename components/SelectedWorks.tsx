"use client";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";

// Define the Selected Works type
interface SelectedWorks {
    id?: number;
    title: string;
    category?: string;
    description?: string;
    imageSrc: string;
    slug?: string;
}

const works: SelectedWorks[] = [
  {
    id: 1,
    title: 'Inventorisk',
    category: 'Branding',
    description: 'Short body text and description of the brand',
    imageSrc: '/assets/selected/inventorisk.png',
    slug: '/',
  },
  {
    id: 2,
    title: 'Mac not Donalds',
    category: 'Marketing',
    description: 'Lorem ipsum dolor sit amet consectetur. Aliquet ut cursus aliquam...',
    imageSrc: '/assets/selected/mac.png',
    slug: '/',
  },
  {
    id: 3,
    title: 'Vechia Wase',
    category: 'Visual Identity',
    description: 'Creating a consistent brand identity across all touchpoints...',
    imageSrc: '/assets/selected/wase.png',
    slug: '/',
  },
  {
    id: 4,
    title: 'Ciange Fiuim',
    category: 'Product/UIUX Design',
    description: 'Short body text and description of the brand',
    imageSrc: '/assets/selected/ciange.png',
    slug: '/',
  },
];

const SelectedWorks = () => {
  return (
    <section className="pt-32 mt-32 container mx-auto px-4">
      <div className="container w-full mx-auto">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-tight uppercase font-neuehaaslight">
            Our work
          </span>
          <hr className="text-gray-400 bg-gray-400" />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-normal mb-6 font-neuehaasroman">Selected Works</h2>
            <Button
              text="See all works"
              className="px-6 py-3 text-sm font-medium rounded-full whitespace-nowrap font-neuehaaslight"
              variant="outline"
            />
          </div>
        </div>
        {/* Grid layout for work items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-20 gap-6 w-full mt-10">
          {works.map((work, index) => (
            <Link key={index} href={`/works/${work.slug || "/"}`}>
              <div className="w-full">
                <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={work.imageSrc}
                    alt={work.title}
                    className="rounded-sm object-contain hover:scale-125 transition-all ease-in-out duration-500"
                    width={1000}
                    height={600}
                  />
                </div>
                <div className="flex items-center justify-between py-4">
                  <h3 className="text-lg font-semibold font-neuehaasroman">{work.title}</h3>
                  <span className="border-[1px] text-sm border-black px-4 py-1 whitespace-nowrap rounded-full inline-block font-neuehaaslight">
                    {work.category}
                  </span>
                </div>
                <p className="text-gray-600 font-neuehaaslight">{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
