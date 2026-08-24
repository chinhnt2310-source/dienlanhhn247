import React, { useState } from 'react';
import { Star, User, Quote } from 'lucide-react';
import { ReviewItem } from '../types';

interface ReviewsSectionProps {
  reviews: ReviewItem[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, reviews.length));
  };

  const showLess = () => {
    setVisibleCount(8);
  };

  return (
    <section id="danh-gia" className="py-16 sm:py-20 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1180px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#0b5ed7] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Đánh giá khách hàng
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#122033] tracking-tight mb-3">
            20 phản hồi mẫu theo từng nhóm dịch vụ
          </h2>
          <p className="text-sm sm:text-base text-[#5f6f83]">
            Khi có đánh giá thật, nên thay dần nội dung mẫu bằng phản hồi thực tế.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.slice(0, visibleCount).map((item, idx) => (
            <article
              key={idx}
              className="border border-[#dbe7f5] rounded-3xl p-5 sm:p-6 bg-white shadow-[0_8px_24px_rgba(15,80,120,0.06)] hover:shadow-md hover:border-blue-300 transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-[#415169] leading-relaxed mb-4 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-[#0b5ed7] flex items-center justify-center text-xs font-bold shrink-0">
                  <User className="w-3.5 h-3.5" />
                </div>
                <strong className="text-xs sm:text-sm font-black text-[#122033] truncate">
                  {item.author}
                </strong>
              </div>
            </article>
          ))}
        </div>

        {/* Toggle View More/Less */}
        <div className="text-center mt-10">
          {visibleCount < reviews.length ? (
            <button
              type="button"
              onClick={showMore}
              className="inline-flex items-center gap-2 bg-[#f4f8ff] hover:bg-blue-100 text-[#0b5ed7] font-black text-sm px-6 py-3 rounded-full border border-[#dbe7f5] transition cursor-pointer"
            >
              <span>Xem thêm ({reviews.length - visibleCount} đánh giá còn lại)</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={showLess}
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer"
            >
              <span>Thu gọn bớt</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
