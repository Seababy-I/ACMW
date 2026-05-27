import React from 'react';

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full mt-20 border-t border-white/10"
      style={{ background: 'rgba(3, 0, 20, 0.8)', backdropFilter: 'blur(10px)' }}
    >
      <div className="max-w-7xl mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

          {/* LEFT: Branding */}
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">
              ACM-W <span className="text-[#2B609E]">Manipal</span>
            </h2>
            <p className="text-gray-400 text-xs font-medium tracking-wide">
              Empowering Women in Tech
            </p>
          </div>

          {/* CENTER: Focus Areas */}
          <div className="flex flex-col gap-3 items-center text-center">
            <h3 className="text-white font-bold uppercase text-[13px] tracking-[0.3em] text-center mb-1">
              Focus Areas
            </h3>

            <div className="flex flex-col items-center text-center gap-2 text-gray-400 text-sm whitespace-nowrap">
              {/* Line 1 */}
              <div className="flex items-center gap-4">
                <span className="hover:text-[#2B609E] transition-colors">
                  Technical Workshops
                </span>
                <span className="text-[#2B609E] text-[10px]">●</span>
                <span className="hover:text-[#2B609E] transition-colors">
                  Speaker Sessions
                </span>
              </div>

              {/* Line 2 */}
              <div className="flex items-center gap-4">
                <span className="hover:text-[#2B609E] transition-colors">
                  Hackathons & Competitions
                </span>
                <span className="text-[#2B609E] text-[10px]">●</span>
                <span className="hover:text-[#2B609E] transition-colors">
                  Mentorship & Community
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Socials & Contact */}
          <div className="flex flex-col md:items-end gap-3 text-gray-300">
            <div className="flex gap-6 items-center md:justify-end">
              <a
                href="https://www.instagram.com/acmwmanipal"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2B609E] transition-all flex items-center gap-2"
              >
                <span aria-hidden="true">IG</span>
                <span className="text-xs font-bold tracking-widest uppercase">
                  Instagram
                </span>
              </a>

              <a
                href="https://www.linkedin.com/company/acm-w-manipal/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2B609E] transition-all flex items-center gap-2"
              >
                <span aria-hidden="true">in</span>
                <span className="text-xs font-bold tracking-widest uppercase">
                  LinkedIn
                </span>
              </a>
            </div>

          <div className="flex items-center gap-2 md:justify-end opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[#2B609E]" aria-hidden="true">@</span>
              <a
                href="mailto:acmw.manipal@gmail.com"
                className="text-gray-400 text-sm font-medium"
              >
                acmw.manipal@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-400 text-[10px] uppercase tracking-[0.4em]">
          © 2026 ACM-W Manipal Chapter. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
