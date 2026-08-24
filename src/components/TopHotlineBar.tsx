import React from 'react';
import { Phone, MessageCircle, Clock } from 'lucide-react';
import { CompanyInfo } from '../types';

interface TopHotlineBarProps {
  company: CompanyInfo;
}

export const TopHotlineBar: React.FC<TopHotlineBarProps> = ({ company }) => {
  return (
    <div className="bg-blue-800 text-white text-xs sm:text-sm py-2 px-4 sm:px-8 border-b border-blue-700/50">
      <div className="max-w-[1240px] mx-auto flex flex-wrap justify-between items-center gap-3">
        <div className="flex items-center gap-5 font-medium text-blue-100">
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-blue-300" />
            <span>Phục vụ 24/7 cả ngày lễ</span>
          </span>
          <span className="hidden md:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            <span>Bảo hành dài hạn theo hạng mục</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-xs sm:text-sm font-medium">
          <span className="hidden lg:inline italic text-blue-200">
            Trung Tâm Sửa Chữa & Bảo Dưỡng Điện Lạnh Uy Tín Tại Hà Nội
          </span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              <span>Hotline:</span>
              <a href={`tel:${company.hotline1}`} className="font-bold text-white hover:text-blue-200 transition">
                {company.hotline1Display}
              </a>
            </span>
            <span className="text-blue-400">|</span>
            <a href={`tel:${company.hotline2}`} className="font-bold text-white hover:text-blue-200 transition">
              {company.hotline2Display}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
