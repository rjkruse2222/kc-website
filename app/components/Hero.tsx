'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrolled = window.scrollY;
        const parallaxSpeed = 0.5;
        backgroundRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section relative bg-cover bg-center text-white overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Image with Parallax */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center z-0 will-change-transform"
        style={{
          backgroundImage: 'url(/images/home-hero-tall.jpg)',
          height: '120%',
          top: '-10%'
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003067]/60 via-[#003067]/70 to-[#003067]/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 md:py-40 flex items-center justify-center text-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-5xl">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-light leading-[1.4] mb-10 tracking-wide text-white">
            FOCUS ON GROWING YOUR BUSINESS,<br />
            LET US BE YOUR TRUSTED ADVISOR
          </h1>
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold uppercase text-sm tracking-[3px] rounded-md border-2 border-white/40 hover:bg-white hover:text-[#003067] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
