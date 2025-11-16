export default function Connect() {
  return (
    <section className="connect-section bg-gradient-to-br from-[#003067] to-[#002050] py-24 md:py-28 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#9bd9e4]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#9bd9e4]/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-[#9bd9e4]/20 backdrop-blur-sm text-white uppercase tracking-[3px] text-xs font-semibold rounded-full border border-white/20 mb-6">
            Connect With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Let's Start a<br />
            <span className="font-semibold">Conversation</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Ready to take your business to the next level? Get in touch with our team.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6 mb-12">
          <a
            href="https://www.linkedin.com/company/kruse-crawford"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 border border-white/20 transform hover:-translate-y-1 hover:shadow-xl"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/kruseandcrawford"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 border border-white/20 transform hover:-translate-y-1 hover:shadow-xl"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/kruseandcrawfor"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#9bd9e4] hover:text-[#003067] transition-all duration-300 border border-white/20 transform hover:-translate-y-1 hover:shadow-xl"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-white text-xl font-semibold mb-3">Stay Informed</h3>
          <p className="text-white/70 text-sm mb-6">Get the latest insights and updates delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#9bd9e4]"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-[#9bd9e4] text-[#003067] font-semibold rounded-lg hover:bg-white transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg uppercase text-sm tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-white/60 text-sm">
          <p>105 E 4th St, Longworth Hall | Cincinnati, OH 45202 | (513) 272-2200</p>
        </div>
      </div>
    </section>
  );
}
