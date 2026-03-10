import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TechnicalConsulting = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const services = [
    { title: "Infrastructure", desc: "Facility design and operational protocol optimization." },
    { title: "Technical", desc: "Curriculum development and performance audit systems." }
  ];

  return (
    <div className="bg-[#FDFDFD] text-[#0A0A0A] antialiased font-sans pt-20">
      {/* HERO SECTION */}
      <section className="py-24 px-6 border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-black/40 hover:text-[#125487] transition-colors mb-12 group uppercase text-[10px] font-mono tracking-widest"
          >
            <ArrowLeft size={14} />
            <span>Return_to_Previous</span>
          </motion.button>

          <p className="text-[10px] font-mono tracking-[0.5em] text-[#125487] mb-8 uppercase">Consulting_Module: STRATEGY</p>
          <h1 className="text-[10vw] font-serif leading-[0.8] tracking-tighter mb-12">
            Expert <br />
            <span className="italic font-light text-[#125487]">Advisory.</span>
          </h1>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="border-b border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Content Block */}
          <div className="md:col-span-8 border-r border-black/5 p-8 md:p-20 flex flex-col justify-center bg-white">
             <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Consulting Services.</h2>
             <p className="text-xl font-light text-black/60 leading-relaxed mb-12 max-w-2xl">
               Strategic guidance for football academies, local clubs, and organizations aiming to implement professional standards and sustainable growth models.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, i) => (
                  <div key={i} className="p-8 border border-black/5 bg-[#F5F5F5]">
                     <p className="text-xl font-serif italic mb-2 text-[#125487]">{service.title}</p>
                     <p className="text-[10px] font-mono uppercase tracking-widest opacity-40">{service.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Icon Block */}
          <div className="md:col-span-4 bg-[#F5F5F5] p-12 flex flex-col items-center justify-center gap-8 relative overflow-hidden">
             <Shield size={64} className="text-[#125487] relative z-10" />
             <p className="text-[10px] font-mono uppercase tracking-[0.5em] opacity-20 relative z-10">Authorized_Only</p>
             
             {/* Decorative Elements */}
             <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center">
                <span className="text-[40vw] font-serif italic">C</span>
             </div>
          </div>
        </div>
      </section>

      {/* FOOTER DATA */}
      <section className="py-12 px-6 bg-white border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center text-[8px] font-mono uppercase tracking-[0.5em] opacity-30">
           <span>Module: Expert_Advisory // STRATEGY_v1</span>
           <span>Status: Secure_Channel_Active</span>
        </div>
      </section>
    </div>
  );
};

export default TechnicalConsulting;
