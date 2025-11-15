export default function Services() {
  const services = [
    {
      title: 'Consulting',
      image: '/images/home-consulting.jpg',
      items: [
        'Mergers and Acquisitions',
        'Transaction Advisory',
        'Business Valuations',
        'Business Process Outsourcing',
        'Outsourced CFO',
        'Corporate Restructuring and Turnarounds',
        'Financing Advisory',
        'Due Diligence',
      ],
    },
    {
      title: 'Financial Reporting',
      image: '/images/home-finacial-reporting.jpg',
      items: [
        'Reviews',
        'Compilations',
        'Reg CF Compliance',
      ],
    },
    {
      title: 'Tax',
      image: '/images/home-tax-preparation.jpg',
      items: [
        'Business Tax Preparation',
        'Individual Income Tax',
        'Tax Planning',
        'Taxpayer Representation',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">
            Kruse & Crawford Provides Accounting Services<br />
            Across a Number of Industries
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="w-full h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#05346a]/80 to-[#2ea3f2]/60 group-hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Service Items */}
              <div className="p-6 bg-[#05346a] text-white">
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="mr-2 text-[#9bd9e4]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
