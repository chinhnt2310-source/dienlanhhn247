import React from 'react';
import { ProcessStep } from '../types';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ steps }) => {
  return (
    <section id="quy-trinh" className="py-16 sm:py-20 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Quy trình làm việc
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            Minh bạch từ kiểm tra đến bảo hành
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f83]">
            Báo rõ tình trạng, hạng mục cần sửa/thay và chi phí trước khi tiến hành.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {steps.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#f8fbff] border border-[#dbe7f5] rounded-3xl p-6 shadow-[0_10px_24px_rgba(15,80,120,0.05)] hover:-translate-y-1 hover:border-[#0b5ed7] transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0b5ed7] text-white flex items-center justify-center font-black text-xl mb-5 shadow-sm">
                  {item.step}
                </div>

                <h3 className="text-lg font-black text-[#122033] mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-[#334960] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
