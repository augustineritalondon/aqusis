"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "iconsax-reactjs";

const projects = [
  {
    name: "Installation of actuator and CCU panel at Omerelu",
    image: "/images/WhatsApp Image 2025-05-20 at 09.22.42 (1).jpeg",
  },
  {
    name: "OML 26 Firstline maintenance operation ",
    image: "/images/WhatsApp Image 2025-05-20 at 09.22.41 (1).jpeg",
  },
  {
    name: "Installation of CCU panel and commissioning @OML 26 Isoko Deep ",
    image: "/images/WhatsApp Image 2025-05-20 at 09.22.42 (3).jpeg",
  },
  {
    name: "NDPR  - VR Plug/Gate Valve Installation",
    image: "/images/WhatsApp Image 2025-05-20 at 09.22.43 (1).jpeg",
  },
  {
    name: "NDPR - Refurbishment Of Single String Xmas Tree",
    image: "/images/WhatsApp Image 2025-05-20 at 09.22.42 (2).jpeg",
  },
];

const CARD_WIDTH = 360; // px

const Projects = () => {
  const [current, setCurrent] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Tripled array for infinite effect
  const tripledProjects = [...projects, ...projects, ...projects];

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    // Loop logic for seamless infinite scroll
    if (current < projects.length) {
      setCurrent(current + projects.length);
      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${
          (current + projects.length) * CARD_WIDTH
        }px)`;
        void carouselRef.current.offsetWidth;
        carouselRef.current.style.transition = "";
      }
    } else if (current >= projects.length * 2) {
      setCurrent(current - projects.length);
      if (carouselRef.current) {
        carouselRef.current.style.transition = "none";
        carouselRef.current.style.transform = `translateX(-${
          (current - projects.length) * CARD_WIDTH
        }px)`;
        void carouselRef.current.offsetWidth;
        carouselRef.current.style.transition = "";
      }
    }
  };

  const prevProject = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  const nextProject = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  return (
    <section className="py-20 px-2 md:px-8 bg-black text-left">
      <div className="w-full md:w-[80%] mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-lg text-white">Our Featured Projects</h2>
          <h1 className="text-2xl md:text-3xl mb-5 text-white font-bold">
            Delivering Excellence Across Every Project
          </h1>

          <button className="p-3 rounded-tl-2xl rounded-br-2xl bg-[#F9A825] text-white cursor-pointer transition">
            Explore more projects
          </button>
        </div>
        {/* Controls at the top */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={prevProject}
            className="p-3 bg-transparent border border-[#F9A825] text-white rounded-full hover:bg-[#F9A825] transition"
            aria-label="Previous Project"
          >
            <ArrowLeft
              size="32"
              color="#F9A825"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </button>
          <button
            onClick={nextProject}
            className="p-3 bg-[#F9A825] text-white rounded-full hover:bg-[#F9A825] transition"
            aria-label="Next Project"
          >
            <ArrowRight
              size="32"
              color="#FFFFFF"
              className="w-5 h-5 md:w-8 md:h-8"
            />
          </button>
        </div>
      </div>
      {/* Carousel */}
      <div
        className="relative w-full mx-auto overflow-hidden h-[60vh] pt-20"
        // style={{ height: 320 }}
      >
        <div
          ref={carouselRef}
          className="flex"
          style={{
            width: `${tripledProjects.length * CARD_WIDTH}px`,
            height: `${tripledProjects.length * 420}px`,
            transform: `translateX(-${current * CARD_WIDTH}px)`,
            transition: isTransitioning ? "transform 0.5s" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {tripledProjects.map((project, idx) => {
            const isActive = idx === current;
            return (
              <div
                key={idx + project.name}
                className={`relative flex-shrink-0 rounded-lg shadow-lg transition-all duration-300 cursor-pointer group`}
                style={{
                  width: CARD_WIDTH,
                  height: 420,
                  border: isActive
                    ? "4px solid #F9A825" // Highlight color (green)
                    : "4px solid transparent",
                  background: isActive ? "#2226" : "#222",
                  boxShadow: isActive ? "0 8px 32px #fcd98b50" : undefined,
                  zIndex: isActive ? 10 : 1,
                  scale: isActive ? "1.05" : "0.95",
                  opacity: isActive ? 1 : 0.7,
                  overflow: "hidden",
                }}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrent(idx);
                }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover object-center rounded-lg"
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority={isActive}
                />
                {/* Stronger gradient overlay for text */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.name}
                  </h3>
                  {/* <p className="text-sm text-white opacity-80">
                    High-quality execution and timely delivery.
                  </p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
