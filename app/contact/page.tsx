import React from "react";
import Image from "next/image";
import { Sms, Call, Location } from "iconsax-reactjs";

const ContactPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-[#003366] py-32 text-center">
        <h1 className="text-4xl font-bold mb-2 text-white">Get in Touch</h1>
        <p className="text-lg text-gray-300">
          We’d love to hear from you. Reach out with any questions or inquiries!
        </p>
      </section>

      {/* Full-width Image Row */}
      <div className="flex flex-col md:flex-row items-center justify-start">
        <div className="relative w-full md:w-1/2 md:h-[75vh] overflow-hidden">
          <Image
            src="/images/WhatsApp Image 2025-05-20 at 09.22.42 (1).jpeg"
            alt="Contact Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contact Details & Form */}
        <div className="py-10 px-5 max-w-xl mx-auto flex-1 flex flex-col justify-center text-center">
          {/* <h2 className="text-3xl font-bold text-[#003666] mb-5">
            Get in Touch
          </h2> */}

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#003366] text-white font-semibold py-2 rounded-tl-2xl rounded-br-2xl hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-6 space-x-4 flex flex-col gap-5 ">
            <div className="flex items-start gap-3 justify-start">
              <Sms
                size={22}
                variant="Bold"
                className="text-[#F9A825] shrink-0"
              />
              <div className="text-left">
                <p className="font-bold text-[#003666]">Email:</p>
                <a href="mailto:info@aqusis.net" className=" underline">
                  info@aqusis.net
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-start">
              <Call
                size={22}
                variant="Bold"
                className="text-[#F9A825] shrink-0"
              />
              <div className="text-left">
                <p className="font-bold text-[#003666]">Phone:</p>
                <a href="tel:+2348033761409" className="">
                  +(234) 803 376 1409
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-start">
              <Location
                size={22}
                variant="Bold"
                className="text-[#F9A825] shrink-0"
              />
              <div className="text-left">
                <p className="font-bold text-[#003666]">Location:</p>
                <span>
                  Km 38 Airport Road, Behind Oklahoma Filling Station, Igwuruta,
                  Rivers State, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
