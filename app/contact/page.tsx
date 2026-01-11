'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    revenue: '',
    industry: '',
    employees: '',
    name: '',
    email: '',
    phone: '',
    preferredContact: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'tax-strategy', label: 'Tax Strategy', description: 'Year-round tax planning and optimization' },
    { id: 'client-accounting', label: 'Client Accounting', description: 'Bookkeeping, CFO services, financial reporting' },
    { id: 'both', label: 'Both Services', description: 'Comprehensive tax and accounting partnership' },
    { id: 'other', label: 'Other / Not Sure', description: 'I have questions or need guidance' }
  ];

  const revenues = [
    { id: 'under-1m', label: 'Under $1M' },
    { id: '1m-5m', label: '$1M - $5M' },
    { id: '5m-10m', label: '$5M - $10M' },
    { id: '10m-25m', label: '$10M - $25M' },
    { id: '25m-50m', label: '$25M - $50M' },
    { id: 'over-50m', label: 'Over $50M' }
  ];

  const industries = [
    'Real Estate & Construction',
    'Manufacturing',
    'Food & Beverage',
    'Technology',
    'Healthcare',
    'Professional Services',
    'Retail & E-commerce',
    'Other'
  ];

  const employees = [
    { id: '1-5', label: '1-5 employees' },
    { id: '6-20', label: '6-20 employees' },
    { id: '21-50', label: '21-50 employees' },
    { id: '51-100', label: '51-100 employees' },
    { id: 'over-100', label: '100+ employees' }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, service: serviceId });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your form submission endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const progressWidth = `${(step / 3) * 100}%`;

  if (submitted) {
    return (
      <main className="bg-white min-h-screen">
        <section className="py-32">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="w-20 h-20 bg-[#9bd9e4] rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-[#003067]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#003067] mb-6">
              Thank You for Reaching Out
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We have received your inquiry and will be in touch within 1 business day.
            </p>
            <p className="text-gray-500 mb-10">
              In the meantime, feel free to explore our services or learn more about our approach.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/services/tax-strategy"
                className="px-8 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] transition-colors"
              >
                Explore Tax Strategy
              </a>
              <a
                href="/services/client-accounting"
                className="px-8 py-4 border-2 border-[#003067] text-[#003067] font-semibold rounded-full hover:bg-[#003067] hover:text-white transition-colors"
              >
                View Accounting Services
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#003067] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#9bd9e4]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#9bd9e4]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-xl text-white/80">
              Tell us about your business and we will reach out to discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Section */}
            <div className="lg:col-span-2">
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="flex justify-between text-sm mb-2">
                  <span className={step >= 1 ? 'text-[#003067] font-medium' : 'text-gray-400'}>
                    Service Interest
                  </span>
                  <span className={step >= 2 ? 'text-[#003067] font-medium' : 'text-gray-400'}>
                    Business Details
                  </span>
                  <span className={step >= 3 ? 'text-[#003067] font-medium' : 'text-gray-400'}>
                    Contact Info
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#003067] to-[#9bd9e4] transition-all duration-500"
                    style={{ width: progressWidth }}
                  />
                </div>
              </div>

              {/* Step 1: Service Interest */}
              {step === 1 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold text-[#003067] mb-2">
                    What can we help you with?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Select the service that best matches your needs.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceSelect(service.id)}
                        className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                          formData.service === service.id
                            ? 'border-[#003067] bg-[#003067]/5'
                            : 'border-gray-200 hover:border-[#9bd9e4]'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            formData.service === service.id
                              ? 'border-[#003067] bg-[#003067]'
                              : 'border-gray-300'
                          }`}>
                            {formData.service === service.id && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#003067] mb-1">{service.label}</h3>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    disabled={!formData.service}
                    className="w-full md:w-auto px-10 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Continue
                    <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Step 2: Business Details */}
              {step === 2 && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold text-[#003067] mb-2">
                    Tell us about your business
                  </h2>
                  <p className="text-gray-600 mb-8">
                    This helps us understand how we can best serve you.
                  </p>

                  <div className="space-y-6 mb-10">
                    {/* Revenue */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Annual Revenue
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {revenues.map((rev) => (
                          <button
                            key={rev.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, revenue: rev.id })}
                            className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                              formData.revenue === rev.id
                                ? 'border-[#003067] bg-[#003067] text-white'
                                : 'border-gray-200 text-gray-700 hover:border-[#9bd9e4]'
                            }`}
                          >
                            {rev.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Industry
                      </label>
                      <select
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#003067] focus:outline-none transition-colors"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    {/* Employees */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Number of Employees
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {employees.map((emp) => (
                          <button
                            key={emp.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, employees: emp.id })}
                            className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                              formData.employees === emp.id
                                ? 'border-[#003067] bg-[#003067] text-white'
                                : 'border-gray-200 text-gray-700 hover:border-[#9bd9e4]'
                            }`}
                          >
                            {emp.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={handleBack}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#003067] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!formData.revenue || !formData.industry}
                      className="flex-1 md:flex-none px-10 py-4 bg-[#003067] text-white font-semibold rounded-full hover:bg-[#002050] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Continue
                      <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="animate-fadeIn">
                  <h2 className="text-2xl font-bold text-[#003067] mb-2">
                    How can we reach you?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    We will be in touch within 1 business day.
                  </p>

                  <div className="space-y-6 mb-10">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#003067] focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#003067] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#003067] focus:outline-none transition-colors"
                        placeholder="(513) 555-1234"
                      />
                    </div>

                    {/* Preferred Contact */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: 'email' })}
                          className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            formData.preferredContact === 'email'
                              ? 'border-[#003067] bg-[#003067] text-white'
                              : 'border-gray-200 text-gray-700 hover:border-[#9bd9e4]'
                          }`}
                        >
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredContact: 'phone' })}
                          className={`flex-1 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                            formData.preferredContact === 'phone'
                              ? 'border-[#003067] bg-[#003067] text-white'
                              : 'border-gray-200 text-gray-700 hover:border-[#9bd9e4]'
                          }`}
                        >
                          Phone
                        </button>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Anything else we should know? (Optional)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#003067] focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your situation or any specific questions you have..."
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-[#003067] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 md:flex-none px-10 py-4 bg-[#9bd9e4] text-[#003067] font-bold rounded-full hover:bg-[#003067] hover:text-white transition-all"
                    >
                      Submit Inquiry
                      <svg className="w-5 h-5 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Info Card */}
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-lg font-bold text-[#003067] mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#003067] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#003067]">Office</p>
                      <p className="text-gray-600 text-sm">
                        105 E 4th St, Suite 1200<br />
                        Cincinnati, OH 45202
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#003067] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#003067]">Phone</p>
                      <a href="tel:+15132722200" className="text-gray-600 text-sm hover:text-[#003067] transition-colors">
                        (513) 272-2200
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#003067] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#003067]">Email</p>
                      <a href="mailto:info@kruseandcrawford.com" className="text-gray-600 text-sm hover:text-[#003067] transition-colors">
                        info@kruseandcrawford.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-[#003067] rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[#9bd9e4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm">Response within 1 business day</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[#9bd9e4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm">Free initial consultation</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[#9bd9e4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm">No pressure, no obligation</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-[#9bd9e4] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 text-sm">Direct access to a CPA</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
