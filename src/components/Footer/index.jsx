const Footer = () => {
    return ( 
        <footer class="bg-orange-500">
      <div class="items-center w-8/12 py-20 mx-auto">
        <div class="text-3xl font-bold text-center">Get in touch</div>
        <p class="text-center text-gray-700">
          Contact us now and scale your cafeine
        </p>
        <div class="grid mt-24 md:grid-cols-4 sm:grid-cols-1">
          <div class="col-span-3">
            <div class="flex gap-2 mb-10">
              <img
                src="/img/location.png"
                class="max-w-[20px] max-h-[20px]"
                alt=""
              />
              <p>Jl. Gajah Mada No 02 Kuala Pembuang (74212)</p>
            </div>
            <div class="flex gap-2 mb-10">
              <img
                src="/img/telephone.png"
                class="max-w-[20px] max-h-[20px]"
                alt=""
              />
              <p>(+62) 853 1112</p>
            </div>
            <div class="flex gap-2 mb-10">
              <img
                src="/img/mail.png"
                class="max-w-[20px] max-h-[20px]"
                alt=""
              />
              <p>msp.juliussihotang@gmail.com</p>
            </div>
            <div class="font-bold">Follow us</div>
            <div class="flex gap-5 mt-4">
              <div class="p-2 border-2 border-gray-800 rounded-full">
                <a href=""
                  ><img src="/img/instagram.svg" class="h-[30px]" alt=""
                /></a>
              </div>
              <div class="p-2 border-2 border-gray-800 rounded-full">
                <a href=""
                  ><img src="/img/facebook.png" class="h-[30px]" alt=""
                /></a>
              </div>
              <div class="p-2 border-2 border-gray-800 rounded-full">
                <a href=""
            ><img src="/img/twitter.png" class="h-[30px]" alt=""
                /></a>
              </div>
              <div class="p-2 border-2 border-gray-800 rounded-full">
                <a href=""
                ><img src="/img/tik-tok.png" class="h-[30px]" alt=""
                /></a>
              </div>
            </div>
          </div>

          <div class="px-4 py-2">
  <label class="flex items-center gap-4 my-2 input">
    <input
      type="text"
      class="w-full px-4 py-2 border border-gray-300 rounded"
      placeholder="Name"
    />
  </label>
  <label class="flex items-center gap-2 my-2 input">
    <input
      type="text"
      class="w-full px-4 py-2 border border-gray-300 rounded"
      placeholder="Email"
    />
  </label>
  <label class="flex items-center gap-2 my-2 input">
    <input
      type="text"
      class="w-full px-4 py-2 border border-gray-300 rounded"
      placeholder="Message.."
    />
  </label>
  <button class="bg-white text-orange-400 px-4 py-2 rounded-full">Send</button>
</div>
        </div>
      </div>
      <div class="py-24 text-center text-gray-800">
        2024 - <span class="font-bold">Julius Sihotang</span> | dibimbing. All
        right reserved.
      </div>
    </footer>
     );
}
 
export default Footer;