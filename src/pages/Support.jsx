import React, { useEffect } from 'react';
import { Heart, ShieldCheck, FileText, Landmark, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const accountabilityDocs = [
    { title: "80G Certificate", desc: "Tax exemption for donors", icon: <ShieldCheck className="text-[#11698d]" size={24} /> },
    { title: "12A Registration", desc: "Recognized non-profit status", icon: <FileText className="text-[#11698d]" size={24} /> }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans pt-24 pb-20 min-h-screen">
      
      {/* PAGE HEADER */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
            Support Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Make a Difference.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your contribution helps us provide world-class training, education, and holistic support to talented young footballers from underserved communities.
          </p>
        </div>
      </section>

      {/* DONATION OPTIONS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Bank Transfer Card */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Landmark className="text-[#11698d]" size={24} />
                </div>
                <h2 className="text-2xl font-bold">Bank Transfer</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Name</p>
                  <p className="text-lg font-semibold text-gray-800">WAWU FOUNDATION</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account Number</p>
                  <p className="text-lg font-semibold text-gray-800">923020058204278</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">IFSC Code</p>
                  <p className="text-lg font-semibold text-gray-800">UTIB0000027</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Bank Name</p>
                  <p className="text-lg font-semibold text-gray-800">AXIS BANK</p>
                </div>
                <div className="space-y-1 md:col-span-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Branch</p>
                  <p className="text-lg font-semibold text-gray-800">Madiwala Branch, Bengaluru</p>
                </div>
              </div>
              
              <p className="mt-8 text-gray-500 text-sm italic flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                Please share a screenshot of the transaction at <strong>info@wawu.foundation</strong> or via WhatsApp at <strong>+91 9035140187</strong> so we can issue your tax receipt.
              </p>
            </div>

            {/* Accountability Summary */}
            <div className="space-y-8">
              <div className="bg-[#11698d] text-white p-8 md:p-10 rounded-3xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck size={28} /> Accountability
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  We are a registered non-profit. All donations are utilized with complete transparency.
                </p>
                <div className="space-y-4">
                  {accountabilityDocs.map((doc, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/10">
                      <div className="text-white opacity-80">{doc.icon}</div>
                      <div>
                        <p className="font-bold text-sm">{doc.title}</p>
                        <p className="text-xs text-blue-100">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                <QrCode className="mx-auto text-gray-400 mb-4" size={48} />
                <h4 className="font-bold text-gray-900 mb-2">UPI / QR Code</h4>
                <p className="text-sm text-gray-500 mb-6">Scan to pay directly from any UPI app</p>
                <div className="w-32 h-32 bg-gray-100 mx-auto rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest px-4">QR Code Coming Soon</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY DONATE */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#11698d] font-bold tracking-wider uppercase text-sm mb-3">Your Impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900">How your donation helps</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Sponsor a Player</h4>
              <p className="text-gray-600 leading-relaxed">Covers full-funded training, equipment, and professional coaching for one talented youth.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Nutrition & Health</h4>
              <p className="text-gray-600 leading-relaxed">Ensures every player receives high-quality nutritional care and regular health screenings.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Academic Support</h4>
              <p className="text-gray-600 leading-relaxed">Funds school supplies, tutoring, and educational mentorship to ensure a balanced future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Need more information?</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">Our team is available to discuss specific sponsorship packages and CSR collaborations.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="mailto:info@wawu.foundation" className="inline-flex items-center gap-2 text-[#11698d] font-bold hover:underline">
            info@wawu.foundation
          </a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href="tel:+91 9035140187" className="inline-flex items-center gap-2 text-[#11698d] font-bold hover:underline">
            +91 9035140187
          </a>
        </div>
      </section>

    </div>
  );
};

export default Support;
