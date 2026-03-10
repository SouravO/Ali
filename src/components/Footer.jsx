import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube, Facebook, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const partners = [
    "iQue Ventures",
    "Ofioh Sporty",
    "Decathlon",
    "Azeezia Healthcare"
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: LOGO & ABOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
               <img src="/assets/logo/Logo.png" alt="WAWU Logo" className="h-12 w-auto object-contain bg-white/10 p-2 rounded-lg" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bridging the gap between raw talent and real opportunity through structured football programs and comprehensive support ecosystems.
            </p>
            <Link to="/support" className="inline-flex items-center gap-2 text-[#4cb5e5] font-semibold hover:text-white transition-colors text-sm">
               <Heart size={16} /> Donate to our mission
            </Link>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about" className="hover:text-[#4cb5e5] transition-colors">About Us</Link></li>
              <li><Link to="/program" className="hover:text-[#4cb5e5] transition-colors">Initiatives</Link></li>
              <li><Link to="/services/talent-identification" className="hover:text-[#4cb5e5] transition-colors">Our Services</Link></li>
              <li><Link to="/support" className="hover:text-[#4cb5e5] transition-colors">Get Involved</Link></li>
              <li><Link to="/accountability" className="hover:text-[#4cb5e5] transition-colors">Accountability</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4cb5e5] mt-0.5 shrink-0" />
                <span>WAWU Foundation<br/>Startup Park, Opp.Madiwala Police Station,<br/>Hosur Road, Madiwala,<br/>Bengaluru, Karnataka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#4cb5e5] shrink-0" />
                <a href="tel:+91 9035140187" className="hover:text-white transition-colors">+91 9035140187</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#4cb5e5] shrink-0" />
                <a href="mailto:info@wawu.foundation" className="hover:text-white transition-colors">info@wawu.foundation</a>
              </li>
            </ul>
          </div>

          {/* Partners & Social Col */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Partners</h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {partners.map((partner, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700">
                  {partner}
                </span>
              ))}
            </div>
            
            <h4 className="text-white font-bold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#11698d] hover:text-white transition-all"><Instagram size={18} /></a>
              <a href="https://www.linkedin.com/in/wawu-foundation/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#11698d] hover:text-white transition-all"><Linkedin size={18} /></a>
              <a href="https://youtube.com/@wawu.foundation" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#11698d] hover:text-white transition-all"><Youtube size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#11698d] hover:text-white transition-all"><Facebook size={18} /></a>
            </div>
          </div>
          
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} WAWU Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/accountability" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/accountability" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/accountability" className="hover:text-white transition-colors">80G & 12A Certified</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
