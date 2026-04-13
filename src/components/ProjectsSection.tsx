import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Resume Analysis Platform',
      description:
        'A production-ready full stack application that analyses resumes against job descriptions and delivers real-time scoring, structured feedback, and improvement insights.',
      techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
      liveLink: 'https://resume-match-analyzer-six.vercel.app/login',
      githubLink: 'https://github.com/Romitjajal/resume-match-analyzer',
    },
    {
      id: 2,
      title: 'Resume Builder Platform',
      description:
        'A full stack resume generation system with role-based access, structured workflows, and reusable UI components.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      githubLink: 'YOUR_GITHUB_LINK_HERE',
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 relative border-b border-[#ff6b00]/20 text-[#F0E8D8]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-[#FF6B00] mb-2 md:mb-3">
            // Active Builds
          </p>

          <h2 className="text-3xl md:text-6xl font-black uppercase leading-[0.95]">
            Selected <span className="text-[#FF6B00]">Projects</span>
          </h2>

          <p className="text-[#8A7A5A] max-w-xl md:max-w-2xl mt-3 text-sm md:text-base leading-relaxed">
            Focused on resume products, structured workflows, and real-world full stack systems.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-[#ff6b00]/10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-[#141008] border border-[#ff6b00]/20 p-5 md:p-8 relative overflow-hidden hover:border-[#ff6b00]/45 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]"
            >
              {/* TOP LINE */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FFD200] to-transparent opacity-80" />

              {/* NUMBER */}
              <div className="text-[10px] md:text-[11px] uppercase text-[#FF6B00]/50 mb-4 md:mb-6">
                // 0{project.id}
              </div>

              <div className="flex flex-col h-full">
                
                {/* TEXT */}
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold uppercase leading-[1] mb-3 md:mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#B8AA8A] text-sm md:text-[15px] leading-relaxed mb-5 md:mb-6">
                    {project.description}
                  </p>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9px] md:text-[10px] px-2.5 md:px-3 py-1 border border-[#FFD200]/20 bg-[#FFD200]/5 text-[#FFD200] uppercase tracking-[0.05em]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 md:gap-2 px-4 md:px-5 py-2 md:py-3 text-sm md:text-base bg-[#FF6B00] text-black font-bold uppercase hover:bg-[#FFD200] transition"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 md:gap-2 px-4 md:px-5 py-2 md:py-3 text-sm md:text-base border border-[#ff6b00]/30 text-[#FF6B00] font-bold uppercase hover:bg-[#FF6B00]/5 transition"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;