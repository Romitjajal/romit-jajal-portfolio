import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatBar = ({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div>
      <div
        className="flex justify-between mb-2 text-[#8A7A5A] text-[11px] md:text-[12px] uppercase tracking-[0.08em]"
        style={{ fontFamily: '"Share Tech Mono", monospace' }}
      >
        <span>{label}</span>
        <span>{displayValue}%</span>
      </div>

      <div className="h-[5px] md:h-[6px] bg-[#3a2a12] overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.15 }}
          className="h-full relative"
          style={{
            background: color,
            boxShadow: '0 0 14px rgba(255,107,0,0.18)',
          }}
        >
          <motion.div
            initial={{ x: '-120%' }}
            animate={{ x: '220%' }}
            transition={{
              duration: 1.4,
              ease: 'easeInOut',
              delay: 0.55,
            }}
            className="absolute inset-y-0 w-10 bg-white/25 blur-sm"
          />
        </motion.div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center px-4 py-16 md:py-20 relative overflow-hidden text-[#F0E8D8]">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.15),transparent_65%)] blur-3xl"></div>

        <div className="absolute bottom-[10%] right-[10%] w-[18rem] h-[18rem] rounded-full bg-[radial-gradient(circle,rgba(232,0,29,0.08),transparent_70%)] blur-3xl"></div>

        <div className="absolute inset-0 opacity-[0.02] md:opacity-[0.05] bg-[linear-gradient(to_right,#ff6b00_1px,transparent_1px),linear-gradient(to_bottom,#ff6b00_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* LEFT */}
        <div>
          <div
            className="mb-4 md:mb-6 flex items-center gap-3 text-[#FF6B00] text-xs md:text-sm tracking-widest uppercase font-bold"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            <span className="w-2 h-2 bg-[#FF6B00]"></span>
            ACTIVE STATUS
          </div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] uppercase"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="block text-[#FFD200]">ROMIT</span>
            <span className="block text-transparent stroke-text">JAJAL</span>
          </motion.h1>

          <motion.p
            className="mt-4 md:mt-6 text-base md:text-lg text-[#8A7A5A] max-w-md md:max-w-lg"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            FULL STACK DEVELOPER — BUILDING SCALABLE SYSTEMS,
            PRODUCTION-READY PRODUCTS, AND REAL-WORLD IMPACT SOLUTIONS.
          </motion.p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
            <a
              href="#projects"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-[#FF6B00] text-black font-bold uppercase tracking-wider hover:bg-[#FFD200] transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
            >
              View Work →
            </a>

            <a
              href="/Romit_Jajal_Full Stack Developer.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base border border-[#FF6B00] text-[#FF6B00] uppercase tracking-wider hover:bg-[#FF6B00]/10 transition"
            >
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 md:mt-0 border border-[#FF6B00]/30 p-5 md:p-6 bg-[#141008]/70 backdrop-blur-md"
        >
          <div
            className="text-[#FFD200] text-xs md:text-sm uppercase mb-5 md:mb-6 tracking-widest"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            SYSTEM STATUS
          </div>

          <div className="space-y-4 md:space-y-5">
            <StatBar label="Frontend" value={90} color="linear-gradient(90deg,#FF6B00,#ff9a1f)" />
            <StatBar label="Backend" value={85} color="linear-gradient(90deg,#FFD200,#ffe45c)" />
            <StatBar label="Systems" value={80} color="linear-gradient(90deg,#e8001d,#ff3048)" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;