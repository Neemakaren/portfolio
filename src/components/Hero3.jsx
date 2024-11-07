import React from 'react'

const Hero3 = () => {
  return (
    <div
    class="w-full h-screen bg-no-repeat bg-cover bg-center bg-[rgb(70,70,70)]">
    <header class="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-sm">
        <div class="flex-1 flex justify-between items-center mix-blend-screen">
            <a href="#" class="text-4xl text-gray-400 font-extrabold">YOGA</a>
        </div>

        <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg class="fill-current text-gray-600"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
            <nav>
                <ul class="md:flex items-center justify-between text-base text-gray-600 pt-4 md:pt-0">
                    <li><a class="md:p-4 py-3 px-0 block" href="#">Home</a></li>
                    <li><a class="md:p-4 py-3 px-0 block" href="#">Services</a></li>
                    <li><a class="md:p-4 py-3 px-0 block" href="#">About Us</a></li>
                    <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="w-[90%] mx-auto h-full flex items-center justify-between py-10">
        <div class="lg:w-fit">
            <div
                class="sm:text-6xl xs:text-5xl text-left text-white font-serif font-extrabold uppercase">
                <h1>Get</h1>
                <h1>in</h1>
                <h1 class="bg-black/30 text-white rounded-sm px-1 shadow-sm shadow-white/50">Health</h1>
                <h1>Today</h1>
            </div>
            <div class="w-full flex items-center justify-between mt-6 py-1 px-4 uppercase bg-green-500 rounded-sm">
                <h3 class="text-white text-lg font-semibold">join now</h3>
                <div class="w-[40%] flex items-center text-gray-700 text-4xl gap-0">
                    <hr class="w-full border border-gray-700 relative -right-3" />
                    <ion-icon name="chevron-forward"></ion-icon>
                </div>
            </div>
            <p class="text-md text-white bg-black/30 font-semibold mt-1 capitalize rounded-lg p-2">25% Discount on first
                month</p>
        </div>

        <div>
            <ul class="text-3xl text-white">
                <li class="flex justify-center items-center p-1 bg-black/40 rounded-full">
                    <ion-icon name="logo-facebook"></ion-icon>
                </li>
                <li class="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                    <ion-icon name="logo-instagram"></ion-icon>
                </li>
                <li class="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                    {/* </ion-icon> */}
                </li>
                <li class="flex justify-center items-center p-1 bg-black/40 rounded-full mt-2">
                    <ion-icon name="person-circle-outline"></ion-icon>
                </li>
            </ul>
        </div>
    </div>
    </div>

  )
}

export default Hero3