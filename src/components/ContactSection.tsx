import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { CompanyInfo } from '../types';

interface ContactSectionProps {
  company: CompanyInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ company }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    area: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceText = formData.service || 'Dịch vụ điện lạnh';
    const areaText = formData.area || 'Hà Nội';
    const messageText = formData.message || 'Khách cần tư vấn sửa chữa thiết bị';
    const phoneText = formData.phone || '';
    const nameText = formData.name || '';

    const text = encodeURIComponent(
      `Xin chào Điện Lạnh Hà Nội 24/7. Tôi cần tư vấn:\n` +
      `• Họ tên: ${nameText}\n` +
      `• SĐT: ${phoneText}\n` +
      `• Dịch vụ: ${serviceText}\n` +
      `• Khu vực: ${areaText}\n` +
      `• Tình trạng lỗi: ${messageText}`
    );

    const zaloTargetUrl = `https://zalo.me/${company.hotline1}?text=${text}`;
    
    // Open Zalo
    window.open(zaloTargetUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="lien-he" className="py-16 sm:py-20 bg-gradient-to-br from-[#0b5ed7] to-[#052b68] text-white">
      <div className="max-w-[1180px] mx-auto px-4 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
        {/* Left Info */}
        <div className="space-y-6">
          <div>
            <p className="text-blue-200 uppercase tracking-widest text-xs sm:text-sm font-black mb-2">
              Liên hệ
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-white">
              Đặt lịch tư vấn sửa chữa
            </h2>
            <p className="text-sm sm:text-base text-[#d9eaff] leading-relaxed">
              Gọi hotline hoặc gửi thông tin thiết bị cần sửa. Đội ngũ sẽ tiếp nhận, tư vấn hướng xử lý và báo chi phí trước khi thực hiện.
            </p>
          </div>

          <div className="space-y-3 pt-2 text-sm font-bold">
            <a
              href={`tel:${company.hotline1}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-[#0b5ed7] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-blue-200 block">Hotline 1 (Tiếp nhận 24/7):</span>
                <span className="text-base font-black text-white">{company.hotline1Display}</span>
              </div>
            </a>

            <a
              href={`tel:${company.hotline2}`}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-[#073b8e] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-blue-200 block">Hotline 2 (Hỗ trợ kỹ thuật):</span>
                <span className="text-base font-black text-white">{company.hotline2Display}</span>
              </div>
            </a>

            <a
              href={company.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0a74ff] hover:bg-blue-600 border border-blue-400/40 rounded-2xl p-4 transition shadow-xs"
            >
              <div className="w-9 h-9 rounded-xl bg-white text-[#0a74ff] flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-blue-100 block">Zalo chính thức:</span>
                <span className="text-base font-black text-white">{company.zaloDisplay}</span>
              </div>
            </a>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-blue-200 block">Cơ sở 1:</span>
                <span className="text-sm font-bold text-white">{company.branch1}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl p-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-400 text-slate-900 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-blue-200 block">Cơ sở 2:</span>
                <span className="text-sm font-bold text-white">{company.branch2}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-[#122033] rounded-3xl p-6 sm:p-8 shadow-[0_18px_50px_rgba(0,0,0,0.25)] space-y-4"
        >
          <h3 className="text-xl font-black text-[#122033] mb-1">
            Gửi thông tin đặt lịch nhanh
          </h3>
          <p className="text-xs sm:text-sm text-[#5f6f83] mb-4">
            Điền thông tin bên dưới để kết nối nhanh với kỹ thuật viên trực khu vực của bạn.
          </p>

          <div>
            <label className="block text-xs font-black text-[#122033] uppercase tracking-wider mb-1.5">
              Họ tên <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ví dụ: Anh Huy"
              className="w-full bg-[#f8fbff] border border-[#dbe7f5] rounded-xl px-4 py-3 text-sm text-[#122033] placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#122033] uppercase tracking-wider mb-1.5">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Số điện thoại liên hệ"
              className="w-full bg-[#f8fbff] border border-[#dbe7f5] rounded-xl px-4 py-3 text-sm text-[#122033] placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#122033] uppercase tracking-wider mb-1.5">
              Dịch vụ cần tư vấn <span className="text-red-500">*</span>
            </label>
            <select
              required
              name="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-[#f8fbff] border border-[#dbe7f5] rounded-xl px-4 py-3 text-sm text-[#122033] focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition"
            >
              <option value="">-- Chọn dịch vụ --</option>
              <option value="Sửa điều hòa">Sửa điều hòa</option>
              <option value="Bảo dưỡng điều hòa">Bảo dưỡng điều hòa</option>
              <option value="Sửa máy giặt">Sửa máy giặt</option>
              <option value="Sửa tủ lạnh">Sửa tủ lạnh</option>
              <option value="Sửa bếp từ">Sửa bếp từ</option>
              <option value="Sửa lò vi sóng">Sửa lò vi sóng</option>
              <option value="Sửa bình nóng lạnh">Sửa bình nóng lạnh</option>
              <option value="Sửa đồ gia dụng khác">Sửa đồ gia dụng khác</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-[#122033] uppercase tracking-wider mb-1.5">
              Khu vực
            </label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              placeholder="Ví dụ: Cầu Giấy, Gia Lâm, Long Biên, Đống Đa..."
              className="w-full bg-[#f8fbff] border border-[#dbe7f5] rounded-xl px-4 py-3 text-sm text-[#122033] placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#122033] uppercase tracking-wider mb-1.5">
              Mô tả lỗi
            </label>
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Mô tả hiện tượng lỗi của thiết bị..."
              className="w-full bg-[#f8fbff] border border-[#dbe7f5] rounded-xl px-4 py-3 text-sm text-[#122033] placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-100 outline-none transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0b5ed7] hover:bg-[#073b8e] text-white py-3.5 px-6 rounded-xl font-black text-base shadow-lg shadow-blue-600/25 hover:shadow-xl transition cursor-pointer active:scale-98"
          >
            <Send className="w-4 h-4" />
            <span>Gửi yêu cầu qua Zalo</span>
          </button>

          {submitted && (
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 p-3 rounded-xl animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Đang kết nối tới Zalo để tiếp nhận yêu cầu của quý khách...</span>
            </div>
          )}

          <p className="text-xs text-[#5f6f83] pt-1">
            * Form sẽ chuyển tiếp thông tin trực tiếp qua Zalo của trung tâm để kỹ thuật viên phản hồi nhanh chóng nhất.
          </p>
        </form>
      </div>
    </section>
  );
};
