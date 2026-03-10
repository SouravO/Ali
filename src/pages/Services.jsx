import React from 'react';
import { Target, Shield, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "01",
      title: "Talent Identification",
      description: "Identifying elite talent aged 12–14 through professional scouting and providing them with a fully funded pathway to success.",
      icon: <Target size={40} className="text-[#11698d]" />,
      image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80",
      specs: ["Professional Scouting", "Elite Selection", "Aged 12-14"],
      path: "/services/talent-identification"
    },
    {
      id: "02",
      title: "Comprehensive Support",
      description: "Integrating professional coaching, academic support, and holistic nutritional care to ensure economic status is no longer a deterrent to sporting excellence.",
      icon: <Shield size={40} className="text-[#11698d]" />,
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80",
      specs: ["Academic Support", "Nutritional Care", "Financial Aid"],
      path: "/services/comprehensive-support"
    },
    {
      id: "03",
      title: "Mentorship",
      description: "Guiding young athletes through structured mentorship programs to realise their full potential both on and off the field.",
      icon: <Users size={40} className="text-[#11698d]" />,
      image: "https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?auto=format&fit=crop&q=80",
      specs: ["Life Skills", "Career Guidance", "Personal Growth"],
      path: "/services/mentorship-guidance"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans pt-24 pb-20 min-h-screen">
      
      {/* PAGE HEADER */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
            Our Service Ecosystem
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nurturing Potential.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our structured programs provide young athletes with the holistic support they need to succeed in sports and in life.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => (
            <div key={service.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100`}>
              
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Focus {i+1}</span>
                      <span className="text-sm font-semibold text-gray-800">{spec}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <button 
                    onClick={() => navigate(service.path)}
                    className="inline-flex items-center gap-3 bg-[#11698d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0c4e69] transition-colors shadow-md group"
                  >
                    Learn More <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gray-100 border-t border-gray-200 mt-8">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ready to support our mission?</h2>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Every contribution helps us provide better coaching, resources, and mentorship to young talents.
            </p>
            <button 
              onClick={() => navigate('/support')}
              className="bg-[#11698d] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#0c4e69] transition-colors shadow-sm inline-flex items-center gap-3"
            >
              Get Involved
            </button>
         </div>
      </section>

    </div>
  );
};

export default Services;
