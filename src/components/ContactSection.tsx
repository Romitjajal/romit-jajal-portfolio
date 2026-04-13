import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 relative overflow-hidden text-[#F0E8D8]"
    >
      {/* ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[360px] h-[360px] md:w-[520px] md:h-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,107,0,0.08),transparent_65%)] blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-[#ff6b00]/20 bg-[#141008] p-5 sm:p-6 md:p-12 text-center relative overflow-hidden [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))] md:[clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,24px_100%,0_calc(100%-24px))]"
        >
          {/* top accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B00] via-[#FFD200] to-transparent opacity-90"></div>

          <p
            className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#FF6B00] mb-3 md:mb-4"
            style={{ fontFamily: '"Share Tech Mono", monospace' }}
          >
            // Open Channel
          </p>

          <h2
            className="text-3xl md:text-6xl font-black uppercase text-[#F0E8D8] leading-[0.95] md:leading-[0.9] mb-3 md:mb-4"
            style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
          >
            Let’s <span className="text-[#FFD200]">Connect</span>
          </h2>

          <p className="text-[#8A7A5A] max-w-xl md:max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-6 md:mb-8">
            Open to full stack and software engineering opportunities in Australia.
            Reach out for roles, collaborations, or conversations around product building,
            backend systems, and AI-driven development.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <a
              href="mailto:romitjajal07@gmail.com"
              className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base bg-[#FF6B00] text-black font-extrabold uppercase tracking-[0.12em] hover:bg-[#FFD200] transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              <Mail className="w-4 h-4" />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/romitjajal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base border border-[#ff6b00]/30 text-[#FF6B00] font-extrabold uppercase tracking-[0.12em] hover:border-[#FF6B00] hover:bg-[#FF6B00]/5 transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/Romitjajal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base border border-[#ff6b00]/30 text-[#FF6B00] font-extrabold uppercase tracking-[0.12em] hover:border-[#FF6B00] hover:bg-[#FF6B00]/5 transition [clip-path:polygon(10px_0%,100%_0%,calc(100%-10px)_100%,0%_100%)]"
              style={{ fontFamily: '"Barlow Condensed", sans-serif' }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <div className="mt-6 md:mt-8">
            <p
              className="text-[#8A7A5A] text-[10px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.12em] leading-relaxed"
              style={{ fontFamily: '"Share Tech Mono", monospace' }}
            >
              romitjajal07@gmail.com // Brisbane, Australia // Full Work Rights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;