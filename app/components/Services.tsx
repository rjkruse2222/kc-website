export default function Services() {
  const services = [
    {
      title: 'CONSULTING',
      image: '/images/home-consulting.jpg',
      link: '/services#consult',
    },
    {
      title: 'FINANCIAL REPORTING',
      image: '/images/home-finacial-reporting.jpg',
      link: '/services#financial',
    },
    {
      title: 'TAX PREPARATION',
      image: '/images/home-tax-preparation.jpg',
      link: '/services#tax',
    },
  ];

  return (
    <section className="services-section py-4 pb-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric Layout: 1/4 empty + 3/4 content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Empty 1/4 column for spacing */}
          <div className="hidden md:block"></div>

          {/* Main 3/4 content area */}
          <div className="md:col-span-3">
            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.link}
                  className="service-card group relative block overflow-hidden aspect-square"
                >
                  {/* Service Image */}
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dark Blue Overlay */}
                  <div className="absolute inset-0 bg-[#003067] opacity-[0.68] group-hover:opacity-[0.28] transition-opacity duration-300 ease-out"></div>

                  {/* Centered Title */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h4 className="text-white text-2xl font-semibold uppercase text-center px-4">
                      {service.title}
                    </h4>
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
