import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  ArrowUpRight, 
  Mail, 
} from 'lucide-react';

const FONTS = {
  heading: "font-sans font-bold", // placeholder for montserrat
  mono: "font-mono",              // placeholder for googlesanscode
  body: "font-sans",              // placeholder for outfit
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // The specific purple from your first example
  const brandPurple = "bg-[#B65FCF]";

  return (
    <footer className="w-full bg-white pt-12 relative">
      {/* Main Container: Slate-950 background with the rounded-t look from both examples */}
      <div className="bg-black text-slate-100 w-full rounded-t-[2.5rem] sm:rounded-t-[4rem] px-6 sm:px-10 lg:px-16 pt-16 flex flex-col overflow-hidden relative">
        
        {/* --- SECTION 1: THE HYBRID CTA PILL --- */}
        {/* Structure from Ex 1 (Floating Pill), Aesthetic from Ex 2 (Big text, White button) */}
        <div className={`relative z-20 ${brandPurple} rounded-3xl md:rounded-[3rem] px-8 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl mx-auto w-full max-w-7xl transform -translate-y-4 hover:-translate-y-5 transition-transform duration-500 ease-out`}>
          
          <div className="max-w-2xl">
            <p className={`${FONTS.mono} text-pink-200 text-xs sm:text-sm uppercase tracking-[0.25em] m-4`}>
              Start a Project
            </p>
            <h3 className={`${FONTS.heading} text-2xl sm:text-2xl lg:text-4xl leading-tight text-white`}>
              Let&apos;s create something <br className="hidden sm:block" />
              <span className="opacity-90">extraordinary together.</span>
            </h3>
          </div>

          <button className="group bg-white text-[#961767] px-8 m-3 rounded-full inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 py-5">
            <span className={`${FONTS.heading} text-lg`}>Contact Us</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* --- SECTION 2: LINKS & INFO GRID --- */}
        {/* Layout from Ex 1 (Columns), Styling from Ex 2 (Clean, mono headers) */}
        <div className="relative z-20 mt-10 grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-10">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <h4 className={`${FONTS.heading} text-2xl`}>Ashvini.</h4>
            <p className={`${FONTS.body} text-slate-300 text-base leading-relaxed max-w-sm`}>
              Crafting premium digital experiences that blend aesthetics, strategy, and performance. Seamless solutions for a complex world.
            </p>
            
            <div className="flex flex-col gap-2 pt-4">
              <a href="mailto:hello@ashvini.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="p-2 rounded-full border border-white/10 group-hover:bg-white/10 transition">
                   <Mail className="w-4 h-4" />
                </div>
                <span className={`${FONTS.mono} text-sm`}>hello@ashvini.com</span>
              </a>
            </div>
          </div>

          {/* Links Columns (Span 8) */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div>
              <h5 className={`${FONTS.mono} text-slate-500 text-xs uppercase tracking-[0.2em]`}>Venture</h5>
              <ul className="space-y-4">
                {['Our Story', 'Approach', 'Partners', 'Careers'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`${FONTS.body} text-slate-200 hover:text-white transition-colors flex items-center gap-1 group w-fit`}>
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#961767]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h5 className={`${FONTS.mono} text-slate-500 text-xs uppercase tracking-[0.2em]`}>Services</h5>
              <ul className="space-y-4">
                {['Web Design', 'Development', 'Branding', 'SEO'].map((link) => (
                  <li key={link}>
                    <a href="#" className={`${FONTS.body} text-slate-300 hover:text-white transition-colors w-fit block`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h5 className={`${FONTS.mono} text-slate-500 text-xs uppercase tracking-[0.2em]`}>Socials</h5>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#961767] hover:border-white transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* --- SECTION 3: BOTTOM & WATERMARK --- */}
        <div className="relative z-20 mt-20 border-t border-white/10 pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className={FONTS.mono}>
            © {currentYear} Ashvini Coorperate.
          </p>
          <div className={`flex items-center gap-6 ${FONTS.mono}`}>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;