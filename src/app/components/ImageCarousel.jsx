"use client";

import { useState } from "react";
import Image from "next/image";
import carousel1 from "../../../public/images/carousel-1.png";
import carousel2 from "../../../public/images/carousel-2.png";

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [carousel1, carousel2];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full h-full lg:w-1/2 flex items-center justify-center">
      <div
        className="absolute left-3 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900 hover:bg-indigo-700 bg-opacity-90 transition duration-300 cursor-pointer"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div
        className="absolute right-3 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-900 hover:bg-indigo-700 bg-opacity-90 transition duration-300 cursor-pointer"
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <Image
        src={images[currentImageIndex]}
        alt="Artificial render of shelter"
        className="w-full h-auto object-cover"
        placeholder="blur"
      />
      <div className="absolute bottom-3 flex items-center justify-center w-full space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentImageIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
