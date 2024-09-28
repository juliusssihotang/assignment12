import React from 'react';

const Home = () => {
  return (
    <section id="home" class="h-full py-36 md:bg-white">
      <div class="grid w-8/12 gap-20 mx-auto md:grid-cols-3 sm:grid-cols-1">
        <div class="my-auto md:col-span-2 sm:col-span-1">
          <div
            class="px-2 mb-2 font-bold text-gray-600 border-2 border-gray-600 rounded-full w-fit"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
          >
            COFFEE EXPERIENCE CENTER
          </div>
          <h1
            class="text-8xl"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
          >
            CUSTOMIZED YOUR DRINK
            <p class="font-bold text-gray-400">HANDCRAFTED BEVERAGES</p>
          </h1>
          <p
            class="mt-10"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
          >
            Discover the art of personalized indulgence with our customized
            drinks and beverages. Tailor each sip to your taste with our
            extensive selection of ingredients and flavor combinations, ensuring
            every drink is a perfect match for your unique preferences.
          </p>
          <div
            class="flex gap-3 mt-5"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1800"
          >
            <button class="border-orange-400 border-2 bg-orange-400 p-2 font-medium rounded-full hover:bg-transparent border-2 hover:border-orange-400 hover:text-orange-400 transition ease-in-out">Get Offers</button>
            <a class="my-auto underline hover:text-orange-400" href=""
              >Know more about the coffee</a
            >
          </div>
        </div>
        <div
          class="mx-auto"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1200"
        >
          <img
            src="img/img1.jpg"
            class="rounded-t-full h-[750px] w-[400px] shadow-xl object-cover xl:block sm:hidden"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Home;