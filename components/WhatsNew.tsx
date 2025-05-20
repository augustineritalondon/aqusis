import React from "react";
import { lines } from "./SVG";
import Image from "next/image";

const WhatsNew = () => {
  return (
    <div className="relative">
      <div className="relative z-[50] py-16 md:py-32 w-[90%] md:w-[80%] mx-auto">
        <span className="text-left text-lg">What is new with Aqusis</span>
        <h1 className="text-3xl font-bold mb-4 text-left">
          Discover the Latest Innovations and Updates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-10 md:mt-20">
          <div className="bg-white p-5 lg:p-10 overflow-hidden border-t-2 text-left border-[#F9A825] shadow-lg rounded-2xl flex flex-col justify-between">
            <div className="mb-2">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                SEALANT INJECTION OPERTION FOR ANNULUS COMMUNICATION.
              </h2>
              <p>
                Our sealant injection service stops annulus pressure
                communication and restores well integrity by sealing internal
                leak paths.
              </p>
            </div>

            <div>
              <Image
                src="/istockphoto-1164814583-2048x2048.jpg"
                alt="image"
                width={1000}
                height={1000}
                className="object-cover object-center w-full  "
              />
            </div>
          </div>
          <div className="bg-white p-5 lg:p-10 border-t-2 text-left border-[#F9A825] shadow-lg rounded-2xl flex flex-col justify-between overflow-hidden">
            <div className="mb-2">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                SDHSV CONTROL LINE LEAK REPAIRS.
              </h2>
              <p>
                Our DHSV control line leak repair service ensures reliable valve
                functionality by identifying and sealing leaks in the hydraulic
                control lines.
              </p>
            </div>
            <div>
              <Image
                src="/istockphoto-1164814583-2048x2048.jpg"
                alt="image"
                width={1000}
                height={1000}
                className="object-cover object-center w-full  "
              />
            </div>
          </div>
          <div className="bg-[#9A825] p-5 lg:p-10 border-t-2 text-left border-[#F9A825] shadow-lg rounded-2xl flex flex-col justify-between overflow-hidden">
            <div className="mb-2">
              <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
                BORE DRILLING LUBRICATOR(STOCK MASTER VALVES)
              </h2>
              <p>
                Our bore drilling lubricator service enables safe pressure
                control during well interventions, allowing efficient
                installation or retrieval of stock master valves.
              </p>
            </div>
            <div>
              <Image
                src="/istockphoto-1164814583-2048x2048.jpg"
                alt="image"
                width={1000}
                height={1000}
                className="object-cover object-center w-full  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -scale-x-100">{lines()}</div>
    </div>
  );
};

export default WhatsNew;
