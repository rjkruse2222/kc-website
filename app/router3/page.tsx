'use client';

// Router Option 3: Two-Step Income-First Flow
// Asks income level first, then narrows down by type
// More qualifying and creates anticipation

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Router3() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState('');

  const incomeRanges = [
    { value: '200-400k', label: '$200K - $400K', description: 'Upper middle income' },
    { value: '400-750k', label: '$400K - $750K', description: 'High income' },
    { value: '750k-1.5m', label: '$750K - $1.5M', description: 'Very high income' },
    { value: '1.5m+', label: '$1.5M+', description: 'Ultra high income' }
  ];

  const incomeTypes = [
    {
      value: 'w2',
      icon: '💼',
      title: 'W2 Employee',
      description: 'Salary, bonuses, RSUs, stock options',
      href: '/vsl1'
    },
    {
      value: 'business',
      icon: '🏢',
      title: 'Business Owner',
      description: 'S-corp, LLC, partnership, sole prop',
      href: '/vsl3'
    },
    {
      value: 'real_estate',
      icon: '🏠',
      title: 'Real Estate',
      description: 'Rentals, flipping, syndication, development',
      href: '/vsl2'
    },
    {
      value: 'mixed',
      icon: '📊',
      title: 'Multiple Sources',
      description: 'Combination of the above',
      href: '/vsl4'
    }
  ];

  const handleIncomeSelect = (value: string) => {
    setIncome(value);
    setTimeout(() => setStep(2), 300);
  };

  const handleTypeSelect = (href: string) => {
    router.push(href);
  };

  const getSavingsEstimate = () => {
    const estimates: { [key: string]: string } = {
      '200-400k': '$25,000 - $75,000',
      '400-750k': '$50,000 - $150,000',
      '750k-1.5m': '$100,000 - $300,000',
      '1.5m+': '$200,000+'
    };
    return estimates[income] || '$50,000+';
  };

  return (
    <main className="min-h-screen bg-[#003067] text-white">
      {/* Header */}
      <div className="bg-black/20 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-xl">KRUSE & CRAWFORD</div>
          <div className="text-white/60 text-sm hidden md:block">
            Strategic Tax Planning
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto px-6 pt-8">
        <div className="flex items-center gap-4">
          <div className={`flex-1 h-1 rounded-full ${step >= 1 ? 'bg-[#9bd9e4]' : 'bg-white/20'}`} />
          <div className={`flex-1 h-1 rounded-full ${step >= 2 ? 'bg-[#9bd9e4]' : 'bg-white/20'}`} />
        </div>
        <div className="flex justify-between text-xs text-white/50 mt-2">
          <span>Income Level</span>
          <span>Income Type</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        {step === 1 ? (
          /* Step 1: Income Level */
          <div className="animate-fadeIn">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-black mb-4">
                What's Your Annual Income?
              </h1>
              <p className="text-white/60">
                Select your total income from all sources
              </p>
            </div>

            <div className="space-y-4">
              {incomeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => handleIncomeSelect(range.value)}
                  className="w-full p-5 bg-white/5 border border-white/10 rounded-xl hover:border-[#9bd9e4] hover:bg-white/10 transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-white group-hover:text-[#9bd9e4] transition-colors">
                        {range.label}
                      </div>
                      <div className="text-white/50 text-sm">{range.description}</div>
                    </div>
                    <svg className="w-6 h-6 text-white/30 group-hover:text-[#9bd9e4] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-center text-white/40 text-sm mt-8">
              Our strategies work best for earners above $200K
            </p>
          </div>
        ) : (
          /* Step 2: Income Type */
          <div className="animate-fadeIn">
            {/* Personalized Header */}
            <div className="text-center mb-10">
              <div className="inline-block px-4 py-2 bg-[#9bd9e4]/20 rounded-full text-[#9bd9e4] text-sm font-medium mb-4">
                Estimated savings: {getSavingsEstimate()}/year
              </div>
              <h1 className="text-3xl md:text-4xl font-black mb-4">
                What's Your Primary Income Source?
              </h1>
              <p className="text-white/60">
                Select the type that represents most of your income
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {incomeTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handleTypeSelect(type.href)}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#9bd9e4] hover:bg-white/10 transition-all text-left group"
                >
                  <div className="text-4xl mb-3">{type.icon}</div>
                  <div className="text-lg font-bold text-white group-hover:text-[#9bd9e4] transition-colors mb-1">
                    {type.title}
                  </div>
                  <div className="text-white/50 text-xs">
                    {type.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Back Button */}
            <button
              onClick={() => setStep(1)}
              className="mt-8 text-white/50 hover:text-white text-sm flex items-center gap-2 mx-auto transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Change income level
            </button>
          </div>
        )}
      </div>

      {/* Trust Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm py-4 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-white/40 text-sm">
          <span>Licensed CPAs</span>
          <span>•</span>
          <span>$50M+ Client Savings</span>
          <span>•</span>
          <span>20+ Years Experience</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}
