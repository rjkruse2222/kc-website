'use client';

import { useState } from 'react';

interface PricingCardProps {
  tier: string;
  name: string;
  price: string;
  bestFor: string;
  included: string[];
  addOns?: string[];
  notIncluded?: string[];
  featured?: boolean;
}

export default function PricingCard({
  tier,
  name,
  price,
  bestFor,
  included,
  addOns,
  notIncluded,
  featured = false
}: PricingCardProps) {
  const [showNotIncluded, setShowNotIncluded] = useState(false);

  return (
    <div className={`relative rounded-lg p-8 ${featured ? 'bg-primary text-white shadow-2xl transform scale-105' : 'bg-white shadow-lg'} transition-all`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-light-blue text-primary px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <div className={`text-sm font-semibold uppercase tracking-wide mb-2 ${featured ? 'text-light-blue' : 'text-text-gray'}`}>
          {tier}
        </div>
        <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-primary'}`}>
          {name}
        </h3>
        <div className="flex items-baseline mb-2">
          <span className={`text-4xl font-bold ${featured ? 'text-white' : 'text-primary'}`}>
            {price}
          </span>
          <span className={`ml-2 ${featured ? 'text-white/80' : 'text-text-gray'}`}>/month</span>
        </div>
        <p className={`text-sm ${featured ? 'text-white/90' : 'text-text-gray'}`}>
          {bestFor}
        </p>
      </div>

      <div className="mb-6">
        <h4 className={`text-sm font-semibold mb-3 ${featured ? 'text-white' : 'text-primary'}`}>
          What's Included
        </h4>
        <ul className="space-y-2">
          {included.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className={`${featured ? 'text-light-blue' : 'text-light-blue'} mr-2 flex-shrink-0`}>✓</span>
              <span className={`text-sm ${featured ? 'text-white/90' : 'text-text-dark'}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {addOns && addOns.length > 0 && (
        <div className="mb-6">
          <h4 className={`text-sm font-semibold mb-3 ${featured ? 'text-white' : 'text-primary'}`}>
            Available Add-Ons
          </h4>
          <ul className="space-y-2">
            {addOns.map((item, index) => (
              <li key={index} className={`text-sm ${featured ? 'text-white/80' : 'text-text-gray'}`}>
                + {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {notIncluded && notIncluded.length > 0 && (
        <button
          onClick={() => setShowNotIncluded(!showNotIncluded)}
          className={`text-sm ${featured ? 'text-white/70 hover:text-white' : 'text-text-gray hover:text-primary'} underline mb-4`}
        >
          {showNotIncluded ? 'Hide' : 'Show'} what\'s not included
        </button>
      )}

      {showNotIncluded && notIncluded && (
        <div className="mb-6 pt-4 border-t border-white/20">
          <ul className="space-y-2">
            {notIncluded.map((item, index) => (
              <li key={index} className={`text-sm ${featured ? 'text-white/70' : 'text-text-gray'}`}>
                • {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href="mailto:info@kruseandcrawford.com"
        className={`block text-center px-6 py-3 rounded-lg font-semibold uppercase text-sm tracking-wide transition-all duration-300 ${
          featured
            ? 'bg-light-blue text-primary hover:bg-white hover:shadow-xl'
            : 'bg-primary text-white hover:bg-[#004a8f] hover:shadow-xl'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
