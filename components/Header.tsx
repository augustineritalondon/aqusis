"use client";

import { HamburgerMenu } from "iconsax-reactjs";
import React, { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust 80 to the height of your hero section if needed
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`!fixed w-full top-0 z-[150] transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } min-h-[64px]`}
    >
      <div className="flex items-center justify-between py-4 w-[95%] md:w-[80%] mx-auto">
        <h1
          className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-[#2C3E50]" : "text-white"
          }`}
        >
          Aqusis Energy
        </h1>
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className={`hover:text-[#F9A825] font-medium ${
              scrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-[#F9A825] font-medium ${
              scrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`hover:text-[#F9A825] font-medium ${
              scrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            Services
          </a>
          <a
            href="#projects"
            className={`hover:text-[#F9A825] font-medium ${
              scrolled ? "text-[#2C3E50]" : "text-white"
            }`}
          >
            Projects
          </a>
        </nav>

        <button className="bg-[#F9A825] p-[.75rem] hidden md:block rounded-tl-2xl rounded-br-2xl rounded text-[#003366] px-4">
          Contact Us
        </button>

        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger>
              <button
                className="md:hidden text-[#003366] focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <HamburgerMenu
                  size="28"
                  color="CurrentColor"
                  className={`${scrolled ? "text-[#003366]" : "text-white"}`}
                />
              </button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
              <div className="md:hidden px-6 pb-4">
                <a
                  href="#"
                  className="block py-2 hover:text-[#F9A825] font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block py-2 hover:text-[#F9A825] font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="block py-2 hover:text-[#F9A825] font-medium"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="block py-2 hover:text-[#F9A825] font-medium"
                >
                  Projects
                </a>
                <button className="bg-[#F9A825] p-[.75rem] mt-5 rounded-tl-2xl rounded-br-2xl rounded text-[#003366] px-4">
                  Contact Us
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      {/* {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <a href="#" className="block py-2 hover:text-[#F9A825] font-medium">
            Home
          </a>
          <a
            href="#about"
            className="block py-2 hover:text-[#F9A825] font-medium"
          >
            About
          </a>
          <a
            href="#services"
            className="block py-2 hover:text-[#F9A825] font-medium"
          >
            Services
          </a>
          <a
            href="#projects"
            className="block py-2 hover:text-[#F9A825] font-medium"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 hover:text-[#F9A825] font-medium"
          >
            Contact
          </a>
        </div>
      )} */}
    </header>
  );
};

export default Header;
