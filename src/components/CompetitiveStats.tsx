import React from 'react';
import { motion } from 'framer-motion';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const CompetitiveStats: React.FC = () => {
  const experienceList: Experience[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      company: 'Resume Analysis Platform',
      period: 'Nov 2025 – Present',
      location: 'Personal Project · Australia',
      description: [
        'Built and deployed a production-ready application for analysing resumes against job descriptions with real-time scoring and feedback.',
        'Designed backend REST APIs in Node.js and TypeScript for parsing, keyword matching, and scoring workflows.',
        'Developed a responsive Next.js frontend with interactive dashboards and seamless upload flows.',
        'Integrated Prisma ORM with PostgreSQL to improve data access and query performance.',
        'Currently integrating AI-driven features using LLM-based approaches.',
      ],
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Solve8 IT Services',
      period: 'Jun 2025 – Sep 2025',
      location: 'Contract · Australia',
      description: [
        'Delivered production-ready full-stack features for internal business applications used in daily operations.',
        'Built and maintained React-based frontend components to improve usability and performance.',
        'Designed and implemented 10+ REST APIs supporting user management and operational workflows.',
        'Optimised MongoDB queries and backend data access patterns to improve responsiveness and stability.',
      ],
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Qual-T Solutions',
      period: 'Feb 2025 – May 2025',
      location: 'Industry Client Project, QUT · Brisbane',
      description: [
        'Built a full-stack service marketplace supporting admin, provider, and customer workflows.',
        'Developed responsive frontend components and integrated them with backend APIs for seamless user experience.',
        'Designed and implemented 15+ REST APIs with JWT authentication and role-based access control.',
        'Delivered the full product lifecycle from requirements gathering to deployment within a fixed deadline.',
      ],
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      company: 'Zcientia Labs',
      period: 'May 2023 – Oct 2023',
      location: 'AI / SaaS Startup · Remote',
      description: [
        'Developed backend systems for a CV generation SaaS platform handling structured user data and document workflows.',
        'Improved MongoDB performance by around 25% through schema redesign and indexing optimisation.',
        'Implemented structured validation and error handling to improve application reliability.',
      ],
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      company: 'Be-Practical Tech Solutions',
      period: 'Jan 2022 – Dec 2022',
      location: 'EdTech Company · Bengaluru, India',
      description: [
        'Built a full-stack e-commerce platform including product catalogue, cart, and checkout workflows.',
        'Developed REST APIs and integrated frontend-backend communication for real-time data flow.',
        'Implemented JWT-based authentication and secure session management.',
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 border-b border-[#ff6b00]/20 text-[#F0E8D8]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#FF6B00] mb-2 md:mb-3"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            // Mission Log
          </p>

          <h2
            className="text-3xl md:text-6xl font-black uppercase text-[#F0E8D8] leading-[0.95]"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Experience Timeline
          </h2>

          <p className="text-[#8A7A5A] mt-3 md:mt-4 max-w-xl md:max-w-2xl text-sm md:text-base leading-relaxed">
            A record of full stack product development across personal builds,
            internal business systems, client delivery, and backend-focused engineering work.
          </p>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {experienceList.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-[#ff6b00]/20 bg-[#141008] p-5 md:p-8 relative [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] hover:border-[#FF6B00]/40 transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FFD200] to-transparent" />

              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-6">
                <div>
                  <p
                    className="text-[#FF6B00] text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {exp.period}
                  </p>

                  <h3
                    className="text-lg md:text-xl font-bold uppercase text-[#FFD200] leading-tight"
                    style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                  >
                    {exp.company}
                  </h3>

                  <p className="text-[#CFC6B4] text-sm md:text-sm mt-1">{exp.title}</p>
                  <p
                    className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.08em] mt-2"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {exp.location}
                  </p>
                </div>

                <div>
                  <ul className="space-y-2 md:space-y-3 text-[#CFC6B4] text-sm md:text-[15px] leading-relaxed">
                    {exp.description.map((line, i) => (
                      <li key={i} className="flex gap-2 md:gap-3">
                        <span className="text-[#FF6B00] shrink-0">▸</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveStats;