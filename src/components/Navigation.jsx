import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  // Neo-Brutalist Design Tokens
  const brutalBorder = "border-[3px] border-black";
  const brutalShadow = "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
  const brutalShadowLarge = "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Initiatives', path: '/program' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesSubItems = [
    { name: 'Talent Identification', path: '/services/talent-identification' },
    { name: 'Comprehensive Support', path: '/services/comprehensive-support' },
    { name: 'Mentorship', path: '/services/mentorship-guidance' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'translate-y-2' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          bg-white ${brutalBorder} ${brutalShadowLarge} 
          transition-all duration-300 px-6 py-3 flex justify-between items-center
          ${isScrolled ? 'rounded-2xl mx-2' : 'rounded-none mt-4'}
        `}>
          
          {/* LOGO AREA - Styled like a Game Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`bg-[#FF00FF] p-1 ${brutalBorder} group-hover:rotate-6 transition-transform`}>
               <img src="/assets/logo/Logo.png" alt="WAWU Logo" className="h-8 md:h-10 w-auto invert" />
            </div>
            <span className="font-black italic uppercase text-xl tracking-tighter hidden sm:block">WAWU</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`
                  px-3 py-1 text-xs font-black uppercase italic tracking-widest transition-all
                  ${location.pathname === link.path 
                    ? 'bg-[#FFDE03] ' + brutalBorder + ' ' + brutalShadow 
                    : 'hover:text-[#FF00FF]'}
                `}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`
                  flex items-center gap-1 text-xs font-black uppercase italic tracking-widest px-3 py-1 transition-all
                  ${location.pathname?.startsWith('/services/') ? 'bg-[#8BC34A] ' + brutalBorder : 'hover:text-[#FF00FF]'}
                `}
              >
                Services
                <ChevronDown size={14} strokeWidth={3} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className={`absolute top-full left-0 w-64 bg-white ${brutalBorder} ${brutalShadowLarge} mt-2 overflow-hidden z-[60]`}>
                  {servicesSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="block px-4 py-3 text-xs font-black uppercase hover:bg-black hover:text-white transition-colors border-b-2 border-black last:border-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* ACTION BUTTON - Hero Style */}
            <Link 
              to="/support"
              className={`
                flex items-center gap-2 bg-[#FF00FF] text-white px-6 py-2 rounded-none 
                ${brutalBorder} ${brutalShadow} 
                text-xs font-black uppercase italic tracking-widest
                hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all
                ml-4
              `}
            >
              <Zap size={16} fill="white" />
              Donate
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 bg-[#FFDE03] ${brutalBorder} ${brutalShadow}`}
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU - FULL SCREEN BRUTALISM */}
      {mobileMenuOpen && (
        <div className={`lg:hidden absolute top-full left-4 right-4 bg-white ${brutalBorder} ${brutalShadowLarge} mt-4 p-6 z-[100]`}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-black uppercase italic border-b-4 border-black pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/support"
              onClick={() => setMobileMenuOpen(false)}
              className={`bg-[#FF00FF] text-white p-4 text-center font-black uppercase italic text-xl ${brutalBorder}`}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;