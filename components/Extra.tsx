import React from "react";

export default function Homepage() {
  return (
    <main className="font-sans text-[#2C3E50] bg-[#F5F5F5]">
      {/* Hero Section */}
      <section className="bg-[url('/images/hero.jpg')] bg-cover bg-center text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          100% Indigenous Oilfield Services
        </h1>
        <p className="mt-4 text-xl">
          Delivering excellence in wellhead & XMT maintenance and installation
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-[#F9A825] text-[#003366] px-6 py-3 font-semibold rounded shadow">
            Get in Touch
          </button>
          <button className="border border-white px-6 py-3 font-semibold rounded">
            View Services
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Ujiro Energy Services Ltd is a 100% indigenous oilfield servicing
          company based in Port Harcourt, Nigeria. We are committed to HSE
          excellence and delivering quality service.
        </p>
        <button className="mt-6 text-[#F9A825] font-semibold">
          Learn more about us
        </button>
      </section>

      {/* Core Services */}
      <section className="py-16 px-6 md:px-20 bg-[#ECECEC] text-center">
        <h2 className="text-3xl font-bold mb-10">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Wellhead Maintenance",
            "Xmas Tree Installation",
            "Valve Testing & Replacement",
            "Sealant Injection",
            "Workshop Services",
            "Tubing Hanger Installations",
          ].map((service) => (
            <div key={service} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm">
                Professional service delivery with safety and precision.
              </p>
            </div>
          ))}
        </div>
        <button className="mt-8 text-[#EF6C00] font-semibold">
          View all services
        </button>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why Clients Trust Us</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Total HSE Commitment",
            "Indigenous Expertise",
            "Fast & Reliable Response",
            "Proven Track Record",
          ].map((trust) => (
            <li key={trust} className="p-4 bg-[#F5F5F5] rounded shadow">
              ✅ {trust}
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Projects */}
      <section className="py-16 px-6 md:px-20 bg-[#ECECEC] text-center">
        <h2 className="text-3xl font-bold mb-10">Recent Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "NDPR – Xmas Tree Reinstallation" },
            { name: "SEEPCO – THS & Pack-off Flange" },
            { name: "OML 26 – Firstline Maintenance" },
          ].map((project) => (
            <div key={project.name} className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm">
                High-quality execution and timely delivery.
              </p>
            </div>
          ))}
        </div>
        <button className="mt-8 text-[#EF6C00] font-semibold">
          Explore more projects
        </button>
      </section>

      {/* Clients */}
      <section className="py-16 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Clients Who Trust Us</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "NDPR",
            "Moni Pulo",
            "Borr Drilling",
            "Tortech",
            "Ciscon",
            "Zamam Offshore",
          ].map((client) => (
            <span
              key={client}
              className="text-lg font-medium border px-4 py-2 rounded shadow bg-[#F5F5F5]"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* Safety Commitment */}
      <section className="py-16 px-6 md:px-20 bg-[#003366] text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Committed to Safety First</h2>
        <p className="max-w-3xl mx-auto">
          Our operations follow global health and safety standards. We
          continuously pursue the goal of no harm to personnel and the
          environment.
        </p>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-[#F9A825] text-[#003366] text-center">
        <h2 className="text-2xl font-bold">
          Looking for a reliable oilfield service partner?
        </h2>
        <button className="mt-4 bg-white px-6 py-3 rounded shadow font-semibold">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#2C3E50] text-white text-center">
        <p>
          Location: Km 38 Airport Road, Behind Oklahoma Filling Station,
          Igwuruta, Rivers State, Nigeria
        </p>
        <p className="mt-2">
          Email: info@ujiroenergy.com | Phone: +234 XXX XXX XXXX
        </p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Ujiro Energy Services Ltd. All
          rights reserved.
        </p>
      </footer>
    </main>
  );
}
