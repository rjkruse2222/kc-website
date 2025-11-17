export default function StackLogos() {
  const logos = ['QBO', 'Xero', 'Gusto', 'Ramp', 'Bill.com', 'Expensify'];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-6">
      {logos.map((logo) => (
        <div
          key={logo}
          className="px-4 py-2 text-text-gray/60 font-semibold text-sm border border-gray-200 rounded-lg hover:border-light-blue hover:text-primary transition-colors"
        >
          {logo}
        </div>
      ))}
    </div>
  );
}
