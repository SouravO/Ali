import { useState } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import WebDesign from './pages/WebDesign';
import AppDevelopment from './pages/AppDevelopment';
import Consulting from './pages/Consulting';
import Training from './pages/Training';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Support from './pages/Support';
import TalentIdentification from './pages/TalentIdentification';
import ComprehensiveSupport from './pages/ComprehensiveSupport';
import ProfessionalTraining from './pages/ProfessionalTraining';
import MentorshipGuidance from './pages/MentorshipGuidance';
import Programmes from './pages/Programmes';
import Accountability from './pages/Accountability';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="App bg-[#FDFDFD] min-h-screen">
      <ScrollToTop />
      {!isHomePage && <Navigation />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/INLL" element={<WebDesign />} />
            <Route path="/program" element={<Programmes />} />
            <Route path="/accountability" element={<Accountability />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/training" element={<Training />} />
            <Route path="/services/talent-identification" element={<TalentIdentification />} />
            <Route path="/services/comprehensive-support" element={<ComprehensiveSupport />} />
            <Route path="/services/professional-training" element={<ProfessionalTraining />} />
            <Route path="/services/mentorship-guidance" element={<MentorshipGuidance />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      {!isHomePage && <Footer />}
    </div>
  );
}

export default App;
