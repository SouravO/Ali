import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Phone, Mail, Globe, MessageCircle
} from 'lucide-react';

// Right to logo – Global BFSI Learning
const homeLogo = new URL(
  '../assets/logo/WhatsApp_Image_2026-03-14_at_3,20,48_PM-removebg-preview-Picsart-AiImageEnhancer.png',
  import.meta.url
).href;

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Constructing the Mailto Link with all new fields
  const mailtoLink = `mailto:info@globalbfsilearning.com?subject=BFSI Consultation Request: ${formData.name}&body=Details:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AQualification: ${formData.qualification}%0D%0AStatus: ${formData.status}`;

  return (
    <div
      ref={containerRef}
      className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black"
    >
      {/* --- SECTION 1: THE HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 px-4 md:px-6 pt-28 md:pt-24 pb-12">
        {/* Header / Logo area */}
        <div className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 flex items-center justify-start">
          <div className="flex items-center gap-3 md:gap-4 max-w-full">
            <img
              src={homeLogo}
              alt="Logo"
              className="w-20 md:w-32 lg:w-40 h-auto object-contain shrink-0"
            />
            <div className="flex flex-col items-start justify-center leading-tight">
              <span className="montserrat-bold-green text-base md:text-2xl lg:text-3xl tracking-wide uppercase text-left">
                Global BFSI Learning
              </span>
             
            </div>
          </div>
        </div>

        <motion.div
          style={{ scale: heroScale }}
          className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-left order-2 lg:order-1">
            {/* mobile-only subtitle */}
            <div className="flex md:hidden items-center gap-2 mb-4">
              <div className="h-[2px] w-8 bg-black"></div>
              <span className="font-bold tracking-tighter text-sm uppercase">
                We Build BFSI Professionals Who Stand Out
              </span>
            </div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="hidden md:flex items-center gap-2 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-8 md:w-12 bg-black"></div>
              <span className="font-bold tracking-tighter text-xs md:text-sm uppercase">
                We Build BFSI Professionals Who Stand Out
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-[1000] leading-[0.95] uppercase mb-6 md:mb-8 tracking-tighter">
              DOMINATE THE <span className="text-[#ccff00] bg-black px-2">BFSI INDUSTRY</span> <br />
              SHAPE YOUR GLOBAL CAREER
            </h1>

            <p className="max-w-xl font-bold text-base md:text-xl text-zinc-600 mb-8 md:mb-10 leading-relaxed border-l-4 border-[#ccff00] pl-4 md:pl-6">
              Unlock elite BFSI expertise, fast-track your career, land high-paying jobs, and grow
              continuously with our unlimited career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button
                onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
                className="border-4 border-black px-6 md:px-8 py-4 md:py-5 rounded-full font-black uppercase text-base md:text-lg hover:bg-black hover:text-white transition-colors"
              >
                Explore Training Program
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative order-1 lg:order-2 px-4 md:px-0"
          >
            <div className="absolute -inset-2 md:-inset-4 border-4 border-black rounded-[30px] md:rounded-[40px] z-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
              alt="Corporate Finance"
              className="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[40px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MOVING SLIDER --- */}
      <div className="bg-[#ccff00] py-6 md:py-10 border-y-[4px] border-black z-30 relative -rotate-1 overflow-hidden">
          <div className="marquee-wrapper">
            <div className="marquee-track" style={{ animationDuration: '8s' }}>
              {[1, 2].map((group) => (
                <div key={`a-${group}`} className="flex items-center marquee-group">
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Mentor by Industry Experts
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Job-Ready Preparation
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Resume That Gets Interview Calls
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Real Mock Interviews
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Continuous Career Guidance
                  </span>
                </div>
              ))}
              {/* duplicate for seamless looping */}
              {[1, 2].map((group) => (
                <div key={`b-${group}`} className="flex items-center marquee-group">
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Mentor by Industry Experts
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Job-Ready Preparation
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Resume That Gets Interview Calls
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Real Mock Interviews
                  </span>
                  <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">
                    Continuous Career Guidance
                  </span>
                </div>
              ))}
            </div>
          </div>
      </div>

      {/* --- SECTION 3: COUNSELLING FORM --- */}
      <section id="consultation" className="py-20 md:py-40 px-6 bg-black text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-[1000] uppercase leading-none text-[#ccff00]">
              Struggling to Get <br />
              Interview Calls <br />
              for BFSI Jobs?
            </h2>
          </div>

          <div className="bg-white text-black p-8 md:p-12 rounded-[40px] border-b-8 border-r-8 border-[#ccff00]">
            <h3 className="text-2xl md:text-3xl font-[1000] uppercase mb-8">
              CLAIM YOUR FREE BFSI CAREER CONSULTATION
            </h3>
            <div className="space-y-4">
              <input name="name" placeholder="YOUR NAME" className="form-ultra" onChange={handleInputChange} />
              <input name="phone" placeholder="MOBILE NUMBER" className="form-ultra" onChange={handleInputChange} />

              <select name="qualification" className="form-ultra" onChange={handleInputChange}>
                <option value="">QUALIFICATION</option>
                <option value="B.Com">B.Com</option>
                <option value="BBA/BBM">BBA / BBM (Finance)</option>
                <option value="MBA">MBA (Finance)</option>
                <option value="M.Com">M.Com</option>
              </select>

              <select name="status" className="form-ultra" onChange={handleInputChange}>
                <option value="">CURRENT STATUS</option>
                <option value="Student">Student</option>
                <option value="Job Seeker">Job Seeker</option>
                <option value="Working Professional">Working Professional</option>
              </select>

              <a
                href={mailtoLink}
                className="w-full bg-black text-[#ccff00] py-5 rounded-full font-[1000] text-xl uppercase text-center block hover:scale-95 transition-transform"
              >
                Claim Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL NETWORK --- */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-5xl font-[1000] uppercase">
            🚀 Global Career Opportunities in BFSI Industry
          </h2>
        </div>
        <div className="border-y-4 border-black py-12 bg-zinc-50">
          <Marquee velocity={12} direction="left" />
        </div>
      </section>

      {/* --- SECTION 5: THE METHOD --- */}
      <section className="py-20 md:py-40 px-6 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#ccff00] border-4 border-black p-8 rounded-[30px]">
            <h4 className="text-2xl md:text-3xl font-[1000] uppercase mb-4">SMART PATH</h4>
            <p className="font-bold text-black">
              Learn what the BFSI industry expects.
            </p>
          </div>

          <div className="bg-[#ccff00] border-4 border-black p-8 rounded-[30px]">
            <h4 className="text-2xl md:text-3xl font-[1000] uppercase mb-4">MOCK DRILLS</h4>
            <p className="font-bold text-black">
              Mock Interviews Conducted by BFSI Industry Experts
            </p>
          </div>

          <div className="bg-[#ccff00] border-4 border-black p-8 rounded-[30px]">
            <h4 className="text-2xl md:text-3xl font-[1000] uppercase mb-4">
              UNLIMITED CAREER SUPPORT
            </h4>
            <p className="font-bold text-black">
              Guidance and support until you secure a job — and even beyond your first paycheck.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-5 w-full md:w-auto">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full text-black">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-300 font-bold">Phone</p>
                <span className="text-2xl font-black">7500611247</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#25D366] rounded-full text-white">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-300 font-bold">WhatsApp</p>
                <a
                  href="https://wa.me/917500611247"
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl font-black hover:text-[#ccff00] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full text-black">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-300 font-bold">Email</p>
                <a
                  href="mailto:info@globalbfsilearning.com"
                  className="text-lg md:text-xl font-black break-all hover:text-[#ccff00] transition-colors"
                >
                  info@globalbfsilearning.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-full text-black">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide text-zinc-300 font-bold">Website</p>
                <a
                  href="https://www.globalbfsilearning.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl font-black break-all hover:text-[#ccff00] transition-colors"
                >
                  www.globalbfsilearning.com
                </a>
              </div>
            </div>
          </div>

          <div className="text-left md:text-right flex flex-col items-start md:items-end w-full md:w-auto">
            <p className="font-black text-2xl md:text-4xl uppercase mb-8 max-w-2xl">
              Ready to Take the Next Step in Your BFSI Career?
            </p>

            <div className="flex items-center gap-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
                className="w-12 h-12 invert animate-pulse hidden md:block"
                alt="point"
              />

              <button
                onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
                className="bg-[#ccff00] text-black px-12 py-6 rounded-full font-[1000] text-2xl uppercase hover:scale-110 transition-transform shadow-xl"
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .form-ultra {
          width: 100%;
          background: #f1f5f9;
          border: 3px solid #000;
          padding: 1rem;
          border-radius: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          outline: none;
        }

        .form-ultra:focus {
          background: white;
          border-color: #ccff00;
        }

        .montserrat-bold-green {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          color: #006400;
        }
        /* Top slider (text) marquee */
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          gap: 0;
          align-items: center;
          flex-wrap: nowrap;
          white-space: nowrap;
          /* animate left by 50% of its total width (we duplicate content) */
          animation-name: marqueeScroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .marquee-group {
          display: inline-flex;
          gap: 0;
          align-items: center;
          white-space: nowrap;
        }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Company logos marquee */
        .marquee-logos {
          width: 100%;
          overflow: hidden;
        }

        .marquee-logos-track {
          display: flex;
          gap: 5rem;
          align-items: center;
          flex-wrap: nowrap;
          white-space: nowrap;
          animation-name: marqueeLogos;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform;
        }

        .marquee-logos.reverse .marquee-logos-track {
          animation-direction: reverse;
        }

        @keyframes marqueeLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Ensure each marquee item doesn't wrap */
        .marquee-track span,
        .marquee-logos-track span {
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

const Marquee = ({ velocity, direction }) => {
  const companies = [
    'Citi',
    'Goldman Sachs',
    'Morgan Stanley',
    'JPMorgan',
    'HDFC Bank',
    'HSBC',
    'Standard Chartered',
    'Nomura',
    'Barclays'
  ];

  // Use CSS-based marquee for a seamless loop; duplicate list twice
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <div
        className={`marquee-logos ${direction === 'right' ? 'reverse' : ''}`}
        style={{ animationDuration: `${velocity}s` }}
      >
        <div className="marquee-logos-track">
          {[...companies, ...companies].map((c, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-[1000] uppercase italic text-green-500 hover:text-black transition-colors cursor-default mx-10"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalBFSILanding;