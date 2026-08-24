import React from 'react';
import { QuickBenefit } from '../types';

interface QuickBenefitsSectionProps {
  benefits: QuickBenefit[];
}

export const QuickBenefitsSection: React.FC<QuickBenefitsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-10 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((benefit, idx) => (
            <article
              key={idx}
              className="border border-[#dbe7f5] rounded-2xl p-5 bg-white shadow-sm hover:shadow-md hover:border-blue-300 transition group flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl block mb-3 group-hover:scale-110 transition origin-left">
                  {benefit.icon}
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#122033] mb-2 group-hover:text-[#0b5ed7] transition">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#5f6f83] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
