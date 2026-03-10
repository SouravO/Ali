import React from 'react';
import { FileText, ShieldCheck, PieChart, Download, ExternalLink } from 'lucide-react';

const Accountability = () => {
  const documents = [
    { title: "80G Certificate", description: "Tax exemption certificate for our generous donors, ensuring your contributions are tax-deductible.", icon: <ShieldCheck className="text-[#11698d]" size={40} /> },
    { title: "12A Registration", description: "Official trust registration providing tax benefits and confirming our status as a recognized non-profit.", icon: <FileText className="text-[#11698d]" size={40} /> },
    { title: "Annual Report 2024-25", description: "A comprehensive summary of our impact, program metrics, and financial allocations for the past year.", icon: <PieChart className="text-[#11698d]" size={40} /> },
    { title: "Audit Statement", description: "Independently verified financial records demonstrating our commitment to complete transparency.", icon: <FileText className="text-[#11698d]" size={40} /> }
  ];

  return (
    <div className="bg-gray-50 text-gray-900 font-sans pt-24 pb-20 min-h-screen">
      
      {/* PAGE HEADER */}
      <section className="bg-white py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-bold tracking-wider uppercase mb-4">
            Trust & Transparency
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Accountability.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to the highest standards of transparency and integrity. Every contribution is tracked, every impact is measured, and every report is shared openly with our community.
          </p>
        </div>
      </section>

      {/* DOCUMENTS GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documents.map((doc, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                    {doc.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{doc.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{doc.description}</p>
                </div>
                
                <button className="flex items-center gap-3 text-[#11698d] font-bold text-sm uppercase tracking-wider hover:text-[#0c4e69] transition-colors mt-auto pt-6 border-t border-gray-100 w-fit group">
                  <Download size={18} className="transform group-hover:-translate-y-1 transition-transform" /> Download Document
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATUTORY COMPLIANCE */}
      <section className="py-20 bg-white border-t border-gray-200 mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-[#11698d] font-bold tracking-wider uppercase text-sm mb-3">Governance</h2>
           <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Statutory Compliance</h3>
           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
             <p className="text-lg text-gray-600 leading-relaxed mb-6">
               WAWU Foundation is registered under the Indian Trusts Act and holds valid 12A and 80G registrations. We adhere strictly to the guidelines set by the Ministry of Home Affairs and other regulatory bodies, ensuring that our operations are compliant, ethical, and fully transparent.
             </p>
             <a href="mailto:info@wawu.foundation" className="inline-flex items-center gap-2 text-[#11698d] font-bold hover:text-[#0c4e69] transition-colors">
               For further inquiries: info@wawu.foundation <ExternalLink size={16} />
             </a>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Accountability;
