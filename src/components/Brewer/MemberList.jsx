import React from 'react';
import MemberList from './MemberList';

const Brewer = () => {
  return (
    <section id="brewer" class="py-36">
      <div
        class="text-center mb-14"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
      >
        <div class="mx-auto text-5xl font-bold">
          Meet Our <span class="text-orange-400">Profesionals</span>
        </div>
        <p class="text-gray-500">When idealism met skills</p>
      </div>
      <MemberList />
    </section>
  );
};

export default Brewer;