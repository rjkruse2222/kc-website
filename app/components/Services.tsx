export default function Services() {
  const services = [
    {
      title: 'OUTSOURCED ACCOUNTING & CFO',
      image: '/images/home-finacial-reporting.jpg',
      link: '/services#accounting',
      description: 'Complete financial management for your business'
    },
    {
      title: 'TAX STRATEGY',
      image: '/images/home-tax-preparation.jpg',
      link: '/services#tax-strategy',
      description: 'Proactive tax planning and optimization'
    },
  ];

  return (
    <section className="services-section py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric Layout: 1/4 empty + 3/4 content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Empty 1/4 column for spacing */}
          <div className="hidden md:block"></div>

          {/* Main 3/4 content area */}
          <div className="md:col-span-3">
            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="service-card group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{ aspectRatio: '4/5' }}
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
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h4 className="text-white text-2xl font-bold uppercase mb-2 transform group-hover:translate-y-[-8px] transition-transform duration-300">
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
        </div>
      </div>
    </section>
  );
}
