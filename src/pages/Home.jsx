import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  X,
  Menu,
  ArrowRight,
  Mail,
  TrendingUp,
  ShieldCheck,
  Globe,
  Award,
  ChevronRight,
  Target,
  Zap,
} from "lucide-react";

/**
 * GLOBAL BFSI LANDING PAGE
 * Version: 7.0.0 (High-Velocity Institutional)
 * A tech-forward, immersive layout with glassmorphism and bento grids.
 */

const FadeIn = ({ children, delay = 0, y = 20 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.8,
      delay: delay / 1000,
      ease: [0.21, 0.45, 0.32, 0.9],
    }}
  >
    {children}
  </motion.div>
);

const GlobalBFSILanding = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    status: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 15000);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="font-sans text-gray-950 bg-[#FDFDFD] antialiased selection:bg-forest-green selection:text-white">
      {/* Mesh Gradient Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-forest-green/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-mango/5 blur-[150px] rounded-full" />
      </div>

      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled || mobileMenuOpen ? "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forest-green rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-forest-green/20">
              G
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">
              Global <span className="text-mango">BFSI</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest text-gray-500">
              {["Program", "Career", "Placement"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-forest-green transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            <a
              href="https://wa.me/919663384594"
              className="bg-forest-green text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-forest-green/10 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-950"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6">
                {["Program", "Career", "Placement"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-forest-green transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="https://wa.me/919663384594"
                  className="bg-forest-green text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-center shadow-lg shadow-forest-green/10 flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" /> Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero: High-Velocity Split Layout */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-20">
          <div className="text-left">
            <FadeIn delay={100} y={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-green/5 border border-forest-green/10 text-forest-green text-[10px] font-bold uppercase tracking-[0.3em] mb-10">
                <Zap className="w-3 h-3 fill-current" /> Future-Proof Your
                Finance Career
              </div>
            </FadeIn>

            <FadeIn delay={300} y={20}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.1] md:leading-[0.95] tracking-tighter mb-10">
                Turn Your Degree Into A <br />
                <span className="text-forest-green font-serif italic font-normal">
                  Job-Ready
                </span>{" "}
                BFSI Career.
              </h1>
            </FadeIn>

            <FadeIn delay={500} y={20}>
              <p className="text-xl md:text-2xl text-gray-500 mb-14 leading-relaxed max-w-xl font-medium">
                Become job-ready for Investment Banking Operations | Capital
                Markets Operations | Financial Services Operations.
              </p>
            </FadeIn>

            <FadeIn delay={700} y={20}>
              <div className="flex flex-wrap items-center gap-6 mb-16">
                <button className="px-12 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-forest-green transition-all shadow-2xl flex items-center gap-3 text-base group">
                  Book Free Consultation{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex -space-x-3 items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-sm"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 40}`}
                        alt="Student"
                      />
                    </div>
                  ))}
                  <div className="pl-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Join 500+ Professionals
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Floating Feature Strip */}
            <FadeIn delay={900} y={20}>
              <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-[2rem] shadow-xl flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { t: "Expert Training", i: ShieldCheck },
                  { t: "Resume Mastery", i: Award },
                  { t: "Placement Support", i: TrendingUp },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.i className="w-4 h-4 text-forest-green" />
                    <span className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">
                      {item.t}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="relative lg:block">
            <FadeIn delay={400} y={0}>
              <div className="relative">
                <div className="absolute -inset-4 bg-forest-green/5 rounded-[4rem] rotate-3 blur-2xl" />
                <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src="/assets/logo/banneeeer.jpg"
                    className="w-full h-full object-cover"
                    alt="BFSI Training"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/40 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white">
                    <div className="text-3xl font-black italic font-serif mb-2">
                      92%
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                      Placement Success Rate
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features: The Bento Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <FadeIn delay={100}>
                <div className="h-full p-10 bg-gray-50 rounded-[3rem] group hover:bg-forest-green transition-all duration-700">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-forest-green mb-10 shadow-sm group-hover:scale-110 transition-transform">
                    <X className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors tracking-tight">
                    Practical Blindspots
                  </h3>
                  <p className="text-lg text-gray-500 group-hover:text-white/60 transition-colors leading-relaxed">
                    Good degree but no practical skills? We bridge the
                    experience void with real-world role simulations.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="h-full p-10 bg-gray-50 rounded-[3rem] group hover:bg-mango transition-all duration-700">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-mango mb-10 shadow-sm group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-white transition-colors tracking-tight">
                    Role Clarity
                  </h3>
                  <p className="text-lg text-gray-500 group-hover:text-white/60 transition-colors leading-relaxed">
                    Not sure which BFSI role to choose? We help you navigate
                    between IB, Capital Markets, and Services.
                  </p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={300}>
              <div className="h-full p-12 bg-gray-900 rounded-[3.5rem] text-white flex flex-col justify-end relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-forest-green/20 rounded-full blur-[100px]" />
                <div className="w-16 h-1 bg-mango mb-10" />
                <h3 className="text-4xl font-bold mb-8 italic font-serif leading-tight">
                  "We prepare you with the right skills to start getting
                  interview calls."
                </h3>
                <p className="text-white/40 font-bold uppercase tracking-widest text-xs">
                  Professional Excellence Guaranteed
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Demand: Tech Minimalist */}
      <section className="py-32 bg-forest-green rounded-[4rem] mx-4 md:mx-8 mb-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
            <div>
              <span className="text-mango font-bold text-[11px] uppercase tracking-[0.5em] mb-6 block">
                Global Standards
              </span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                Global Demand for BFSI Talent is Rising Fast
              </h2>
            </div>
            <div className="flex flex-wrap gap-12 grayscale opacity-40 justify-center lg:justify-end pb-2">
              {["GOLDMAN SACHS", "JPMORGAN", "CITI"].map((brand) => (
                <span
                  key={brand}
                  className="text-sm font-bold tracking-[0.3em]"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
            {[
              "Investment Banking",
              "Capital Markets",
              "Financial Services",
              "Corporate Actions",
            ].map((text, i) => (
              <div
                key={i}
                className="p-10 bg-forest-green hover:bg-white/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-10 text-mango group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold tracking-tight uppercase leading-tight">
                  {text}
                </h4>
                <p className="mt-4 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  Global Operations Role
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Program: High-End Index */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-forest-green font-bold text-[11px] uppercase tracking-[0.4em] mb-6 block">
              The Curriculum
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-tight mb-10">
              Institutional <br />{" "}
              <span className="text-forest-green italic font-serif font-normal">
                Syllabus.
              </span>
            </h2>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
              Designed to make you job-ready from day 1 with a focus on what the
              industry actually expects at the desk.
            </p>
            <div className="flex flex-col gap-8">
              {[
                {
                  n: "01",
                  h: "Job-specific learning",
                  p: "Focused on desk workflows.",
                },
                {
                  n: "02",
                  h: "Employability First",
                  p: "Skills that get you hired.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-2xl font-black text-gray-200">
                    {item.n}
                  </span>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-1">
                      {item.h}
                    </h4>
                    <p className="text-gray-400 font-medium text-sm">
                      {item.p}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            {[
              "Strong foundation in Investment Banking & Capital Markets",
              "Financial Markets & Trading Processes Mastery",
              "In-depth Trade Life Cycle of Equities",
              "Clearing & Settlement Frameworks",
              "Corporate Actions Processing & Analysis",
              "Real-world Case Studies & Role Simulations",
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="group p-8 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white transition-all flex justify-between items-center cursor-default">
                  <span className="text-xl md:text-2xl font-bold text-gray-700 group-hover:text-forest-green transition-colors leading-tight">
                    {text}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-forest-green/5 text-forest-green flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Minimalist Card */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
              Why We Stand Out
            </h2>
            <div className="w-20 h-1 bg-mango mx-auto rounded-full" />
          </div>
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 p-2">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <th className="p-10">Parameter</th>
                    <th className="p-10">Traditional</th>
                    <th className="p-10 text-forest-green bg-forest-green/5 rounded-t-3xl">
                      Global BFSI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    [
                      "Curriculum",
                      "Theory-focused",
                      "Practical, Industry-oriented",
                    ],
                    [
                      "Mentorship",
                      "Limited guidance",
                      "Industry Expert access",
                    ],
                    [
                      "Interview Prep",
                      "No structured prep",
                      "Real-scenario simulations",
                    ],
                    [
                      "Outcome",
                      "Completion focus",
                      "Placement focused training",
                    ],
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="group hover:bg-gray-50/50 transition-all"
                    >
                      <td className="p-10 text-xs font-bold uppercase tracking-widest text-gray-400">
                        {row[0]}
                      </td>
                      <td className="p-10 text-gray-500 font-medium">
                        {row[1]}
                      </td>
                      <td className="p-10 font-bold text-forest-green bg-forest-green/5">
                        {row[2]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center mt-12 font-bold text-xl md:text-2xl text-mango tracking-tight italic font-serif">
            "Not just training — resume & interview support to help you get
            hired."
          </p>
        </div>
      </section>

      {/* Final CTA: Glassmorphic Application */}
      <section className="py-40 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-forest-green/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1] md:leading-[0.9] mb-10">
                Ready for the <br />{" "}
                <span className="text-forest-green italic font-serif font-normal">
                  next step?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-500 font-medium">
                Join the 2026 cohort and secure your career in high-finance.
              </p>
            </div>
          </FadeIn>

          <div className="bg-white/40 backdrop-blur-xl border border-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative">
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                  Full Name
                </label>
                <input
                  name="name"
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green/20 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">
                  WhatsApp Number
                </label>
                <input
                  name="phone"
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-white/50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-forest-green/20 outline-none transition-all font-medium"
                />
              </div>
            </div>
            <button className="w-full bg-forest-green text-white py-6 rounded-2xl font-bold text-lg uppercase tracking-widest shadow-xl shadow-forest-green/20 hover:scale-[1.02] active:scale-95 transition-all">
              Submit Application
            </button>
          </div>
        </div>
      </section>

      {/* Footer: Tech Minimalist */}
      <footer className="bg-white pt-32 pb-16 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-forest-green rounded-lg flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-xl font-bold tracking-tight">
                GLOBAL <span className="text-mango">BFSI</span>
              </span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed">
              Preparing future leaders for global investment banking
              institutions with elite practical training.
            </p>
          </div>
          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-8">
              Quick Access
            </h6>
            <ul className="space-y-4 text-gray-500 font-bold text-sm">
              {["Program", "Career Path", "Placement", "About Us"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-forest-green transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-8">
              Contact
            </h6>
            <ul className="space-y-6">
              <li className="flex gap-4 items-center">
                <Phone className="w-4 h-4 text-forest-green" />
                <span className="text-gray-900 font-bold text-sm">
                  +91 9663384594
                </span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-4 h-4 text-forest-green" />
                <span className="text-gray-900 font-bold text-sm">
                  info@globalbfsi.com
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-8">
              Presence
            </h6>
            <p className="text-gray-500 font-bold text-lg leading-relaxed mb-6">
              Bengaluru Innovation Hub <br /> Karnataka, India
            </p>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-forest-green group transition-colors"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">
          <span>© 2026 GLOBAL BFSI LEARNING. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-10">
            <a href="#" className="hover:text-forest-green transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-forest-green transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action */}
      <div className="fixed bottom-10 right-10 flex flex-col gap-4 z-[110]">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919663384594"
          className="w-16 h-16 bg-[#25D366] text-white rounded-2xl shadow-2xl flex items-center justify-center border-4 border-white"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
        </motion.a>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950/60 backdrop-blur-xl z-[200] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-xl w-full bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest-green/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-300 hover:text-gray-950 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter uppercase">
                Elite Mentorship
              </h3>
              <p className="text-gray-400 font-bold mb-8 md:mb-10 leading-relaxed text-sm md:text-base">
                Start your journey in high-finance today. Secure your spot in
                the next cohort.
              </p>
              <div className="space-y-4 md:space-y-6">
                <input
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className="w-full px-6 py-4 md:px-8 md:py-5 bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-forest-green/20 transition-all font-medium"
                />
                <input
                  name="phone"
                  placeholder="WhatsApp Number"
                  onChange={handleChange}
                  className="w-full px-6 py-4 md:px-8 md:py-5 bg-gray-50 border border-gray-100 rounded-xl md:rounded-2xl outline-none focus:ring-2 focus:ring-forest-green/20 transition-all font-medium"
                />
                <button className="w-full bg-forest-green text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-forest-green/20 text-sm md:text-base">
                  Claim Free Session
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .text-forest-green {
          color: #054a29;
        }
        .bg-forest-green {
          background-color: #054a29;
        }
        .border-forest-green {
          border-color: #054a29;
        }
        .text-mango {
          color: #f97316;
        }
        .bg-mango {
          background-color: #f97316;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default GlobalBFSILanding;
