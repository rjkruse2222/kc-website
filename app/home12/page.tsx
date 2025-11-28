'use client';

import { useEffect, useState, useRef } from 'react';

// Video-First Modern Design
// Dynamic, visual, social-media optimized with animated elements

export default function Home12() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const services = [
    {
      title: "Strategic Tax Planning",
      icon: "📊",
      description: "Year-round proactive strategies that keep more money in your pocket",
      stats: "$50M+ savings identified for clients"
    },
    {
      title: "Outsourced CFO",
      icon: "📈",
      description: "Executive-level financial guidance without the six-figure salary",
      stats: "Serving $1M-$50M businesses"
    },
    {
      title: "Cloud Accounting",
      icon: "☁️",
      description: "Real-time financial visibility powered by modern technology",
      stats: "QuickBooks, Xero, and more"
    }
  ];

  const socialProof = [
    { platform: "Google", rating: "4.9★", reviews: "50+ reviews" },
    { platform: "LinkedIn", followers: "500+", label: "followers" },
    { platform: "Experience", years: "20+", label: "years" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <main className="min-h-screen bg-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#9bd9e4] to-[#003067] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Screen Video Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Image with Gradient */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center scale-110"
            style={{ backgroundImage: 'url(/images/home-hero-tall.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#003067]/60 to-black" />
        </div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(155, 217, 228, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(155, 217, 228, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
            <span className="text-white/90 text-sm font-medium">Now Accepting New Clients</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
            <span className="block">WE DON'T</span>
            <span className="block text-[#9bd9e4]">JUST FILE</span>
            <span className="block">TAXES</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10">
            We build fortunes. Strategic tax planning for Cincinnati's growing businesses.
          </p>

          {/* CTA Buttons with Animation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/contact-us"
              className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-[#9bd9e4] group-hover:scale-110 transition-transform duration-300" />
              <span className="relative text-[#003067] font-bold uppercase tracking-wider">
                Start Your Journey
              </span>
            </a>
            <button
              onClick={() => setIsVideoPlaying(true)}
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Our Story
            </button>
          </div>

          {/* Social Proof Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialProof.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
              >
                <span className="text-[#9bd9e4] font-bold">{item.rating || item.followers || item.years}</span>
                <span className="text-white/60 text-sm">{item.reviews || item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-2xl overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute inset-0 flex items-center justify-center text-white/50">
              <p>Video placeholder - Add your firm intro video</p>
            </div>
          </div>
        </div>
      )}

      {/* Services Carousel Section */}
      <section className="py-24 bg-gradient-to-b from-black to-[#001030]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] uppercase tracking-[5px] text-sm font-semibold">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Three Ways We Help You Win
            </h2>
          </div>

          {/* Service Cards with Animation */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  i === activeService
                    ? 'bg-gradient-to-br from-[#9bd9e4] to-[#6bc4d3] scale-105 shadow-2xl shadow-[#9bd9e4]/20'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                onMouseEnter={() => setActiveService(i)}
              >
                <div className={`text-5xl mb-6 transition-transform duration-300 ${i === activeService ? 'scale-110' : ''}`}>
                  {service.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${i === activeService ? 'text-[#003067]' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${i === activeService ? 'text-[#003067]/80' : 'text-white/60'}`}>
                  {service.description}
                </p>
                <div className={`text-sm font-semibold ${i === activeService ? 'text-[#003067]' : 'text-[#9bd9e4]'}`}>
                  {service.stats}
                </div>

                {/* Arrow Indicator */}
                <div className={`absolute bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  i === activeService ? 'bg-[#003067] text-white' : 'bg-white/10 text-white/50'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section with Numbers Animation */}
      <section className="py-24 bg-[#001030] relative overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#003067]/30 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#9bd9e4] uppercase tracking-[5px] text-sm font-semibold">Real Results</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
                Numbers That<br />Speak Volumes
              </h2>
              <p className="text-white/60 text-lg mb-8">
                We measure success by the impact we have on your bottom line. Here's what we've accomplished for businesses like yours.
              </p>
              <a
                href="/case-studies"
                className="inline-flex items-center gap-3 text-[#9bd9e4] font-semibold hover:gap-5 transition-all"
              >
                View Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "$50M+", label: "Tax Savings Identified" },
                { number: "150+", label: "Businesses Served" },
                { number: "20+", label: "Years Experience" },
                { number: "98%", label: "Client Retention" }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#9bd9e4]/50 transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#9bd9e4] mb-2">{stat.number}</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team - Modern Cards */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#9bd9e4] uppercase tracking-[5px] text-sm font-semibold">Your Team</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
              Meet the Partners
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Richard Kruse, CPA",
                role: "Managing Partner",
                bio: "Strategic tax planning expert with 20+ years helping Cincinnati businesses keep more of what they earn.",
                image: "/images/rick-kruse.jpg",
                linkedin: "#"
              },
              {
                name: "Jennifer Crawford, CPA",
                role: "Partner",
                bio: "CFO services specialist dedicated to providing Fortune 500-level financial guidance to growing businesses.",
                image: "/images/jennifer-crawford.jpg",
                linkedin: "#"
              }
            ].map((person, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/0 rounded-3xl p-8 border border-white/10 hover:border-[#9bd9e4]/50 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-2xl bg-gray-700 overflow-hidden flex-shrink-0">
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#9bd9e4] transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-[#9bd9e4] text-sm font-medium mb-3">{person.role}</p>
                    <p className="text-white/60 text-sm">{person.bio}</p>
                  </div>
                </div>
                <a
                  href={person.linkedin}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-[#9bd9e4] hover:text-[#003067] transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Ticker */}
      <section className="py-8 bg-[#9bd9e4] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {Array(3).fill([
            "★★★★★ Google Rated",
            "•",
            "150+ Businesses Served",
            "•",
            "Since 2005",
            "•",
            "QuickBooks ProAdvisor",
            "•",
            "Cincinnati's Trusted CPAs",
            "•"
          ]).flat().map((item, i) => (
            <span key={i} className="text-[#003067] font-bold text-lg">{item}</span>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#001030] to-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9bd9e4]/5 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Build<br />
            <span className="text-[#9bd9e4]">Your Fortune?</span>
          </h2>
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Schedule a free strategy session and discover how much you could save with proactive tax planning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#9bd9e4] to-[#6bc4d3] group-hover:scale-110 transition-transform duration-300" />
              <span className="relative text-[#003067] font-bold text-lg uppercase tracking-wider">
                Book Free Consultation
              </span>
            </a>
            <a
              href="tel:5132722200"
              className="inline-flex items-center justify-center px-12 py-6 border-2 border-white/30 rounded-full text-white font-bold hover:bg-white/10 transition-all duration-300"
            >
              📞 (513) 272-2200
            </a>
          </div>

          <p className="mt-12 text-white/40 text-sm">
            105 E 4th St, Longworth Hall · Cincinnati, OH 45202
          </p>
        </div>
      </section>

      {/* Add Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
}
