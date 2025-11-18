export default function Services() {
  const services = [
    {
      title: 'CONSULTING',
      image: '/images/home-consulting.jpg',
      link: '/services#consulting',
      description: 'Strategic business advisory services'
    },
    {
      title: 'FINANCIAL REPORTING',
      image: '/images/home-finacial-reporting.jpg',
      link: '/services#financial-reporting',
      description: 'Complete financial management for your business'
    },
    {
      title: 'TAX PREPARATION',
      image: '/images/home-tax-preparation.jpg',
      link: '/services#tax-preparation',
      description: 'Expert tax planning and compliance'
    },
  ];

  return (
    <section className="services-section py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Service Cards Grid - 3 equal cards across full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              className="service-card group relative block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ aspectRatio: '1/1' }}
            >
              {/* Service Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#003067] via-[#003067]/70 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
                <h4 className="text-white text-xl md:text-2xl font-bold uppercase mb-2 transform group-hover:translate-y-[-8px] transition-transform duration-300">
                  {service.title}
                </h4>
                <p className="text-[#9bd9e4] text-sm font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {service.description} →
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
