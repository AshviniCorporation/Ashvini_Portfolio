import React from 'react';
import { ArrowRight } from 'lucide-react';
import { montserrat, outfit } from '../../fonts/font';

const Intro = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-6 sm:px-12 bg-white">
      {/* Container to limit width and align with other sections */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
        
        {/* --- LEFT COLUMN: Headline & CTA --- */}
        <div className="w-full md:w-5/12 flex flex-col items-start">
          <h2 className={`${montserrat.className} text-4xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight`}>
            Who Are We?
          </h2>
          
          <div className={`${outfit.className} mt-8 sm:mt-10`}>
            <button className="group flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <span>Explore now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <p className={`text-base sm:text-lg md:text-md text-gray-600 leading-relaxed`}>
            Ashvini Cooperation is a <span className="text-black font-semibold">forward-thinking collective</span> dedicated to crafting digital excellence. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta consequuntur, quas nihil consectetur accusantium quo. 
            Recusandae, tenetur? We build bridges between complex problems and elegant solutions.
          </p>

          <div className="mt-4 border-t border-gray-200 pt-6 flex gap-12">
            <div>
              <span className={`${montserrat.className} block text-3xl font-bold`}>3+</span>
              <span className={`${outfit.className} text-sm text-gray-500`}>Years Exp</span>
            </div>
            <div>
              <span className={`${montserrat.className} block text-3xl font-bold`}>20+</span>
              <span className={`${outfit.className} text-sm text-gray-500`}>Projects</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Intro;