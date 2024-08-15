import React from 'react';
import { Bentogrid } from "@/components/Bentogrid";

import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2]  dark:bg-black"></div>
  );

const Advantages = [
    {
      title: "Innovative Solutions",
      description: "We offer cutting-edge solutions to meet your needs.",
      header: (
        <div className="relative w-full h-full items-center rounded-3xl flex justify-center">
        <img
          src="/images/innovative.jpg"
          alt="innovation"
          className="w-[350px] h-[200px] rounded-3xl object-cover"
        />
      </div>
    ),
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
      title: "Expert Team",
      description: "Our team of experts is dedicated to your success.",
      header: (
        <div className="relative w-full h-full items-center rounded-xl flex justify-center">
        <img
          src="/images/ExpertTeam.jpg"
          alt="Expert Team"
          className="w-[150px] h-[200px] rounded-xl object-cover"
        />
      </div>
    ),
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
      title: "Customer-Centric Approach",
      description: "We put our customers at the center of everything we do.",
      header: (
        <div className="relative w-full h-full items-center rounded-xl flex justify-center">
        <img
          src="/images/Customer.jpg"
          alt="Customer pic"
          className="w-[150px] h-[200px] rounded-xl object-cover"
        />
      </div>
    ),
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
      title: "Proven Results",
      description: "Our track record speaks for itself with outstanding results.",
      header: (
        <div className="relative w-full h-full items-center rounded-3xl flex justify-center">
        <img
          src="/images/ProvenRslt.jpg"
          alt="innovation"
          className="w-[350px] h-[200px] rounded-3xl object-cover"
        />
      </div>
    ),
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  ];

const Home2 = () => {
  return (
    <div className= "py-10 px-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Why Choose Us?</h2>
        <Bentogrid Items={Advantages}/>
      </div>
    </div>
  );
};

export default Home2;