import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue } from 'framer-motion';

import { 
  Search, Settings2, Gamepad2, Zap, Star, Trophy, GraduationCap, 
  Briefcase, TrendingUp, CheckCircle2, Quote, ArrowRight, Mail, Phone, Rocket,
  Coins, Disc, Target, Monitor, ChevronRight, Layout, ShieldCheck
} from 'lucide-react';



const brutalBorder = "border-[4px] border-black";
const brutalShadow = "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]";
const hoverShadow = "hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]";



const TiltCard = ({ children }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  function handleMouse(event) {

    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <motion.div
      style={{ perspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="relative z-20"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
        {children}
      </motion.div>
    </motion.div>
  );
};



const LofiOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  </div>
);



const GamingLandingPage = () => {

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });



  const activeCourses = [

    {
      title: "Complete Investment Banking Operations",
      desc: "Equity Capital Markets",
      price: "9339",
      old: "19599",
      icon: <TrendingUp size={40}/>,
      color: "bg-[#00F0FF]"
    },

    {
      title: "Trade Life Cycle",
      desc: "Clearing & Settlement of Equities",
      price: "9699",
      old: "24999",
      icon: <Disc size={40}/>,
      color: "bg-[#FF00FF]"
    },

    {
      title: "Corporate Actions",
      desc: "Corporate Actions and their Life Cycle",
      price: "9699",
      old: "24999",
      icon: <Target size={40}/>,
      color: "bg-[#FFDE03]"
    },

    {
      title: "Resume Writing Services",
      desc: "Professional Resume Branding Service",
      price: "3300",
      old: "5100",
      icon: <Monitor size={40}/>,
      color: "bg-[#ADFF2F]"
    }

  ];



  const comingSoon = [

  "Fixed-income Securities – Bond and their Trade Life Cycle",
  "Fixed-income Securities - Money Market Instruments and their Trade Life Cycle",
  "Foreign Exchange (FX) market and Trade Life Cycle of FX Spot",
  "Foreign Exchange (FX) market and Trade Life Cycle of FX Forward",
  "Derivatives - Trade Life Cycle of Future and Forward contracts",
  "Derivatives - Trade Life Cycle of Options",
  "Asset Management, Mutual Funds and their Trade Life Cycle",
  "Reference Data Management",
  "Fund Accounting",
  "Stock Lending Borrowing (SLB) Market"

  ];



  const successStories = [

  {
  name: "Krishna Kinnera",
  role: "Working at HCL, Bangalore, India",
  text: "Global BFSI Learning Career guidance and ongoing support made a huge difference in my learning journey."
  },

  {
  name: "Deepa",
  role: "Working at Qualitest, United Kingdom",
  text: "The expert-led training and quality content helped me upskill effectively for the BFSI industry. Global BFSI Learning supported me throughout my learning."
  },

  {
  name: "Swati Lenka",
  role: "Working at Softtek, Bangalore, India",
  text: "The high-quality content gave me real, job-ready skills in BFSI Industry. From learning to placement—Global BFSI Learning supports me at every step."
  },

  {
  name: "Sushree Mohanty",
  role: "Working at TCS, London, United Kingdom",
  text: "Global BFSI learning helped me upskill and advance my finance Career. The Mock interviews and resume writing services were incredibly helpful."
  }

  ];



  return (

    <div
      ref={targetRef}
      className="bg-[#f0f0f0] min-h-screen font-mono text-black overflow-x-hidden relative selection:bg-black selection:text-[#FFDE03]"
    >

      <LofiOverlay />

      <motion.div
        className="fixed top-0 left-0 right-0 h-6 bg-black z-[100] origin-left flex items-center px-4 overflow-hidden"
        style={{ scaleX }}
      >
        <div className="text-[#FFDE03] text-xs font-black flex gap-10 whitespace-nowrap">
          <span>LOADING SKILLS...</span>
          <span>SYNCING CAREER...</span>
          <span>UPDATING XP...</span>
        </div>
      </motion.div>



      <section className="relative pt-40 pb-32 px-6 flex flex-col items-center overflow-hidden">

        <motion.div
          style={{ x: useTransform(scrollYProgress, [0, 0.5], [0, -500]) }}
          className="absolute top-20 left-0 text-[30rem] font-black text-black/[0.03] whitespace-nowrap pointer-events-none"
        >
          GLOBAL BFSI GLOBAL BFSI
        </motion.div>



        <TiltCard>

          <div className={`bg-white ${brutalBorder} ${brutalShadow} p-12 md:p-20 relative overflow-hidden group max-w-5xl`}>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="absolute -top-10 -right-10"
            >
              <Zap size={100} className="text-purple-500 opacity-20" />
            </motion.div>



            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black text-[#FFDE03] px-6 py-2 inline-block mb-6 font-black skew-x-[-12deg]"
            >
              ELIGIBILITY: 12+ / B.COM / BE / BBA / M.COM / MBA
            </motion.div>



            <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter mb-8">

              GLOBAL <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "3px black" }}>BFSI</span><br/>
              LEARNING

            </h1>



            <p className="text-xl font-bold mb-10 max-w-2xl uppercase italic">
              Online Courses: BFSI / Investment Banking / Capital Market
            </p>



            <div className="flex flex-wrap gap-4">

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`bg-[#FF00FF] text-white px-8 py-4 text-xl font-black ${brutalBorder} ${brutalShadow} hover:shadow-none transition-all`}
              >
                ENQUIRE NOW
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`bg-[#00F0FF] text-black px-8 py-4 text-xl font-black ${brutalBorder} ${brutalShadow} hover:shadow-none transition-all`}
              >
                COURSE DEMO
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className={`bg-black text-white px-8 py-4 text-xl font-black ${brutalBorder} shadow-[8px_8px_0px_0px_rgba(255,0,255,1)]`}
              >
                E-BROCHURE
              </motion.button>

            </div>

          </div>

        </TiltCard>

      </section>



      <div className="flex justify-around py-10 bg-black text-white border-y-8 border-black overflow-hidden whitespace-nowrap">

        {[1,2,3].map((i) => (

          <motion.div
            key={i}
            animate={{ x: [0, -100, 0] }}
            transition={{ repeat: Infinity, duration: 10, delay: i }}
            className="flex items-center gap-8 text-2xl font-black italic"
          >

            <CheckCircle2 className="text-[#ADFF2F]" />
            PLACEMENT SUPPORT

            <CheckCircle2 className="text-[#ADFF2F]" />
            MOCK INTERVIEWS

            <CheckCircle2 className="text-[#ADFF2F]" />
            INDUSTRY EXPERTS

          </motion.div>

        ))}

      </div>



      <section className="py-32 px-6 bg-[#FFDE03]">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">
            <h2 className="text-8xl font-black uppercase italic tracking-tighter leading-none">
              Main Quests
            </h2>
            <div className="w-48 h-4 bg-black mt-4"></div>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {activeCourses.map((course, idx) => (

              <motion.div
                key={idx}
                whileHover={{ y: -15 }}
                className={`${course.color} ${brutalBorder} ${brutalShadow} p-8 flex flex-col h-full group relative`}
              >

                <div className="bg-white border-4 border-black p-4 inline-block mb-6 w-fit shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {course.icon}
                </div>

                <h3 className="text-2xl font-black uppercase mb-2 leading-tight">
                  {course.title}
                </h3>

                <p className="font-bold opacity-70 mb-6 text-sm uppercase">
                  {course.desc}
                </p>



                <div className="mt-auto border-t-4 border-black pt-6">

                  <div className="flex items-end gap-2 mb-6">

                    <span className="text-4xl font-black">₹{course.price}</span>

                    <span className="text-lg line-through font-bold opacity-50">
                      ₹{course.old}
                    </span>

                  </div>



                  <button className="w-full bg-black text-white py-4 font-black uppercase text-xl hover:bg-white hover:text-black transition-colors border-2 border-transparent hover:border-black">
                    VIEW DETAILS & BUY
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>



      <div className="bg-white border-y-8 border-black py-12 -rotate-1 scale-105">

        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex gap-20 items-center"
        >

          {comingSoon.concat(comingSoon).map((text, i) => (

            <span
              key={i}
              className="text-5xl font-black uppercase whitespace-nowrap flex items-center gap-8 italic"
            >
              UNLOCKING SOON: {text} <Star fill="black" />
            </span>

          ))}

        </motion.div>

      </div>



      <section className="py-32 px-6 bg-white border-b-8 border-black">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          <div className={`p-10 ${brutalBorder} ${brutalShadow} bg-[#ADFF2F]`}>

            <h3 className="text-5xl font-black uppercase mb-8 italic">
              Ideal For
            </h3>

            <ul className="space-y-4 font-bold text-xl uppercase">

              <li className="flex gap-4 items-center">
                <ChevronRight /> 12+ / B.COM / BE / BBA / M.COM / MBA / RELEVANT DEGREE
              </li>

              <li className="flex gap-4 items-center">
                <ChevronRight /> LATERAL MOVEMENTS OF BFSI PROFESSIONALS
              </li>

              <li className="flex gap-4 items-center">
                <ChevronRight /> JOB SEEKERS & CAREER CHANGERS
              </li>

              <li className="flex gap-4 items-center">
                <ChevronRight /> EXPERIENCED PROFESSIONALS UPSKILLING
              </li>

            </ul>

          </div>



          <div className={`p-10 ${brutalBorder} ${brutalShadow} bg-[#00F0FF]`}>

            <h3 className="text-5xl font-black uppercase mb-8 italic">
              Advantages
            </h3>

            <ul className="space-y-3 font-bold uppercase text-sm">

              <li>• BFSI interview-oriented topics written by industry experts</li>
              <li>• Achievement Certificate on successful clearance of the Assessment</li>
              <li>• Certificate of Completion on successful completion of the course</li>
              <li>• FREE complimentary online / telephonic Resume revision</li>
              <li>• FREE complimentary Mock Interviews for pre-interview evaluation</li>
              <li>• Placement Support till the final placement</li>
              <li>• Learning support and doubt clearance</li>
              <li>• Recruiters endorsed Certification in BFSI</li>
              <li>• Everything included to clear a BFSI Operations interview</li>

            </ul>

          </div>

        </div>

      </section>



      <section className="py-32 px-6 bg-[#FF00FF]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-7xl font-black uppercase italic mb-20 text-white drop-shadow-[4px_4px_0px_#000]">
            Our Success Stories
          </h2>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {successStories.map((story, i) => (

              <div key={i} className={`bg-white p-8 ${brutalBorder} ${brutalShadow}`}>

                <Quote size={40} className="mb-4 text-[#FF00FF]" />

                <p className="text-xl font-bold italic mb-6">
                  "{story.text}"
                </p>

                <div className="border-t-4 border-black pt-4">

                  <p className="font-black text-2xl uppercase">
                    {story.name}
                  </p>

                  <p className="font-black text-purple-600 uppercase text-sm">
                    {story.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      <footer className="bg-black text-white pt-32 pb-10 px-6 relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">

            <div>

              <div className="bg-[#FFDE03] text-black px-6 py-2 inline-block font-black text-4xl mb-8 -rotate-2">
                GBFSI
              </div>

              <p className="text-xl font-bold uppercase">
                Empowering students with global BFSI careers through industry-focused learning
              </p>

            </div>



            <div className="space-y-4">

              <h4 className="text-2xl font-black uppercase text-[#00F0FF]">
                Quick Links
              </h4>

              <ul className="font-bold uppercase space-y-2 opacity-70">
                <li>Home</li>
                <li>Courses</li>
                <li>Interview Prep</li>
                <li>Blog</li>
              </ul>

            </div>



            <div className="space-y-4">

              <h4 className="text-2xl font-black uppercase text-[#FF00FF]">
                Get Help
              </h4>

              <div className="space-y-2 font-bold break-all">
                <p>📞 +91 7500611247</p>
                <p>📧 info@globalbfsilearning.com</p>
                <p>📧 support@globalbfsilearning.com</p>
              </div>

            </div>

          </div>



          <div className="flex justify-between items-end border-t-8 border-white/20 pt-10">

            <div className="flex gap-4">
              {['FB','LN','YT','IG'].map(s => (
                <div key={s} className="w-10 h-10 border-2 border-white flex items-center justify-center font-black hover:bg-white hover:text-black cursor-pointer">
                  {s}
                </div>
              ))}
            </div>



            <div className="text-right font-black uppercase">
              <p className="text-sm opacity-50 italic">PLAYER 1 READY</p>
              <p className="text-[#FFDE03]">© 2026 GLOBAL BFSI LEARNING</p>
            </div>

          </div>

        </div>

      </footer>

    </div>

  );

};



export default GamingLandingPage;