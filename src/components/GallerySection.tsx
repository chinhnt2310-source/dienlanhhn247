import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  return (
    <section id="hinh-anh" className="py-16 sm:py-20 bg-[#f8fafc] border-b border-[#e2e8f0]">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#2563eb] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Hình ảnh thực tế
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Hình ảnh hoạt động & thiết bị thực tế
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            Tổng hợp hình ảnh kỹ thuật viên trực tiếp thực hiện, đồ nghề chuyên dụng và quy trình bàn giao phiếu bảo hành tận nơi.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gallery.map((item, idx) => (
            <figure
              key={idx}
              className="bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition duration-300 group flex flex-col justify-between"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#eff6ff] via-white to-[#f8fafc] flex flex-col items-center justify-center text-[#2563eb] font-black text-base sm:text-lg text-center p-4">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#2563eb] mb-2">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <span>{item.tag}</span>
                  </div>
                )}
                <div className="absolute top-2.5 right-2.5">
                  <span className="text-[11px] font-black text-blue-800 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs border border-white/60">
                    {item.tag}
                  </span>
                </div>
              </div>
              <figcaption className="p-4 bg-white border-t border-slate-100 flex flex-col gap-1">
                <span className="font-black text-sm sm:text-base text-[#0f172a] group-hover:text-[#2563eb] transition">
                  {item.title}
                </span>
                <span className="text-xs text-[#64748b] leading-tight">
                  {item.desc}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
