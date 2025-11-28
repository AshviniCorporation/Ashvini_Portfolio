"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { montserrat, outfit } from "../fonts/font"; // Adjust path to your font file

const teamMembers = [
  {
    name: "Ashvini Sharma",
    role: "Founder & CEO",
    bio: "Visionary leader with 15+ years in tech innovation. Driving the company towards sustainable future ventures.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:hello@example.com",
    },
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    bio: "Award-winning creative director obsessed with minimal aesthetics and user-centric design principles.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:hello@example.com",
    },
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable cloud infrastructure and AI integration.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:hello@example.com",
    },
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Marketing",
    bio: "Storyteller at heart, data analyst by trade. Connecting our brand with the global audience.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:hello@example.com",
    },
  },
];

const Team = () => {
  return (
    <section className="bg-white pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className={`${montserrat.className} text-4xl md:text-5xl font-bold text-black tracking-tight mb-6`}>
            Meet the minds behind <br />
            <span className="text-gray-400">Ashvini Corp.</span>
          </h2>
          <p className={`${outfit.className} text-lg text-gray-600 leading-relaxed`}>
            We are a diverse group of thinkers, builders, and creators. United by a 
            passion for innovation and a commitment to excellence.
          </p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="group flex flex-col">
              
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                
                {/* Optional: Overlay gradient on hover */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`${montserrat.className} text-xl font-bold text-black`}>
                      {member.name}
                    </h3>
                    <p className={`${outfit.className} text-sm font-medium text-gray-500 uppercase tracking-wide`}>
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Social Icons (Visible on Hover/Always visible on mobile) */}
                  <div className="flex gap-3 opacity-100 lg:opacity-0 lg:-translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <Link href={member.socials.linkedin} className="text-gray-400 hover:text-black transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link href={member.socials.twitter} className="text-gray-400 hover:text-black transition-colors">
                      <Twitter className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <p className={`${outfit.className} mt-3 text-sm text-gray-600 leading-relaxed line-clamp-3`}>
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* --- JOIN US CTA --- */}
        <div className="mt-24 border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className={`${montserrat.className} text-2xl font-bold`}>
              Interested in joining us?
            </h3>
            <p className={`${outfit.className} text-gray-500 mt-1`}>
              We are always looking for exceptional talent.
            </p>
          </div>
          <Link 
            href="/careers" 
            className={`${outfit.className} group flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:bg-gray-800`}
          >
            SEE OPEN POSITIONS
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Team;