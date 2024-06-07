// components/About.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const contentVariants = {
    hidden: { y: -70, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center bg-green-900"
      style={{
        backgroundImage: "url('./food-background.jpg')"
      }}
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="bg-green-300 bg-opacity-75 p-8 w-full max-w-screen-md rounded-lg text-center text-green-900 font-mono font-bold"
      >
        {[
          "What we do at FoodCoaster?",
          "We are the only food delivery service at NIT Rourkela campus.",
          "All the eateries in the NITR campus will be registered under us.",
          "Through our website, we will be accepting orders from the students and staff residing in NITR.",
          "Each one of them will receive orders through the website and the food will be delivered by one of their workers to the designated location.",
          "In case of the unavailability of workers for the delivery, we would provide the same for the job with some additional charges.",
          "In case of the unavailability of workers for the delivery, we would provide the same for the job with some additional charges.",
          "This website acts as a bridge between the students and the vendors."
        ].map((text, index) => (
          <motion.p
            key={index}
            variants={contentVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="mb-6"
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
