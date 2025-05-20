import React from "react";
import Image from "next/image";

const clients = [
  { name: "NDPR", logo: "/clients/ndpr.png" },
  { name: "Moni Pulo", logo: "/clients/monipulo.png" },
  { name: "Borr Drilling", logo: "/clients/borrdrilling.png" },
  { name: "Tortech", logo: "/clients/tortech.png" },
  { name: "Ciscon", logo: "/clients/ciscon.png" },
  { name: "Zamam Offshore", logo: "/clients/zamamoffshore.png" },
];

const OurClients = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-12">Clients Who Trust Us</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 w-full md:w-6xl mx-auto">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-center bg-[#F5F5F5] rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            title={client.name}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={120}
              height={64}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
              style={{ maxHeight: "4rem", width: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
