import React from 'react'
import Image from 'next/image'
import { outfit, montserrat } from '@/app/fonts/font'

const LatestTech = () => {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      {/* Container to center content and limit max width */}
      <div className={`${montserrat.className} max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20`}>
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Our Development <span className="text-purple-500">Platforms</span>
          </h3>
          <p className={`${outfit.className} text-lg md:text-xl text-gray-600 leading-relaxed`}>
            We strive to stay up to date by implementing the latest frameworks and technologies to build scalable and efficient solutions.
          </p>
          
          {/* Optional: Add a call to action or decoration line */}
          <div className="h-1.5 w-24 bg-purple-500 rounded-full mx-auto lg:mx-0 mt-4"></div>
        </div>

        {/* Image Content */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/images/latest_tech.jpg"
              height={500}
              width={700}
              alt="Latest Technology and Development Platforms"
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default LatestTech