import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

interface FaqSectionProps {
  faqs: FaqItem[];
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#f7fbff] border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12 items-start">
        {/* Left Col */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#0b5ed7] text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#0b5ed7]" />
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            Câu hỏi thường gặp
          </h2>

          <p className="text-sm sm:text-base text-[#5f6f83] leading-relaxed max-w-md">
            Các thông tin giải đáp giúp khách hàng hoàn toàn yên tâm và chủ động trước khi liên hệ đặt lịch sửa chữa.
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#0b5ed7] shadow-md ring-1 ring-[#0b5ed7]/20'
                    : 'border-[#dbe7f5] hover:border-blue-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-base text-[#122033] hover:text-[#0b5ed7] transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition ${
                    isOpen ? 'bg-blue-100 text-[#0b5ed7]' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#5f6f83] leading-relaxed border-t border-slate-100 bg-[#fcfdff] animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
