import React from "react";

const OurClients = () => {
  return (
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
  );
};

export default OurClients;
