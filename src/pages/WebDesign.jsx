import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Trophy, Users, Zap, Search, 
  ArrowRight, MousePointer2, Sparkles,
  Globe, LayoutGrid, ShieldCheck, Activity,
  ChevronRight
} from 'lucide-react';

export default function KineticEcosystem() {
  const containerRef = useRef(null);
  
  const engagementSteps = [
    {
      title: "Discovery Phase",
      tag: "STEP_01",
      desc: "Submit your performance data and biometric profile through our encrypted portal. We scan for potential, not just history.",
      color: "bg-[#125487]",
      text: "text-white",
      icon: <Search size={32} />
    },
    {
      title: "Technical Validation",
      tag: "STEP_02",
      desc: "Attend regional simulation centers for high-fidelity mechanical scouting. Prove your skills under elite pressure.",
      color: "bg-[#F5F5F7]",
      text: "text-black",
      icon: <Zap size={32} />
    },
    {
      title: "The Elite Draft",
      tag: "STEP_03",
      desc: "The top 1% are integrated into professional club pipelines, receiving 360-degree support and global showcases.",
      color: "bg-[#0A0A0A]",
      text: "text-white",
      icon: <Trophy size={32} />
    }
  ];

  return (
    <div className="bg-[#FDFDFD] text-black selection:bg-[#125487] selection:text-white font-sans antialiased">

      {/* 1. INTERACTIVE HERO: LAYERED DEPTH */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
            alt="Stadium"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-4xl">
        
          
          <h1 className="text-[12vw] md:text-[8vw] font-serif leading-[0.8] tracking-tighter text-white mb-12">
           {/* India's Next Legend Legaue */}
           India's Next <br /> Legend League.
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-[#125487] text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
              Register Now

            </button>
         
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#125487] to-transparent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* 2. ON-SCROLL STACKED CARDS: REFACTORED LOGIC */}
      <section className="py-32 px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-8 leading-none">The Integration <br /> Process.</h2>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em]">Protocol_v.2026.4.0 // Secure_Line</p>
          </div>
          <div className="hidden md:block text-right">
             <div className="text-4xl font-serif italic text-[#125487]">01—03</div>
             <p className="text-[10px] font-mono uppercase opacity-30 tracking-widest">Sequence_Order</p>
          </div>
        </div>
        
        <div className="space-y-[10vh]">
          {engagementSteps.map((step, i) => (
            <ScrollCard key={i} step={step} index={i} total={engagementSteps.length} />
          ))}
        </div>
      </section>

      {/* 3. PERFORMANCE BENTO BOXES */}
      <section className="py-32 px-6 bg-[#F8F8F8] border-y border-black/5">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-12 gap-px bg-black/5 p-px">
          <div className="lg:col-span-5 bg-[#F8F8F8] p-12 md:p-20">
            <span className="text-[10px] font-mono text-[#125487] uppercase tracking-[0.4em] block mb-12">Performance_IQ</span>
            <h2 className="text-6xl font-serif italic tracking-tighter mb-12 leading-none text-black">Precision <br /> Metrics.</h2>
            <div className="space-y-10">
                <MetricBar label="Technical Accuracy" value="94%" />
                <MetricBar label="Pressure Resilience" value="88%" />
                <MetricBar label="Tactical Awareness" value="91%" />
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-px">
            <BentoTile 
              icon={<Activity size={24} />} 
              title="Live Tracking" 
              desc="Biometric sensors capture 50+ data points per second during high-intensity play."
            />
            <BentoTile 
              icon={<ShieldCheck size={24} />} 
              title="Integrity Lock" 
              desc="Data is verified via encrypted sports-chain technology to ensure scout confidence."
            />
            <div className="md:col-span-2 p-12 md:p-16 bg-white flex flex-col justify-between group cursor-pointer">
                <div>
                  <LayoutGrid className="text-[#125487] mb-8" size={32} />
                  <h4 className="text-3xl font-serif italic mb-4">Multi-Academy Portal</h4>
                  <p className="text-sm font-light text-black/50 leading-relaxed max-w-md">One profile, access to over 140+ global scouting networks instantly. Seamless data portability for elite athletes.</p>
                </div>
                <div className="flex justify-end mt-12">
                   <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#125487] group-hover:text-white transition-all">
                      <ChevronRight size={20} />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHAT & SOCIAL PROOF */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block p-4 bg-[#125487]/5 text-[#125487] mb-12">
              <Users size={32} strokeWidth={1.5} />
            </div>
            <h2 className="text-7xl font-serif italic tracking-tighter mb-8 leading-none">Global <br /> Visibility.</h2>
            <p className="text-black/50 text-lg font-light mb-12 leading-relaxed max-w-lg">
              Our league is a living ecosystem for elite talent. Professional scouts monitor these performance feeds in real-time.
            </p>
            <div className="flex gap-16">
              <div>
                <h4 className="text-5xl font-serif italic text-[#125487]">142</h4>
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mt-2">Verified Clubs</p>
              </div>
              <div>
                <h4 className="text-5xl font-serif italic text-[#125487]">8.2k</h4>
                <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mt-2">Scouted Minutes</p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F8F8] p-4 md:p-8 border border-black/5 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-12 border-b border-black/5 pb-6">
              <div className="w-2 h-2 rounded-full bg-[#125487]" />
              <span className="text-[10px] font-mono text-black/40 tracking-widest uppercase">Network_Live_Feed</span>
            </div>
            <div className="space-y-4">
              <ChatBubble name="Arjun V." msg="Completed Level 2 technical scouting in Bengaluru Hub!" time="2m ago" />
              <ChatBubble name="Scout Marcus" msg="Reviewing defensive prospects from the Pune cluster." time="14m ago" />
              <ChatBubble name="System" msg="New showcase event added for New Delhi Hub." time="1h ago" highlight />
            </div>
          </div>
        </div>
      </section>

      {/* 5. GLOBAL FOOTER */}
      <footer className="py-20 px-6 bg-white border-t border-black/5">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <p className="text-[10px] font-mono tracking-[0.5em] text-black/30 uppercase">
              © 2026 INDIA NEXT LEGEND LEAGUE // A WAWU CORE ECOSYSTEM
            </p>
            <div className="flex gap-12 opacity-20">
              <Globe size={20} /> <LayoutGrid size={20} /> <Zap size={20} />
            </div>
        </div>
      </footer>
    </div>
  );
}

// REFACTORED SUB-COMPONENTS
function ScrollCard({ step, index, total }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      className={`sticky w-full p-12 md:p-24 border border-black/5 ${step.color} ${step.text} flex flex-col justify-between group transition-all duration-700 min-h-[500px] md:min-h-[600px] shadow-2xl overflow-hidden`}
      style={{ top: `${100 + (index * 40)}px` }}
    >
      <div className="flex justify-between items-start z-10">
        <div className="p-4 bg-white/10 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform">
          {step.icon}
        </div>
        <span className="font-mono text-xs opacity-40 tracking-[0.4em] uppercase">{step.tag}</span>
      </div>
      
      <div className="max-w-3xl z-10">
        <h3 className="text-5xl md:text-8xl font-serif italic mb-8 leading-none tracking-tighter">{step.title}</h3>
        <p className="opacity-60 text-lg md:text-xl leading-relaxed font-light max-w-xl">{step.desc}</p>
      </div>

      <div className="absolute right-[-10%] bottom-[-5%] text-[30vw] font-serif italic opacity-[0.03] pointer-events-none select-none">
        0{index + 1}
      </div>
    </motion.div>
  );
}

function BentoTile({ icon, title, desc }) {
  return (
    <div className="p-12 bg-white border-b md:border-b-0 border-black/5 flex flex-col justify-between hover:bg-[#125487] hover:text-white transition-all duration-500 group">
      <div className="text-[#125487] group-hover:text-white transition-colors mb-20">{icon}</div>
      <div>
        <h4 className="text-2xl font-serif italic mb-4">{title}</h4>
        <p className="text-sm font-light opacity-50 group-hover:opacity-100 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ChatBubble({ name, msg, time, highlight = false }) {
  return (
    <div className={`p-6 border border-black/5 ${highlight ? 'bg-[#125487] text-white shadow-xl shadow-[#125487]/20 border-none' : 'bg-white text-black'} transition-transform hover:translate-x-2 cursor-default`}>
      <div className="flex justify-between items-center mb-2">
        <span className="font-mono text-[9px] uppercase tracking-widest font-bold">{name}</span>
        <span className="text-[9px] opacity-40 font-mono italic">{time}</span>
      </div>
      <p className="text-sm font-medium leading-relaxed">{msg}</p>
    </div>
  );
}

function MetricBar({ label, value }) {
    return (
        <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">
                <span>{label}</span>
                <span>{value}</span>
            </div>
            <div className="h-[2px] w-full bg-black/5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: value }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-[#125487]"
                />
            </div>
        </div>
    )
}