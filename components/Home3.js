"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";


const Home3 = () => {
  const services = [
    {
      title: "High-Speed Internet",
      containerClassName: "bg-background",
      colors: [[66, 153, 225], [29, 78, 216]],
      dotSize: 3,
      animationSpeed: 4,
    },
    {
      title: "24/7 Customer Support",
      containerClassName: "bg-background",
      colors: [[72, 187, 120], [34, 197, 94]],
      dotSize: 3,
      animationSpeed: 3,
    },
    {
      title: "Secure Data Connections",
      containerClassName: "bg-background",
      colors: [[239, 68, 68], [220, 38, 38]],
      dotSize: 3,
      animationSpeed: 2,
    },
  ];

  return (
    <>
    <div className=" flex flex-col lg:flex-row items-center justify-center bg-background dark:bg-black w-full gap-4 mx-auto px-20 rounded-lg">
      {services.map((service, index) => (
        <Card key={index} title={service.title} icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={service.animationSpeed}
            containerClassName={service.containerClassName}
            colors={service.colors}
            dotSize={service.dotSize}
          />
          {index === 1 && (
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          )}
        </Card>
      ))}
    </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] bg-secondary group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  h-[30rem] relative"
    >
      {[...Array(4)].map((_, i) => (
        <Icon
          key={i}
          className={`absolute h-6 w-6 ${i % 2 === 0 ? "-top-3" : "-bottom-3"
            } ${i < 2 ? "-left-3" : "-right-3"} dark:text-white text-black`}
        />
      ))}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 rounded-lg">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-primary dark:text-white group-hover/canvas-card:text-white "
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
      style={{ mixBlendMode: "darken" }}
    />
  </svg>
);

const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
export default Home3;