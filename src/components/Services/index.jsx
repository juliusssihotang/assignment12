import React from 'react';
import ServicesList from './ServicesList';

const services = [
  {
    id: 1,
    name: 'Fast and Hot',
    image: 'img/services1.png',
    description:
      'Get ready to ignite your senses with Fast and Hot! Whether youre racing against the clock or craving something sizzling, weve got you covered.',
  },
  {
    id: 2,
    name: 'Fresh Beans',
    image: 'img/services2.png',
    description:
      'Our fresh beans are meticulously selected for their rich, vibrant flavors and aromatic profiles, ensuring that each cup delivers a bold and invigorating experience.',
  },
  {
    id: 3,
    name: 'Expert Manchines',
    image: 'img/services3.png',
    description:
      'Unleash the power of precision with our expert machine, engineered to redefine excellence in performance and reliability.',
  },
  {
    id: 4,
    name: 'Endless Serving',
    image: 'img/services4.png',
    description:
      'Experience ultimate convenience with our 24-hour service, designed to fit seamlessly into your busy lifestyle.',
  },
  {
    id: 5,
    name: 'Part of Green',
    image: 'img/services5.png',
    description:
      'Embrace eco-friendly practices that prioritize the health of our planet, from reducing waste and conserving resources to supporting renewable energy and sustainable products.',
  },
  {
    id: 6,
    name: 'Comfy Place',
    image: 'img/services6.png',
    description:
      'Step into a haven of relaxation and comfort with our cozy, inviting space designed just for you.',
  },
];

const Services = () => {
  return (
    <section id="services" name="services" class="w-8/12 py-20 mx-auto">
      <div
        class="text-center"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
      >
        <div class="mx-auto text-5xl font-bold">
          OUR BEST <span class="text-orange-400">SERVICES</span>
        </div>
        <p class="text-gray-500">We serve and act your daily cafeine needs.</p>
      </div>

      <ServicesList services={services} />
    </section>
  );
};

export default Services;