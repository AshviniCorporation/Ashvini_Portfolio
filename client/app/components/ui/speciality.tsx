import React from 'react';
import { PencilRuler, Code2, Sparkles } from 'lucide-react';
import { montserrat, outfit } from '../../fonts/font';

const Speciality = () => {
  const backgroundImage = "/images/speciality.jpg";

  return (
    <section className="w-full px-6 sm:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 items-stretch">

        {/* ---------------- LEFT SIDE (Combined Card) ---------------- */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row h-full rounded-3xl overflow-hidden">

            {/* 1. Black Experience Card */}
            <div className="w-full sm:w-1/2 bg-black text-white p-8 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 rounded-full blur-3xl opacity-20 -mr-10 -mt-10 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4 text-gray-400">
                  <Sparkles className="w-4 h-4" />
                  <span className={`${outfit.className} uppercase tracking-widest text-[10px] font-semibold`}>
                    Premium
                  </span>
                </div>
                <h4 className={`${montserrat.className} text-2xl font-bold leading-tight mb-4`}>
                  First Class Experience.
                </h4>
              </div>

              <div className="relative z-10">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Elevate your online presence with a website that blends cutting-edge design and functionality.
                </p>
              </div>
            </div>

            {/* 2. Background Image Card */}
            <div
              className="w-full sm:w-1/2 bg-cover bg-center min-h-[350px]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="w-full h-full bg-black/10 transition-colors hover:bg-transparent duration-500"></div>
            </div>

          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-4 h-auto">

          {/* 3. Research Card */}
          <div className="w-full sm:w-1/2 bg-gray-300 hover:bg-white border border-transparent hover:border-gray-200 p-8 rounded-3xl transition-all duration-300 h-full min-h-[350px] flex flex-col">
            <div className="mb-auto">
              <div className="mb-6 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                <PencilRuler className="w-5 h-5 text-black" />
              </div>
              <h4 className={`${montserrat.className} text-xl font-bold mb-3`}>
                Research & Design
              </h4>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-4">
              We start by understanding your core needs. Our design phase focuses on user-centric aesthetics.
            </p>
          </div>

          {/* 4. Coding Card */}
          <div className="w-full sm:w-1/2 bg-gray-300 hover:bg-white border border-transparent hover:border-gray-200 p-8 rounded-3xl transition-all duration-300 h-full min-h-[350px] flex flex-col">
            <div className="mb-auto">
              <div className="mb-6 bg-white w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                <Code2 className="w-5 h-5 text-black" />
              </div>
              <h4 className={`${montserrat.className} text-xl font-bold mb-3`}>
                Coding & Deployment
              </h4>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-4">
              Our developers write clean, scalable code using modern stacks to ensure smooth deployment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Speciality;
