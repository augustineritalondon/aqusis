import React from "react";
import Image from "next/image";
import { Setting2 } from "iconsax-reactjs";

const CoreServices = () => {
  return (
    <section className="relative py-16 px-6 lg:px-20 bg-[#002651] text-center lg:h-[80vh] flex flex-col items-center justify-center ">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/istockphoto-539829742-1024x1024.jpg"
          alt="Hero"
          width={1000}
          height={1000}
          className={`object-cover object-center w-full`}
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000] opacity-80 z-10"></div>

      <div className="relative z-[100] w-[95%] md:w-[80%] mx-auto">
        {/* <h2 className="text-3xl font-bold mb-10 text-white">
          Our Core Services
        </h2> */}
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-[50%]">
            <h1 className="text-white text-[1.5rem] lg:text-[2.5rem] text-left font-bold md:border-r-4  lg:py-24 md:pr-5">
              <span className="text-[#F9A825]">Our Core Job:</span> <br />
              Wellhead Equipment Installation & Maintenance Services/Procurement
            </h1>
          </div>
          <div className="w-full lg:w-[50%] ">
            <div className="bg-white w-full text-left text-lg p-5 lg:p-10 lg:w-lg mx-auto rounded-2xl border-y-4 border-[#F9A825] shadow-md">
              <h1 className="text-xl font-bold">Installation</h1>

              <ul>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Nipping up and down of XMAS tree
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Retrieval and installation of tubing hangers both dual, SRT
                  HEAD and single completed wells.
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Installation and retrieval of seal assembly, wear bushing and
                  x-bushing.
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Installation of Tubing head housing,
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Casing head housing
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Casing Seal and slip.
                </li>
                <li className="flex  gap-4 shrink-0 my-3">
                  <Setting2
                    size="22"
                    color="#F9A825"
                    className="shrink-0 mt-1"
                  />
                  Casing starter head.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
