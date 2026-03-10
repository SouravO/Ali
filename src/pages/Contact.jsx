import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white text-gray-900 font-sans pt-24 pb-20 min-h-screen">
      
      {/* PAGE HEADER */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/logo/contact.jpg" 
            alt="Contact Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-4 rounded-full bg-[#11698d] text-white text-sm font-bold tracking-wider uppercase mb-6 shadow-lg">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Let's Start a <br />
              <span className="text-blue-400">Conversation.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium">
              Have questions about our programs or want to support our mission? Reach out to our team, and we'll be happy to connect with you.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-px bg-gradient-to-l from-[#11698d] to-transparent opacity-50" />
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Reach Out</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  Whether you're interested in our flagship INLL program, exploring partnership opportunities, or just want to learn more, we're here for you.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-[#11698d]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Email Us</h4>
                    <a href="mailto:info@wawu.foundation" className="text-xl font-medium text-gray-600 hover:text-[#11698d] transition-colors">
                      info@wawu.foundation
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-[#11698d]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Call Us</h4>
                    <a href="tel:+91 9035140187" className="text-xl font-medium text-gray-600 hover:text-[#11698d] transition-colors">
                      +91 9035140187
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-[#11698d]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Visit Us</h4>
                    <address className="text-lg text-gray-600 leading-relaxed not-italic">
                      WAWU Foundation<br />
                      Startup Park, Opp. Madiwala Police Station,<br />
                      Hosur Road, Madiwala,<br />
                      Bengaluru, Karnataka
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
               <div className="bg-white p-10 md:p-14 rounded-2xl shadow-xl border border-gray-100">
                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a message</h2>
                 
                 <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">First Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#11698d]/20 focus:border-[#11698d] transition-all" 
                          placeholder="Jane" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#11698d]/20 focus:border-[#11698d] transition-all" 
                          placeholder="Doe" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#11698d]/20 focus:border-[#11698d] transition-all" 
                        placeholder="jane@example.com" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">How can we help?</label>
                      <textarea 
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#11698d]/20 focus:border-[#11698d] transition-all min-h-[160px] resize-y" 
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <button 
                      type="submit"
                      className="w-full bg-[#11698d] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0c4e69] transition-colors shadow-md flex justify-center items-center gap-3 mt-4"
                    >
                      <Send size={20} /> Send Message
                    </button>
                 </form>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
