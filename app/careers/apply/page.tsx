'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

const positions = [
  { value: '', label: 'Select a position' },
  { value: 'senior-tax-manager', label: 'Senior Tax Manager' },
  { value: 'staff-accountant', label: 'Staff Accountant' },
  { value: 'tax-preparer-seasonal', label: 'Tax Preparer (Seasonal)' },
  { value: 'general', label: 'General Application' }
];

export default function CareerApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      // Check file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      setResumeFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="bg-[#fafafa] min-h-screen">
        <section className="py-24 md:py-32">
          <div className="max-w-2xl mx-auto px-8 text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#003067] mb-6">Application Received</h1>
            <p className="text-xl text-gray-600 mb-10">
              Thank you for your interest in joining Kruse & Crawford. We will review your application and get back to you soon.
            </p>
            <Link href="/careers" className="inline-flex items-center gap-3 px-8 py-4 bg-[#003067] text-white font-bold rounded-full hover:bg-[#002050] transition-colors">
              Back to Careers
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#fafafa]">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#003067] via-[#003067] to-[#002050] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-[#9bd9e4]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-[#9bd9e4]/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 md:py-24">
          <Link href="/careers" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Careers</span>
          </Link>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 rounded-full mb-8 border border-white/20">
              <div className="w-2.5 h-2.5 bg-[#9bd9e4] rounded-full animate-pulse" />
              <span className="text-[#9bd9e4] text-sm font-semibold tracking-wider uppercase">Apply Now</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Join Our Team
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Complete the form below to apply for a position at Kruse & Crawford. We review every application and will be in touch if there is a good fit.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-[#003067] mb-8">Application Form</h2>

            {/* Name Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all"
                  placeholder="Smith"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Position */}
            <div className="mb-6">
              <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all bg-white"
              >
                {positions.map(pos => (
                  <option key={pos.value} value={pos.value}>{pos.label}</option>
                ))}
              </select>
            </div>

            {/* Resume Upload */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Resume <span className="text-red-500">*</span>
              </label>
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-[#9bd9e4] hover:bg-[#9bd9e4]/5 ${resumeFile ? 'border-emerald-400 bg-emerald-50' : 'border-gray-200'}`}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  required={!resumeFile}
                />
                {resumeFile ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-800">{resumeFile.name}</p>
                      <p className="text-sm text-gray-500">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile();
                      }}
                      className="ml-4 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 hover:bg-red-200 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-1">
                      <span className="font-semibold text-[#003067]">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-gray-400">PDF or Word document (max 5MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Cover Letter / Message */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Cover Letter / Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#9bd9e4] focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about yourself and why you're interested in joining Kruse & Crawford..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                isSubmitting
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-[#003067] text-white hover:bg-[#002050] hover:shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            <p className="text-center text-sm text-gray-500 mt-6">
              By submitting this application, you agree to our{' '}
              <Link href="/privacy" className="text-[#003067] hover:underline">Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-gray-600 mb-4">
            Have questions before applying?
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[#003067] font-semibold hover:text-[#9bd9e4] transition-colors">
            Contact us directly
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
