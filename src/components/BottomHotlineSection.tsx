import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CompanyInfo } from '../types';

interface BottomHotlineSectionProps {
  company: CompanyInfo;
}

export const BottomHotlineSection: React.FC<BottomHotlineSectionProps> = ({ company }) => {
  return (
    <section className="bg-[#f5f9ff] border-t border-[#dbe7f5] py-10">
      <div className="max-w-[1180px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs font-black mb-1">
            Liên hệ nhanh
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#122033] tracking-tight">
            Hai hotline hỗ trợ khách hàng
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${company.hotline1}`}
            className="inline-flex items-center justify-center gap-2 bg-[#0b5ed7] hover:bg-[#073b8e] text-white px-5 py-3 rounded-full text-sm font-black shadow-md shadow-blue-600/20 hover:scale-105 transition"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi {company.hotline1Display}</span>
          </a>

          <a
            href={`tel:${company.hotline2}`}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0b5ed7] border border-[#b9cef0] px-5 py-3 rounded-full text-sm font-black shadow-xs hover:scale-105 transition"
          >
            <Phone className="w-4 h-4" />
            <span>Gọi {company.hotline2Display}</span>
          </a>

          <a
            href={company.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#0a74ff] hover:bg-blue-600 text-white px-5 py-3 rounded-full text-sm font-black shadow-md hover:scale-105 transition"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Zalo để đặt lịch</span>
          </a>
        </div>
      </div>
    </section>
  );
};
