import React from "react";
// import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-[#003366]  py-10">
      <div className="w-[95%] md:w-[80%] mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-20">
        {/* Logo and Company */}
        <div className="flex flex-col md:items-start md:w-[30%]">
          {/* <Image
            src="/logo.png"
            alt="Ujiro Energy Logo"
            width={120}
            height={40}
            className="mb-4"
          /> */}
          <h1 className="text-3xl font-bold text-[#003366]">AQUSIS</h1>
          <p className="mt-3 text-left">
            Aqusis Energy Services Ltd is a 100% indigenous oilfield servicing
            company based in Port Harcourt, Nigeria. We are committed to HSE
            excellence and delivering quality service.
          </p>
        </div>
        {/* Navigation */}
        <div className="md:w-[20%]">
          <h4 className="font-bold text-lg mb-2">Quick Links</h4>
          <ul>
            <li className="my-2 cursor-pointer">
              <Link href="/" className="hover:underline text-[#003366]">
                Home
              </Link>
            </li>
            <li className="my-2 cursor-pointer">
              <Link href="/about" className="hover:underline text-[#003366]">
                About
              </Link>
            </li>
            <li className="my-2 cursor-pointer">
              <Link href="/about" className="hover:underline text-[#003366]">
                Services
              </Link>
            </li>
            <li className="my-2 cursor-pointer">
              <Link href="/about" className="hover:underline text-[#003366]">
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-[25%]">
          <h4 className="font-bold mb-2 text-lg">Services</h4>
          <ul>
            <li className="my-2">Installation of well head</li>
            <li className="my-2">Maintenance Service and workshop repair</li>
            <li className="my-2">Cold cutting services</li>
            <li className="my-2">Drilling equipment rentals.</li>
            <li className="my-2">Self-loaders and forklift for operations.</li>
          </ul>
        </div>
        <div className="md:w-[25%]">
          <h4 className="font-bold mb-2 text-lg">Contact</h4>
          <ul>
            <li className="my-2">
              <a
                href="mailto:info@aqusis.net"
                className="hover:underline text-[#003366]"
              >
                info@aqusis.net
              </a>
            </li>
            <li className="my-2">
              <a
                href="tel:+234XXXXXXXXXX"
                className="hover:underline text-[#003366]"
              >
                +(234) 803 376 1409
              </a>
            </li>
            <li className="my-2">
              <span className="text-[#003366]  block mt-2">
                Km 38 Airport Road, Behind Oklahoma Filling Station, Igwuruta,
                Rivers State, Nigeria
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center"></div> */}
      </div>

      <hr className=" border-gray-300 my-10 w-[80%] mx-auto" />
      <p className="text-sm text-gray-800 text-center px-8">
        &copy; {new Date().getFullYear()} Aqusis Energy Services Ltd. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
