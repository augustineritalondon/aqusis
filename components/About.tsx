import React from "react";
import Image from "next/image";
import { lines } from "./SVG";
import { ArrowRight } from "iconsax-reactjs";

const About = () => {
  return (
    <div className="relative my-8 mb-20 flex ">
      <section className=" py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center w-[95%] md:w-[80%] mx-auto relative z-[50]">
        <div className="flex-1 text-left">
          <h2 className="text-3xl font-bold mb-4 text-[#003366]">Who We Are</h2>
          <p className="max-w-3xl mx-auto text-lg ">
            Aqusis Energy Services Ltd is a 100% indigenous oilfield servicing
            company based in Port Harcourt, Nigeria. We are committed to HSE
            excellence and delivering quality service.
          </p>
          <button className="mt-6 bg-[#F9A825] flex items-center gap-2 p-3 px-4 rounded-tl-2xl rounded-br-2xl font-semibold">
            Learn more
            <ArrowRight size="20" color="#003366" />
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center w-full md:w-[600px] overflow-hidden rounded rounded-tl-[8rem] rounded-br-[8rem]">
          <Image
            src="/istockphoto-2215499990-1024x1024.jpg"
            alt="image"
            width={500}
            height={500}
            className="object-cover object-center w-full  "
          />
        </div>
      </section>
      <div className="absolute right-0 opacity-50">{lines()}</div>
    </div>
  );
};

export default About;
