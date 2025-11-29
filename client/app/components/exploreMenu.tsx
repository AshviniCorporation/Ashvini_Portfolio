"use client";
import Link from "next/link";
import { MoveRight, CornerDownRight } from "lucide-react";
import { montserrat, outfit } from "../fonts/font"; // Adjust path as needed

const menuItems = [
  { prompt: "Want to know more about us?", label: "About", href: "/about" },
  { prompt: "Meet the minds behind the magic", label: "Team Members", href: "/team" },
  { prompt: "Read our latest insights and stories", label: "Blogs", href: "/blogs" },
  { prompt: "Ready to learn something new?", label: "Courses", href: "/courses" },
  { prompt: "What do others say about us?", label: "Testimonials", href: "/testimonials" },
  { prompt: "Have some questions?", label: "FAQ", href: "/faq" },
];

const ExploreMenu = () => {
  return (
    <section className="bg-white py-8 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-8 border-b border-black pb-4">
          <h2 className={`${montserrat.className} text-sm font-bold uppercase tracking-widest text-gray-400`}>
            Explore Ashvini Corp.
          </h2>
        </div>

        <div className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`group relative flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 py-4 transition-all duration-500 hover:px-4 hover:bg-gray-50`}
            >
              {/* Left Side: The Question/Prompt */}
              <div className="flex items-center gap-4">
                <span className={`
                  hidden md:block opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0
                `}>
                  <CornerDownRight className="w-5 h-5" />
                </span>
                
                <h3 className={`${montserrat.className} text-xl font-medium transition-colors`}>
                  {item.prompt}
                </h3>
              </div>

              {/* Right Side: The Destination Label */}
              <div className="mt-4 md:mt-0 flex items-center gap-3">
                <span className={`${outfit.className} text-sm font-bold uppercase tracking-wide`}>
                  {item.label}
                </span>
                
                {/* Animated Arrow */}
                <div className="relative overflow-hidden w-6 h-6 flex items-center justify-center">
                  <MoveRight className={`absolute w-5 h-5 transition-all duration-300 -translate-x-[150%] group-hover:translate-x-0`} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreMenu;