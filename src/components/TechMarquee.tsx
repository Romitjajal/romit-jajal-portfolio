import React from 'react';
import {
  Code2,
  Database,
  ServerCrash,
  Cloud,
  Wrench,
  BrainCircuit,
} from 'lucide-react';
import { motion } from 'framer-motion';

const TechMarquee: React.FC = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
      icon: <Code2 className="w-4 h-4" />,
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC'],
      icon: <ServerCrash className="w-4 h-4" />,
    },
    {
      title: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'Prisma ORM', 'MySQL'],
      icon: <Database className="w-4 h-4" />,
    },
    {
      title: 'Cloud / DevOps',
      items: ['AWS', 'Docker', 'Vercel', 'GitHub Actions', 'CI/CD'],
      icon: <Cloud className="w-4 h-4" />,
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'System Design Basics'],
      icon: <Wrench className="w-4 h-4" />,
    },
    {
      title: 'Special Ops',
      items: ['AI Workflows', 'Structured Data Systems', 'Scalable Architecture'],
      icon: <BrainCircuit className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 px-4 border-b border-[#ff6b00]/20 relative overflow-hidden text-[#F0E8D8]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[360px] h-[360px] md:w-[520px] md:h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.08),transparent_65%)] blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#FF6B00] mb-2 md:mb-3"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            // Loadout
          </p>

          <h2
            className="text-3xl md:text-6xl font-black uppercase text-[#F0E8D8] leading-[0.95] md:leading-[0.9]"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Technical <span className="text-[#FFD200]">Stack</span>
          </h2>

          <p className="text-[#8A7A5A] mt-3 md:mt-4 max-w-xl md:max-w-2xl text-sm md:text-base leading-relaxed">
            Core technologies, deployment tools, and backend systems used to build
            production-ready applications and scalable engineering workflows.
          </p>
        </motion.div>

        {/* LOADOUT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px] bg-[#ff6b00]/10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-[#141008] border border-[#ff6b00]/20 p-5 md:p-6 relative overflow-hidden hover:border-[#FF6B00]/40 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]"
            >
              {/* Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FFD200] to-transparent opacity-90" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-4 md:mb-5">
                <div className="text-[#FF6B00]">{group.icon}</div>
                <h3
                  className="text-xl md:text-2xl font-extrabold uppercase text-[#FFD200] tracking-[0.04em] leading-tight"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 md:px-3 py-1.5 border border-[#FFD200]/20 bg-[#FFD200]/5 text-[#F0E8D8] text-[10px] md:text-[11px] uppercase tracking-[0.06em] hover:border-[#FF6B00]/50 hover:text-[#FFD200] transition"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tactical strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-6 md:mt-8 border border-[#ff6b00]/20 bg-[#100C07] px-3 md:px-4 py-3 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2"
        >
          <span
            className="text-[#FF6B00] text-[10px] md:text-[11px] uppercase tracking-[0.14em]"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            STATUS
          </span>

          <span
            className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.12em]"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            FRONTEND // ACTIVE
          </span>

          <span
            className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.12em]"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            BACKEND // ACTIVE
          </span>

          <span
            className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.12em]"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            CLOUD // DEPLOYED
          </span>

          <span
            className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.12em]"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            AI // INTEGRATING
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechMarquee;