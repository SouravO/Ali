import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Zap, Target, MoveRight, Users, Award, Phone
} from 'lucide-react';

// Logo asset
const homeLogo = new URL('../assets/logo/WhatsApp_Image_2026-03-14_at_3,20,48_PM-removebg-preview-Picsart-AiImageEnhancer.png', import.meta.url).href;

const fadeInUp = {
  hidden: { opacity: 0, y: 60, skewY: 7 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const bgRotation = useTransform(smoothProgress, [0, 1], [0, 45]);

  // --- FORM STATE LOGIC ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    status: 'CURRENT STATUS'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Constructing the dynamic Mailto Link
  const mailtoLink = `mailto:info@globalbfsilearning.com?subject=Guidance Request: ${formData.name}&body=Hello Global BFSI Team,%0D%0A%0D%0AI would like to claim my free guidance.%0D%0A%0D%0AStudent Details:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AStatus: ${formData.status}%0D%0A%0D%0APlease let me know the next steps.`;

  return (
    <div ref={containerRef} className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* --- FLOATING 3D BACKGROUND --- */}
      <motion.div style={{ rotate: bgRotation }} className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vh] border-[50px] md:border-[100px] border-black/5 rounded-[100px] md:rounded-[200px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[80vw] md:w-[50vw] h-[50vh] bg-[#ccff00] blur-[100px] md:blur-[150px] rounded-full" />
      </motion.div>

      {/* --- SECTION 1: THE HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 p-4 md:p-6 pt-24 md:pt-20">
        <img
          src={homeLogo}
          alt="WAWU Logo"
          className="absolute top-2 left-2 md:top-8 md:left-8 w-24 md:w-48 h-auto object-contain"
        />
        <motion.div style={{ scale: heroScale }} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left order-2 lg:order-1">
            <motion.div 
              initial={{ x: -50, opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-2 mb-4 md:mb-6"
            >
              <div className="h-[2px] w-8 md:w-12 bg-black"></div>
              <span className="font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase">Global BFSI Excellence</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] leading-[0.9] uppercase mb-6 md:mb-8 tracking-tighter">
              Master the <span className="text-[#ccff00] bg-black px-2">Market</span> <br /> 
              Lead the Industry.
            </h1>

            <p className="max-w-xl font-bold text-base md:text-xl text-zinc-600 mb-8 md:mb-10 leading-relaxed border-l-4 border-[#ccff00] pl-4 md:pl-6">
              Bridging the gap between academic theory and high-stakes finance. Access elite mentorship and career acceleration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
             <a href="https://globalbfsilearning.com/" target="_blank" rel="noopener noreferrer">
              <button className="border-4 border-black px-6 md:px-8 py-4 md:py-5 rounded-full font-black uppercase text-base md:text-lg hover:bg-black hover:text-white transition-colors">
                View Curriculum
              </button>
            </a>
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
              className="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[40px] grayscale"
            />
            <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-10 bg-[#ccff00] p-4 md:p-8 rounded-2xl z-20 border-4 border-black">
              <p className="font-[1000] text-2xl md:text-4xl leading-none">98%</p>
              <p className="font-bold text-[10px] md:text-xs uppercase tracking-tighter">Placement Rate</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE TICKER --- */}
      <div className="bg-[#ccff00] py-6 md:py-10 border-y-[4px] md:border-y-[6px] border-black z-30 relative -rotate-2 md:-rotate-3 scale-105 md:scale-110 overflow-hidden shadow-2xl">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-10 md:gap-20 px-5 md:px-10">
                  <span className="text-black font-[1000] text-3xl md:text-6xl uppercase italic">
                    No More Unpaid Internships
                  </span>
                  <Target size={30} className="text-black md:w-[60px] md:h-[60px]" />
                  <span className="text-black font-[1000] text-3xl md:text-6xl uppercase italic">
                    Industry-Led Mentorship
                  </span>
                  <Zap size={30} className="fill-black md:w-[60px] md:h-[60px]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION 3: THE GAP (UPDATED) --- */}
      <section className="py-20 md:py-40 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 md:space-y-12">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-[1000] uppercase leading-none tracking-tighter">
              WHY YOU <br/><span className="text-[#ccff00]">FAIL.</span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { t: "THEORY OVERLOAD", d: "Degrees give you books. We give you desks." },
                { t: "RESUME TRASH", d: "90% of resumes are rejected. We fix yours." },
                { t: "INTERVIEW ANXIETY", d: "You freeze under pressure. We melt the ice." }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="group flex items-start gap-4 md:gap-6 border-b border-white/10 pb-6 md:pb-8 hover:border-[#ccff00] transition-colors">
                  <span className="text-2xl md:text-4xl font-[1000] text-[#ccff00]">0{i+1}</span>
                  <div>
                    <h4 className="text-xl md:text-3xl font-black uppercase group-hover:italic transition-all">{item.t}</h4>
                    <p className="text-zinc-500 font-bold uppercase text-[10px] md:text-xs tracking-widest">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            className="bg-white text-black p-8 md:p-16 rounded-[40px] md:rounded-[60px] shadow-[-10px_10px_0px_0px_#ccff00] md:shadow-[-20px_20px_0px_0px_#ccff00]"
          >
            <h3 className="text-3xl md:text-4xl font-[1000] uppercase mb-6 md:mb-8 leading-none">Claim Your Free <br/> Guidance</h3>
            <div className="space-y-4 md:space-y-6">
                <input 
                  name="name"
                  placeholder="YOUR NAME" 
                  className="form-ultra" 
                  onChange={handleInputChange}
                />
                <input 
                  name="phone"
                  placeholder="WHATSAPP NUMBER" 
                  className="form-ultra" 
                  onChange={handleInputChange}
                />
                <select 
                  name="status"
                  className="form-ultra appearance-none"
                  onChange={handleInputChange}
                >
                   <option>CURRENT STATUS</option>
                   <option>STUDENT</option>
                   <option>JOB SEEKER</option>
                </select>
                <a 
                  href={mailtoLink} 
                  className="w-full bg-black text-[#ccff00] py-4 md:py-6 rounded-full font-[1000] text-xl md:text-2xl uppercase hover:bg-[#ccff00] hover:text-black transition-all inline-block text-center"
                >
                  Get Job Ready
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: THE ECOSYSTEM --- */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <p className="text-center font-black uppercase tracking-[0.5em] md:tracking-[1em] mb-10 md:mb-20 opacity-20 text-[10px] md:text-xs px-4">The Global Network</p>
        <div className="flex flex-col gap-6 md:gap-10">
          <Marquee velocity={40} direction="left" />
          <Marquee velocity={35} direction="right" />
        </div>
      </section>

      {/* --- SECTION 5: THE METHOD --- */}
      <section className="py-20 md:py-40 px-6 bg-[#f0f4f8]">
        <h2 className="text-center text-5xl md:text-7xl lg:text-9xl font-[1000] uppercase tracking-tighter mb-16 md:mb-32">
          THE <span className="bg-[#ccff00] px-4">METHOD</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
           {[
             { t: "SMART PATH", d: "Don't learn everything. Learn what pays.", icon: <Target size={40}/> },
             { t: "MOCK DRILLS", d: "Brutal interview prep with real analysts.", icon: <Users size={40}/> },
             { t: "LIFETIME CAREER", d: "We support you even after your first paycheck.", icon: <Award size={40}/> }
           ].map((card, i) => (
             <motion.div 
               whileHover={{ y: -10 }}
               key={i} className="bg-white border-[4px] md:border-[6px] border-black p-8 md:p-12 rounded-[30px] md:rounded-[50px] shadow-[10px_10px_0px_0px_#000] md:shadow-[15px_15px_0px_0px_#000]"
             >
                <div className="mb-6 md:mb-8">{card.icon}</div>
                <h4 className="text-2xl md:text-3xl font-[1000] uppercase leading-none mb-4">{card.t}</h4>
                <p className="font-bold uppercase text-zinc-400 text-xs md:text-sm leading-relaxed">{card.d}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white pt-20 md:pt-40 pb-10 md:pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 md:gap-20 border-b border-white/10 pb-16 md:pb-32">
           <div className="flex gap-4 items-center">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black font-black italic">!</div>
            <a href="tel:+91 7500611247" className="flex items-center gap-2 font-black text-xl md:text-2xl uppercase tracking-tighter hover:text-[#ccff00] transition-colors">
              <Phone size={24} strokeWidth={3} />
              <span>+91 7500611247 </span>
            </a>
          </div>
             <div className="w-full lg:w-auto text-left lg:text-right">
                <p className="font-black text-2xl md:text-4xl uppercase mb-6 md:mb-8 leading-tight">Ready to stop dreaming<br className="hidden md:block" /> and start earning?</p>
               <a href="https://globalbfsilearning.com/" target="_blank" rel="noopener noreferrer" className="block w-full lg:w-auto">
                <button className="w-full lg:w-auto bg-[#ccff00] text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-[1000] text-xl md:text-3xl uppercase hover:scale-105 transition-transform">
                  BOOK MY SEAT
                </button>
              </a>
             </div>
          </div>
          <p className="mt-10 md:mt-20 text-center font-black uppercase text-[8px] md:text-[10px] tracking-[1em] md:tracking-[2em] opacity-20">Global BFSI Learning — Bengaluru / London / Global</p>
        </div>
      </footer>

      {/* --- CUSTOM CSS --- */}
      <style jsx>{`
        .form-ultra {
          width: 100%;
          background: #f1f5f9;
          border: 3px solid #000;
          padding: 1rem;
          border-radius: 1rem;
          font-weight: 900;
          font-size: 0.875rem;
          text-transform: uppercase;
          outline: none;
          transition: all 0.2s;
        }
        @media (min-width: 768px) {
          .form-ultra { border-width: 4px; padding: 1.5rem; border-radius: 1.5rem; font-size: 1rem; }
        }
        .form-ultra:focus {
          transform: translateY(-3px);
          box-shadow: 6px 6px 0px 0px #ccff00;
          background: white;
        }
      `}</style>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <motion.a
        href="https://wa.me/9663384594?text=Hi!%20I'm%20interested..."
        target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 md:border-4 border-black flex items-center justify-center group"
      >
        <Phone size={24} className="md:w-8 md:h-8" fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black uppercase whitespace-nowrap text-sm md:text-base">
          Chat
        </span>
      </motion.a>
    </div>
  );
};

const Marquee = ({ velocity, direction }) => {
  const companies = ["Goldman Sachs", "Morgan Stanley", "JPMorgan", "Citi", "Nomura", "Fidelity", "TCS", "HCL", "Capgemini"];
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div 
        animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: velocity, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 md:gap-20 items-center"
      >
        {[...companies, ...companies].map((c, i) => (
          <span key={i} className="text-2xl md:text-4xl font-[1000] uppercase italic opacity-40 hover:opacity-100 transition-all">
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default GlobalBFSILanding;