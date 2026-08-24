import React, { useState } from 'react';
import { Phone, MessageCircle, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { CompanyInfo, ServiceItem } from '../types';

interface InteractiveServicesSectionProps {
  company: CompanyInfo;
  services: ServiceItem[];
}

export const InteractiveServicesSection: React.FC<InteractiveServicesSectionProps> = ({
  company,
  services,
}) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'detail-dieu-hoa': true, // Default first open for immediate clarity
  });

  const toggleDetail = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="dich-vu" className="py-16 sm:py-20 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#2563eb] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Dịch vụ nổi bật
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Sửa chữa & bảo dưỡng thiết bị gia đình
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            Bấm vào từng dịch vụ để xem thông tin chi tiết, hình ảnh thực tế và liên hệ nhanh qua hotline/Zalo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const isOpen = !!openIds[service.id];

            return (
              <article
                key={service.id}
                className={`border rounded-3xl overflow-hidden bg-white transition duration-200 flex flex-col justify-between ${
                  isOpen
                    ? 'border-[#2563eb] shadow-[0_18px_50px_rgba(37,99,235,0.12)] ring-1 ring-[#2563eb]/20'
                    : 'border-[#e2e8f0] shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                <div>
                  {/* Service Photo Thumbnail */}
                  {service.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-xl flex items-center gap-1.5 shadow-xs border border-white/60">
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-xs font-black text-slate-800">Tại nhà</span>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    {!service.image && (
                      <div className="w-12 h-12 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-2xl mb-4 border border-blue-100">
                        <span>{service.icon}</span>
                      </div>
                    )}

                    <h3 className="text-xl font-black text-[#0f172a] mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-[#64748b] leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <button
                      type="button"
                      onClick={() => toggleDetail(service.id)}
                      className="inline-flex items-center gap-1.5 text-sm font-black text-[#2563eb] hover:text-[#1d4ed8] transition cursor-pointer py-1"
                    >
                      <span>{isOpen ? 'Thu gọn' : 'Bấm xem chi tiết'}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expanded Detail Box */}
                    {isOpen && (
                      <div className="mt-4 p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] text-xs sm:text-sm text-[#334155] animate-in fade-in zoom-in-95 duration-200">
                        <strong className="block text-slate-900 font-extrabold mb-2.5">
                          Thông tin chi tiết:
                        </strong>
                        <ul className="space-y-2 mb-4">
                          {service.details.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 leading-relaxed">
                              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Inline Actions */}
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200">
                          <a
                            href={`tel:${company.hotline1}`}
                            className="inline-flex items-center gap-1 bg-white hover:bg-blue-50 text-[#2563eb] border border-[#cbd5e1] rounded-full px-3 py-1.5 font-black text-xs shadow-xs transition hover:border-blue-400"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Gọi {company.hotline1Display}</span>
                          </a>

                          <a
                            href={`tel:${company.hotline2}`}
                            className="inline-flex items-center gap-1 bg-white hover:bg-blue-50 text-[#1e3a8a] border border-[#cbd5e1] rounded-full px-3 py-1.5 font-black text-xs shadow-xs transition hover:border-blue-400"
                          >
                            <Phone className="w-3 h-3" />
                            <span>Gọi {company.hotline2Display}</span>
                          </a>

                          <a
                            href={company.zaloUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-[#0284c7] hover:bg-sky-600 text-white rounded-full px-3 py-1.5 font-black text-xs shadow-xs transition"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>Chat Zalo</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
