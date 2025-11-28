import Image from 'next/image';
import { montserrat, outfit } from "../fonts/font";

const logos = [
  { src: '/images/logo1.jpg', alt: 'Customer 1' },
  { src: '/images/logo2.jpg', alt: 'Customer 2' },
  { src: '/images/logo3.jpg', alt: 'Customer 3' },
  { src: '/images/logo4.jpg', alt: 'Customer 4' },
  { src: '/images/logo5.jpg', alt: 'Customer 5' },
  { src: '/images/logo6.jpg', alt: 'Customer 6' },
  { src: '/images/logo7.jpg', alt: 'Customer 7' },
  { src: '/images/logo8.jpg', alt: 'Customer 8' },
];

const extendedLogos = [...logos, ...logos]; // duplicate for seamless loop

export default function TrustedBy() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className={`${montserrat.className} text-3xl text-center font-bold text-purple-700`}>
            Our Valued Clients
        </h2>
        <h4 className={`text-center text-lg text-gray-600 font-thin mb-12 ${outfit.className}`}>
          A glimpse of the incredible companies we’ve worked with.
        </h4>

        <div
          className="relative group overflow-hidden">
          {/* One long track that repeats itself */}
          <div className="flex animate-marquee will-change-transform">
            {extendedLogos.map((logo, index) => (
              <div
                key={index}
                className="mx-8 flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
