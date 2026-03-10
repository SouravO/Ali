import React from 'react';
import { Target, Trophy, Shield, Heart, Users, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const coreValues = [
    { name: "Inclusivity", icon: <Users size={32} className="text-[#11698d]" /> },
    { name: "Integrity", icon: <Shield size={32} className="text-[#11698d]" /> },
    { name: "Dedication", icon: <Heart size={32} className="text-[#11698d]" /> },
    { name: "Empowerment", icon: <Trophy size={32} className="text-[#11698d]" /> }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/logo/Banner.png" 
            alt="Children playing football" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/20 text-blue-200 text-sm font-semibold tracking-wider mb-6">
              WAWU FOUNDATION
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              
              Bridging <span className="text-[#4cb5e5]">talent</span> and <span className="text-[#4cb5e5]">opportunity</span> through football.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
              We are a dedicated non-profit organisation committed to the upliftment and empowerment of young, talented football players from communities with limited access to opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/program')}
                className="bg-[#11698d] hover:bg-[#0c4e69] text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center gap-2 shadow-lg"
              >
                Our Initiatives <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUICK STATS / INTRO STRIP --- */}
      <section className="bg-[#11698d] py-12 relative z-20 -mt-8 mx-4 sm:mx-6 lg:mx-auto max-w-7xl rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 px-8">
          <div className="py-6 md:py-0 md:px-8 text-center flex flex-col items-center justify-center">
            <Trophy className="text-white mb-3 opacity-80" size={32} />
            <h3 className="text-3xl font-bold text-white mb-1">4000+</h3>
            <p className="text-blue-100 font-medium">Youth Reached</p>
          </div>
          <div className="py-6 md:py-0 md:px-8 text-center flex flex-col items-center justify-center">
            <Target className="text-white mb-3 opacity-80" size={32} />
            <h3 className="text-3xl font-bold text-white mb-1">14</h3>
            <p className="text-blue-100 font-medium">Districts Covered</p>
          </div>
          <div className="py-6 md:py-0 md:px-8 text-center flex flex-col items-center justify-center">
            <MapPin className="text-white mb-3 opacity-80" size={32} />
            <h3 className="text-3xl font-bold text-white mb-1">1</h3>
            <p className="text-blue-100 font-medium">Unified Mission</p>
          </div>
        </div>
      </section>

      {/* --- ABOUT INTRO --- */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[#11698d] font-bold tracking-wider uppercase text-sm mb-3">Who We Are</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                More than just a game. A tool for community transformation.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WAWU Foundation believes football is a powerful tool for personal growth, social mobility, and community transformation. Through structured programs, mentorship, and holistic support, we enable aspiring footballers to realise their full potential both on and off the field.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our initiatives have helped numerous young players gain access to academic institutions, professional club environments, and opportunities to represent teams at state and national levels.
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="text-[#11698d] font-bold text-lg hover:text-[#0c4e69] flex items-center gap-2 group"
              >
                Read our full story 
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/assets/logo/home.jpg" 
                alt="Young footballers" 
                className="w-full h-full object-cover aspect-[3/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#11698d]/10 rounded-full flex items-center justify-center mb-8">
                <Target className="text-[#11698d]" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
To bridge the gap between talent and opportunity by identifying and nurturing promising young footballers through world-class training, educational support, and holistic life skills development.We are committed to empowering teenagers through structured football programs that promote discipline, resilience, mental well-being, and drug-free lifestyles creating a safe and supportive environment where young individuals can grow into confident, responsible leaders.              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#11698d] rounded-2xl p-10 md:p-14 shadow-lg text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-8">
                <Trophy className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
              <p className="text-xl text-blue-50 leading-relaxed">
                To build an inclusive and empowered generation where football becomes a powerful catalyst for social transformation breaking social and economic barriers, strengthening mental health, preventing substance abuse, and inspiring young people to lead positive change within their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#11698d] font-bold tracking-wider uppercase text-sm mb-3">Our Foundation</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-16">Core Values</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{value.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INITIATIVES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#11698d] font-bold tracking-wider uppercase text-sm mb-3">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">Flagship Initiatives</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* INLL */}
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative bg-gray-100">
                <img 
                  src="/assets/logo/Inll.png" 
                  alt="INLL" 
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">India's Next Legend League</h4>
                  <p className="text-[#11698d] font-semibold mb-6">INLL</p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    A comprehensive talent identification and development ecosystem. Following a highly successful pilot in Kerala engaging over 2,000 participants, the program identifies elite talent and provides a fully funded pathway to success.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/program')}
                  className="w-full py-4 border-2 border-[#11698d] text-[#11698d] font-bold rounded-lg hover:bg-[#11698d] hover:text-white transition-colors"
                >
                  Discover INLL
                </button>
              </div>
            </div>

            {/* GoalQuest */}
            <div className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80" 
                  alt="WAWU GoalQuest" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-10 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">WAWU GoalQuest 2026</h4>
                  <p className="text-[#11698d] font-semibold mb-6">Internal Charity League</p>
                  <p className="text-gray-600 leading-relaxed mb-8">
WAWU GoalQuest is a structured corporate football tournament organised by WAWU Foundation to promote football culture, employee well-being, and meaningful workplace engagement through sport.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/program')}
                  className="w-full py-4 border-2 border-[#11698d] text-[#11698d] font-bold rounded-lg hover:bg-[#11698d] hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DONATE & ACCOUNTABILITY SECTION --- */}
      <section id="donate-section" className="py-24 bg-[#11698d] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                 <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" fillOpacity="1"/>
                 </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#pattern)"/>
           </svg>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Support Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Your support provides essential training, education, and resources to talented youth who need it most. Join us in making a lasting impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Shield size={24} className="text-[#4cb5e5]" /> Accountability
              </h3>
              <p className="text-blue-50 mb-4">We are committed to full transparency and integrity in our operations.</p>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cb5e5]" />
                  <span>80G Certificate Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cb5e5]" />
                  <span>12A Registration Certified</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4cb5e5]" />
                  <span>Annual Impact Reports</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-gray-900 text-xl font-bold mb-4 flex items-center gap-2">
                <Heart size={24} className="text-[#11698d]" /> Make a Donation
              </h3>
              <p className="text-gray-600 mb-6">Contact us directly for bank details or collaboration opportunities.</p>
              <div className="space-y-4">
                <button 
                  onClick={() => navigate('/support')}
                  className="w-full bg-[#11698d] hover:bg-[#0c4e69] text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
                >
                  <Heart size={20} /> Donate Now
                </button>
                <button 
                  onClick={() => navigate('/accountability')}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2"
                >
                  View Certificates
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-blue-200 text-sm italic">
            "Bridging the gap between raw talent and real opportunity."
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
