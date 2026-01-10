import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compare Services Page Designs | Kruse & Crawford CPAs',
  description: 'Compare different design concepts for the services page',
};

const designs = [
  {
    id: 'current',
    name: 'Current Design',
    href: '/services',
    description: 'The existing services page with gradient hero and hover cards.',
    style: 'Generic corporate',
    pros: ['Functional', 'Clear information hierarchy'],
    cons: ['Feels templated', 'Lacks personality', 'Overused patterns'],
  },
  {
    id: 'v1',
    name: 'V1: Editorial',
    href: '/services/v1',
    description: 'Magazine-inspired layout with dramatic typography scale and asymmetric grids.',
    style: 'High-end editorial, sophisticated',
    pros: ['Distinctive typography', 'Confident and established feel', 'Strong visual hierarchy'],
    cons: ['May feel too formal for some', 'Less conventional'],
  },
  {
    id: 'v2',
    name: 'V2: Geometric',
    href: '/services/v2',
    description: 'Structured design with diagonal splits, sharp angles, and grid patterns.',
    style: 'Modern architectural, precise',
    pros: ['Professional and structured', 'Dynamic diagonal hero', 'Strong hover interactions'],
    cons: ['Angular aesthetic may not suit all tastes', 'More complex visually'],
  },
  {
    id: 'v3',
    name: 'V3: Warm',
    href: '/services/v3',
    description: 'Approachable design with rounded shapes, softer colors, and friendly tone.',
    style: 'Boutique firm, relationship-focused',
    pros: ['Approachable and trustworthy', 'Emphasizes partnership', 'Modern but warm'],
    cons: ['Less formal than traditional CPA sites', 'Rounded elements may feel casual'],
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#9bd9e4] font-semibold tracking-wider text-sm uppercase">Design Comparison</span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#003067] mt-4 mb-6">
            Services Page Concepts
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Three new design directions for the services page, each with a distinct aesthetic.
            Click any card to view the full page design.
          </p>
        </div>

        {/* Design Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={design.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Preview header */}
              <div className={`h-32 flex items-center justify-center ${
                design.id === 'current' ? 'bg-gradient-to-br from-[#003067] to-[#002050]' :
                design.id === 'v1' ? 'bg-[#003067]' :
                design.id === 'v2' ? 'bg-gradient-to-r from-white to-[#003067]' :
                'bg-gradient-to-br from-[#003067] via-[#00407a] to-[#003067]'
              }`}>
                <span className="text-white text-2xl font-bold px-6 py-2 bg-black/20 rounded">
                  {design.name}
                </span>
              </div>

              <div className="p-8">
                <p className="text-gray-600 mb-4">{design.description}</p>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#003067]">Style: </span>
                  <span className="text-sm text-gray-600">{design.style}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">Pros</span>
                    <ul className="mt-2 space-y-1">
                      {design.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 mt-1">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">Cons</span>
                    <ul className="mt-2 space-y-1">
                      {design.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-amber-500 mt-1">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-[#003067] font-semibold group-hover:text-[#9bd9e4] transition-colors">
                    View Full Design
                  </span>
                  <svg className="w-5 h-5 text-[#003067] group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick navigation */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">Quick links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {designs.map((design) => (
              <Link
                key={design.id}
                href={design.href}
                className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition-shadow text-[#003067] font-medium"
              >
                {design.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-500 hover:text-[#003067] transition-colors">
            &larr; Back to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
