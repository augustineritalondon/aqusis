"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sms, Call, Location } from "iconsax-reactjs";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xvgandje");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Clear form after successful submission
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      toast("Message submitted successfully!");
    }
  }, [state.succeeded]);

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
          {/* Success message */}

          {/* Contact Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              rows={4}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-[#003366] cursor-pointer text-white font-semibold py-2 rounded-tl-2xl rounded-br-2xl  transition"
            >
              {state.submitting ? "Loading..." : "Send Message"}
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
