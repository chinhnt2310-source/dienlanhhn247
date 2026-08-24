import React from 'react';
import { ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { PolicyItem } from '../types';

interface PolicySectionProps {
  policies: PolicyItem[];
}

export const PolicySection: React.FC<PolicySectionProps> = ({ policies }) => {
  return (
    <section id="minh-bach" className="py-16 sm:py-20 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="bg-[#f7fbff] border border-[#dbe7f5] rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[#0b5ed7] uppercase tracking-[0.25em] text-xs sm:text-sm font-black mb-2">
              Minh bạch dịch vụ
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#122033] tracking-tight">
              Thông tin cần biết trước khi đặt lịch
            </h2>
          </div>

          {/* Policy Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {policies.map((policy, idx) => (
              <article key={idx} className="space-y-3">
                <h3 className="text-lg font-black text-[#122033] flex items-center gap-2 pb-2 border-b border-[#dbe7f5]">
                  <ShieldCheck className="w-5 h-5 text-[#0b5ed7] shrink-0" />
                  <span>{policy.title}</span>
                </h3>

                <div className="space-y-2 text-sm text-[#243952] leading-relaxed">
                  {policy.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="flex items-start gap-2">
                      <span className="text-[#0b5ed7] font-black">•</span>
                      <span>{paragraph}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
