import React from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Clock, Zap } from 'lucide-react';
import { CompanyInfo } from '../types';

interface HeroSectionProps {
  company: CompanyInfo;
  trustPills: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ company, trustPills }) => {
  return (
    <section className="bg-[radial-gradient(ellipse_at_top_left,#dcecff_0%,#ffffff_40%,#eaf3ff_100%)] py-10 sm:py-14 lg:py-16 overflow-hidden border-b border-[#dbe7f5]">
      <div className="max-w-[1240px] mx-auto px-4 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Copy (7 Cols on desktop) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0b5ed7] text-xs font-black uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-[#0b5ed7]" />
            <span>{company.subtagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
            {company.name}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
            {company.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={`tel:${company.hotline1}`}
              className="inline-flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-base font-black px-6 py-3.5 rounded-full shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline 1: {company.hotline1Display}</span>
            </a>

            <a
              href={`tel:${company.hotline2}`}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1e3a8a] border-2 border-[#cbd5e1] text-base font-black px-6 py-3.5 rounded-full shadow-sm hover:-translate-y-0.5 transition active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>Hotline 2: {company.hotline2Display}</span>
            </a>

            <a
              href={company.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#0284c7] hover:bg-sky-600 text-white text-base font-black px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Zalo để đặt lịch</span>
            </a>
          </div>

          {/* Trust Pills */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {trustPills.map((pill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 bg-white border border-[#e2e8f0] rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-bold text-[#1e293b] shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Media & Contact Card (5 Cols on desktop) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Hero Visual Image Banner */}
          {company.heroImage && (
            <div className="relative rounded-3xl overflow-hidden border border-[#cbd5e1] shadow-lg group">
              <img
                src={company.heroImage}
                alt="Kỹ thuật viên sửa chữa điện lạnh Hà Nội"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent flex items-end p-4">
                <div className="flex items-center justify-between w-full text-white text-xs font-bold">
                  <span className="flex items-center gap-1.5 bg-blue-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Có mặt nhanh 15-30 phút</span>
                  </span>
                  <span className="bg-emerald-600/90 px-3 py-1 rounded-full backdrop-blur-sm">
                    100% Báo Giá Trước
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Contact Card */}
          <aside className="bg-white border border-[#e2e8f0] rounded-3xl p-5 sm:p-6 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08)] relative">
            <h2 className="text-xl font-black text-[#0f172a] mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2563eb]" />
                <span>Thông tin tiếp nhận</span>
              </span>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                Hà Nội 24/7
              </span>
            </h2>

            <ul className="space-y-2.5 text-sm">
              <li className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-start gap-3 transition hover:border-blue-300">
                <div className="w-8 h-8 rounded-xl bg-[#2563eb] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-blue-900 block">Hotline 1 (Tiếp nhận 24/7):</span>
                  <a href={`tel:${company.hotline1}`} className="text-base font-black text-[#2563eb] hover:underline">
                    {company.hotline1Display}
                  </a>
                </div>
              </li>

              <li className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-start gap-3 transition hover:border-blue-300">
                <div className="w-8 h-8 rounded-xl bg-[#1e3a8a] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-blue-900 block">Hotline 2 (Hỗ trợ kỹ thuật):</span>
                  <a href={`tel:${company.hotline2}`} className="text-base font-black text-[#1e3a8a] hover:underline">
                    {company.hotline2Display}
                  </a>
                </div>
              </li>

              <li className="bg-[#eff6ff] border border-blue-100 rounded-2xl p-3 flex items-start gap-3 transition hover:border-blue-300">
                <div className="w-8 h-8 rounded-xl bg-[#0284c7] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-blue-900 block">Zalo đặt lịch nhanh:</span>
                  <a
                    href={company.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black text-[#0284c7] hover:underline"
                  >
                    {company.zaloDisplay}
                  </a>
                </div>
              </li>

              <li className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">Cơ sở 1:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#334155]">{company.branch1}</span>
                </div>
              </li>

              <li className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block">Cơ sở 2:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#334155]">{company.branch2}</span>
                </div>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
