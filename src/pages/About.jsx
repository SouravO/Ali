import React, { useState } from 'react';
import { Target, Trophy, Quote, ArrowRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const [readMore, setReadMore] = useState(false);
  const navigate = useNavigate();

  const founderBody = "Sharath Kuniyil is an accomplished Indian goalkeeper who proudly represented Kerala in the Santosh Trophy and went on to captain Viva Kerala in the I-League. Over the course of his professional career, he featured for distinguished clubs such as Chirag United, Mohammedan Sporting Club, Mumbai FC, and Bengaluru FC, demonstrating consistency and leadership at the highest levels of domestic football. Extending his impact beyond his playing days, he played a significant role in advancing the sport by serving as the goalkeeping coach for Thrissur Magic FC in the Kerala Super League. He is the first goalkeeper from Kerala to hold the captaincy band of an I-League team, and he was highly skilled, having trained with several professional teams over the years. Throughout his career, he was known for his skill, leadership qualities, and professional training experience with various top teams and accomplished teammates. Notably, across every phase of his journey, he has been widely recognised for his technical ability, composed leadership, and the depth of professional experience gained alongside accomplished teammates and top-tier clubs.";

  return (
    <div className="bg-white text-gray-900 font-sans pt-24 pb-20">
      
      {/* PAGE HEADER */}
      <section className="bg-gray-50 py-16 md:py-24 border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
            About Our NGO
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Uplifting the Future <br /> Through Football.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-center">
            We are dedicated to bridging the gap between raw athletic talent and real-world opportunity for underserved communities across India.
          </p>
        </motion.div>
      </section>

      {/* FOUNDATION STORY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed text-justify hyphens-auto">
                <p>
                  WAWU Foundation is a dedicated non-profit organisation committed to the upliftment and empowerment of young, talented football players from communities with limited access to opportunities.
                </p>
                <p>
                  We believe football is more than a game; it is a powerful tool for personal growth, social mobility, and community transformation. Through structured programs, mentorship, and holistic support, we enable aspiring footballers to realise their full potential both on and off the field. Through WAWU, we are bridging a gap between raw talent and real opportunity.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#11698d] text-white p-10 md:p-14 rounded-2xl shadow-xl relative overflow-hidden flex items-center"
            >
               <Quote className="absolute top-6 left-6 text-white/10" size={80} />
               <div className="relative z-10">
                 <p className="text-2xl font-medium leading-snug italic text-left">
                   "Our initiatives have helped numerous young players gain access to academic institutions, professional club environments, and opportunities to represent teams at state and national levels."
                 </p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Target size={32} className="text-[#11698d]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  To bridge the gap between talent and opportunity by identifying and nurturing promising young footballers through world-class training, educational support, and holistic life skills development.

We are committed to empowering teenagers through structured football programs that promote discipline, resilience, mental well-being, and drug-free lifestyles — creating a safe and supportive environment where young individuals can grow into confident, responsible leaders.

                </p>
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Trophy size={32} className="text-[#11698d]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
To build an inclusive and empowered generation where football becomes a powerful catalyst for social transformation — breaking social and economic barriers, strengthening mental health, preventing substance abuse, and inspiring young people to lead positive change within their communities.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* THE FOUNDER */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> 
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:sticky lg:top-28"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] bg-gray-100 relative">
                <img 
                  src="/assets/logo/founder.jpg" 
                  alt="Sharath Kuniyil - Founder of WAWU Foundation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 lg:pl-10"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gray-100 text-gray-600 text-sm font-bold tracking-wider uppercase mb-4">
                Founder & Chairman
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sharath Kuniyil</h2>
              
              <div className="bg-gray-50 border-l-4 border-[#11698d] p-6 mb-8 rounded-r-lg">
                <p className="text-gray-800 font-medium">Ex-I League Captain & Professional Mentor</p>
              </div>

              <div className="text-lg text-gray-600 leading-relaxed mb-6">
                <p className="text-justify hyphens-auto">
                  {readMore ? founderBody : `${founderBody.slice(0, 350)}...`}
                </p>
              </div>
              
              <button 
                onClick={() => setReadMore(!readMore)}
                className="text-[#11698d] font-bold text-lg hover:text-[#0c4e69] flex items-center gap-2 transition-colors"
              >
                {readMore ? "Read Less" : "Read Full Biography"}
                <ArrowRight size={20} className={`transform transition-transform ${readMore ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      {/* CTA SECTION */}
      <section className="py-20 bg-[#11698d] text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be part of our journey</h2>
          <p className="text-blue-100 text-lg mb-10 leading-relaxed">
            Join hands with us to ensure that economic status is no longer a deterrent to sporting excellence in India.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[#11698d] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center gap-2"
          >
            <Heart size={20} /> Partner With Us
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;