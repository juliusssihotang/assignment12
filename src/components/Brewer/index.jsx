import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Fandhi Albhino',
    role: 'Senior Brewer',
    image: 'img/person1.jpg',
    socialMedia: [
      { platform: 'Instagram', link: 'https://instagram.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
  {
    id: 2,
    name: 'Jacob Ghondrong',
    role: 'Senior Baker',
    image: 'img/person2.jpg',
    socialMedia: [
      { platform: 'Instagram', link: 'https://instagram.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
  {
    id: 3,
    name: 'Alice Paint',
    role: 'Flavour Expert',
    image: 'img/person3.jpg',
    socialMedia: [
      { platform: 'Instagram', link: 'https://instagram.com' },
      { platform: 'LinkedIn', link: 'https://linkedin.com' },
    ],
  },
];

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
      <ul class="grid w-8/12 gap-20 mx-auto xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        {teamMembers.map((member) => (
          <li
            key={member.id}
            class="items-center p-5 text-center transition-transform scale-95 border-2 rounded-xl hover:scale-100"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          >
            <img
              src={member.image}
              alt=""
              class="w-[300px] h-[300px] mx-auto rounded-full object-cover"
            />
            <div class="mt-5 text-2xl font-bold">{member.name}</div>
            <p class="text-gray-400">{member.role}</p>
            <div class="flex items-center justify-center mt-5">
              {member.socialMedia.map((social) => (
                <a href={social.link} key={social.platform}>
                  <img src={`img/${social.platform.toLowerCase()}.svg`} alt="" class="w-6 h-6" />
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Brewer;