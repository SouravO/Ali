import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Phone, Mail, Globe, MessageCircle, ArrowUpRight, CheckCircle2
} from 'lucide-react';

const homeLogo = new URL(
  '../assets/logo/WhatsApp_Image_2026-03-14_at_3,20,48_PM-removebg-preview-Picsart-AiImageEnhancer.png',
  import.meta.url
).href;

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.98]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);

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

  const mailtoLink = `mailto:info@globalbfsilearning.com?subject=BFSI Consultation Request: ${formData.name}&body=Details:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AQualification: ${formData.qualification}%0D%0AStatus: ${formData.status}`;

  return (
    <div ref={containerRef} className="bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* --- SECTION 1: THE HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#ccff00]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ccff00]/5 blur-[120px] rounded-full" />

        <header className="absolute top-0 left-0 w-full p-6 md:p-10 pb-8 md:pb-10 z-50">
          <div className="max-w-7xl mx-auto flex items-center gap-4">
            <img src={homeLogo} alt="Logo" className="w-32 md:w-48 h-auto object-contain brightness-110" />
            <div className="h-10 w-[1px] bg-white/20 mx-4" />
            <span className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter uppercase italic leading-none">
              Global <span className="text-[#ccff00]">BFSI</span> Learning
            </span>
          </div>
        </header>

        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mt-8 md:mt-10 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-400">
                We Build BFSI Professionals Who Stand Out
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight uppercase">
              DOMINATE THE <br/>
              <span className="text-[#ccff00] drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">BFSI INDUSTRY</span> <br />
              SHAPE YOUR GLOBAL CAREER
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-zinc-400 leading-relaxed border-l-2 border-[#ccff00] pl-6">
              Unlock elite BFSI expertise, fast-track your career, land high-paying jobs, and grow
              continuously with our unlimited career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
                className="group relative bg-[#ccff00] text-black px-10 py-5 rounded-xl font-black uppercase text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Training Program <ArrowUpRight size={24} />
                </span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ccff00] to-white/20 rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-black rounded-[40px] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                alt="Corporate Finance"
                className="w-full h-[400px] md:h-[600px] object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MOVING SLIDER --- */}
      <div className="bg-white py-8 border-y border-white/10 z-30 relative rotate-[-1deg] scale-105 shadow-[0_0_50px_rgba(204,255,0,0.2)]">
        <div className="marquee-wrapper">
          <div className="marquee-track" style={{ animationDuration: '8s' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center marquee-group">
                {["Mentor by Industry Experts", "Job-Ready Preparation", "Resume That Gets Interview Calls", "Real Mock Interviews", "Continuous Career Guidance"].map((text, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="text-black font-black text-xl md:text-3xl uppercase mx-8">{text}</span>
                    <span className="w-3 h-3 bg-[#ccff00] rounded-full border-2 border-black" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION 3: COUNSELLING FORM --- */}
      <section id="consultation" className="py-24 md:py-40 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center space-y-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] text-white">
              Struggling to Get <br />
              <span className="text-[#ccff00]">Interview Calls</span> <br />
              for BFSI Jobs?
            </h2>
            <div className="space-y-4">
               {[ "Global Curriculum", "Expert Mentorship", "Placement Support" ].map(item => (
                 <div key={item} className="flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-widest">
                   <CheckCircle2 className="text-[#ccff00]" size={20} /> {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-[#ccff00] blur-[100px] opacity-10" />
             <div className="relative bg-zinc-900/50 backdrop-blur-xl p-8 md:p-14 rounded-[40px] border border-white/10 shadow-2xl">
              <h3 className="text-3xl font-black uppercase mb-10 tracking-tighter">
                CLAIM YOUR FREE <br/><span className="text-[#ccff00]">BFSI CAREER CONSULTATION</span>
              </h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#ccff00] ml-2">FULL NAME</label>
                  <input name="name" placeholder="E.G. JOHN DOE" className="form-ultra-modern" onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-[#ccff00] ml-2">MOBILE NUMBER</label>
                  <input name="phone" placeholder="+91 XXXX XXX XXX" className="form-ultra-modern" onChange={handleInputChange} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select name="qualification" className="form-ultra-modern" onChange={handleInputChange}>
                    <option value="">QUALIFICATION</option>
                    <option value="B.Com">B.Com</option>
                    <option value="BBA/BBM">BBA / BBM (Finance)</option>
                    <option value="MBA">MBA (Finance)</option>
                    <option value="M.Com">M.Com</option>
                  </select>

                  <select name="status" className="form-ultra-modern" onChange={handleInputChange}>
                    <option value="">CURRENT STATUS</option>
                    <option value="Student">Student</option>
                    <option value="Job Seeker">Job Seeker</option>
                    <option value="Working Professional">Working Professional</option>
                  </select>
                </div>

                <a
                  href={mailtoLink}
                  className="w-full bg-[#ccff00] text-black py-6 rounded-2xl font-black text-xl uppercase text-center block hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_10px_30px_rgba(204,255,0,0.2)]"
                >
                  Claim Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL NETWORK --- */}
    <section className="relative py-24 bg-white text-black rounded-t-[60px] md:rounded-t-[100px] -mt-12 z-20 overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.1)]">
  
  {/* 3D FLOATING STICKER */}
  <div 
    className="absolute top-12 right-[8%] hidden lg:flex w-32 h-32 bg-[#ccff00] border-[3px] border-black shadow-[12px_12px_0px_#000] items-center justify-center font-black text-4xl z-10"
    style={{ animation: 'bounce-slow 5s ease-in-out infinite', transform: 'rotate(-12deg)' }}
  >
    BFSI
  </div>

  <div className="max-w-7xl mx-auto px-6 mb-20 relative z-30">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
      <div className="relative">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-8xl font-[1000] uppercase leading-[0.85] tracking-tighter italic">
          Global Career <br/>
          <span className="text-white bg-black px-4 py-2 inline-block mt-2 shadow-[10px_10px_0px_#ccff00] transform -translate-y-1">
            Opportunities
          </span> 
          <br/>
          <span 
            className="relative inline-block mt-6 text-[#ccff00]" 
            style={{ textShadow: '4px 4px 0px rgba(0,0,0,1)' }}
          >
            in BFSI Industry
          </span>
        </h2>
      </div>

      <div className="hidden md:flex flex-col items-end gap-3 mb-6 opacity-40">
        <div className="h-2 w-64 bg-black rounded-full"></div>
        <div className="h-2 w-40 bg-[#ccff00] rounded-full border-2 border-black"></div>
      </div>
    </div>
  </div>

  {/* THE "FUNK" MARQUEE */}
  {/* THE "FUNK" MARQUEE - COMPANY LOGO SLIDER */}
  <div className="relative py-10 bg-black -rotate-2 scale-110 border-y-[6px] border-[#ccff00] shadow-2xl z-40 overflow-hidden">
    <div 
      className="flex whitespace-nowrap" 
      style={{ animation: 'marquee-scroll 25s linear infinite', width: 'fit-content' }}
    >
      {/* First Set of Companies */}
      <div className="flex items-center gap-16 px-8">
        {['Citi', 'Goldman Sachs', 'Morgan Stanley', 'JPMorgan', 'HDFC Bank', 'HSBC', 'Standard Chartered', 'Nomura', 'Barclays'].map((company, index) => (
          <React.Fragment key={index}>
            <span className="text-4xl md:text-6xl font-black uppercase text-[#ccff00] italic tracking-tighter hover:text-white transition-colors cursor-default">
              {company}
            </span>
            <span className="text-[#ccff00] text-5xl animate-pulse">★</span>
          </React.Fragment>
        ))}
      </div>

      {/* Duplicate Set for Seamless Loop */}
      <div className="flex items-center gap-16 px-8">
        {['Citi', 'Goldman Sachs', 'Morgan Stanley', 'JPMorgan', 'HDFC Bank', 'HSBC', 'Standard Chartered', 'Nomura', 'Barclays'].map((company, index) => (
          <React.Fragment key={`dup-${index}`}>
            <span className="text-4xl md:text-6xl font-black uppercase text-[#ccff00] italic tracking-tighter hover:text-white transition-colors cursor-default">
              {company}
            </span>
            <span className="text-[#ccff00] text-5xl animate-pulse">★</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>

  <div className="h-24 bg-white"></div>

  {/* React-friendly Style Injector */}
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes marquee-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0) rotate(-12deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }
  `}} />
</section>

      {/* --- SECTION 5: THE METHOD --- */}
      <section className="py-24 md:py-40 px-6 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-black text-white p-10 rounded-[40px] border border-zinc-200 hover:bg-[#ccff00] hover:text-black transition-all duration-500">
            <div className="w-16 h-16 bg-[#ccff00] rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform">
               <span className="text-2xl font-black text-white group-hover:text-black">01</span>
            </div>
            <h4 className="text-3xl font-black uppercase mb-4 tracking-tighter">SMART PATH</h4>
            <p className="font-medium text-lg opacity-70 group-hover:opacity-100">
              Learn what the BFSI industry expects. High-impact curriculum designed for the modern era.
            </p>
          </div>

          <div className="group bg-black text-white p-10 rounded-[40px] border border-black shadow-2xl scale-105 z-10 hover:bg-[#ccff00] hover:text-black">
            <div className="w-16 h-16 bg-[#ccff00] rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:-rotate-12 transition-transform">
               <span className="text-2xl font-black text-white group-hover:text-black">02</span>
            </div>
            <h4 className="text-3xl font-black uppercase mb-4 tracking-tighter">MOCK DRILLS</h4>
            <p className="font-medium text-lg opacity-80">
              Mock Interviews Conducted by BFSI Industry Experts. Real pressure, real feedback, real results.
            </p>
          </div>

          <div className="group bg-black text-white p-10 rounded-[40px] border border-zinc-200 hover:bg-[#ccff00] hover:text-black transition-all duration-500">
            <div className="w-16 h-16 bg-[#ccff00] rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-12 transition-transform">
               <span className="text-2xl font-black text-white group-hover:text-black">03</span>
            </div>
            <h4 className="text-3xl font-black uppercase mb-4 tracking-tighter">UNLIMITED CAREER SUPPORT</h4>
            <p className="font-medium text-lg opacity-70 group-hover:opacity-100">
              Guidance and support until you secure a job — and even beyond your first paycheck.
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section className="relative bg-black text-white pt-32 pb-12 px-6 overflow-hidden border-t border-white/5">
  {/* --- 3D AMBIENT VISUALS --- */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
  
  {/* KINETIC BACKGROUND TEXT */}
  <div className="absolute top-20 left-0 w-full whitespace-nowrap opacity-[0.03] select-none pointer-events-none">
    <h2 className="text-[12vw] font-black leading-none uppercase italic tracking-tighter">
      GLOBAL BFSI LEARNING • GLOBAL BFSI LEARNING
    </h2>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="flex flex-col xl:flex-row gap-16 items-start">
      
      {/* LEFT: BENTO-STYLE CONTACT GRID */}
      <div className="w-full xl:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Phone Card */}
        <div className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-[#ccff00]/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform">
              <Phone size={24} className="text-black" />
            </div>
            <ArrowUpRight className="text-zinc-600 group-hover:text-[#ccff00] transition-colors" />
          </div>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Inquiry Line</p>
          <p className="text-2xl font-bold tracking-tight">7500611247</p>
        </div>

        {/* Email Card */}
        <a href="mailto:info@globalbfsilearning.com" className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-[#ccff00]/40 transition-all duration-500 hover:-translate-y-2">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white rounded-xl group-hover:scale-110 transition-transform">
              <Mail size={24} className="text-black" />
            </div>
            <ArrowUpRight className="text-zinc-600 group-hover:text-[#ccff00]" />
          </div>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Official Email</p>
          <p className="text-lg font-bold break-all leading-tight">info@globalbfsilearning.com</p>
        </a>

        {/* WhatsApp Card 1 */}
        <a href="https://wa.me/917500611247" target="_blank" rel="noreferrer" className="group p-8 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all duration-500 hover:-translate-y-2">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#25D366] rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:rotate-12 transition-transform">
              <MessageCircle size={24} className="text-white" />
            </div>
            <span className="text-[#25D366] font-black text-[10px] tracking-widest uppercase">Direct Chat</span>
          </div>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">WhatsApp One</p>
          <p className="text-xl font-bold italic uppercase leading-none">Chat on WhatsApp</p>
        </a>

        {/* WhatsApp Card 2 */}
        <a href="https://wa.me/919663384594" target="_blank" rel="noreferrer" className="group p-8 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 hover:bg-[#25D366]/10 transition-all duration-500 hover:-translate-y-2">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-[#25D366] rounded-xl shadow-[0_0_20px_rgba(37,211,102,0.3)] group-hover:rotate-12 transition-transform">
              <MessageCircle size={24} className="text-white" />
            </div>
            <span className="text-[#25D366] font-black text-[10px] tracking-widest uppercase">CONTACT US ON</span>
          </div>
          <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">WhatsApp Two</p>
          <p className="text-xl font-bold tracking-tight">96633 84594</p>
        </a>

        {/* NEW WEBSITE CARD (Spanning full width of the grid columns on mobile) */}
        <a href="https://www.globalbfsilearning.com" target="_blank" rel="noreferrer" className="md:col-span-2 group p-8 rounded-3xl bg-[#ccff00]/5 border border-[#ccff00]/10 hover:bg-[#ccff00]/10 transition-all duration-500 hover:-translate-y-2 flex items-center justify-between overflow-hidden">
          <div className="relative z-10 flex items-center gap-6">
            <div className="p-4 bg-[#ccff00] rounded-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)] group-hover:scale-110 transition-transform duration-500">
              <Globe size={32} className="text-black" />
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Official Portal</p>
              <p className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-white group-hover:text-[#ccff00] transition-colors">www.globalbfsilearning.com</p>
            </div>
          </div>
          <ArrowUpRight size={48} className="text-[#ccff00] opacity-20 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500" />
        </a>
      </div>

      {/* RIGHT: MASSIVE CALL TO ACTION */}
      <div className="w-full xl:w-5/12 flex flex-col justify-center items-start xl:items-end">
        <h2 className="font-black text-5xl md:text-7xl uppercase leading-[0.85] mb-12 text-left xl:text-right italic tracking-tighter">
          Ready to Take <br/> 
          <span className="text-zinc-800">the Next Step</span> <br/>
          in Your <br/>
          <span className="text-[#ccff00] drop-shadow-[0_0_30px_rgba(204,255,0,0.4)]">BFSI Career?</span>
        </h2>

        <button
          onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
          className="relative group overflow-hidden bg-[#ccff00] text-black px-12 py-10 rounded-[2.5rem] font-black text-3xl uppercase transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-[0_20px_80px_rgba(204,255,0,0.2)]"
        >
          <span className="relative z-10 flex items-center gap-4">
            ENROLL NOW
            <ArrowUpRight size={44} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
          </span>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/60 opacity-0 group-hover:opacity-100 group-hover:left-full transition-all duration-1000" />
        </button>
      </div>
    </div>

    {/* FOOTER BOTTOM BAR */}
    <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
      <p className="text-zinc-600 font-bold text-[10px] uppercase tracking-[0.2em]">
        © 2026 GLOBAL BFSI LEARNING. ALL RIGHTS RESERVED.
      </p>
      
     
    </div>
  </div>
</section>

      <style jsx>{`
        .form-ultra-modern {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.25rem;
          border-radius: 1rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-ultra-modern:focus {
          background: rgba(255, 255, 255, 0.07);
          border-color: #ccff00;
          box-shadow: 0 0 20px rgba(204, 255, 0, 0.1);
        }

        select.form-ultra-modern option {
          background: #111;
          color: white;
        }

        .marquee-wrapper { width: 100%; overflow: hidden; }
        .marquee-track { display: flex; flex-wrap: nowrap; white-space: nowrap; animation: marqueeScroll linear infinite; }
        .marquee-group { display: inline-flex; align-items: center; white-space: nowrap; }

        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-logos-track {
          display: flex;
          flex-wrap: nowrap;
          white-space: nowrap;
          animation: marqueeLogos linear infinite;
        }

        @keyframes marqueeLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track span,
        .marquee-logos-track span {
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

const ContactItem = ({ icon, label, value, href, color = "bg-white" }) => (
  <div className="group flex items-center gap-4">
    <div className={`p-4 ${color} rounded-2xl transform group-hover:rotate-12 transition-transform duration-300`} aria-hidden>
      {icon}
    </div>
    <div>
      {href ? (
        <a href={href} className="text-lg md:text-xl font-black hover:text-[#ccff00] transition-colors break-all" aria-label={label}>
          {value}
        </a>
      ) : (
        <span className="text-lg md:text-xl font-black" aria-label={label}>{value}</span>
      )}
    </div>
  </div>
);

const Marquee = ({ velocity, direction }) => {
  const companies = ['Citi', 'Goldman Sachs', 'Morgan Stanley', 'JPMorgan', 'HDFC Bank', 'HSBC', 'Standard Chartered', 'Nomura', 'Barclays'];
  return (
    <div className="overflow-hidden flex">
      <div className="marquee-logos-track" style={{ animationDuration: `${velocity}s` }}>
        {[...companies, ...companies, ...companies].map((c, i) => (
          <span key={i} className="text-5xl md:text-8xl font-black uppercase italic text-black hover:text-[#ccff00] transition-colors cursor-default mx-12">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GlobalBFSILanding;``