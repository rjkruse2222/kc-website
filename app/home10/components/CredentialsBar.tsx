export default function CredentialsBar() {
  const credentials = [
    {
      icon: '✓',
      label: 'AICPA Member',
      sublabel: 'Certified Professionals'
    },
    {
      icon: '✓',
      label: 'Ohio CPA',
      sublabel: 'Licensed & Insured'
    },
    {
      icon: '20+',
      label: 'Years Experience',
      sublabel: 'Since 2005'
    },
    {
      icon: '100+',
      label: 'Active Clients',
      sublabel: 'Cincinnati Area'
    }
  ];

  return (
    <section className="credentials-bar py-8 bg-gradient-to-r from-[#003067] to-[#003067]/90 border-y-2 border-[#9bd9e4]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {credentials.map((cred, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-[#9bd9e4] mb-2">
                {cred.icon}
              </div>
              <div className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
                {cred.label}
              </div>
              <div className="text-white/70 text-xs">
                {cred.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
