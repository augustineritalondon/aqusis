import React from "react";
import Services from "@/components/Services";
import WhatsNew from "@/components/WhatsNew";
import CTABanner from "@/components/CTABanner";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 py-16 rounded-xl max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </section>

      <Services />

      <WhatsNew />

      <CTABanner />
    </div>
  );
};

export default page;
