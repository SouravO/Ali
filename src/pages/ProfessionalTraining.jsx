import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Maximize, Trophy, Activity, Users, Zap, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfessionalTraining = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { title: 'Technical Drills', desc: 'Refining ball mastery, passing accuracy, and clinical shooting precision.' },
    { title: 'Tactical Workshops', desc: 'Developing deep game intelligence and advanced strategic understanding.' },
    { title: 'Conditioning', desc: 'Strength, speed, and endurance optimization for professional level competition.' },
  ];

  const pillars = [
    { icon: Trophy, title: 'Pro Mentorship', desc: 'Direct coaching from former professional players and UEFA-certified tactical experts.' },
    { icon: Activity, title: 'Live Tracking', desc: 'Continuous performance monitoring using high-precision telemetry and video analysis.' },
    { icon: Users, title: 'Squad Training', desc: 'High-intensity collective sessions designed to build chemistry and tactical cohesion.' },
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/services')}
            className="flex items-center gap-3 text-black/40 hover:text-[#125487] transition-colors mb-12 group uppercase text-[10px] font-mono tracking-widest"
          >
            <ArrowLeft size={14} />
            <span>Back_to_Modules</span>
          </motion.button>

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Service_Module_03</p>
          <h1 className="text-[14vw] md:text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12 break-words">
            Professional <br />
            <span className="italic font-light text-[#125487]">Training.</span>
          </h1>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Block */}
          <div className="aspect-[4/5] md:aspect-auto md:h-[80vh] border-b md:border-b-0 md:border-r border-black/5 overflow-hidden group relative">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              alt="Training Session"
            />
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-[10px] font-bold tracking-widest uppercase">
              Elite_Protocol: TRN_03
            </div>
          </div>

          {/* Features Block */}
          <div className="flex flex-col justify-between p-8 md:p-20 bg-[#F5F5F5]">
            <div className="space-y-8 md:space-y-12">
              <Maximize className="text-[#125487]" size={32} />
              <h2 className="text-4xl md:text-7xl font-serif italic leading-tight">Training <br/> Elements.</h2>
              <div className="space-y-6 md:space-y-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#125487] mt-2 shrink-0" />
                    <div>
                      <p className="text-[10px] font-mono text-black/40 uppercase tracking-widest mb-1">Element_{i+1}</p>
                      <p className="text-lg md:text-xl font-serif italic text-black mb-1">{feature.title}</p>
                      <p className="text-sm font-light text-black/60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24 px-4 md:px-6 border-b border-black/5 bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-black/5 border border-black/5">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 md:p-12 hover:bg-[#125487] hover:text-white transition-colors group">
              <div className="text-[#125487] group-hover:text-white transition-colors mb-6 md:mb-8">
                <pillar.icon size={32} />
              </div>
              <h4 className="text-2xl md:text-3xl font-serif italic mb-4 leading-tight">{pillar.title}</h4>
              <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-100">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 md:px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-screen-2xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Initiate_Excellence</p>
          <h2 className="text-5xl md:text-9xl font-serif leading-none tracking-tighter mb-12">
            Elevate Your <br />
            <span className="italic">Performance.</span>
          </h2>
          <button 
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-6 md:gap-8 text-[10px] font-black tracking-[0.4em] uppercase"
          >
            Join Training 
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#125487] flex items-center justify-center text-white group-hover:scale-110 transition-all">
              <Zap size={20} className="md:w-6 md:h-6" />
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTraining;
