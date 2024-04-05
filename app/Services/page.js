'use client';


import Link from "next/link";
import React from "react";

const Services = () => {
  const restaurantsData = [
    {
      id: 1,
      name: "Crop Recomendation",
      image: "./rye-5399962_640.jpg",
      href:"/Services/Crop1" // Assuming the image is in the public directory
    },
    {
      id: 2,
      name: "Crop Yield Prediction",
      image: "./rye-4269161_1280.jpg",
      href:"/Services/Crop2" // Assuming the image is in the public directory
    },
  ];

  return (
    <div className="flex items-center justify-center   min-h-screen  bg-cover bg-no-repeat bg-center " 
    style={{
        backgroundImage: "url('./wheat-fields-4439896_1280.jpg')"
      }}
    >
      <div className="flex flex-wrap justify-center">
        {restaurantsData.map((restaurant) => (
          <div
            key={restaurant.id}
            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 rounded overflow-hidden shadow-md m-6 mx-4 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-20 transition-transform transform hover:scale-105"
          >
            <div className="relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
                src={restaurant.image}
                alt={restaurant.name}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
                <Link href={restaurant.href} className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300">
                  {restaurant.name}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;