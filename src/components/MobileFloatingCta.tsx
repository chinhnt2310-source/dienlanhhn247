import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { CompanyInfo } from '../types';

interface MobileFloatingCtaProps {
  company: CompanyInfo;
}

export const MobileFloatingCta: React.FC<MobileFloatingCtaProps> = ({ company }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Right Corner Floating Contact Buttons (Desktop & Tablet) */}
      <aside 
        aria-label="Liên hệ nhanh"
        className="fixed right-3 sm:right-6 bottom-20 sm:bottom-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      >
        {/* Scroll to Top floating button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="bg-white border border-[#cbd5e1] text-slate-700 hover:text-blue-600 hover:border-blue-400 p-2.5 sm:p-3 rounded-full shadow-md hover:bg-slate-50 transition cursor-pointer hover:scale-110 mb-1"
            title="Lên đầu trang"
            aria-label="Lên đầu trang"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* 1. Nút Chat Zalo Nhanh - Hotline 1: 0333429306 */}
        <a
          href={company.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#0068ff] hover:bg-[#0052cc] text-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 pulse-zalo-button"
          title={`Chat Zalo: ${company.hotline1Display}`}
          aria-label={`Chat Zalo nhanh số ${company.hotline1Display}`}
        >
          {/* Text Pill (Always visible or visible on hover) */}
          <span className="hidden sm:inline-block font-extrabold text-xs sm:text-sm pl-3 pr-2 whitespace-nowrap text-white">
            Chat Zalo: <span className="underline decoration-white/50">{company.hotline1Display}</span>
          </span>

          {/* Icon Badge */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-[#0068ff] flex items-center justify-center shadow-inner shrink-0">
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-[#0068ff] text-[#0068ff]" />
          </div>
        </a>

        {/* 2. Nút Gọi Nhanh - Hotline 1: 0333429306 */}
        <a
          href={`tel:${company.hotline1}`}
          className="group flex items-center bg-red-600 hover:bg-red-700 text-white rounded-full p-1.5 sm:p-2 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 pulse-call-button"
          title={`Gọi ngay Hotline 1: ${company.hotline1Display}`}
          aria-label={`Gọi nhanh Hotline 1 số ${company.hotline1Display}`}
        >
          {/* Text Pill */}
          <span className="hidden sm:inline-block font-extrabold text-xs sm:text-sm pl-3 pr-2 whitespace-nowrap text-white">
            Gọi ngay: <span className="tracking-wide font-black text-yellow-200">{company.hotline1Display}</span>
          </span>

          {/* Icon Badge with phone wiggle */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-red-600 flex items-center justify-center shadow-inner shrink-0">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-red-600 text-red-600 animate-bounce" />
          </div>
        </a>
      </aside>

      {/* Mobile Bottom Fixed Bar (Screens < 640px) */}
      <div className="sm:hidden fixed left-2 right-2 bottom-2 z-50 grid grid-cols-3 gap-1.5 bg-slate-900/95 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
        {/* Quick Call Hotline 1 (Primary) */}
        <a
          href={`tel:${company.hotline1}`}
          className="flex items-center justify-center gap-1.5 bg-red-600 text-white py-2 px-1 rounded-xl text-xs font-black shadow-sm active:scale-95 transition text-center"
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-red-200 uppercase font-bold">Hotline 1</span>
            <span className="text-[11px] font-black">{company.hotline1Display}</span>
          </div>
        </a>

        {/* Quick Call Hotline 2 */}
        <a
          href={`tel:${company.hotline2}`}
          className="flex items-center justify-center gap-1.5 bg-blue-700 text-white py-2 px-1 rounded-xl text-xs font-black shadow-sm active:scale-95 transition text-center"
        >
          <Phone className="w-4 h-4 fill-white shrink-0" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-blue-200 uppercase font-bold">Hotline 2</span>
            <span className="text-[11px] font-black">{company.hotline2Display}</span>
          </div>
        </a>

        {/* Quick Zalo Chat */}
        <a
          href={company.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-[#0068ff] text-white py-2 px-1 rounded-xl text-xs font-black shadow-sm active:scale-95 transition text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <div className="flex flex-col text-left leading-none">
            <span className="text-[9px] text-blue-100 uppercase font-bold">Zalo 24/7</span>
            <span className="text-[11px] font-black">Nhắn tin</span>
          </div>
        </a>
      </div>
    </>
  );
};

