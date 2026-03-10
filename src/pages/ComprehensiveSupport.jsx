import React, { useEffect } from 'react';
import { ArrowLeft, Target, Brain, Heart, Shield, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComprehensiveSupport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    { icon: Heart, title: 'On-Field Excellence', desc: 'Building resilience and unlocking potential through a 360-degree support ecosystem.' },
    { icon: Brain, title: 'Off-Field Growth', desc: 'Empowering children to manage their lives and careers with confidence and awareness.' },
    { icon: Shield, title: 'Balanced Individuals', desc: 'Raising not only champions, but balanced and aware individuals who excel on and off the field.' },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans pt-24 pb-20 min-h-screen">
      
      {/* PAGE HEADER */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#11698d] transition-colors mb-10 uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </button>

          <div className="text-center">
             <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
               Comprehensive Support Program
             </span>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               Empowering Athletes <br /> On and Off the Field.
             </h1>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
             
             {/* Image Block */}
             <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/3] bg-gray-100 relative w-full">
               <img 
                 src="/assets/logo/page.jpg"
                 className="w-full h-full object-cover"
                 alt="Comprehensive Support System"
               />
               <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                 Holistic Care
               </div>
             </div>

             {/* Content Block */}
             <div className="space-y-8">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-[#11698d]" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Holistic Support System</h2>
               <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-[#11698d] pl-6 bg-gray-50/50 p-6 rounded-r-xl">
                 <p>
                   At WAWU Foundation, we believe that excellence in sports stems from balance. Our Comprehensive Support program goes beyond traditional coaching to provide an all-rounded structure that takes care of every young athlete's needs.
                 </p>
                 <p>
                   From personalized nutrition plans and access to fitness equipment, to emotional wellness and academic counseling, we ensure players grow as individuals—not just performers. We also support travel arrangements, injury recovery, and psychological mentoring.
                 </p>
                 <p className="font-semibold text-gray-800">
                   This 360-degree ecosystem helps unlock potential, build resilience, and empower children to manage their lives and careers more confidently.
                 </p>
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-20 bg-gray-100 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900">Program Pillars</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {pillars.map((pillar, i) => (
               <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 text-6xl font-bold text-gray-50 opacity-50 select-none">
                    0{i+1}
                 </div>
                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-[#11698d]">
                      <pillar.icon size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{pillar.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#11698d] text-center px-4 mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Empower Your Future</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
           Help us provide the 360-degree support that transforms raw talent into well-rounded leaders.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-[#11698d] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center gap-3 group"
        >
          Connect With Us <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

    </div>
  );
};

export default ComprehensiveSupport;
