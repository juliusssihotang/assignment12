import React from 'react';
import menuItems from './MenuItems';

const Menu = () => {
  return (
    <section id="menu" className="py-24">
      <div className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2
            className="text-2xl font-bold tracking-tight text-gray-900"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
          >
            We serve the best than your country can offers
          </h2>

          <ul className="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {menuItems.map((menuItem, index) => (
              <li
                key={menuItem.id}
                className="relative group"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration={index * 200 + 1000}
              >
                <div className="w-full bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none lg:h-80">
                  <img
                    src={menuItem.image}
                    alt={menuItem.name}
                    className="object-cover object-center w-full h-full rounded-md lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0"></span>
                        {menuItem.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{menuItem.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{menuItem.price}</p>
                </div>
                <div>
                  <button className="w-full p-0 p-2 m-2 font-medium transition ease-in-out bg-orange-400 border-2 border-orange-400 rounded-full hover:bg-transparent!important hover:border-orange-400!important hover:text-orange-400!important">Order</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;