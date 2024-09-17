import Image from "next/image";
import React from "react";

interface Team {
  fullname?: string;
  title?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  imageSrc?: string;
  mail?: string;
  contact?: string;
}

const teams: Team[] = [
  {
    fullname: "Chidera Nwanyemike",
    title: "Managing Director & CEO",
    imageSrc: "/assets/team/chidera.png",
    mail: "chidera@southcircle.co",
    contact: "+234 906 328 8657",
  },
  {
    fullname: "Oke Omorohwovo",
    title: "Chief Operating Officer",
    imageSrc: "/assets/team/oke.png",
    mail: "oke@southcircle.co",
    contact: "+234 905 959 0500",
  },
  {
    fullname: "Gold Nelson",
    title: "Strategy and Client Relations",
    imageSrc: "/assets/team/nelson.png",
    mail: "nelson@southcircle.co",
    contact: "+234 902 370 8031",
  },
];

const OurTeams = () => {
  return (
    <section className="pb-32 pt-20 mb-40 mx-auto px-2">
      <div className="max-w-8xl w-full">
        <div className="flex flex-col gap-4 w-full font-neuehasslight">
          <span className="text-sm text-gray-400 tracking-[2px] uppercase font-neuehaaslight">
            Our Team
          </span>
          <hr />
          <div className="py-2 flex items-center justify-between">
            <h2 className="text-3xl font-normal mb-6 max-w-sm font-neuehaasroman">
              Your go-to crew for getting things done.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-4">
          {teams.map((team, index) => (
            <div key={index} className="max-w-md w-full flex-shrink-0">
              <Image
                src={team.imageSrc || ""}
                alt={team.title || ""}
                width={1000}
                height={240}
                className="object-cover"
              />
              <div className="my-3">
                <h3 className="text-lg font-medium truncate font-neuehaasroman">
                  {team.fullname}
                </h3>
                <p className="text-gray-600 w-full font-neuehaaslight">
                  {team.title}
                </p>
              </div>
              <div className="text-start mb-3">
                <p className="font-neuehaaslight text-gray-400 tracking-tight">{team.mail}</p>
                <p className="font-neuehaaslight text-gray-400 tracking-tight">{team.contact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
