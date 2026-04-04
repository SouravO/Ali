import React, { useState, useEffect, useRef } from "react";

/**
 * GLOBAL BFSI LANDING PAGE
 * Version: 2.0.0 (Premium Corporate Edition)
 * Optimized for React, Tailwind CSS, and Framer Motion
 * Includes: Intersection Observer for scroll animations, high-fidelity UI components.
 */

// Simple FadeIn Wrapper using Intersection Observer Logic
const FadeIn = ({ children, delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    });
    const current = domRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  const getDirection = () => {
    if (direction === "up") return isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0";
    if (direction === "left") return isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0";
    if (direction === "right") return isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0";
    return isVisible ? "opacity-100" : "opacity-0";
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1000ms] ease-out transform ${getDirection()}`}
    >
      {children}
    </div>
  );
};

const GlobalBFSILanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    status: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 8000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Modern SVG Icons (Standard Paths)
  const Icons = {
    Phone: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    Whatsapp: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    Check: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    X: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    ArrowRight: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    Mail: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    )
  };

  const FormCard = ({ title, subtext, highlight = false }) => (
    <div className={`group relative overflow-hidden p-8 md:p-10 rounded-[2.5rem] transition-all duration-700 ${highlight ? 'bg-white shadow-[0_40px_100px_-15px_rgba(0,0,0,0.12)] border border-gray-100' : 'bg-white/90 backdrop-blur-md shadow-2xl border border-white/20'}`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-mango/10 rounded-full -mr-20 -mt-20 blur-[60px] group-hover:bg-mango/20 transition-colors" />
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight leading-[1.2]">{title}</h3>
        <p className="text-base text-gray-500 mb-10 font-medium leading-relaxed">{subtext}</p>

        <div className="space-y-5">
          <div className="relative">
            <input 
              name="name" 
              placeholder="Full Name" 
              onChange={handleChange} 
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-semibold" 
            />
          </div>
          <div className="relative">
            <input 
              name="phone" 
              placeholder="Phone / WhatsApp Number" 
              onChange={handleChange} 
              className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green focus:bg-white focus:border-transparent outline-none transition-all placeholder:text-gray-400 font-semibold" 
            />
          </div>

          <div className="grid grid-cols-1 gap-5">
            <select name="qualification" onChange={handleChange} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none appearance-none font-semibold text-gray-600 cursor-pointer">
              <option>Qualification</option>
              <option>B.Com</option>
              <option>BBA / BBM</option>
              <option>MBA</option>
              <option>Other</option>
            </select>

            <select name="status" onChange={handleChange} className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none appearance-none font-semibold text-gray-600 cursor-pointer">
              <option>Current Status</option>
              <option>Student</option>
              <option>Job Seeker</option>
              <option>Working Professional</option>
            </select>
          </div>

          <button className="w-full mt-4 py-5 bg-mango hover:bg-orange-600 text-white font-black rounded-2xl transition-all shadow-[0_15px_30px_-5px_rgba(249,115,22,0.3)] uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-3 active:scale-[0.98]">
            Talk to an expert now <Icons.ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-900 bg-[#FDFDFD] selection:bg-mango/30 selection:text-gray-900 antialiased overflow-x-hidden">
      
      {/* 0. Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-forest-green rounded-lg flex items-center justify-center text-white text-xs">G</div>
            GLOBAL <span className="text-mango">BFSI</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex gap-8 text-sm font-bold text-gray-600">
              <a href="#" className="hover:text-forest-green transition-colors">Program</a>
              <a href="#" className="hover:text-forest-green transition-colors">Career Path</a>
              <a href="#" className="hover:text-forest-green transition-colors">Placement</a>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <a href="https://wa.me/919663384594" className="flex items-center gap-2 text-white bg-forest-green px-6 py-3 rounded-full font-bold text-sm hover:shadow-[0_10px_20px_rgba(5,74,41,0.2)] transition-all hover:-translate-y-0.5 active:scale-95">
              Get Started
            </a>
          </div>

          <a href="tel:+919663384594" className="lg:hidden text-forest-green p-2">
            <Icons.Phone />
          </a>
        </div>
      </nav>

      {/* 1. Hero Section - Cinematic Corporate Style */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-[-2]">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover opacity-[0.03] scale-105"
            alt="Corporate Background"
          />
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-green/5 blur-[150px] rounded-full -z-10 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mango/5 blur-[120px] rounded-full -z-10 -translate-x-1/2 translate-y-1/4" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <div>
            <FadeIn delay={100} direction="up">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-forest-green/5 text-forest-green text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-8 border border-forest-green/10">
                <span className="flex h-2 w-2 rounded-full bg-forest-green animate-pulse" />
                Premium BFSI Training
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-gray-900 mb-8 leading-[0.95] tracking-tight">
                Turn your finance degree into a <span className="text-forest-green italic">job-ready</span> BFSI career.
              </h1>
            </FadeIn>

            <FadeIn delay={500} direction="up">
              <p className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed font-medium max-w-xl">
                Become job-ready for investment banking operations | capital markets operations | financial services operations.
              </p>
            </FadeIn>
            
            <FadeIn delay={700} direction="up">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {[
                  "Industry-expert training",
                  "Resume that gets interviews",
                  "Real mock interview practice",
                  "Placement support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white p-5 rounded-[1.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                    <div className="bg-forest-green text-white p-1 rounded-lg group-hover:rotate-12 transition-transform">
                      <Icons.Check />
                    </div>
                    <span className="font-bold text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={900} direction="up">
              <div className="flex flex-wrap gap-5">
                <button className="px-10 py-6 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95">
                  Book Free Consultation
                </button>
                <div className="flex -space-x-3 items-center ml-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                    </div>
                  ))}
                  <div className="pl-6 text-sm font-bold text-gray-500 underline underline-offset-4">Join 500+ BFSI Professionals</div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400} direction="left">
            <div className="relative lg:ml-auto w-full max-w-lg">
              <div className="absolute inset-0 bg-forest-green/10 -rotate-3 rounded-[3rem] blur-2xl" />
              <FormCard 
                title="Get free career guidance for BFSI roles" 
                subtext="Understand BFSI roles, required skills, and how to get interview calls"
                highlight={true}
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 bg-mango/10 text-mango rounded-full flex items-center justify-center">
                  <Icons.ArrowRight />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Next Batch</div>
                  <div className="text-sm font-black text-gray-900">Starting Soon</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Problem Hook - Clean Bento Layout */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Struggling to get interview calls?</h2>
              <div className="h-2 w-32 bg-mango mx-auto rounded-full" />
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              "Good degree but no practical skills",
              "Not sure which BFSI role to choose",
              "Resume not getting shortlisted",
              "Interviews feel difficult"
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 150} direction="up">
                <div className="group h-full p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-red-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                  <div className="text-red-500 mb-8 bg-red-50 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                    <Icons.X />
                  </div>
                  <span className="text-xl font-black text-gray-800 leading-snug tracking-tight">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={600} direction="up">
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -top-10 -left-10 text-[120px] font-serif text-forest-green/5 select-none leading-none">“</div>
              <p className="text-2xl md:text-4xl text-center font-black text-forest-green italic leading-relaxed relative z-10">
                "We prepare you with the right skills and support to start getting interview calls."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. BFSI Opportunity - High Tech Corporate Look */}
      <section className="py-32 bg-gray-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(5,74,41,0.2),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-20 tracking-tight leading-tight">
              Global demand for <span className="text-mango">BFSI professionals</span> is rising fast
            </h2>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-20 grayscale invert mb-24">
              <span className="text-2xl md:text-4xl font-black tracking-[12px] hover:opacity-100 transition-opacity">GOLDMAN SACHS</span>
              <span className="text-2xl md:text-4xl font-black tracking-[12px] hover:opacity-100 transition-opacity">JPMORGAN</span>
              <span className="text-2xl md:text-4xl font-black tracking-[12px] hover:opacity-100 transition-opacity">CITI</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Investment Banking', 'Capital Markets', 'Financial Services', 'Corporate Actions'].map((text, i) => (
              <FadeIn key={text} delay={i * 200} direction="up">
                <div className="group p-10 bg-white/5 border border-white/10 rounded-[2rem] font-black text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 cursor-default">
                  <div className="w-12 h-1 bg-mango mb-6 group-hover:w-full transition-all duration-500" />
                  {text}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Solution & Smart Path - Modern Alternating Grid */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <FadeIn direction="right">
            <div>
              <div className="text-mango text-xl font-black mb-4 tracking-tighter flex items-center gap-4">
                <div className="w-12 h-px bg-mango" /> smart path
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-12 text-gray-900 leading-tight">
                How Global BFSI Learning makes you job-ready
              </h3>
              <div className="grid gap-6">
                {[
                  "Industry-expert designed training",
                  "Practical financial market learning",
                  "Understanding real BFSI roles",
                  "Resume writing & mock interviews",
                  "Job search & unlimited placement support",
                  "Build skills and get job-ready"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="bg-forest-green/10 text-forest-green p-2 rounded-xl group-hover:bg-forest-green group-hover:text-white transition-all duration-300">
                      <Icons.Check />
                    </div> 
                    <span className="font-bold text-lg text-gray-700 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="bg-forest-green p-12 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(5,74,41,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-mango/20 rounded-full -ml-30 -mb-30 blur-2xl" />
              
              <h3 className="text-3xl md:text-4xl font-black mb-12 text-white leading-tight relative z-10">
                Learn what the BFSI industry actually expects
              </h3>
              
              <ul className="space-y-10 relative z-10">
                {[
                  { n: "1", h: "Job-specific learning", p: "Focused on what you do at the desk." },
                  { n: "2", h: "No unnecessary theory", p: "Cutting the fluff, keeping the core." },
                  { n: "3", h: "Focus on employability", p: "Skills that get you hired immediately." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-8 group">
                    <span className="w-16 h-16 bg-mango text-white rounded-[1.5rem] flex items-center justify-center shrink-0 font-black text-2xl shadow-xl group-hover:rotate-6 transition-transform italic">
                      {item.n}
                    </span>
                    <div>
                      <h4 className="font-black text-xl text-white mb-2 uppercase tracking-wide">{item.h}</h4>
                      <p className="text-white/70 text-lg font-medium leading-relaxed">{item.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 6. Program Section - Dark Professional */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10 items-center">
          <FadeIn direction="right">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-[1.1] tracking-tight">
                Investment Banking & Capital Market Operations
              </h2>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-mango font-black text-xl uppercase tracking-widest">What you will learn</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <ul className="grid gap-8">
                {[
                  "Strong foundation in Investment Banking, Financial Services & Capital Markets",
                  "Understanding Financial Markets, Key Players & Trading Processes",
                  "Trade Life Cycle of Equities (Exchange-traded)",
                  "Clearing & Settlement Processes in Capital Markets",
                  "In-depth learning of Corporate Actions in Investment Banking",
                  "Real-world Case Studies for practical role understanding"
                ].map((item, i) => (
                  <li key={i} className="flex gap-6 items-start group">
                    <div className="mt-2 w-3 h-3 bg-mango rounded-full shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.8)] group-hover:scale-150 transition-transform" /> 
                    <span className="text-gray-300 font-bold text-lg leading-relaxed group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-16 p-8 rounded-3xl border-l-8 border-mango bg-white/5 backdrop-blur-sm font-black italic text-xl md:text-2xl text-white shadow-2xl">
                "Designed to make you job-ready from day 1"
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="relative">
               <div className="absolute -inset-10 bg-white/5 blur-3xl rounded-[40px] -z-10" />
               <FormCard 
                title="Not sure which BFSI role is right for you?" 
                subtext="Get professional guidance on career paths and salary expectations."
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Process Visual Flow - Dynamic Timeline */}
      <section className="py-32 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-center text-xs font-black uppercase tracking-[12px] text-gray-400 mb-24">
              Our Roadmap to Success
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 relative z-10">
              {[
                { n: "01", t: "Career Clarity" },
                { n: "02", t: "Learning" },
                { n: "03", t: "Resume" },
                { n: "04", t: "Mock Interviews" },
                { n: "05", t: "Placement Support" }
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 200} direction="up">
                  <div className="text-center group">
                    <div className="w-24 h-24 mx-auto bg-forest-green text-white rounded-[2.5rem] flex items-center justify-center font-black text-3xl mb-8 shadow-2xl group-hover:rotate-12 group-hover:bg-mango transition-all duration-500 ring-8 ring-white">
                      {step.n}
                    </div>
                    <span className="font-black text-sm uppercase tracking-[0.2em] text-gray-900 group-hover:text-forest-green transition-colors">{step.t}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Differentiation Table - Ultra Modern Table */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight">Why Global BFSI Learning stands out</h2>
          </FadeIn>

          <FadeIn direction="up" delay={300}>
            <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-950 text-white">
                      <th className="p-10 font-black uppercase text-xs tracking-[5px]">Feature</th>
                      <th className="p-10 font-black uppercase text-xs tracking-[5px]">Others</th>
                      <th className="p-10 font-black uppercase text-xs tracking-[5px] text-mango bg-white/5">Global BFSI Learning</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Curriculum", "Theory-focused learning", "Practical, industry-oriented training"],
                      ["Mentorship", "Limited guidance", "Mentorship from BFSI industry experts"],
                      ["Interview Prep", "No structured interview prep", "Mock interviews based on real scenarios"],
                      ["Career Path", "No career direction", "Clear understanding of BFSI roles"],
                      ["Outcomes", "No placement focus", "Job search support & placement assistance"],
                      ["Focus", "Learning only", "Skill development + job-ready preparation"]
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/80 transition-colors group">
                        <td className="p-10 font-black text-gray-400 text-[11px] uppercase tracking-[3px]">{row[0]}</td>
                        <td className="p-10 text-gray-500 font-bold text-lg">{row[1]}</td>
                        <td className="p-10 font-black text-forest-green bg-forest-green/[0.02] text-lg group-hover:bg-forest-green/[0.05] transition-colors">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={500}>
            <p className="text-center mt-20 font-black text-3xl md:text-4xl text-mango leading-tight tracking-tight max-w-3xl mx-auto">
              Not just training — resume & interview support to help you get hired.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 9. WhatsApp Conversion Block - Action Oriented */}
      <section className="py-32 bg-forest-green text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-7xl font-black mb-12 tracking-tight">Not sure which BFSI career suits you?</h2>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {["Get Clarity", "Know Your Path", "Get Expert Guidance"].map((item, idx) => (
                <span key={idx} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest bg-white/10 px-8 py-4 rounded-2xl border border-white/10 backdrop-blur-md">
                  <Icons.Check /> {item}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={400}>
            <a href="https://wa.me/919663384594" className="group inline-flex items-center gap-5 px-14 py-8 bg-white text-forest-green font-black rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-lg">
              <div className="bg-[#25D366] p-2 rounded-lg text-white group-hover:rotate-[360deg] transition-transform duration-700">
                <Icons.Whatsapp />
              </div> 
              Chat on WhatsApp Now
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 10. Final CTA - Minimalist & Bold */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="text-gray-300 font-black uppercase text-sm tracking-[15px] mb-8 block">Foundation to Finance</span>
            <h3 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter leading-[0.9]">Ready to take the <br /> <span className="text-forest-green italic underline decoration-mango decoration-8 underline-offset-[16px]">next step?</span></h3>
          </FadeIn>

          <div className="max-w-2xl mx-auto relative">
            <div className="absolute -inset-1 rounded-[3rem] bg-gradient-to-tr from-forest-green to-mango opacity-20 blur-xl" />
            <FormCard 
              title="Book Free Career Consultation" 
              subtext="Last few slots available for this month's cohort."
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* Footer - Elegant Dark */}
      <footer className="bg-gray-950 text-white py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="max-w-sm">
            <div className="text-4xl font-black tracking-tighter mb-8">GLOBAL <span className="text-mango">BFSI</span></div>
            <p className="text-gray-500 font-bold text-xl leading-relaxed mb-8">
              Expert training for future financial leaders. Empowering the next generation of investment bankers.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 hover:bg-mango transition-colors cursor-pointer" />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-24">
            <div className="flex flex-col gap-6">
              <span className="text-gray-600 font-black uppercase text-xs tracking-[5px]">Contact Us</span>
              <a href="tel:+919663384594" className="text-2xl font-bold hover:text-mango transition-colors flex items-center gap-4">
                <Icons.Phone /> +91 9663384594
              </a>
              <a href="mailto:info@globalbfsi.com" className="text-2xl font-bold hover:text-mango transition-colors flex items-center gap-4">
                <Icons.Mail /> info@globalbfsi.com
              </a>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-gray-600 font-black uppercase text-xs tracking-[5px]">Office</span>
              <p className="text-xl font-bold text-gray-400">
                Bengaluru, Karnataka <br /> India
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-xs font-black tracking-widest uppercase">
          <span>© 2026 GLOBAL BFSI LEARNING. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

      {/* Sticky Quick Actions */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-5 z-[100]">
        <a href="tel:+919663384594" className="w-16 h-16 bg-gray-950 text-white rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border border-white/10">
          <Icons.Phone />
        </a>
        <a href="https://wa.me/919663384594" className="w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <Icons.Whatsapp />
        </a>
      </div>

      {/* Modern Pop-up - Centered & Glassy */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-950/60 backdrop-blur-xl z-[200] flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-transparent max-w-xl w-full relative animate-zoomIn">
            <button 
              onClick={() => setShowPopup(false)} 
              className="absolute -top-16 right-0 w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/20"
            >
              <Icons.X />
            </button>
            <FormCard 
              title="Get free career guidance" 
              subtext="Start your journey in finance with experts"
            />
          </div>
        </div>
      )}

      {/* Utility Styles */}
      <style jsx>{`
        .text-forest-green { color: #054a29; }
        .bg-forest-green { background-color: #054a29; }
        .border-forest-green { border-color: #054a29; }
        .text-mango { color: #f97316; }
        .bg-mango { background-color: #f97316; }
        .border-mango { border-color: #f97316; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { transform: scale(0.9) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }
        
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
};

export default GlobalBFSILanding;