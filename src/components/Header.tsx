import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Snowflake, MessageCircle } from 'lucide-react';
import { CompanyInfo, NavLink } from '../types';

interface HeaderProps {
  company: CompanyInfo;
  navLinks: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ company, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 border-b border-[#dbe7f5] ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-4 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <a 
          href="#top" 
          className="flex items-center gap-3 group shrink-0"
          aria-label={company.name}
        >
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-[#0b5ed7] to-[#1aa0ff] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition">
            <Snowflake className="w-6 h-6 sm:w-7 sm:h-7 animate-spin-slow" />
          </div>
          <div>
            <strong className="block text-base sm:text-lg lg:text-xl font-black text-[#122033] tracking-tight leading-tight group-hover:text-[#0b5ed7] transition">
              {company.name}
            </strong>
            <small className="block text-[#0b5ed7] text-xs font-bold mt-0.5">
              {company.tagline}
            </small>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-bold text-[#34445a]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#0b5ed7] transition py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0b5ed7] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Hotline Dual Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <a
            href={`tel:${company.hotline1}`}
            className="inline-flex items-center gap-1.5 bg-[#0b5ed7] hover:bg-[#073b8e] text-white px-4 py-2 rounded-full text-sm font-black shadow-md shadow-blue-600/20 hover:scale-105 transition"
            title="Gọi Hotline 1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{company.hotline1Display}</span>
          </a>
          <a
            href={`tel:${company.hotline2}`}
            className="inline-flex items-center gap-1.5 bg-[#073b8e] hover:bg-[#052b68] text-white px-4 py-2 rounded-full text-sm font-black shadow-md shadow-blue-900/20 hover:scale-105 transition"
            title="Gọi Hotline 2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{company.hotline2Display}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2.5 rounded-xl border border-[#dbe7f5] bg-white text-[#122033] hover:bg-slate-50 transition"
          aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-[#dbe7f5] px-5 py-4 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-2 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-bold text-[#34445a] hover:bg-[#eaf3ff] hover:text-[#0b5ed7] transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="grid sm:grid-cols-3 gap-2.5 pt-4">
            <a
              href={`tel:${company.hotline1}`}
              className="flex items-center justify-center gap-2 bg-[#0b5ed7] text-white py-2.5 px-4 rounded-xl text-sm font-black shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi: {company.hotline1Display}</span>
            </a>
            <a
              href={`tel:${company.hotline2}`}
              className="flex items-center justify-center gap-2 bg-[#073b8e] text-white py-2.5 px-4 rounded-xl text-sm font-black shadow"
            >
              <Phone className="w-4 h-4" />
              <span>Gọi: {company.hotline2Display}</span>
            </a>
            <a
              href={company.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#0a74ff] text-white py-2.5 px-4 rounded-xl text-sm font-black shadow"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Zalo đặt lịch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
