import React from 'react';
import { MapPin, Navigation, Building2 } from 'lucide-react';
import { CompanyInfo } from '../types';

interface ServiceAreaSectionProps {
  company: CompanyInfo;
  areas: string[];
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ company, areas }) => {
  return (
    <section id="khu-vuc" className="py-16 sm:py-20 bg-[#f7fbff] border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Khu vực phục vụ
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            Nội thành Hà Nội và các quận lân cận
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f83]">
            Đội ngũ được điều phối theo khu vực để hỗ trợ nhanh.
          </p>
        </div>

        {/* Area Tags */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-3.5 max-w-4xl mx-auto mb-10">
          {areas.map((area, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 bg-white border border-[#dbe7f5] rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-[#243952] shadow-[0_8px_18px_rgba(15,80,120,0.05)] hover:border-blue-300 hover:text-[#0b5ed7] hover:scale-105 transition"
            >
              <MapPin className="w-3.5 h-3.5 text-[#0b5ed7]" />
              <span>{area}</span>
            </span>
          ))}
        </div>

        {/* Branch Info Card */}
        <div className="bg-white border border-[#dbe7f5] rounded-3xl p-6 sm:p-8 shadow-[0_10px_22px_rgba(15,80,120,0.05)] max-w-3xl mx-auto space-y-4">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b5ed7] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider block">Trụ sở Cơ sở 1:</span>
              <strong className="text-sm sm:text-base text-[#122033] block mt-0.5">
                {company.branch1}
              </strong>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0b5ed7] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black text-blue-900 uppercase tracking-wider block">Chi nhánh Cơ sở 2:</span>
              <strong className="text-sm sm:text-base text-[#122033] block mt-0.5">
                {company.branch2}
              </strong>
            </div>
          </div>

          <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-black text-emerald-900 uppercase tracking-wider block">Khu vực phục vụ:</span>
              <p className="text-xs sm:text-sm text-[#334960] mt-0.5 leading-relaxed">
                {company.coverage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
