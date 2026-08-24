import React from 'react';
import { Wrench, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="cong-trinh" className="py-16 sm:py-20 bg-white border-b border-[#dbe7f5]">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#2563eb] uppercase tracking-widest text-xs sm:text-sm font-black mb-2.5">
            Công trình thực tế
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight mb-3">
            Một số hạng mục đã triển khai tại Hà Nội
          </h2>
          <p className="text-sm sm:text-base text-[#64748b]">
            Hình ảnh thực tế quá trình kiểm tra, sửa chữa và bàn giao thiết bị điện lạnh tận nhà cho các gia đình.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="bg-white border border-[#e2e8f0] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 border-b border-[#e2e8f0]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#dcecff] to-white flex flex-col items-center justify-center text-[#2563eb] font-black text-xl text-center p-4">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-2">
                        <Wrench className="w-6 h-6 text-[#2563eb]" />
                      </div>
                      <span>{project.thumb}</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-[#0f172a]/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.thumb}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-black text-[#0f172a] mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
