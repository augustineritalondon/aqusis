import React from "react";

const CTABanner = () => {
  return (
    <section
      className="relative p-8 md:p-12 w-[90%] md:w-[80%] lg:w-[60%] rounded-3xl mx-auto my-32 text-[#003366] text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% 0%, #FFD54F 40%, #F9A825 100%)",
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[3rem] font-bold drop-shadow-lg leading-tight">
          Looking for a reliable wellhead <br className="hidden 2xl:block" />
          service partner?
        </h2>
        <button className="mt-4 bg-white px-8 cursor-pointer py-3 rounded-tl-2xl rounded-br-2xl shadow font-semibold  transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTABanner;
