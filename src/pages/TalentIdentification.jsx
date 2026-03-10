import React, { useEffect } from 'react';
import { ArrowLeft, Target, Heart, Search, Award, MoveRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TalentIdentification = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pillars = [
    {
        icon: Search,
        title: 'Identify',
        desc: 'Unearthing India\'s future champions by identifying raw sports talent in under-resourced areas.'
    },
    {
        icon: Heart,
        title: 'Nurture',
        desc: 'We don\'t just scout talent—we nurture it, guide it, and provide the mentorship needed to grow.'
    },
    {
        icon: Award,
        title: 'Rise',
        desc: 'Helping young athletes rise to national and international levels through elite pathways.'
    },
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
               Discover Talent Initiative
             </span>
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
               Unearthing India's <br /> Future Champions.
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
                 src="/assets/logo/Talent.jpg"
                 className="w-full h-full object-cover"
                 alt="Elite Talent Scouting"
               />
               <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                 ★ Elite Talent Hunt
               </div>
             </div>

             {/* Content Block */}
             <div className="space-y-8">
               <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-[#11698d]" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Our Mission Scope</h2>
               <div className="space-y-6 text-lg text-gray-600 leading-relaxed border-l-4 border-[#11698d] pl-6 bg-gray-50/50 p-6 rounded-r-xl">
                 <p>
                   Every child deserves a chance to shine. Our Discover Talent initiative focuses on identifying and supporting raw sports talent in rural and under-resourced areas.
                 </p>
                 <p>
                   Through dedicated camps, talent scouting events, and collaborations with local schools and communities, we aim to provide these young athletes with the right training, mentorship, and exposure to excel in their sporting careers.
                 </p>
                 <p className="font-semibold text-gray-800">
                   We don't just scout talent—we nurture it, guide it, and help it rise to national and international levels.
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
              <h3 className="text-3xl font-bold text-gray-900">Our Approach</h3>
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
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Support the Champions</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
           Help us identify and nurture the next generation of sporting talent in India.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-white text-[#11698d] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center gap-3 group"
        >
          Join the Foundation <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </section>

    </div>
  );
};

export default TalentIdentification;
