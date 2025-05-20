"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "iconsax-reactjs";

const images = [
  "/istockphoto-2215499990-1024x1024.jpg",
  "/istockphoto-539829742-1024x1024.jpg",
  "/istockphoto-1164814583-2048x2048.jpg",
];

export default function Homepage() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 10); // fade out duration
    }, 10000); // image display duration
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="font-sans text-[#2C3E50] bg-[#F5F5F5]">
      <section className="relative h-[60vh] lg:h-[90vh] text-white py-20 px-4 md:py-24 text-left overflow-hidden flex items-center bg-white">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <Image
            src={images[current]}
            alt="Hero"
            fill
            className={`object-cover object-center transition-opacity duration-10 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-75 z-10"></div>
        {/* Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-start justify-center px-2 md:w-[80%] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-left">
            100% Indigenous Oilfield Services
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl lg:w-2xl text-left">
            Delivering excellence in wellhead & XMT maintenance and installation
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start justify-center">
            <button className="bg-[#F9A825] cursor-pointer flex items-center gap-2 rounded-tl-2xl rounded-br-2xl text-[#003366] px-6 py-3 font-semibold rounded shadow w-full sm:w-auto">
              Get in Touch
              <ArrowRight size="20" color="#003366" />
            </button>
            {/* <button className="border rounded-tl-2xl rounded-br-2xl border-white px-6 py-3 font-semibold rounded w-full sm:w-auto">
              View Services
            </button> */}
          </div>
        </div>
        {/* Curved SVG at the bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full z-30 border-b-0"
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C480,200 960,0 1440,80 L1440,150 L0,150 Z"
            fill="#FFFFFF"
          />
          <path
            d="M0,80 C480,200 960,0 1440,80"
            fill="none"
            stroke="#F9A825"
            strokeWidth="6"
          />
        </svg>
      </section>
    </main>
  );
}
