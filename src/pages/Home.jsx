import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Zap, 
  Rocket, 
  Target, 
  Shield, 
  CheckCircle2, 
  TrendingUp,
  ArrowDown, 
  Mouse, 
  Laptop, 
  Smartphone,
  MoveRight,
  AlertTriangle,
  Users,
  Briefcase,
  GraduationCap,
  Phone,
  Mail
} from 'lucide-react';

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Smooth spring for "liquid" motion
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax & Scroll Transforms
  const heroY = useTransform(smoothProgress, [0, 0.2], [0, -150]);
  const heroRotate = useTransform(smoothProgress, [0, 0.2], [0, -10]);
  const tickerX = useTransform(smoothProgress, [0, 1], ["0%", "-40%"]);
  const roadmapScale = useTransform(smoothProgress, [0.4, 0.6], [0.85, 1]);
  const floatingY = useTransform(smoothProgress, [0, 1], [0, -600]);

  return (
    <div ref={containerRef} className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00]">
      
      {/* --- BACKGROUND PARALLAX LAYER --- */}
      <motion.div style={{ y: floatingY }} className="fixed inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-[15%] left-[5%] rotate-12">
          <Zap size={200} className="fill-current" />
        </div>
        <div className="absolute top-[60%] right-[5%] -rotate-12">
          <Target size={250} />
        </div>
      </motion.div>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex flex-col items-center justify-center perspective-[1200px] z-10 p-6">
        <motion.div style={{ y: heroY, rotateX: heroRotate }} className="text-center">
          <motion.div 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            className="bg-black text-[#ccff00] px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-[0.4em] mb-12 inline-block shadow-[8px_8px_0px_0px_rgba(204,255,0,1)]"
          >
            Disrupting the BFSI Education Market
          </motion.div>
          
          <h1 className="text-[12vw] font-[1000] leading-[0.75] tracking-tighter uppercase mb-16">
            GLOBAL <br /> 
            <span className="text-transparent stroke-text-black">BFSI</span>
          </h1>

          <div className="flex flex-wrap justify-center gap-6">
             <div className="bg-white border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_0px_#000] flex items-center gap-4">
                <GraduationCap className="text-[#ccff00]" size={42} />
                <span className="font-black uppercase text-xs text-left leading-tight">MBA / BBA / B.Com<br/>Specialized Training</span>
             </div>
             <div className="bg-[#ccff00] border-4 border-black p-6 rounded-3xl shadow-[8px_8px_0px_0px_#000] flex items-center gap-4">
                <Briefcase size={42} />
                <span className="font-black uppercase text-xs text-left leading-tight">Job Ready<br/>Toolkit</span>
             </div>
          </div>
        </motion.div>

        <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2.5 }} className="absolute bottom-12 flex flex-col items-center opacity-30">
          <p className="font-black text-[10px] uppercase mb-3 tracking-widest">Scroll to Explore</p>
          <Mouse size={24} className="mb-2" />
          <ArrowDown size={18} />
        </motion.div>
      </section>

      {/* --- KINETIC PRICING TICKER --- */}
      <div className="bg-black py-8 border-y-4 border-black z-30 relative overflow-hidden rotate-[-2deg] scale-105 shadow-2xl">
        <motion.div style={{ x: tickerX }} className="flex whitespace-nowrap">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-[#ccff00] font-[1000] text-5xl px-16 italic uppercase">
              ₹9,339 ONLY  • WHY PAY ₹1.5 LAKH?  • JOB OFFER OVER CERTIFICATE • NO CAP • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION: THE 3 MISTAKES --- */}
      <section className="py-52 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="mb-24 text-center md:text-left">
          <h2 className="text-7xl md:text-9xl font-[1000] uppercase tracking-tighter leading-[0.8] mb-6">
            DON'T F*MBLE <br/><span className="bg-[#ccff00] px-4">THE INTERVIEW</span>
          </h2>
          <p className="font-black tracking-[0.5em] opacity-40 uppercase text-xs">3 Critical Mistakes Before a BFSI Interview</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              id: "01", 
              m: "Lack of Research", 
              s: "Understanding the Capital Market environment is mandatory. Trade lifecycles and participants are key.",
              icon: <AlertTriangle size={48} />
            },
            { 
              id: "02", 
              m: "Generic Intros", 
              s: "Your intro must highlight finance education, Excel skills, and reconciliation knowledge.",
              icon: <Users size={48} />
            },
            { 
              id: "03", 
              m: "Ignoring Presence", 
              s: "Professionalism reflects credibility. Avoid casual communication in client-facing roles.",
              icon: <Shield size={48} />
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20, rotate: 2 }}
              className="bg-white border-4 border-black p-12 rounded-[50px] shadow-[15px_15px_0px_0px_#000] group relative overflow-hidden"
            >
              <div className="text-8xl font-[1000] absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity italic">{item.id}</div>
              <div className="bg-black text-[#ccff00] w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-4xl font-[1000] uppercase leading-none mb-6 italic">{item.m}</h3>
              <p className="font-bold text-zinc-500 uppercase text-xs leading-relaxed">{item.s}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION: THE ROADMAP (NEXT MONTH PLAN) --- */}
      <section className="py-40 bg-black text-white rounded-t-[100px] z-20 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
            <h3 className="text-[10vw] font-[1000] tracking-tighter text-[#ccff00] italic leading-none">STUCK WITH <br/>A DEGREE?</h3>
            <p className="font-black tracking-widest opacity-40 uppercase text-xs max-w-xs text-right">Most graduates lack the practical skills the BFSI industry demands. We change that.</p>
          </div>

          <motion.div style={{ scale: roadmapScale }} className="space-y-12">
            {[
              { label: "PROBLEM", title: "No Job Offer?", desc: "Classroom theory doesn't match corporate desk reality.", color: "white" },
              { label: "SOLUTION", title: "The Smart Approach", desc: "Break the vast BFSI world into manageable, job-specific segments.", color: "#ccff00" },
              { label: "STRATEGY", title: "Resume & Mock Drills", desc: "Stand out to recruiters with ATS-friendly resumes and industry simulations.", color: "white" },
              { label: "GOAL", title: "Placement Support", desc: "We don't just teach; we help you get hired with ongoing support.", color: "#ccff00" }
            ].map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 border-b-2 border-zinc-800 pb-12 group hover:translate-x-4 transition-transform">
                <div className="text-5xl font-[1000] text-zinc-800 group-hover:text-[#ccff00]">0{i+1}</div>
                <div className="flex-1">
                  <span className="text-[10px] font-black tracking-[0.5em]" style={{ color: step.color }}>{step.label}</span>
                  <h4 className="text-5xl md:text-7xl font-[1000] uppercase tracking-tighter mt-2">{step.title}</h4>
                  <p className="text-zinc-500 font-bold uppercase mt-4 max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- WEEKLY VALUE CARDS --- */}
      <section className="py-40 px-6 bg-[#ccff00] z-10 relative">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { h: "The Disruptor", p: "Why pay more? Quality education shouldn't break the bank." },
            { h: "The Toolkit", p: "Free Resume Writing, Mock Interviews, and Placement Support." },
            { h: "Bridging Gap", p: "Transition from MBA/B.Com to a real-world role seamlessly." },
            { h: "Support System", p: "We’re with you until you clock in. Day 1 to Day Done." }
          ].map((card, i) => (
            <div key={i} className="bg-white border-4 border-black p-10 rounded-[40px] shadow-[10px_10px_0px_0px_#000] flex flex-col justify-between min-h-[320px]">
              <h4 className="text-3xl font-[1000] uppercase leading-tight italic">{card.h}</h4>
              <p className="font-black text-[10px] uppercase text-zinc-400 leading-relaxed mt-4">{card.p}</p>
              <div className="mt-8 self-end bg-black text-[#ccff00] p-3 rounded-full">
                <CheckCircle2 size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER: CONTACT & ENROLLMENT --- */}
      <footer className="py-40 px-6 bg-white z-10 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-8xl font-[1000] uppercase tracking-tighter leading-none mb-4">
                  GET <br/><span className="bg-[#ccff00] px-4 shadow-[8px_8px_0px_0px_#000]">IN TOUCH</span>
                </h2>
                <p className="font-black text-zinc-400 uppercase tracking-widest text-xs">Help is just a message away</p>
              </div>

              <div className="grid gap-6">
                <div className="bg-[#f0f4f8] border-4 border-black p-8 rounded-[40px] hover:rotate-1 transition-transform">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="bg-black text-[#ccff00] p-2 rounded-xl" size={40} />
                    <span className="font-black uppercase text-xs">Call Support</span>
                  </div>
                  <div className="text-3xl font-[1000] tracking-tighter">
                    <p>+91 75006 11247</p>
                    <p>+91 96633 84594</p>
                  </div>
                </div>

                <div className="bg-[#f0f4f8] border-4 border-black p-8 rounded-[40px] hover:-rotate-1 transition-transform">
                  <div className="flex items-center gap-4 mb-6">
                    <Mail className="bg-black text-[#ccff00] p-2 rounded-xl" size={40} />
                    <span className="font-black uppercase text-xs">Email Desk</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { type: "General", mail: "info@globalbfsilearning.com" },
                      { type: "Support", mail: "support@globalbfsilearning.com" },
                      { type: "Sales", mail: "globalbfsisales@gmail.com" }
                    ].map((m, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-black/10 pb-2">
                        <span className="font-bold text-[10px] uppercase text-zinc-400">{m.type}</span>
                        <span className="font-black text-sm lowercase">{m.mail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="bg-black text-white p-12 md:p-20 rounded-[80px] shadow-[30px_30px_0px_0px_#ccff00] relative overflow-hidden">
              <Rocket className="absolute -right-10 -top-10 opacity-10 rotate-45" size={300} />
              <div className="relative z-10">
                <h4 className="text-5xl font-[1000] uppercase tracking-tighter mb-10 leading-none">BE THE RIGHT <br/> CANDIDATE</h4>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500 ml-4">Full Name</label>
                    <input className="w-full bg-zinc-900 border-4 border-zinc-800 p-6 rounded-3xl font-black focus:border-[#ccff00] focus:text-[#ccff00] transition-all outline-none uppercase" placeholder="RAHUL SHARMA" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-zinc-500 ml-4">Email Address</label>
                    <input className="w-full bg-zinc-900 border-4 border-zinc-800 p-6 rounded-3xl font-black focus:border-[#ccff00] focus:text-[#ccff00] transition-all outline-none uppercase" placeholder="RAHUL@EXAMPLE.COM" />
                  </div>
                  <button className="w-full bg-[#ccff00] text-black p-8 rounded-3xl font-[1000] text-3xl uppercase flex items-center justify-center gap-4 hover:scale-[1.03] transition-transform active:scale-95 mt-10 shadow-[0_20px_50px_rgba(204,255,0,0.2)]">
                    Enroll <MoveRight size={38} />
                  </button>
                </form>
              </div>
            </div>

          </div>

          <div className="mt-40 pt-10 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-10 opacity-20 grayscale">
              <TrendingUp size={40} />
              <Shield size={40} />
              <Laptop size={40} />
            </div>
            <div className="text-center md:text-right">
              <p className="font-black tracking-[1em] text-[10px] uppercase text-zinc-300">Global BFSI Learning</p>
              <p className="text-[10px] font-bold text-zinc-400 mt-2">www.globalbfsilearning.com</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .stroke-text-black {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default GlobalBFSILanding;