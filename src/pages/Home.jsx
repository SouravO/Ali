import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Zap, Target, MoveRight, Users, Award, Phone, ChevronDown
} from 'lucide-react';

// Right to logo – Global BFSI Learning
const homeLogo = new URL('../assets/logo/WhatsApp_Image_2026-03-14_at_3,20,48_PM-removebg-preview-Picsart-AiImageEnhancer.png', import.meta.url).href;

const fadeInUp = {
  hidden: { opacity: 0, y: 60, skewY: 7 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);
  const bgRotation = useTransform(smoothProgress, [0, 1], [0, 45]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mailtoLink = `mailto:info@globalbfsilearning.com?subject=Guidance Request: ${formData.name}&body=Details:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AQualification: ${formData.qualification}%0D%0AStatus: ${formData.status}`;

  return (
    <div ref={containerRef} className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* --- SECTION 1: THE HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 p-4 md:p-6 pt-24 md:pt-20">
        <div className="absolute top-2 left-2 md:top-8 md:left-8 flex items-center gap-4">
          <img src={homeLogo} alt="Logo" className="w-24 md:w-48 h-auto object-contain" />
          {/* Global BFSI Learning */}
          <span className="montserrat-bold-green text-lg md:text-xl tracking-wide uppercase">Global BFSI Learning</span>
        </div>

        <motion.div style={{ scale: heroScale }} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 lg:order-1">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-black"></div>
              {/* We Build BFSI Professionals Who Stand Out */}
              <span className="font-bold tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-sm uppercase">We Build BFSI Professionals Who Stand Out</span>
            </motion.div>

            {/* DOMINATE THE BFSI INDUSTRY SHAPE YOUR GLOBAL CAREER */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] leading-[0.9] uppercase mb-6 md:mb-8 tracking-tighter">
              Dominate the <span className="text-[#ccff00] bg-black px-2 text-4xl md:text-7xl lg:text-8xl">BFSI Industry</span> <br /> 
              Shape Your Global Career.
            </h1>

            {/* Unlock elite BFSI expertise... */}
            <p className="max-w-xl font-bold text-base md:text-xl text-zinc-600 mb-8 md:mb-10 leading-relaxed border-l-4 border-[#ccff00] pl-4 md:pl-6">
              Unlock elite BFSI expertise, fast-track your career, land high-paying jobs, and grow continuously with our unlimited career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <a href="#curriculum">
                {/* Explore Training Program */}
                <button className="border-4 border-black px-6 md:px-8 py-4 md:py-5 rounded-full font-black uppercase text-base md:text-lg hover:bg-black hover:text-white transition-colors">
                  Explore Training Program
                </button>
              </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative order-1 lg:order-2 px-4 md:px-0">
            <div className="absolute -inset-2 md:-inset-4 border-4 border-black rounded-[30px] md:rounded-[40px] z-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
            {/* Change image to natural color building */}
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
              alt="Corporate Building" 
              className="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[40px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MOVING SLIDER --- */}
      <div className="bg-[#ccff00] py-6 md:py-10 border-y-[4px] md:border-y-[6px] border-black z-30 relative -rotate-2 scale-105 overflow-hidden shadow-2xl">
        <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 25, ease: "linear", repeat: Infinity }}>
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">Mentor by Industry Experts</span>
              <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">Job-Ready Preparation</span>
              <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">Resume That Gets Interview Calls</span>
              <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">Real Mock Interviews</span>
              <span className="text-black font-[1000] text-2xl md:text-4xl uppercase mx-10">Continuous Career Guidance</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- SECTION 3: COUNSELLING FORM --- */}
      <section className="py-20 md:py-40 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8 md:space-y-12">
            {/* Struggling to Get Interview Calls for BFSI Jobs? */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[1000] uppercase leading-none tracking-tighter">
              Struggling to Get <br/><span className="text-[#ccff00]">Interview Calls</span> <br/>for BFSI Jobs?
            </h2>
          </motion.div>

          {/* Form Column */}
          <motion.div className="bg-white text-black p-8 md:p-16 rounded-[40px] md:rounded-[60px] border-4 border-[#ccff00]">
            <h3 className="text-2xl md:text-3xl font-[1000] uppercase mb-8 leading-none">CLAIM YOUR FREE BFSI CAREER CONSULTATION</h3>
            <div className="space-y-4">
                <input name="name" placeholder="YOUR NAME" className="form-ultra" onChange={handleInputChange} />
                <input name="phone" placeholder="MOBILE NUMBER" className="form-ultra" onChange={handleInputChange} />
                
                {/* Qualification Dropdown */}
                <select name="qualification" className="form-ultra" onChange={handleInputChange}>
                  <option value="">SELECT QUALIFICATION</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BBA/BBM">BBA / BBM (Finance)</option>
                  <option value="MBA">MBA (Finance)</option>
                  <option value="M.Com">M.Com</option>
                </select>

                {/* Current Status with Working Professional */}
                <select name="status" className="form-ultra" onChange={handleInputChange}>
                   <option value="">CURRENT STATUS</option>
                   <option value="Student">Student</option>
                   <option value="Job Seeker">Job Seeker</option>
                   <option value="Working Professional">Working Professional</option>
                </select>
                
                <a href={mailtoLink} className="w-full bg-black text-[#ccff00] py-4 rounded-full font-[1000] text-xl uppercase text-center block">
                  Get Job Ready
                </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL NETWORK --- */}
      <section className="py-20 bg-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-[1000] uppercase tracking-tighter">
            🚀 Global Career Opportunities in BFSI Industry
          </h2>
        </div>
        <div className="border-y-4 border-black py-10">
          <Marquee velocity={40} direction="left" />
        </div>
      </section>

      {/* --- SECTION 5: THE METHOD --- */}
      <section className="py-20 md:py-40 px-6 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
           {/* SMART PATH */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] shadow-[10px_10px_0px_0px_#ccff00]">
                <h4 className="text-2xl font-[1000] uppercase mb-4">SMART PATH</h4>
                <p className="font-bold text-zinc-500 uppercase text-sm">Learn what the BFSI industry expects.</p>
           </div>
           {/* MOCK DRILLS */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] shadow-[10px_10px_0px_0px_#ccff00]">
                <h4 className="text-2xl font-[1000] uppercase mb-4">MOCK DRILLS</h4>
                <p className="font-bold text-zinc-500 uppercase text-sm">Mock Interviews Conducted by BFSI Industry Experts</p>
           </div>
           {/* UNLIMITED CAREER SUPPORT */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] shadow-[10px_10px_0px_0px_#ccff00]">
                <h4 className="text-2xl font-[1000] uppercase mb-4">UNLIMITED CAREER SUPPORT</h4>
                <p className="font-bold text-zinc-500 uppercase text-sm">Guidance and support until you secure a job — and even beyond your first paycheck.</p>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-4">
            <span className="text-[#ccff00]"><Phone size={32} /></span>
            <span className="text-2xl font-black">+91 7500611247</span>
          </div>
          
          <div className="text-center md:text-right">
            {/* Ready to Take the Next Step in Your BFSI Career? */}
            <p className="font-black text-2xl md:text-3xl uppercase mb-6">Ready to Take the Next Step in Your BFSI Career?</p>
            <div className="flex items-center gap-4 justify-center md:justify-end">
              {/* Concept: Group image/Hand pointing to button would be placed here visually */}
              <span className="hidden md:block animate-bounce text-[#ccff00]">👉</span>
              <button className="bg-[#ccff00] text-black px-10 py-5 rounded-full font-[1000] text-2xl uppercase">
                ENROLL NOW
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .form-ultra {
          width: 100%;
          background: #f8fafc;
          border: 2px solid #000;
          padding: 1.2rem;
          border-radius: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          outline: none;
        }
        .form-ultra:focus {
          border-color: #ccff00;
          box-shadow: 4px 4px 0px 0px #000;
        }
        .montserrat-bold-green {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          color: #1db954;
        }
      `}</style>
    </div>
  );
};

const Marquee = ({ velocity, direction }) => {
  // Adding Citi and others
  const companies = ["Citi", "Goldman Sachs", "Morgan Stanley", "JPMorgan", "HDFC Bank", "HSBC", "Standard Chartered"];
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }} transition={{ duration: velocity, repeat: Infinity, ease: "linear" }} className="flex gap-20 items-center">
        {[...companies, ...companies].map((c, i) => (
          <span key={i} className="text-3xl md:text-5xl font-[1000] uppercase italic text-black opacity-80">
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default GlobalBFSILanding;