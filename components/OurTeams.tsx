import Image from "next/image";
import React from "react";

interface Team {
  fullname?: string;
  title?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  imageSrc?: string;
}

const teams: Team[] = [
  {
    fullname: "Chidera Nwanyemike",
    title: "Managing Director & CEO",
    imageSrc: "/assets/team/chidera.png",
  },
  {
    fullname: "Oke Omorohwovo",
    title: "Chief Operating Officer",
    imageSrc: "/assets/team/oke.png",
  },
  {
    fullname: "Gold Nelson",
    title: "Strategy and Client Relations",
    imageSrc: "/assets/team/nelson.png",
  },
];

const OurTeams = () => {
  return (
    <section className="pb-32 pt-20 mb-40 container mx-auto px-4">
      <div className="container max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-tight uppercase font-neuehaaslight">
            Our Team
          </span>
          <hr />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-normal mb-6 max-w-sm font-neuehaasroman">
              Your go-to crew for getting things done.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-4">
          {teams.map((team, index) => (
            <div key={index} className="max-w-md w-full flex-shrink-0">
              <Image
                src={team.imageSrc || ""}
                alt={team.title || ""}
                width={1000}
                height={240}
                className="object-cover"
              />
              <div className="my-4">
                <h3 className="text-lg font-semibold truncate font-neuehaasroman">
                  {team.fullname}
                </h3>
                <p className="text-gray-600 w-full font-neuehaaslight">
                  {team.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
