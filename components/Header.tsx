"use client";

import { HamburgerMenu } from "iconsax-reactjs";
import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { usePathname } from "next/navigation";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", section: "" },
  { href: "/about", label: "About", section: "about" },
  { href: "/services", label: "Services", section: "services" },
  { href: "/projects", label: "Projects", section: "projects" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  // const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Section detection for hash links
      const sections = ["", "about", "services", "projects"];
      let found = "";
      for (const section of sections) {
        const el = section ? document.getElementById(section) : document.body;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            found = section;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              scroll={false}
              className={`hover:text-[#F9A825] font-medium ${
                scrolled ? "text-[#2C3E50]" : "text-white"
              } ${activeSection === link.section ? "text-[#F9A825]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="bg-[#F9A825] p-[.75rem] hidden cursor-pointer md:block rounded-tl-2xl rounded-br-2xl rounded text-[#003366] px-4"
          onClick={() => router.push("/contact")}
        >
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
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    scroll={false}
                    className={`block py-2 hover:text-[#F9A825] font-medium ${
                      activeSection === link.section
                        ? "text-[#F9A825] underline"
                        : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  className="bg-[#F9A825] p-[.75rem] mt-5 cursor-pointer rounded-tl-2xl rounded-br-2xl rounded text-[#003366] px-4"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
