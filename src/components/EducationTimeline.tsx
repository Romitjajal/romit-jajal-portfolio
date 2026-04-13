import React from 'react';
import { motion } from 'framer-motion';

interface Education {
  id: number;
  years: string;
  degree: string;
  institution: string;
  note: string;
}

const EducationTimeline: React.FC = () => {
  const educationData: Education[] = [
    {
      id: 1,
      years: '2024 – 2025',
      degree: 'Master of Information Technology',
      institution: 'Queensland University of Technology',
      note: 'Brisbane, QLD · Networking & Cybersecurity',
    },
    {
      id: 2,
      years: '2018 – 2022',
      degree: 'Bachelor of Technology',
      institution: 'M.S. Ramaiah Institute of Applied Sciences',
      note: 'Computer Science Engineering · India',
    },
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-24 px-4 border-b border-[#ff6b00]/20 relative overflow-hidden text-[#F0E8D8]"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] md:w-[480px] md:h-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.07),transparent_65%)] blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
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
            // Training Record
          </p>

          <h2
            className="text-3xl md:text-6xl font-black uppercase text-[#F0E8D8] leading-[0.95] md:leading-[0.9]"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Education <span className="text-[#FFD200]">History</span>
          </h2>

          <p className="text-[#8A7A5A] mt-3 md:mt-4 max-w-xl md:max-w-2xl text-sm md:text-base leading-relaxed">
            Academic background that built the foundation for software engineering,
            systems thinking, and modern full stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-14">
          {/* line */}
          <div className="absolute top-0 left-1.5 md:left-3 h-full w-[2px] bg-gradient-to-b from-[#FF6B00] via-[#FFD200]/50 to-transparent"></div>

          <div className="space-y-6 md:space-y-8">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {/* node */}
                <div className="absolute -left-[1.7rem] md:-left-11 top-5 md:top-6 w-3.5 h-3.5 md:w-4 md:h-4 bg-[#FF6B00] border border-[#FFD200] shadow-[0_0_16px_rgba(255,107,0,0.5)]"></div>

                {/* card */}
                <div className="border border-[#ff6b00]/20 bg-[#141008] p-5 md:p-7 relative overflow-hidden hover:border-[#FF6B00]/40 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] md:[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]">
                  {/* accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FFD200] to-transparent opacity-90"></div>

                  <p
                    className="text-[#FF6B00] text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {item.years}
                  </p>

                  <h3
                    className="text-xl md:text-3xl font-extrabold uppercase text-[#F0E8D8] leading-tight mb-2"
                    style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
                  >
                    {item.degree}
                  </h3>

                  <p className="text-[#FFD200] text-sm md:text-base mb-2">
                    {item.institution}
                  </p>

                  <p
                    className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.08em] leading-relaxed"
                    style={{ fontFamily: '"Share Tech Mono", monospace' }}
                  >
                    {item.note}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;