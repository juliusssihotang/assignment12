import React from 'react';

const ServicesList = ({ services }) => {
  return (
    <div class="grid gap-10 lg:grid-cols-3 md:grid-cols-1">
      {services.map((service, index) => (
        <div
          key={service.id}
          class="p-8"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration={index * 200 + 800}
        >
          <img src={service.image} class="py-4 max-h-24" alt={service.name} />
          <div class="text-3xl font-bold">{service.name}</div>
          <p class="text-gray-500">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;