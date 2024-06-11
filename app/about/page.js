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
        <ul className="list-disc list-inside space-y-4 text-left">
          {[
            "At FarmHelp, we harness the power of machine learning to provide accurate crop yield predictions and tailored recommendations to farmers. Our advanced AI models analyze data to offer insights that help maximize agricultural productivity.",
            "By taking input on soil type, weather conditions, crop variety, and other factors, FarmHelp provides personalized crop suggestions that align with the unique needs of each farm. This ensures farmers can make informed decisions to optimize their yields.",
            "Designed with simplicity in mind, FarmHelp's intuitive interface makes it easy for farmers of all tech skill levels to navigate and use our tools. Input your farm data, and receive clear, actionable advice in just a few clicks.",
            "FarmHelp promotes sustainable farming by recommending practices that enhance soil health and reduce environmental impact. Our platform encourages efficient resource use, contributing to long-term agricultural sustainability.",
            "FarmHelp offers tailored insights for both seasoned farmers and newcomers, making advanced agricultural knowledge accessible to all."
          ].map((text, index) => (
            <motion.li
              key={index}
              variants={contentVariants}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="mb-2"
            >
              {text}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
