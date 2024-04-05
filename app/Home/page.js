"use client";


import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Homes = () => {
  const contentVariants = {
    hidden: { x: 70, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div className="bg-cover bg-center h-screen flex justify-end items-center"
    style={{
      backgroundImage: "url('./wheat-fields-4439896_1280.jpg')"
    }}>
    <div className="mr-40"
      
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="text-white text-center"
      >
        <p className="text-4xl font-bold mb-4">Care Today</p>
        <p className="text-4xl font-bold mb-8">Appreciate Tomorrow</p>
        <Link href="/Services" className="bg-white text-black font-medium py-2 px-4 rounded-lg hover:dark:bg-gray-900 hover:text-white transition-colors duration-300">
          Check our services
        </Link>
      </motion.div>
    </div>
    </div>
  );
};

export default Homes;