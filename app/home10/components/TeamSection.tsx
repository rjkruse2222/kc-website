export default function TeamSection() {
  const team = [
    {
      name: 'Richard Kruse',
      title: 'Managing Partner, CPA',
      credentials: 'AICPA, Ohio CPA',
      bio: 'With over 20 years of experience, Rick specializes in strategic tax planning and business advisory services for small to mid-market companies. His approach combines traditional CPA expertise with modern technology solutions.',
      expertise: ['Tax Strategy', 'Business Advisory', 'CFO Services'],
      image: '/images/team-richard.jpg' // Placeholder - needs actual photo
    },
    {
      name: 'Jennifer Crawford',
      title: 'Partner, CPA',
      credentials: 'AICPA, Ohio CPA',
      bio: 'Jennifer brings extensive accounting and financial reporting expertise, helping clients streamline operations and gain real-time visibility into their business performance through cloud-based solutions.',
      expertise: ['Financial Reporting', 'Accounting Systems', 'Cloud Solutions'],
      image: '/images/team-jennifer.jpg' // Placeholder - needs actual photo
    }
  ];

  return (
    <section className="team-section py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 text-[#003067] uppercase tracking-[3px] text-xs font-semibold rounded-full">
              Meet Your Team
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-[#003067] leading-tight mb-4">
            Expert CPAs, Personal Service
          </h2>
          <p className="text-lg text-[#666] max-w-2xl mx-auto">
            Your success is our success. Meet the experienced professionals who will be your strategic partners.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="team-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* Photo */}
              <div className="aspect-square bg-gradient-to-br from-[#003067] to-[#004080] flex items-center justify-center relative overflow-hidden group">
                {/* Placeholder - replace with actual photo */}
                <div className="w-full h-full bg-[#003067] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl text-white font-light">{member.name.charAt(0)}</span>
                    </div>
                    <div className="text-white/70 text-sm">Professional Photo Coming Soon</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#003067] mb-1">{member.name}</h3>
                <div className="text-[#9bd9e4] font-semibold mb-2">{member.title}</div>
                <div className="text-sm text-[#666] uppercase tracking-wide mb-4">{member.credentials}</div>

                <p className="text-[#666] leading-relaxed mb-4">{member.bio}</p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#9bd9e4]/20 text-[#003067] text-xs font-semibold rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#003067] text-white font-semibold uppercase text-sm tracking-wide rounded-lg hover:bg-[#9bd9e4] hover:text-[#003067] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Schedule a Call with Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
