import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Initiatives', path: '/program' },
    // { name: 'Get Involved', path: '/support' },
    // { name: 'Accountability', path: '/accountability' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesSubItems = [
    { name: 'Talent Identification', path: '/services/talent-identification' },
    { name: 'Comprehensive Support', path: '/services/comprehensive-support' },
    { name: 'Mentorship', path: '/services/mentorship-guidance' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5 border-b border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo/Logo.png" alt="WAWU Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[#11698d] ${location.pathname === link.path ? 'text-[#11698d]' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#11698d] cursor-pointer ${location.pathname?.startsWith('/services/') ? 'text-[#11698d]' : 'text-gray-700'}`}
              >
                Services
                <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <>
                  {/* Invisible bridge to prevent menu from closing when moving mouse to the dropdown */}
                  <div className="absolute top-full left-0 w-full h-2" />
                  
                  <div className="absolute top-[calc(100%-4px)] left-0 w-56 bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden py-2 z-[60]">
                    {servicesSubItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-[#11698d] ${location.pathname === item.path ? 'text-[#11698d] bg-gray-50' : 'text-gray-700'}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
            
            <Link 
              to="/support"
              className="flex items-center gap-2 bg-[#11698d] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0c4e69] transition-colors shadow-sm ml-2"
            >
              <Heart size={16} />
              Donate Now
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center gap-4">
             <Link 
              to="/support"
              className="bg-[#11698d] text-white p-2 rounded-full text-sm font-medium hover:bg-[#0c4e69] transition-colors shadow-sm"
            >
              <Heart size={18} />
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#11698d] p-1"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg px-4 pt-2 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium ${location.pathname === link.path ? 'text-[#11698d] bg-gray-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#11698d]'}`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-gray-50 mt-1 pt-1">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center justify-between w-full px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="flex flex-col gap-1 mt-1 ml-4 border-l-2 border-gray-100 pb-2">
                  {servicesSubItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setServicesDropdownOpen(false);
                      }}
                      className={`px-4 py-2 text-sm rounded-md ${location.pathname === item.path ? 'text-[#11698d] bg-gray-50' : 'text-gray-600 hover:bg-gray-50 hover:text-[#11698d]'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
