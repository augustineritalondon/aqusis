import React from "react";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[50vh] bg-center bg-cover"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">About Us</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            We are committed to excellence, innovation, and delivering value to
            our clients.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="md:w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* <div className="w-full md:w-lg">
            <Image
              src={WHO_WE_ARE_IMAGE}
              alt="Who We Are"
              width={400}
              height={400}
              className="rounded-xl object-cover shadow-lg w-full h-full"
            />
          </div> */}
          <div className="flex-1">
            <h2 className="text-3xl text-[#003366] font-semibold mb-2 text-center">
              Who We Are
            </h2>
            <p className=" text-center tracking-wide leading-loose">
              Aqusis Energy Services Limited is a fully indigenous oilfield
              servicing company strategically located in Port Harcourt, Rivers
              State, Nigeria. With a commitment to operational excellence and
              sustainable growth, Aqusis Energy provides high-quality, reliable,
              and efficient services to Nigeria’s oil and gas industry. Our
              facility spans over 5,345 square meters, offering us ample space
              to manage complex logistics, store and maintain equipment, and
              deliver on-site services seamlessly. We are dedicated to
              supporting local content initiatives and building capacity through
              innovation, training, and employment of highly skilled Nigerian
              professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full max-w-md relative">
            <div className="bg-[#003366] w-md h-[18rem] -bottom-5 -right-5 absolute -z-10"></div>
            <Image
              src="/images/WhatsApp Image 2025-05-20 at 09.22.41.jpeg"
              alt="Vision"
              width={400}
              height={400}
              className="object-cover shadow-lg w-full h-[18rem] "
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl text-[#003366] font-semibold mb-2">
              Vision
            </h3>
            <p className="tracking-wide leading-loose">
              Aqusis ENERGY SERVICES LIMITED aspires to be a world leader in oil
              and gas services, focusing on personnel, facility, customer
              relation development, Integrity, innovation and Accuracy. <br />{" "}
              Aqusis ENERGY SERVICES LIMITED will endeavour to meet customer
              requirements to specification; our commitment is to total quality
              service and product delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h3 className="text-2xl text-[#003366] font-semibold mb-2 text-right">
              Mission
            </h3>
            <p className="text-right tracking-wide leading-loose">
               Total adherence to global health and safety standards is our key
              motivation while we intend to build on excellent team work and
              effective communication in achieving our set goals
            </p>
          </div>
          <div className="w-full max-w-md relative">
            <div className="bg-[#F9A825] w-md h-[18rem] -bottom-5 -right-5 absolute -z-10"></div>
            <Image
              src="/images/WhatsApp Image 2025-05-20 at 09.22.40.jpeg"
              alt="Vision"
              width={400}
              height={400}
              className="object-cover shadow-lg w-full h-[18rem] "
            />
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
