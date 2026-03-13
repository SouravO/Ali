import React, { useRef, useState, useEffect } from "react";
import {
  motion as Motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";

// --- ASSETS (Global BFSI Theme) ---
const img1 = "/assets/logo/home.jpg";
const img2 = "/assets/logo/page.jpg";
const img4 = "/assets/logo/img1.jpg";
const img7 = "/assets/logo/mentor.jpg";
const img9 = "/assets/logo/founder.jpg";

const Home = () => {
  const containerRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- SMOOTHING ENGINE ---
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 20,
    restDelta: 0.001
  });

  // --- PHASE 1: HERO TRANSFORMATIONS ---
  const navOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);
  const videoScale = useTransform(smoothProgress, [0, 0.2], [1, 0.65]);
  const videoRadius = useTransform(smoothProgress, [0, 0.15], ["0px", "80px"]);
  const videoY = useTransform(smoothProgress, [0.2, 0.4], ["0vh", "-120vh"]);
  const heroTextOpacity = useTransform(smoothProgress, [0.08, 0.18], [1, 0]);

  // --- PHASE 3: MISSION / BLUEPRINT ---
  const blueprintOpacity = useTransform(smoothProgress, [0.35, 0.42, 0.58, 0.62], [0, 1, 1, 0]);
  const blueprintY = useTransform(smoothProgress, [0.35, 0.45], [100, 0]);
  const pathLength = useTransform(smoothProgress, [0.38, 0.55], [0, 1]);

  // --- PHASE 4: INFRASTRUCTURE BENTO ---
  const featureOpacity = useTransform(smoothProgress, [0.65, 0.72, 0.85, 0.9], [0, 1, 1, 0]);
  const featureScale = useTransform(smoothProgress, [0.65, 0.75], [0.85, 1]);
  const featureY = useTransform(smoothProgress, [0.65, 0.75], [100, 0]);

  // --- PHASE 5: CONNECTION HUB ---
  const contactOpacity = useTransform(smoothProgress, [0.92, 0.96], [0, 1]);
  const contactY = useTransform(smoothProgress, [0.92, 0.97], [50, 0]);

  // --- PHASE 6: FINAL FOOTER ---
  const finalReveal = useTransform(smoothProgress, [0.98, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[1200vh] bg-[#0A0A0A] text-white selection:bg-blue-600">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;400;800&family=JetBrains+Mono:wght@200;500&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; background: #0A0A0A; overflow-x: hidden; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .blueprint-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(37, 99, 235, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.08) 1px, transparent 1px);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(37, 99, 235, 0.4);
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .scanner-line {
          height: 2px;
          width: 100%;
          background: linear-gradient(90deg, transparent, #2563eb, transparent);
          position: fixed;
          top: 0;
          z-index: 50;
          opacity: 0.3;
          animation: scan 8s linear infinite;
        }
      `}</style>

      {/* --- BACKGROUND LAYER --- */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0" />
      <div className="scanner-line pointer-events-none" />

      {/* --- GLOBAL HUD NAVIGATION --- */}
      <Motion.nav 
        style={{ opacity: navOpacity }}
        className="fixed top-0 inset-x-0 z-[100] p-8 flex justify-between items-start mix-blend-difference"
      >
        <div className="flex flex-col">
          <span className="text-2xl font-black tracking-tighter uppercase">Global BFSI<span className="text-blue-500">_</span></span>
          <span className="font-mono text-[9px] tracking-[0.4em] text-blue-500">SYS_OPERATIONAL // ELITE_SYSTEM</span>
        </div>
        <div className="hidden md:flex gap-16 font-mono text-[10px] uppercase tracking-widest opacity-50">
          <a href="#courses" className="hover:text-blue-500 transition-colors">Programs</a>
          <a href="#success" className="hover:text-blue-500 transition-colors">Success</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Connect</a>
        </div>
        <button className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
          Apply Now
        </button>
      </Motion.nav>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* PHASE 1: HERO CORE */}
        <Motion.div
          style={{ scale: videoScale, borderRadius: videoRadius, y: videoY }}
          className="absolute inset-0 z-20 flex items-center justify-center bg-[#111] overflow-hidden shadow-2xl"
        >
          <img
            src="/assets/logo/banneeeer.jpg"
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <video
            autoPlay loop muted playsInline
            onLoadedData={() => setIsVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isVideoReady ? "opacity-30" : "opacity-0"}`}
          >
            <source src="/Startup_Festival_2025_Teaser_Video_Day_1_Inauguration_Day_2160P.mp4" type="video/mp4" />
          </video>

          <Motion.div style={{ opacity: heroTextOpacity }} className="relative z-10 text-center px-6">
            <span className="font-mono text-[10px] tracking-[0.8em] text-blue-500 uppercase block mb-10">
              Training → Placements → Excellence
            </span>
            <h1 className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase italic">
              Master the<br/> <span className="text-transparent border-t border-b border-blue-600/50 [-webkit-text-stroke:1px_#2563eb]">Capital_</span>
            </h1>
          </Motion.div>
        </Motion.div>

        {/* PHASE 2: ASSET DEPTH (SCATTERED IMAGES) */}
        <Motion.div style={{ opacity: useTransform(smoothProgress, [0, 0.3], [0.4, 0]) }} className="absolute inset-0 z-10">
          {[img1, img2, img4, img7, img9].map((src, i) => (
            <Motion.img 
              key={i} src={src}
              style={{ 
                top: `${15 + (i * 15)}%`, 
                left: `${10 + (i * 18)}%`,
                y: useTransform(smoothProgress, [0, 1], [0, -1200 * (i + 1)]) 
              }}
              className="absolute w-64 rounded-xl grayscale opacity-40 blur-[1px] object-cover aspect-video border border-blue-600/20"
            />
          ))}
        </Motion.div>

        {/* PHASE 3: THE MISSION (BLUEPRINT) */}
        <Motion.div 
          style={{ opacity: blueprintOpacity, y: blueprintY }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6"
        >
           <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Motion.path
              d="M 50 0 C 70 20, 30 40, 50 50 S 80 80, 50 100"
              fill="transparent" stroke="#2563eb" strokeWidth="0.05"
              style={{ pathLength }}
            />
          </svg>

          <span className="font-mono text-blue-500 text-xs tracking-[0.5em] mb-12 uppercase">Our Mission — 01</span>
          <h2 className="text-6xl md:text-[7vw] font-black tracking-tighter text-center leading-[0.9] max-w-6xl uppercase">
            The Trade <br/> <span className="text-zinc-700 italic">Architecture.</span>
          </h2>
          <p className="mt-12 text-zinc-400 max-w-2xl text-center text-lg md:text-xl font-light leading-relaxed">
            Master the technical sequence of trade execution, clearing, and final settlement used by global clearing houses.
            Bridging the gap between knowledge and professional deployment.
          </p>

          <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              { label: "Placements", val: "240+" },
              { label: "Support", val: "100%" },
              { label: "Established", val: "2024" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center p-6 border border-white/5 bg-white/[0.02]">
                <span className="text-4xl font-black text-blue-500">{stat.val}</span>
                <span className="font-mono text-[9px] text-zinc-500 tracking-widest uppercase mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* PHASE 4: INFRASTRUCTURE (BENTO RENDER) */}
        <Motion.div 
          style={{ opacity: featureOpacity, scale: featureScale, y: featureY }}
          className="absolute inset-0 z-40 p-6 md:p-24 flex flex-col justify-center bg-[#050505]"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-4xl">
              <span className="font-mono text-blue-500 text-[10px] tracking-[0.5em] uppercase mb-4 block">Catalogue — 02</span>
              <h3 className="text-7xl md:text-[9vw] font-black tracking-tighter leading-none uppercase italic">Elite <br/> <span className="text-blue-600">Programs.</span></h3>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm font-light leading-relaxed uppercase tracking-widest">
              Specialized training designed for the top 1% of investment banking operations professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[50vh]">
            <div className="md:col-span-2 md:row-span-2 glass-card p-12 flex flex-col justify-between group">
              <span className="font-mono text-zinc-600 text-xs">IB_OPS</span>
              <div>
                <h4 className="text-4xl font-black mb-4 uppercase">Equity Capital</h4>
                <p className="text-zinc-500 text-sm max-w-xs">Master equity life cycles, market participants, and regulatory frameworks.</p>
              </div>
              <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">↗️</div>
            </div>

            <div className="md:col-span-2 glass-card p-8 flex justify-between items-end">
              <div>
                <span className="font-mono text-blue-500 text-[10px] uppercase">02 // CLEARING</span>
                <h4 className="text-2xl font-bold mt-2 uppercase">Trade Cycle</h4>
              </div>
              <span className="text-5xl font-black opacity-10">⌬</span>
            </div>

            <div className="glass-card p-8 flex flex-col justify-between">
              <span className="font-mono text-zinc-700 text-xs">03 // ASSET_SERV</span>
              <h4 className="font-bold text-xl uppercase">Corp Actions</h4>
            </div>

            <div className="glass-card p-8 bg-blue-600 text-white flex flex-col justify-between border-none">
              <span className="font-mono text-blue-200 text-xs font-bold">04 // CAREER_MOD</span>
              <h4 className="font-bold text-xl uppercase">Expert Resume</h4>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 4.5: THE CREED */}
        <Motion.div 
          style={{ 
            opacity: useTransform(smoothProgress, [0.88, 0.92, 0.96, 0.98], [0, 1, 1, 0]),
            scale: useTransform(smoothProgress, [0.88, 0.94], [1.1, 1])
          }}
          className="absolute inset-0 z-[45] flex flex-col items-center justify-center text-center p-12"
        >
          <div className="max-w-5xl">
            <h2 className="text-4xl md:text-[6vw] font-black tracking-tighter leading-[1.1] uppercase italic">
              "We don't just train. <br/>
              <span className="text-blue-600">We engineer the future</span> <br/>
              of BFSI professionals."
            </h2>
            <div className="mt-12 flex flex-col items-center">
               <img src={img9} className="w-20 h-20 rounded-full grayscale mb-6 border-2 border-white/10" alt="Founder" />
               <span className="font-mono text-[10px] tracking-[0.5em] text-zinc-500 uppercase">Global BFSI Elite System</span>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 5: CONNECTION HUB */}
        <Motion.div 
          style={{ opacity: contactOpacity, y: contactY }}
          className="absolute inset-0 z-[50] flex flex-col justify-center px-10 md:px-32 bg-white text-black"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="flex flex-col justify-center">
               <span className="font-mono text-blue-600 text-[10px] tracking-[0.5em] uppercase mb-12 block">Connect — 03</span>
               <div className="flex flex-col gap-10">
                 {["Contact Hub —", "E-Brochure —", "LinkedIn —"].map(t => (
                   <a key={t} href="#" className="text-5xl md:text-8xl font-black tracking-tighter hover:text-blue-600 hover:translate-x-6 transition-all duration-500 uppercase">{t}</a>
                 ))}
               </div>
            </div>
            <div className="bg-zinc-100 rounded-[50px] p-16 flex flex-col justify-between">
              <div className="space-y-12">
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-4">Location_Registry</span>
                  <p className="text-3xl font-bold uppercase tracking-tighter">Global Hub, IN <br/> Status: Operational</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block mb-4">Support_Line</span>
                  <p className="text-3xl font-bold uppercase tracking-tighter">+91 75006 11247 <br/> info@globalbfsilearning.com</p>
                </div>
              </div>
              <div className="flex gap-10 pt-12 border-t border-zinc-200">
                {["YouTube", "LinkedIn", "Instagram"].map(s => <span key={s} className="font-mono text-xs font-black cursor-pointer hover:text-blue-600 uppercase">{s}</span>)}
              </div>
            </div>
          </div>
        </Motion.div>

        {/* PHASE 6: THE VOID (FINAL REVEAL) */}
        <Motion.div 
          style={{ opacity: finalReveal, scale: useTransform(smoothProgress, [0.99, 1], [0.9, 1]) }}
          className="absolute inset-0 z-[200] bg-black text-white flex flex-col items-center justify-center text-center p-6"
        >
          <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
          <span className="font-mono text-blue-500 text-[10px] tracking-[1.5em] mb-12 uppercase font-black">System_Ready</span>
          <h2 className="text-[14vw] font-black italic tracking-tighter leading-none mb-20 uppercase">Build The <br/> <span className="text-blue-600">Legacy.</span></h2>
          
          <button className="group relative bg-white text-black px-24 py-10 rounded-full font-black text-2xl uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110">
             <span className="relative z-10">Apply Now</span>
          </button>
          
          <div className="mt-24 flex items-center gap-10">
             <div className="w-20 h-[1px] bg-white/20" />
             <p className="font-mono text-[10px] text-zinc-600 tracking-[0.8em]">GLOBAL.BFSI — ©️ 2026</p>
             <div className="w-20 h-[1px] bg-white/20" />
          </div>
        </Motion.div>

      </div>
    </div>
  );
};

export default Home;