'use client';

import { useState, useEffect } from 'react';

// VSL4 - Broad Appeal with Interactive Quiz
// Self-selection flow that personalizes based on visitor type

export default function VSL4() {
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: string]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCTA(true), 15000);
    return () => clearTimeout(timer);
  }, []);

  type QuizOption = {
    value: string;
    label: string;
    icon: string;
    sublabel?: string;
  };

  type QuizQuestion = {
    id: string;
    question: string;
    options: QuizOption[];
  };

  const quizQuestions: QuizQuestion[] = [
    {
      id: 'income_type',
      question: "What's your primary income source?",
      options: [
        { value: 'w2', label: 'W2 Employee', icon: '💼', sublabel: 'Salary, bonuses, RSUs' },
        { value: 'business', label: 'Business Owner', icon: '🏢', sublabel: 'S-corp, LLC, sole prop' },
        { value: 'real_estate', label: 'Real Estate', icon: '🏠', sublabel: 'Rentals, flipping, syndication' },
        { value: 'mixed', label: 'Multiple Sources', icon: '📊', sublabel: 'Combination of above' }
      ]
    },
    {
      id: 'income_level',
      question: "What's your annual income (all sources)?",
      options: [
        { value: '200-400k', label: '$200K - $400K', icon: '📈' },
        { value: '400-750k', label: '$400K - $750K', icon: '📈' },
        { value: '750k-1.5m', label: '$750K - $1.5M', icon: '📈' },
        { value: '1.5m+', label: '$1.5M+', icon: '🚀' }
      ]
    },
    {
      id: 'current_situation',
      question: "Which best describes your current tax situation?",
      options: [
        { value: 'overpaying', label: "I know I'm overpaying", icon: '😤', sublabel: "but don't know what to do" },
        { value: 'no_strategy', label: 'No real strategy', icon: '🤷', sublabel: 'CPA just files what happened' },
        { value: 'some_planning', label: 'Some planning', icon: '📋', sublabel: 'but feel like missing opportunities' },
        { value: 'want_more', label: 'Have strategies', icon: '🎯', sublabel: 'but want to optimize further' }
      ]
    },
    {
      id: 'timeline',
      question: "When do you want to start saving?",
      options: [
        { value: 'asap', label: 'This year', icon: '🔥', sublabel: 'Want to maximize 2024 savings' },
        { value: 'next_year', label: 'Next year', icon: '📅', sublabel: 'Planning for 2025' },
        { value: 'exploring', label: 'Just exploring', icon: '🔍', sublabel: 'Learning my options' }
      ]
    }
  ];

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...quizAnswers, [questionId]: value };
    setQuizAnswers(newAnswers);

    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep(quizStep + 1), 300);
    } else {
      // Calculate estimated savings based on answers
      calculateSavings(newAnswers);
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const calculateSavings = (answers: { [key: string]: string }) => {
    let base = 25000;

    // Income level multiplier
    const incomeMultiplier: { [key: string]: number } = {
      '200-400k': 1,
      '400-750k': 2,
      '750k-1.5m': 3.5,
      '1.5m+': 6
    };
    base *= incomeMultiplier[answers.income_level] || 1;

    // Income type bonus
    if (answers.income_type === 'mixed') base *= 1.3;
    if (answers.income_type === 'real_estate') base *= 1.4;

    // Round to nearest 5000
    setEstimatedSavings(Math.round(base / 5000) * 5000);
  };

  const getPersonalizedHeadline = () => {
    const type = quizAnswers.income_type;
    if (type === 'w2') return "High-Income Professionals";
    if (type === 'business') return "Business Owners";
    if (type === 'real_estate') return "Real Estate Investors";
    return "High Earners";
  };

  const getPersonalizedStrategies = () => {
    const type = quizAnswers.income_type;
    if (type === 'w2') {
      return [
        "Entity structuring for side income optimization",
        "Mega backdoor Roth and cash balance plan strategies",
        "Real estate professional status (even with a W2)",
        "Charitable giving and bunching strategies",
        "RSU and equity compensation timing"
      ];
    }
    if (type === 'business') {
      return [
        "S-corp election and salary optimization",
        "Cash balance and defined benefit plans",
        "Augusta Rule (home rental)",
        "R&D tax credits",
        "Family employment strategies"
      ];
    }
    if (type === 'real_estate') {
      return [
        "Cost segregation studies",
        "Real estate professional status qualification",
        "1031 exchange coordination",
        "Short-term rental loopholes",
        "Opportunity zone investments"
      ];
    }
    return [
      "Entity structuring optimization",
      "Advanced retirement plan strategies",
      "Real estate tax benefits",
      "Income timing and deferral",
      "Charitable giving optimization"
    ];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Fixed CTA */}
      {showCTA && !showResults && quizStep === 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-emerald-600 py-4 px-6 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <p className="font-bold">Take the 60-second quiz to see your savings potential</p>
            <a href="#quiz" className="px-6 py-2 bg-white text-emerald-700 font-bold rounded-lg">
              Start Quiz →
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Bar */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-400 text-sm">
            <span>✓ Licensed CPAs</span>
            <span>✓ $50M+ Client Savings</span>
            <span>✓ Since 2005</span>
            <span>✓ 4.9★ Google Rating</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Discover How Much You're<br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Overpaying in Taxes
            </span>
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Take our 60-second assessment to see your estimated tax savings potential. Over 80% of high earners leave $30,000-$150,000+ on the table every year.
          </p>

          {/* Video */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-400 mt-4">Watch: The Tax Strategies Your CPA Isn't Telling You</p>
              </div>
            </div>
          </div>

          <a
            href="#quiz"
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/30"
          >
            See My Savings Potential →
          </a>
          <p className="text-slate-500 text-sm mt-4">Takes 60 seconds • No email required to start</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "$50M+", label: "Client Tax Savings" },
              { number: "150+", label: "Clients Served" },
              { number: "20+", label: "Years Experience" },
              { number: "4.9★", label: "Client Rating" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {!showResults ? (
            <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Question {quizStep + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(((quizStep + 1) / quizQuestions.length) * 100)}% complete</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500"
                    style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                {quizQuestions[quizStep].question}
              </h2>

              {/* Options */}
              <div className="grid gap-4">
                {quizQuestions[quizStep].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(quizQuestions[quizStep].id, option.value)}
                    className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-all text-left hover:border-emerald-500 hover:bg-emerald-500/10 ${
                      quizAnswers[quizQuestions[quizStep].id] === option.value
                        ? 'border-emerald-500 bg-emerald-500/10'
                        : 'border-slate-600 bg-slate-700/50'
                    }`}
                  >
                    <span className="text-3xl">{option.icon}</span>
                    <div>
                      <div className="font-bold text-white">{option.label}</div>
                      {option.sublabel && (
                        <div className="text-slate-400 text-sm">{option.sublabel}</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Results */
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              {/* Results Header */}
              <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 p-8 text-center">
                <div className="text-emerald-100 uppercase tracking-wider text-sm mb-2">
                  Your Estimated Annual Tax Savings
                </div>
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  ${estimatedSavings.toLocaleString()}+
                </div>
                <div className="text-emerald-100 text-sm">
                  Based on {getPersonalizedHeadline()} profiles like yours
                </div>
              </div>

              {/* Results Body */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Strategies That Could Work For You:
                </h3>

                <div className="space-y-3 mb-8">
                  {getPersonalizedStrategies().map((strategy, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-emerald-400">✓</span>
                      <span className="text-slate-200">{strategy}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-700/50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-center mb-2">Ready to See Your Actual Savings?</h4>
                  <p className="text-slate-400 text-sm text-center mb-4">
                    This estimate is based on typical clients. Your actual savings could be higher or lower. Get a personalized analysis from our team.
                  </p>
                </div>

                {/* CTA Form */}
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get My Free Personalized Analysis →
                  </button>
                </form>

                <p className="text-slate-500 text-xs text-center mt-4">
                  We'll review your situation and show you exactly which strategies apply. No obligation.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      {!showResults && (
        <section className="py-20 px-6 bg-slate-800/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              How Our <span className="text-emerald-400">Tax Strategy Process</span> Works
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Take the Quiz",
                  description: "Answer 4 quick questions so we understand your situation and can estimate your savings potential."
                },
                {
                  step: "2",
                  title: "Free Strategy Call",
                  description: "We'll review your tax situation in detail and identify specific opportunities to reduce your bill."
                },
                {
                  step: "3",
                  title: "Custom Plan",
                  description: "Receive a written tax strategy with projected savings and implementation steps."
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our <span className="text-emerald-400">Clients Say</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "I was skeptical at first, but they found $85K in savings I had no idea existed. The quiz results were actually conservative.",
                name: "Dr. Sarah M.",
                role: "Physician, $650K income",
                savings: "$85,000 saved"
              },
              {
                quote: "As a real estate investor, I thought I knew all the tricks. Cost seg and REPS qualification changed everything.",
                name: "Michael R.",
                role: "RE Investor, 12 properties",
                savings: "$127,000 saved"
              },
              {
                quote: "The S-corp restructuring alone saved me $40K. Then they stacked retirement strategies on top of that.",
                name: "Jennifer T.",
                role: "Agency Owner, $800K profit",
                savings: "$72,000 saved"
              }
            ].map((t, i) => (
              <div key={i} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <div className="flex text-yellow-400 mb-4">★★★★★</div>
                <p className="text-slate-300 italic mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-slate-500 text-sm">{t.role}</div>
                  </div>
                  <div className="text-emerald-400 font-bold text-sm">{t.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-slate-700 rounded-2xl overflow-hidden">
              <img src="/images/rick-kruse.jpg" alt="Richard Kruse" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-emerald-400 uppercase tracking-wider text-sm">Your Tax Strategist</span>
              <h2 className="text-3xl font-bold text-white mt-2 mb-4">Richard Kruse, CPA</h2>
              <p className="text-slate-300 mb-4">
                Rick has helped high-income professionals, business owners, and real estate investors save over $50 million in taxes over his 20+ year career.
              </p>
              <p className="text-slate-300 mb-6">
                His approach is simple: most CPAs are order takers. They file what happened. Rick and his team plan what SHOULD happen — finding every legal strategy to reduce your tax burden.
              </p>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Licensed CPA, Ohio
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> 150+ active clients
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> $50M+ in client savings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Much Are You<br />
            <span className="text-emerald-400">Leaving on the Table?</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Take the 60-second quiz to find out. No email required to see your results.
          </p>
          <a
            href="#quiz"
            onClick={() => { setQuizStep(0); setShowResults(false); setQuizAnswers({}); }}
            className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-lg font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            {showResults ? 'Retake Quiz' : 'Start the Quiz'} →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <div>© 2024 Kruse & Crawford CPAs | Cincinnati, OH | (513) 272-2200</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
