'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#06080C] text-white flex items-center justify-center px-6 pt-32 pb-16 selection:bg-[#01FAFD] selection:text-[#06080C]">
      <div className="w-full max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have questions, feedback, or a business inquiry? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as we can.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-[#0A0E14] rounded-2xl border border-white/5 shadow-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#10151D] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#01FAFD] focus:ring-1 focus:ring-[#01FAFD]/50 transition-all placeholder:text-gray-600"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#10151D] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#01FAFD] focus:ring-1 focus:ring-[#01FAFD]/50 transition-all placeholder:text-gray-600"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-[#10151D] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#01FAFD] focus:ring-1 focus:ring-[#01FAFD]/50 transition-all placeholder:text-gray-600 resize-none"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-500 order-2 sm:order-1">
                By submitting, you agree to our{' '}
                <Link href="/privacy" className="text-[#01FAFD] hover:underline">
                  Privacy Policy
                </Link>.
              </p>
              <button
                type="submit"
                className="order-1 sm:order-2 inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#01FAFD] text-[#06080C] font-bold uppercase tracking-wider text-sm rounded-xl hover:bg-[#3FF9FB] transition-all shadow-lg shadow-[#01FAFD]/20 hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}