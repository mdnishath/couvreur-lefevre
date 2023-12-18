import Container from "@/components/Container";
import { services } from "@/data/services";
import React from "react";

const Services = () => {
  return (
    <section className="py-10 bg-primary px-3 md:px-0">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center md:w-[800px] mx-auto">
          Your First-Class Local Roofing Contractors Serving Marines
        </h2>
        <div className="mt-5 grid md:grid-cols-3 gap-4">
          {services.map(({ title, description }) => (
            <div key={title} className="bg-white rounded-lg shadow-lg p-5">
              <h4 className="text-2xl font-bold">{title}</h4>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
