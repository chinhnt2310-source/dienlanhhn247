import React, { useState } from 'react';
import { Phone, Tag, ShieldCheck, Filter } from 'lucide-react';
import { CompanyInfo, PriceTable } from '../types';

interface PriceListSectionProps {
  company: CompanyInfo;
  priceTables: PriceTable[];
}

export const PriceListSection: React.FC<PriceListSectionProps> = ({ company, priceTables }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredTables = activeFilter === 'all'
    ? priceTables
    : priceTables.filter((table) => table.target.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="bang-gia" className="py-16 sm:py-20 bg-[#f5f9ff] border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Bảng giá tham khảo
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            Bảng giá dịch vụ Điện Lạnh Hà Nội 24/7
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f83]">
            Bảng giá chỉ mang tính tham khảo. Chi phí thực tế phụ thuộc tình trạng thiết bị, model máy, vị trí thi công và linh kiện cần thay. Kỹ thuật viên báo chi phí trước khi thực hiện.
          </p>

          {/* Quick tab filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0b5ed7] text-white shadow-sm'
                  : 'bg-white border border-[#dbe7f5] text-[#34445a] hover:bg-slate-50'
              }`}
            >
              Tất cả hạng mục
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('điều hòa')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition cursor-pointer ${
                activeFilter === 'điều hòa'
                  ? 'bg-[#0b5ed7] text-white shadow-sm'
                  : 'bg-white border border-[#dbe7f5] text-[#34445a] hover:bg-slate-50'
              }`}
            >
              ❄️ Điều hòa
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('máy giặt')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition cursor-pointer ${
                activeFilter === 'máy giặt'
                  ? 'bg-[#0b5ed7] text-white shadow-sm'
                  : 'bg-white border border-[#dbe7f5] text-[#34445a] hover:bg-slate-50'
              }`}
            >
              🧺 Máy giặt
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('tủ lạnh')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition cursor-pointer ${
                activeFilter === 'tủ lạnh'
                  ? 'bg-[#0b5ed7] text-white shadow-sm'
                  : 'bg-white border border-[#dbe7f5] text-[#34445a] hover:bg-slate-50'
              }`}
            >
              🧊 Tủ lạnh
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('đồ gia dụng')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-black transition cursor-pointer ${
                activeFilter === 'đồ gia dụng'
                  ? 'bg-[#0b5ed7] text-white shadow-sm'
                  : 'bg-white border border-[#dbe7f5] text-[#34445a] hover:bg-slate-50'
              }`}
            >
              🔥 Bếp từ & Gia dụng
            </button>
          </div>
        </div>

        {/* Price Blocks */}
        <div className="space-y-8">
          {filteredTables.map((block, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#dbe7f5] rounded-3xl p-5 sm:p-7 shadow-[0_12px_30px_rgba(15,80,120,0.06)] overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
                <h3 className="text-xl sm:text-2xl font-black text-[#0b5ed7] flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#0b5ed7]" />
                  <span>{block.category}</span>
                </h3>

                <div className="flex items-center gap-2">
                  <a
                    href={`tel:${company.hotline1}`}
                    className="inline-flex items-center gap-1.5 bg-[#0b5ed7] hover:bg-[#073b8e] text-white px-4 py-2 rounded-full text-xs sm:text-sm font-black shadow-xs transition hover:scale-105"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Gọi tư vấn giá ({company.hotline1Display})</span>
                  </a>
                </div>
              </div>

              {/* Responsive Table Container */}
              <div className="overflow-x-auto rounded-2xl border border-[#dbe7f5]">
                <table className="w-full text-left border-collapse min-w-[650px] bg-white">
                  <thead>
                    <tr className="bg-[#dcecff] text-[#073b8e] text-sm font-black">
                      <th className="py-3.5 px-4 sm:px-6 w-[40%]">Hạng mục</th>
                      <th className="py-3.5 px-4 sm:px-6 w-[30%]">Giá tham khảo</th>
                      <th className="py-3.5 px-4 sm:px-6 w-[30%]">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dbe7f5] text-xs sm:text-sm">
                    {block.items.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="hover:bg-[#f8fbff] transition-colors"
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-[#122033]">
                          {row.name}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 font-black text-[#0b5ed7]">
                          {row.price}
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 text-[#5f6f83]">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#5f6f83]">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Kỹ thuật viên kiểm tra kỹ lưỡng & báo giá chuẩn xác trước khi sửa.</span>
                </div>
                <a
                  href={`tel:${company.hotline2}`}
                  className="text-[#073b8e] hover:underline font-bold"
                >
                  Cần hỗ trợ gấp? Gọi {company.hotline2Display}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
