import React from "react";
import Image from "next/image";
import { checking, tools, setting } from "./SVG";

const Services = () => {
  const services = [
    {
      title:
        "Installing CCU, actuators in newly completed or worked over wells.",
      image: "/images/WhatsApp Image 2025-05-20 at 09.22.40.jpeg",
      svg: tools(),
    },
    {
      title:
        "Installation and retrieval of BPV, TWCV during second line maintenance.",
      image: "/images/WhatsApp Image 2025-05-20 at 09.22.43 (1).jpeg",
      svg: setting(),
    },
    {
      title: "Checking and pressure testing of TRCSSV SCSSSV, SSV AND SDV.",
      image: "/images/WhatsApp Image 2025-05-20 at 09.22.41.jpeg",
      svg: checking(),
    },
    {
      title: "First line maintenance operations.",
      image: "/images/WhatsApp Image 2025-05-20 at 09.22.41 (1).jpeg",
      svg: setting(),
    },
  ];

  return (
    <div className="bg-[#FEEFDD] py-16 md:py-32">
      <div className="w-[90%] md:w-[80%] mx-auto">
        <span className=" text-lg">Our Services</span>
        <h1 className="font-bold text-2xl border-db pb-3 border-b-[#F9A825]">
          Specialized Services for Critical Operations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 md:mt-20 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative border border-[#F9A825] p-5 py-10 rounded-2xl flex flex-col gap-5 overflow-hidden cursor-pointer"
            >
              {/* Background image (hidden by default, shown on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <Image
                  src={service.image} // Replace with your image path
                  alt="Service Background"
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full"
                  priority={false}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60" />
              </div>
              {/* Content */}
              <div className="relative z-10 flex flex-col items-start gap-5">
                {service.svg}
                <p className="text-lg font-bold text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
