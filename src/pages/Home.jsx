import React, { useState, useEffect } from "react";

const GlobalBFSILanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    status: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Modern Styled Icons
  const Icons = {
    Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    Whatsapp: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
    Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
    X: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>,
    Arrow: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  };

  const FormCard = ({ title, subtext, highlight = false }) => (
    <div className={`relative overflow-hidden p-8 rounded-3xl transition-all duration-500 ${highlight ? 'bg-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.2)] border border-gray-100' : 'bg-white shadow-xl border border-gray-100'}`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-mango/5 rounded-full -mr-16 -mt-16 blur-3xl" />
      
      <h3 className="text-2xl font-black text-gray-900 mb-2 leading-tight tracking-tight">{title}</h3>
      <p className="text-sm text-gray-500 mb-8 font-medium leading-relaxed">{subtext}</p>

      <div className="space-y-4 relative z-10">
        <div className="group">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium" />
        </div>
        <div className="group">
          <input name="phone" placeholder="Phone / WhatsApp Number" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none transition-all placeholder:text-gray-400 font-medium" />
        </div>

        <select name="qualification" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none appearance-none font-medium text-gray-600 cursor-pointer">
          <option>Qualification</option>
          <option>B.Com</option>
          <option>BBA / BBM</option>
          <option>MBA</option>
          <option>Other</option>
        </select>

        <select name="status" onChange={handleChange} className="w-full p-4 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-forest-green focus:bg-white outline-none appearance-none font-medium text-gray-600 cursor-pointer">
          <option>Current Status</option>
          <option>Student</option>
          <option>Job Seeker</option>
          <option>Working Professional</option>
        </select>

        <button className="w-full py-5 bg-mango hover:bg-orange-600 text-white font-black rounded-xl transition-all shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] uppercase tracking-widest text-sm active:scale-95">
          Talk to an expert now
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-900 bg-[#FAFAFA] selection:bg-mango selection:text-white antialiased">
      
      {/* Dynamic Top Bar */}
      <div className="sticky top-0 z-[60] bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter">GLOBAL <span className="text-mango underline decoration-2 underline-offset-4">BFSI</span></div>
          <div className="hidden md:flex gap-6 items-center">
            <a href="tel:+919663384594" className="flex items-center gap-2 text-forest-green font-bold text-sm bg-forest-green/5 px-4 py-2 rounded-full hover:bg-forest-green/10 transition-colors">
              <Icons.Phone /> +91 9663384594
            </a>
            <a href="https://wa.me/919663384594" className="flex items-center gap-2 text-white bg-[#25D366] px-5 py-2 rounded-full font-bold text-sm hover:shadow-lg transition-all active:scale-95">
              <Icons.Whatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 1. Hero Section - Refined Glassmorphism */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden" style={{backgroundImage: `url("public/assets/logo/bg.avif")`, backgroundSize: 'cover', backgroundPosition: 'center'}} >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-forest-green/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-green/10 text-forest-green text-xs font-black uppercase tracking-widest mb-6">
              <span className="flex h-2 w-2 rounded-full bg-forest-green animate-pulse" /> Premium BFSI Training
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
              Turn your finance degree into a <span className="text-forest-green">job-ready</span> BFSI career.
            </h1>
            <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium max-w-xl">
              Become job-ready for investment banking operations | capital markets operations | financial services operations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Industry-expert training",
                "Resume that gets interviews",
                "Real mock interview practice",
                "Placement support"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="bg-forest-green text-white p-1 rounded-full"><Icons.Check /></div>
                  <span className="font-bold text-gray-700 text-sm tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all shadow-2xl active:scale-95">Book Free Consultation</button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-forest-green rotate-3 rounded-[40px] opacity-5 -z-10 blur-xl" />
            <FormCard 
              title="Get free career guidance for BFSI roles" 
              subtext="Understand BFSI roles, required skills, and how to get interview calls"
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* 2. Problem Hook - Clean Bento Layout */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Struggling to get interview calls?</h2>
            <div className="h-1.5 w-24 bg-mango mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Good degree but no practical skills",
              "Not sure which BFSI role to choose",
              "Resume not getting shortlisted",
              "Interviews feel difficult"
            ].map((item, i) => (
              <div key={i} className="group p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                <div className="text-red-500 mb-6 group-hover:scale-110 transition-transform"><Icons.X /></div>
                <span className="font-black text-gray-800 leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-2xl text-center font-black text-forest-green italic max-w-3xl mx-auto leading-relaxed">
            "We prepare you with the right skills and support to start getting interview calls."
          </p>
        </div>
      </section>

      {/* 3. BFSI Opportunity - High Tech Corporate Look */}
      <section className="py-24 bg-gray-50 border-y border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black mb-16 tracking-tight">Global demand for BFSI professionals is rising fast</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale contrast-125 mb-20">
            <span className="text-3xl font-black tracking-[10px]">GOLDMAN SACHS</span>
            <span className="text-3xl font-black tracking-[10px]">JPMORGAN</span>
            <span className="text-3xl font-black tracking-[10px]">CITI</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Investment Banking', 'Capital Markets', 'Financial Services', 'Corporate Actions'].map(text => (
              <div key={text} className="p-8 bg-white shadow-xl shadow-gray-200/50 rounded-2xl font-black text-forest-green border-t-4 border-mango hover:-translate-y-2 transition-all cursor-default">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 & 5. Solution & Smart Path - Modern Alternating Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-6xl font-black mb-4 text-mango italic lowercase tracking-tighter">smart path</h2>
            <h3 className="text-4xl font-black mb-10 text-gray-900">How Global BFSI Learning makes you job-ready</h3>
            <div className="grid gap-6">
              {[
                "Industry-expert designed training",
                "Practical financial market learning",
                "Understanding real BFSI roles",
                "Resume writing & mock interviews",
                "Job search & unlimited placement support",
                "Build skills and get job-ready"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="bg-forest-green/10 text-forest-green p-1.5 rounded-lg group-hover:bg-forest-green group-hover:text-white transition-colors"><Icons.Check /></div> 
                  <span className="font-bold text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-forest-green p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
            <h3 className="text-3xl font-black mb-10 text-white leading-tight">Learn what the BFSI industry actually expects</h3>
            <ul className="space-y-8 relative z-10">
              {[
                { n: "1", h: "Job-specific learning", p: "Focused on what you do at the desk." },
                { n: "2", h: "No unnecessary theory", p: "Cutting the fluff, keeping the core." },
                { n: "3", h: "Focus on employability", p: "Skills that get you hired immediately." }
              ].map((item, i) => (
                <li key={i} className="flex gap-6">
                  <span className="w-12 h-12 bg-mango text-white rounded-2xl flex items-center justify-center shrink-0 font-black text-xl shadow-lg rotate-3 italic">{item.n}</span>
                  <div>
                    <h4 className="font-black text-xl text-white mb-1 uppercase tracking-tight">{item.h}</h4>
                    <p className="text-white/70 font-medium">{item.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Program Section - Dark Professional */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Investment Banking & Capital Market Operations</h2>
            <p className="text-mango font-black mb-10 text-xl inline-block border-b-4 border-mango pb-2 tracking-tight uppercase">What you will learn:</p>
            <ul className="grid gap-6">
              {[
                "Strong foundation in Investment Banking, Financial Services & Capital Markets",
                "Understanding Financial Markets, Key Players & Trading Processes",
                "Trade Life Cycle of Equities (Exchange-traded)",
                "Clearing & Settlement Processes in Capital Markets",
                "In-depth learning of Corporate Actions in Investment Banking",
                "Real-world Case Studies for practical role understanding"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start group">
                  <div className="mt-1.5 w-3 h-3 bg-mango rounded-full shrink-0 group-hover:scale-125 transition-transform" /> 
                  <span className="text-gray-300 font-bold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12 p-6 rounded-2xl border-l-8 border-mango bg-white/5 font-black italic text-lg text-white">
              "Designed to make you job-ready from day 1"
            </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-[40px]" />
             <FormCard 
                title="Not sure which BFSI role is right for you?" 
                subtext="Get professional guidance on career paths and salary expectations."
              />
          </div>
        </div>
      </section>

      {/* 7. Process Visual Flow - Dynamic Timeline */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-xs font-black uppercase tracking-[10px] text-gray-400 mb-20">Our Roadmap to Success</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { n: "01", t: "Career Clarity" },
              { n: "02", t: "Learning" },
              { n: "03", t: "Resume" },
              { n: "04", t: "Mock Interviews" },
              { n: "05", t: "Placement Support" }
            ].map((step, i) => (
              <div key={i} className="relative text-center group">
                <div className="w-20 h-20 mx-auto bg-forest-green text-white rounded-[2rem] flex items-center justify-center font-black text-2xl mb-6 shadow-2xl group-hover:rotate-12 transition-transform duration-300">
                  {step.n}
                </div>
                <span className="font-black text-xs uppercase tracking-widest text-gray-900">{step.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Differentiation Table - Ultra Modern Table */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Why Global BFSI Learning stands out</h2>
          <div className="bg-white rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-8 font-black uppercase text-xs tracking-[4px]">Feature</th>
                  <th className="p-8 font-black uppercase text-xs tracking-[4px]">Others</th>
                  <th className="p-8 font-black uppercase text-xs tracking-[4px] text-mango">Global BFSI Learning</th>
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
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="p-8 font-black text-gray-400 text-[10px] uppercase tracking-widest">{row[0]}</td>
                    <td className="p-8 text-gray-500 font-medium">{row[1]}</td>
                    <td className="p-8 font-black text-forest-green bg-forest-green/5 group-hover:bg-forest-green/10 transition-colors">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center mt-16 font-black text-3xl text-mango leading-tight">
            Not just training — resume & interview support to help you get hired.
          </p>
        </div>
      </section>

      {/* 9. WhatsApp Conversion Block - Action Oriented */}
      <section className="py-24 bg-forest-green text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Not sure which BFSI career suits you?</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-16 relative z-10">
          {["Get Clarity", "Know Your Path", "Get Expert Guidance"].map((item, idx) => (
            <span key={idx} className="flex items-center gap-3 font-black text-sm uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full border border-white/20">
              <Icons.Check /> {item}
            </span>
          ))}
        </div>
        <a href="https://wa.me/919663384594" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-forest-green font-black rounded-3xl shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 hover:-rotate-2 transition-all uppercase tracking-widest relative z-10">
           <Icons.Whatsapp /> Chat on WhatsApp Now
        </a>
      </section>

      {/* 10. Final CTA - Minimalist & Bold */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-gray-400 font-black uppercase tracking-[12px] mb-6 block">Foundation to Finance</span>
          <h3 className="text-5xl md:text-7xl font-black mb-20 tracking-tighter">Ready to take the next step?</h3>
          <div className="max-w-2xl mx-auto">
            <FormCard 
              title="Book Free Career Consultation" 
              subtext="Last few slots available for this month's cohort."
              highlight={true}
            />
          </div>
        </div>
      </section>

      {/* Footer - Elegant Dark */}
      <footer className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-3xl font-black tracking-tighter mb-4">GLOBAL <span className="text-mango">BFSI</span></div>
            <p className="text-gray-500 font-medium">Expert training for future financial leaders.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div className="flex flex-col gap-3">
              <span className="text-gray-500 font-black uppercase text-[10px] tracking-widest">Connect</span>
              <a href="tel:+919663384594" className="text-xl font-bold hover:text-mango transition-colors">+91 9663384594</a>
              <a href="mailto:info@globalbfsi.com" className="text-xl font-bold hover:text-mango transition-colors underline underline-offset-8">info@globalbfsi.com</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-sm font-bold">
          © 2026 GLOBAL BFSI LEARNING. ALL RIGHTS RESERVED.
        </div>
      </footer>

      {/* Sticky Quick Actions */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <a href="tel:+919663384594" className="w-16 h-16 bg-gray-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <Icons.Phone />
        </a>
        <a href="https://wa.me/919663384594" className="w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <Icons.Whatsapp />
        </a>
      </div>

      {/* Modern Pop-up - Centered & Glassy */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900/40 backdrop-blur-xl z-[200] flex items-center justify-center p-6 transition-all animate-in fade-in duration-500">
          <div className="bg-white rounded-[40px] max-w-xl w-full relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] animate-in zoom-in duration-300">
            <button onClick={() => setShowPopup(false)} className="absolute top-6 right-6 text-gray-400 hover:text-black z-50 transition-colors">
              <Icons.X />
            </button>
            <div className="p-2">
                <FormCard 
                title="Get free career guidance" 
                subtext="Start your journey in finance with experts"
                />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .text-forest-green { color: #054a29; }
        .bg-forest-green { background-color: #054a29; }
        .border-forest-green { border-color: #054a29; }
        .text-mango { color: #f97316; }
        .bg-mango { background-color: #f97316; }
        .border-mango { border-color: #f97316; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-in { animation: var(--tw-duration, 300ms) ease-out both; }
        .fade-in { animation-name: fade-in; }
        .zoom-in { animation-name: zoom-in; }
      `}</style>
    </div>
  );
};

export default GlobalBFSILanding;