import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Zap, Target, Users, Award, Phone
} from 'lucide-react';

// Right to logo – Global BFSI Learning
const homeLogo = new URL('../assets/logo/WhatsApp_Image_2026-03-14_at_3,20,48_PM-removebg-preview-Picsart-AiImageEnhancer.png', import.meta.url).href;

const GlobalBFSILanding = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroScale = useTransform(smoothProgress, [0, 0.2], [1, 0.8]);

  // --- FORM STATE ---
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

  // Constructing the Mailto Link with all new fields 
  const mailtoLink = `mailto:info@globalbfsilearning.com?subject=BFSI Consultation Request: ${formData.name}&body=Details:%0D%0AName: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AQualification: ${formData.qualification}%0D%0AStatus: ${formData.status}`;

  // Function for button scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="bg-[#f0f4f8] text-black font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* --- SECTION 1: THE HERO --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 p-4 md:p-6 pt-24 md:pt-20">
        <div className="absolute top-2 left-2 md:top-8 md:left-8 flex items-center gap-4">
          <img src={homeLogo} alt="Logo" className="w-24 md:w-48 h-auto object-contain" />
          {/* */}
          <span className="montserrat-bold-green text-lg md:text-xl tracking-wide uppercase">Global BFSI Learning</span>
        </div>

        <motion.div style={{ scale: heroScale }} className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left order-2 lg:order-1">
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="h-[2px] w-8 md:w-12 bg-black"></div>
              {/* */}
              <span className="font-bold tracking-tighter text-xs md:text-sm uppercase">We Build BFSI Professionals Who Stand Out</span>
            </motion.div>

            {/* */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-[1000] leading-[0.9] uppercase mb-6 md:mb-8 tracking-tighter">
              DOMINATE THE <span className="text-[#ccff00] bg-black px-2">BFSI INDUSTRY</span> <br /> 
              SHAPE YOUR GLOBAL CAREER
            </h1>

            {/* */}
            <p className="max-w-xl font-bold text-base md:text-xl text-zinc-600 mb-8 md:mb-10 leading-relaxed border-l-4 border-[#ccff00] pl-4 md:pl-6">
              Unlock elite BFSI expertise, fast-track your career, land high-paying jobs, and grow continuously with our unlimited career support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              {/* Button Fixed */}
              <button 
                onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
                className="border-4 border-black px-6 md:px-8 py-4 md:py-5 rounded-full font-black uppercase text-base md:text-lg hover:bg-black hover:text-white transition-colors"
              >
                Explore Training Program
              </button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative order-1 lg:order-2 px-4 md:px-0">
            <div className="absolute -inset-2 md:-inset-4 border-4 border-black rounded-[30px] md:rounded-[40px] z-0 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4"></div>
            {/* Natural color building */}
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
              alt="Corporate Finance" 
              className="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-[30px] md:rounded-[40px]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MOVING SLIDER --- */}
      <div className="bg-[#ccff00] py-6 md:py-10 border-y-[4px] border-black z-30 relative -rotate-1 overflow-hidden">
        <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, ease: "linear", repeat: Infinity }}>
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
      <section id="consultation" className="py-20 md:py-40 px-6 bg-black text-white relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {/* */}
            <h2 className="text-4xl md:text-7xl font-[1000] uppercase leading-none text-[#ccff00]">
              Struggling to Get <br/>Interview Calls <br/>for BFSI Jobs?
            </h2>
          </div>

          {/* Form */}
          <div className="bg-white text-black p-8 md:p-12 rounded-[40px] border-b-8 border-r-8 border-[#ccff00]">
            <h3 className="text-2xl md:text-3xl font-[1000] uppercase mb-8">CLAIM YOUR FREE BFSI CAREER CONSULTATION</h3>
            <div className="space-y-4">
                <input name="name" placeholder="YOUR NAME" className="form-ultra" onChange={handleInputChange} />
                <input name="phone" placeholder="MOBILE NUMBER" className="form-ultra" onChange={handleInputChange} />
                
                {/* Qualification Dropdown */}
                <select name="qualification" className="form-ultra" onChange={handleInputChange}>
                  <option value="">QUALIFICATION</option>
                  <option value="B.Com">B.Com</option>
                  <option value="BBA/BBM">BBA / BBM (Finance)</option>
                  <option value="MBA">MBA (Finance)</option>
                  <option value="M.Com">M.Com</option>
                </select>

                {/* Status with Working Professional */}
                <select name="status" className="form-ultra" onChange={handleInputChange}>
                   <option value="">CURRENT STATUS</option>
                   <option value="Student">Student</option>
                   <option value="Job Seeker">Job Seeker</option>
                   <option value="Working Professional">Working Professional</option>
                </select>
                
                {/* Submit Button */}
                <a href={mailtoLink} className="w-full bg-black text-[#ccff00] py-5 rounded-full font-[1000] text-xl uppercase text-center block hover:scale-95 transition-transform">
                  Claim Consultation
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: GLOBAL NETWORK --- */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10 px-4">
          <h2 className="text-3xl md:text-5xl font-[1000] uppercase">
            🚀 Global Career Opportunities in BFSI Industry
          </h2>
        </div>
        <div className="border-y-4 border-black py-12 bg-zinc-50">
          <Marquee velocity={35} direction="left" />
        </div>
      </section>

      {/* --- SECTION 5: THE METHOD --- */}
      <section className="py-20 md:py-40 px-6 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] hover:bg-[#ccff00] transition-colors group">
                <h4 className="text-2xl font-[1000] uppercase mb-4">SMART PATH</h4>
                <p className="font-bold text-zinc-500 group-hover:text-black">Learn what the BFSI industry expects.</p>
           </div>
           {/* */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] hover:bg-[#ccff00] transition-colors group">
                <h4 className="text-2xl font-[1000] uppercase mb-4">MOCK DRILLS</h4>
                <p className="font-bold text-zinc-500 group-hover:text-black">Mock Interviews Conducted by BFSI Industry Experts</p>
           </div>
           {/* */}
           <div className="bg-white border-4 border-black p-8 rounded-[30px] hover:bg-[#ccff00] transition-colors group">
                <h4 className="text-2xl font-[1000] uppercase mb-4 text-sm md:text-2xl">UNLIMITED CAREER SUPPORT</h4>
                <p className="font-bold text-zinc-500 group-hover:text-black">Guidance and support until you secure a job — and even beyond your first paycheck.</p>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-full text-black"><Phone size={24} /></div>
            <span className="text-2xl font-black">7500611247</span>
          </div>
          
          <div className="text-center md:text-right flex flex-col items-center md:items-end">
            {/* */}
            <p className="font-black text-2xl md:text-4xl uppercase mb-8">Ready to Take the Next Step in Your BFSI Career?</p>
            
            <div className="flex items-center gap-6">
               {/* Visual cue for Enroll */}
               <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" className="w-12 h-12 invert animate-pulse hidden md:block" alt="point" />
               
               {/* Enroll Now Button Fixed */}
               <button 
                onClick={() => window.open('https://globalbfsilearning.com/', '_blank')}
                className="bg-[#ccff00] text-black px-12 py-6 rounded-full font-[1000] text-2xl uppercase hover:scale-110 transition-transform shadow-xl"
               >
                 ENROLL NOW
               </button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .form-ultra {
          width: 100%;
          background: #f1f5f9;
          border: 3px solid #000;
          padding: 1rem;
          border-radius: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          outline: none;
        }
        .form-ultra:focus {
          background: white;
          border-color: #ccff00;
        }
        .montserrat-bold-green {
          font-family: 'Montserrat', sans-serif;
          font-weight: 900;
          color: #006400;
        }
      `}</style>
    </div>
  );
};

const Marquee = ({ velocity, direction }) => {
  // Updated Logos
  const companies = ["Citi", "Goldman Sachs", "Morgan Stanley", "JPMorgan", "HDFC Bank", "HSBC", "Standard Chartered", "Nomura", "Barclays"];
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div animate={{ x: direction === "left" ? [0, -1000] : [-1000, 0] }} transition={{ duration: velocity, repeat: Infinity, ease: "linear" }} className="flex gap-20 items-center">
        {[...companies, ...companies].map((c, i) => (
          <span key={i} className="text-4xl md:text-6xl font-[1000] uppercase italic text-black/20 hover:text-black transition-colors cursor-default">
            {c}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default GlobalBFSILanding;