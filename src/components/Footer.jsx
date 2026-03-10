import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Facebook, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// --- STYLING CONSTANTS ---
const brutalBorder = "border-[4px] border-black";
const brutalShadow = "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
const hoverShadow = "hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]";

const Footer = () => {
  // Updated partners to reflect BFSI/Education context or placeholders
  const partners = [
    "Banking Sector",
    "Finance Corp",
    "Insurance Hub",
    "Digital Learning"
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#", color: "hover:bg-[#FF00FF]" },
    { icon: <Linkedin size={20} />, href: "#", color: "hover:bg-[#00F0FF]" },
    { icon: <Youtube size={20} />, href: "#", color: "hover:bg-[#FFDE03] hover:text-black" },
    { icon: <Facebook size={20} />, href: "#", color: "hover:bg-[#4cb5e5]" },
  ];

  return (
    <footer className="bg-[#4cb5e5] text-black pt-24 pb-10 border-t-[10px] border-black relative overflow-hidden">
      {/* BACKGROUND DECO */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none font-black text-[15rem] leading-none select-none">
        GBFSI
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* BRAND COLUMN */}
          <div className="flex flex-col gap-8">
            <motion.div 
              whileHover={{ rotate: -2 }}
              className={`bg-white p-4 inline-block w-fit ${brutalBorder} ${brutalShadow}`}
            >
              {/* Ensure this path points to your actual GBFSI logo */}
              <img src="/assets/logo/GBFSI_Logo.png" alt="Global BFSI Logo" className="h-16 w-auto" />
            </motion.div>
            
            <p className="text-xl font-bold uppercase leading-tight tracking-tighter">
              Empowering the next generation of <span className="bg-black text-white px-1">BFSI Professionals</span> through expert-led training.
            </p>

            <Link to="/courses" className={`inline-flex items-center gap-3 bg-black text-white px-6 py-4 font-black uppercase text-sm ${brutalBorder} ${brutalShadow} ${hoverShadow} transition-all group`}>
               Join the Community
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-3xl font-black uppercase mb-8 italic underline decoration-white decoration-4">The Map</h4>
            <ul className="flex flex-col gap-4 font-black uppercase">
              {['Home', 'Courses', 'Why GBFSI', 'Certificate', 'Interview Prep', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center gap-2 hover:translate-x-2 transition-transform group">
                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-3xl font-black uppercase mb-8 italic underline decoration-white decoration-4">The Base</h4>
            <div className="space-y-6 font-bold">
              <div className={`bg-white p-4 ${brutalBorder} ${brutalShadow} -rotate-2`}>
                <p className="text-xs uppercase mb-1 opacity-50 font-black">Email Us</p>
                <a href="mailto:info@globalbfsilearning.com" className="block text-sm break-all">info@globalbfsilearning.com</a>
                <a href="mailto:support@globalbfsilearning.com" className="block text-sm break-all">support@globalbfsilearning.com</a>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-3">
                  <Phone size={20} /> +91 7500611247
                </p>
                <p className="flex items-center gap-3">
                  <Phone size={20} /> +91 9663384594
                </p>
              </div>
            </div>
          </div>

          {/* PARTNERS & SOCIALS */}
          <div>
            <h4 className="text-3xl font-black uppercase mb-8 italic underline decoration-white decoration-4">The Network</h4>
            <div className="flex flex-wrap gap-2 mb-10">
              {partners.map((partner) => (
                <span key={partner} className="bg-black text-white text-[10px] font-black uppercase px-3 py-1 border-2 border-white">
                  {partner}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-12 h-12 bg-white text-black ${brutalBorder} flex items-center justify-center ${brutalShadow} ${social.color} hover:text-white transition-all`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-black uppercase text-sm bg-black text-white px-4 py-2 skew-x-[-10deg]">
            © {new Date().getFullYear()} GLOBAL BFSI LEARNING // KNOWLEDGE IS POWER
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 font-black uppercase text-xs">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
            <span className="bg-[#FFDE03] px-2 border-2 border-black">Skill India Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;