import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { 
  Zap, Rocket, Target, Shield, CheckCircle2, TrendingUp, 
  ArrowDown, Mouse, Laptop, MoveRight, AlertTriangle, 
  Users, Briefcase, GraduationCap, Phone, Mail, Globe,
  BarChart3, Search, HardDrive, Award, Banknote, Star
} from 'lucide-react';

// Animation variants for re-usability
const fadeInUp = {
  hidden: { opacity: 0, y: 60, skewY: 7 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Complex Parallax Transforms
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const heroSkew = useTransform(smoothProgress, [0, 0.2], [0, -5]);
  const bgRotation = useTransform(smoothProgress, [0, 1], [0, 45]);
  const tickerX = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);
  const sideTextX = useTransform(smoothProgress, [0, 0.5], [-500, 0]);

  return (
    <div ref={containerRef} className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* --- FLOATING 3D BACKGROUND --- */}
      <motion.div style={{ rotate: bgRotation }} className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vh] border-[100px] border-black/5 rounded-[200px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vh] bg-[#ccff00] blur-[150px] rounded-full" />
      </motion.div>

      {/* --- SECTION 1: THE HERO (MEGA REVEAL) --- */}
      <section className="relative min-h-[120vh] flex flex-col items-center justify-center z-10 p-6">
        <motion.div style={{ scale: heroScale, skewY: heroSkew }} className="text-center w-full max-w-7xl">
          <motion.div 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="bg-black text-[#ccff00] px-8 py-3 rounded-full font-black text-xs uppercase tracking-[0.5em] mb-12 inline-flex items-center gap-3 shadow-[10px_10px_0px_0px_#ccff00]"
          >
            <Star size={16} className="animate-spin" /> THE FUTURE OF FINANCE IS HERE
          </motion.div>
          
          <h1 className="text-[15vw] md:text-[11vw] font-[1000] leading-[0.75] tracking-tighter uppercase mb-8">
            <span className="inline-block hover:italic hover:text-[#ccff00] transition-all">BFSI</span> <br /> 
            <span className="text-transparent stroke-text-black italic">DISRUPTED</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto font-black text-xl md:text-2xl uppercase leading-tight mb-16 border-l-4 border-black pl-6"
          >
            Stop collecting degrees. Start collecting job offers. Practical BFSI training by the 1%.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -2 }} whileTap={{ scale: 0.9 }}
              className="bg-black text-white px-10 py-6 rounded-full font-[1000] uppercase flex items-center gap-4 text-xl shadow-[15px_15px_0px_0px_#ccff00]"
            >
              Get Free Consultation <Rocket />
            </motion.button>
          </div>
        </motion.div>

        <motion.div style={{ x: sideTextX }} className="absolute left-10 bottom-20 hidden lg:block">
           <p className="font-[1000] text-8xl opacity-5 leading-none uppercase">BUILD<br/>YOUR<br/>LEGACY</p>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE TICKER (INFINITY SCROLL) --- */}
      <div className="bg-[#ccff00] py-10 border-y-[6px] border-black z-30 relative -rotate-3 scale-110 overflow-hidden shadow-2xl">
        <motion.div style={{ x: tickerX }} className="flex whitespace-nowrap">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-20 px-10">
              <span className="text-black font-[1000] text-6xl uppercase italic">No More Unpaid Internships</span>
              <Target size={60} className="text-black" />
              <span className="text-black font-[1000] text-6xl uppercase italic">Industry-Led Mentorship</span>
              <Zap size={60} className="fill-black" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION 3: THE GAP (STAGGERED LIST) --- */}
      <section className="py-40 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-7xl md:text-9xl font-[1000] uppercase leading-none tracking-tighter">
              WHY YOU <br/><span className="text-[#ccff00]">FAIL.</span>
            </h2>
            <div className="space-y-6">
              {[
                { t: "THEORY OVERLOAD", d: "Degrees give you books. We give you desks." },
                { t: "RESUME TRASH", d: "90% of resumes are rejected by BFSI bots. We fix yours." },
                { t: "INTERVIEW ANXIETY", d: "You freeze when asked about Trade Lifecycles. We melt the ice." }
              ].map((item, i) => (
                <motion.div 
                  key={i} variants={fadeInUp}
                  className="group flex items-start gap-6 border-b border-white/10 pb-8 hover:border-[#ccff00] transition-colors"
                >
                  <span className="text-4xl font-[1000] text-[#ccff00]">0{i+1}</span>
                  <div>
                    <h4 className="text-3xl font-black uppercase group-hover:italic transition-all">{item.t}</h4>
                    <p className="text-zinc-500 font-bold uppercase tracking-widest">{item.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* THE 3D FORM BOX */}
          <motion.div 
            initial={{ rotateY: 30, opacity: 0 }} whileInView={{ rotateY: 0, opacity: 1 }}
            className="bg-white text-black p-10 md:p-16 rounded-[60px] shadow-[-20px_20px_0px_0px_#ccff00] perspective-[1000px]"
          >
            <h3 className="text-4xl font-[1000] uppercase mb-8 leading-none">Claim Your Free <br/> Guidance</h3>
            <div className="space-y-6">
               <input placeholder="YOUR NAME" className="form-ultra" />
               <input placeholder="WHATSAPP NUMBER" className="form-ultra" />
               <select className="form-ultra appearance-none">
                  <option>CURRENT STATUS</option>
                  <option>STUDENT</option>
                  <option>JOB SEEKER</option>
               </select>
               <button className="w-full bg-black text-[#ccff00] py-6 rounded-full font-[1000] text-2xl uppercase hover:bg-[#ccff00] hover:text-black transition-all">
                  Get Job Ready
               </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: THE ECOSYSTEM (MARQUEE) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <p className="text-center font-black uppercase tracking-[1em] mb-20 opacity-20 text-xs">The Global Network</p>
        <div className="flex flex-col gap-10">
          <Marquee velocity={25} direction="left" />
          <Marquee velocity={20} direction="right" />
        </div>
      </section>

      {/* --- SECTION 5: THE BLUEPRINT (HORIZONTAL CARDS) --- */}
      <section className="py-40 px-6 bg-[#f0f4f8]">
        <h2 className="text-center text-7xl md:text-9xl font-[1000] uppercase tracking-tighter mb-32">
          THE <span className="bg-[#ccff00] px-4">METHOD</span>
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
           {[
             { t: "SMART PATH", d: "Don't learn everything. Learn what pays.", icon: <Target size={40}/> },
             { t: "MOCK DRILLS", d: "Brutal interview prep with real analysts.", icon: <Users size={40}/> },
             { t: "LIFETIME CAREER", d: "We support you even after your first paycheck.", icon: <Award size={40}/> }
           ].map((card, i) => (
             <motion.div 
               whileHover={{ y: -20, rotate: 2 }}
               key={i} className="bg-white border-[6px] border-black p-12 rounded-[50px] shadow-[15px_15px_0px_0px_#000]"
             >
                <div className="mb-8">{card.icon}</div>
                <h4 className="text-3xl font-[1000] uppercase leading-none mb-4">{card.t}</h4>
                <p className="font-bold uppercase text-zinc-400 text-sm leading-relaxed">{card.d}</p>
             </motion.div>
           ))}
        </div>
      </section>

      {/* --- FOOTER: THE FINAL CTA --- */}
      <footer className="bg-black text-white pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-20 border-b border-white/10 pb-32">
             <div>
                <h2 className="text-8xl md:text-[12vw] font-[1000] leading-none uppercase mb-10 italic tracking-tighter text-[#ccff00]">JOIN<br/>THE 1%</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-black italic">!</div>
                    <span className="font-black text-2xl uppercase tracking-tighter">+91 96633 84594</span>
                  </div>
                </div>
             </div>
             <div className="text-right">
                <p className="font-black text-4xl uppercase mb-8 leading-tight">Ready to stop<br/>dreaming and<br/>start earning?</p>
                <button className="bg-[#ccff00] text-black px-12 py-6 rounded-full font-[1000] text-3xl uppercase hover:scale-110 transition-transform">
                  BOOK MY SEAT
                </button>
             </div>
          </div>
          <p className="mt-20 text-center font-black uppercase text-[10px] tracking-[2em] opacity-20">Global BFSI Learning — Bengaluru / London / Global</p>
        </div>
      </footer>

      {/* --- CUSTOM CSS --- */}
      <style jsx>{`
        .stroke-text-black { -webkit-text-stroke: 3px black; }
        .form-ultra {
          width: 100%;
          background: #f1f5f9;
          border: 4px solid #000;
          padding: 1.5rem;
          border-radius: 1.5rem;
          font-weight: 900;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          outline: none;
        }
        .form-ultra:focus {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 10px 10px 0px 0px #ccff00;
          background: white;
        }
      `}</style>
    </div>
  );
};

// Internal Marquee Component
const Marquee = ({ velocity, direction }) => {
  const companies = ["Goldman Sachs", "Morgan Stanley", "JPMorgan", "Citi", "Nomura", "Fidelity", "TCS", "HCL", "Capgemini"];
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div 
        animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: velocity, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center"
      >
        {[...companies, ...companies].map((c, i) => (
          <span key={i} className="text-4xl font-[1000] uppercase italic opacity-40 hover:opacity-100 hover:text-[#ccff00] cursor-default transition-all">
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default GlobalBFSILanding;