import React, {useState} from 'react';
import { navigationLinks } from './menuList';

const Navbar = () => {

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav class="fixed top-0 left-0 z-50 w-full">
      <div id='mobile' class={`w-screen h-screen z-50 bg-orange-400 absolute p-4 m-0 items-center grid-cols-1 transition-transform duration-300 ease-in-out text-center ${isMobileNavOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div class="flex-none ml-2 text-2xl font-bold">
          <span class="text-wgite">Cafe</span>in Rush
        </div>
        <div>
          <ul class="grid mt-4 text-white gap-5">
            {navigationLinks.map((link) => (
              <li key={link.id} class="font-medium hover:font-semibold hover:text-orange-200" onClick={handleMobileNavToggle}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="px-4 py-4 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-500"
            onClick={handleMobileNavToggle}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div id='desktop'
        class="flex items-center justify-between w-7/12 p-2 mx-auto mt-4 border-2 rounded-full shadow-xl bg-white/60 backdrop-blur-md"
      >
        <div class="flex-none ml-2 text-2xl font-bold">
          <span class="text-orange-400">Cafe</span>in Rush
        </div>
        <div class="px-40 xl:block md:hidden sm:hidden">
          <ul class="flex gap-8 text-gray-600">
            {navigationLinks.map((link) => (
              <li key={link.id} class="font-medium hover:font-semibold hover:text-orange-400">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div class="">
          <input
            type="text"
            placeholder="Search"
            class="px-3 mr-2 rounded-full bg-gray-100/70 xl:block lg:hidden md:hidden sm:hidden"
          />
          <button
              className="flex items-center justify-center w-8 h-8 transition duration-300 ease-in-out bg-orange-400 rounded-full hover:bg-orange-500 md:flex xl:hidden"
              onClick={handleMobileNavToggle}
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;