'use client';

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.04, ease: "easeInOut" } },
    hover: { scale: 1.05 }
  };
  

  const servicesData = [
    {
      id: 1,
      name: "Crop Recommendation",
      color: "bg-green-300",
      href: "/Services/Crop1"
    },
    {
      id: 2,
      name: "Crop Yield Prediction",
      color: "bg-green-300",
      href: "/Services/Crop2"
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-900 overflow-y-hidden p-4">
      <div className="flex flex-wrap justify-center w-full gap-16">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={boxVariants}
            initial="hidden"
            whileHover="hover"
            animate="show"
            className="text-black w-full sm:w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/5 2xl:w-1/4 rounded overflow-hidden shadow-md m-2 transition-transform transform"
            style={{ maxWidth: "480px" }} // Use maxWidth for larger screens
          >
            <div
              className={`${service.color} flex items-center justify-center text-center transition-bg-opacity duration-300 hover:bg-opacity-70`}
              style={{ height: "300px" }} // Adjust height for responsiveness
            >
              <Link href={service.href} className="text-green-900 font-bold text-2xl">
                {service.name}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
