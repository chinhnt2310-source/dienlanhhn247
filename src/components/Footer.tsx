import React from 'react';
import { Phone, MessageCircle, MapPin, Snowflake, ShieldCheck } from 'lucide-react';
import { CompanyInfo } from '../types';

interface FooterProps {
  company: CompanyInfo;
}

export const Footer: React.FC<FooterProps> = ({ company }) => {
  return (
    <footer className="bg-[#06162f] text-white pt-12 pb-24 lg:pb-12 border-t border-white/10">
      <div className="max-w-[1180px] mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-sm">
        {/* Col 1 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0b5ed7] to-[#1aa0ff] text-white flex items-center justify-center">
              <Snowflake className="w-5 h-5" />
            </div>
            <strong className="text-lg font-black text-white">
              {company.name}
            </strong>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {company.tagline}. Dịch vụ sửa chữa, bảo dưỡng điều hòa, máy giặt, tủ lạnh, bếp từ, lò vi sóng, bình nóng lạnh và đồ gia dụng tại nhà khu vực Hà Nội.
          </p>
          <div className="flex items-center gap-2 text-blue-300 text-xs pt-1">
            <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Báo giá minh bạch trước khi sửa • Bảo hành uy tín</span>
          </div>
        </div>

        {/* Col 2 */}
        <div className="space-y-3">
          <h4 className="text-base font-black text-white uppercase tracking-wider pb-1 border-b border-white/10">
            Hotline & Zalo liên hệ
          </h4>
          <p className="text-slate-300">
            <b className="text-white">Hotline 1:</b>{' '}
            <a href={`tel:${company.hotline1}`} className="text-blue-300 hover:text-white font-bold hover:underline">
              {company.hotline1Display}
            </a>
          </p>
          <p className="text-slate-300">
            <b className="text-white">Hotline 2:</b>{' '}
            <a href={`tel:${company.hotline2}`} className="text-blue-300 hover:text-white font-bold hover:underline">
              {company.hotline2Display}
            </a>
          </p>
          <p className="text-slate-300">
            <b className="text-white">Zalo:</b>{' '}
            <a
              href={company.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white font-bold hover:underline inline-flex items-center gap-1 ml-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{company.zaloDisplay}</span>
            </a>
          </p>
        </div>

        {/* Col 3 */}
        <div className="space-y-3 sm:col-span-2 lg:col-span-1">
          <h4 className="text-base font-black text-white uppercase tracking-wider pb-1 border-b border-white/10">
            Hệ thống cơ sở tại Hà Nội
          </h4>
          <p className="text-slate-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><b className="text-white">Cơ sở 1:</b> {company.branch1}</span>
          </p>
          <p className="text-slate-300 flex items-start gap-2">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span><b className="text-white">Cơ sở 2:</b> {company.branch2}</span>
          </p>
          <p className="text-slate-300 text-xs text-blue-200/80 pt-1">
            <b className="text-white">Khu vực:</b> {company.coverage}
          </p>
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-4 pt-6 border-t border-white/10 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} {company.name}. Tất cả các quyền được bảo lưu.</p>
        <p>Phục vụ tận tâm 24/7 - Uy tín - Giá cả rõ ràng.</p>
      </div>
    </footer>
  );
};
