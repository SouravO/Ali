import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Programmes = () => {
  const navigate = useNavigate();

  const initiatives = [
    {
      id: "INLL",
      title: "India's Next Legend League (INLL)",
      subtitle: "Flagship Initiative",
      description: "India’s Next Legend League (INLL) is a flagship initiative by the WAWU Foundation, designed to redefine the grassroots football landscape in India. While India possesses a vast, untapped reservoir of athletic potential, systemic barriers often prevent rural and underserved youth from reaching the professional stage.",
      details: "The INLL is not merely a tournament; it is a comprehensive talent identification and development ecosystem. Following a highly successful pilot in Kerala—which engaged over 2,000 participants across 14 districts—the program identifies elite talent aged 12–14 and provides them with a fully funded pathway to success.",
      features: [
        "Professional Coaching",
        "Academic Support",
        "Holistic Nutritional Care",
        "Fully Funded Pathway"
      ],
      image: "/assets/logo/Inll.png"
    },
    {
      id: "GoalQuest",
      title: "WAWU GoalQuest 2026",
      subtitle: "Internal Charity League",
      description: " WAWU GoalQuest is a structured corporate football tournament organised by WAWU Foundation to promote football culture, employee well-being, and meaningful workplace engagement through sport. The league brings together employees from participating organisations to compete in a professionally managed and competitive football environment. ",
      details: "This initiative goes beyond recreational activity. It is designed to create a strong sports culture within corporate environments, encouraging teamwork, collaboration, leadership, and healthy competition among employees. By stepping outside traditional work settings and onto the football field, participants experience stronger team bonding, improved communication, and enhanced collective performance.",
      features: [
        "Employee Well-being",
        "Social Responsibility",
        "Community Development",
        "Charity Driven"
      ],
      image: "/assets/logo/img1.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans pt-24 pb-20">
      
      {/* PAGE HEADER */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
            Our Initiatives
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming the Game <br /> for Good.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Through structured leagues and community programs, we are creating sustainable pathways for the next generation of football stars.
          </p>
        </motion.div>
      </section>

      {/* INITIATIVES LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {initiatives.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100`}
            >
              
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-[#11698d] text-sm font-bold tracking-wider uppercase">
                  {item.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{item.title}</h2>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>{item.description}</p>
                  <p>{item.details}</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Key Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-[#11698d] shrink-0" />
                        <span className="font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <div className={`rounded-2xl overflow-hidden shadow-lg aspect-[3/3] bg-gray-100 ${item.id === 'INLL' ? 'p-12 border border-gray-100 bg-white' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full ${item.id === 'INLL' ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-[#11698d] text-center px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join India's Football Revolution</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Whether you're an athlete, a volunteer, or a partner, there's a place for you in our mission.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[#11698d] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg inline-flex items-center gap-2"
          >
            Get Involved Today <ArrowRight size={20} />
          </button>
        </motion.div>
      </section>

    </div>
  );
};

export default Programmes;
