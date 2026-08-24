import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, CheckCircle } from 'lucide-react';
import { QuickLookupItem } from '../types';

interface QuickLookupSectionProps {
  lookups: QuickLookupItem[];
}

export const QuickLookupSection: React.FC<QuickLookupSectionProps> = ({ lookups }) => {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (id: string) => {
    setOpenMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredLookups = lookups.filter((item) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.desc.toLowerCase().includes(term) ||
      item.details.some((d) => d.toLowerCase().includes(term))
    );
  });

  return (
    <section id="tra-cuu" className="py-16 sm:py-20 bg-[#f7fbff] border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Tra cứu nhanh
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            Bấm vào thông tin khách cần xem
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f83]">
            Khách có thể bấm xem lỗi thường gặp, hạng hỗ trợ, quy trình báo giá, bảo hành và khu vực phục vụ.
          </p>

          {/* Quick Filter Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm nhanh: điều hòa, tủ lạnh, bảo hành, máy giặt..."
              className="w-full bg-white border border-[#dbe7f5] rounded-full pl-11 pr-4 py-2.5 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition shadow-xs"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded-full"
              >
                Xóa
              </button>
            )}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLookups.map((item) => {
            const isOpen = !!openMap[item.id];

            return (
              <article
                key={item.id}
                className={`bg-white border rounded-3xl p-6 transition-all duration-200 flex flex-col justify-between ${
                  isOpen
                    ? 'border-[#0b5ed7] shadow-[0_18px_45px_rgba(11,94,215,0.12)]'
                    : 'border-[#dbe7f5] shadow-[0_12px_30px_rgba(15,80,120,0.07)] hover:-translate-y-1 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-2xl border border-blue-100">
                      <span>{item.icon}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      className={`text-xs font-black px-3.5 py-1.5 rounded-full transition cursor-pointer ${
                        isOpen
                          ? 'bg-[#0b5ed7] text-white shadow-xs'
                          : 'bg-[#eff6ff] text-[#0b5ed7] hover:bg-blue-100'
                      }`}
                    >
                      {isOpen ? 'Đang mở' : 'Bấm xem'}
                    </button>
                  </div>

                  <h3 className="text-xl font-black text-[#122033] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#334960] leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Expandable Detail */}
                  {isOpen && (
                    <div className="mt-3 p-4 rounded-2xl bg-[#f4f8ff] border border-[#dbe7f5] text-xs sm:text-sm text-[#243952] animate-in fade-in duration-200">
                      <ul className="space-y-2">
                        {item.details.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                            <CheckCircle className="w-3.5 h-3.5 text-[#0b5ed7] shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 mt-4">
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-black text-[#0b5ed7] hover:text-[#073b8e] transition cursor-pointer"
                  >
                    <span>{isOpen ? 'Thu gọn ↑' : 'Xem thông tin chi tiết ›'}</span>
                    {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
