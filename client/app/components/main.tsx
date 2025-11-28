import React from 'react';
import { Flower } from 'lucide-react';
import { montserrat, outfit } from '../fonts/font';

const Main = () => {
  const backgroundImage = "/images/ashvini_main.jpg";

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-2 sm:p-4 mt-20">
      <div
        className="relative flex flex-col items-center justify-start sm:justify-center w-full sm:w-[95%] lg:w-[85%] h-[85vh] sm:h-[90vh] md:h-[95vh] bg-cover bg-center rounded-2xl overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

        <div className="relative z-10 w-full flex flex-col items-center pt-20 sm:pt-0 text-white px-4">
          
          <div className="mb-6 sm:mb-8">

            <Flower className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="w-full flex flex-col items-center">
            <h3 className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full text-center leading-tight`}>
              Seamless Solutions.
            </h3>

            <div className="text-center w-full flex justify-center">
              <p className={`my-4 sm:my-6 w-[95%] sm:w-[80%] lg:w-[60%] text-sm sm:text-base md:text-lg opacity-90`}>
                Our team brings extensive expertise in full-stack web development, with a strong focus on building intuitive applications that address real-world challenges.
              </p>
            </div>
          </div>

          <div className={`${outfit.className} mt-10 sm:mt-16 lg:mt-24`}>
            <button className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base rounded-full hover:bg-gray-200 transition-colors duration-300">
              CONNECT WITH US
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;