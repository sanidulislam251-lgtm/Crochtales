import React, { useState } from 'react';
import { Mail, Instagram, Send, Sparkles, MessageSquare, ChevronDown, CheckCircle2, Clock, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'general',
    message: '',
    parcelDate: ''
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', type: 'general', message: '', parcelDate: '' });
      }, 4000);
    }
  };

  const FAQS = [
    {
      q: 'How long does it take to craft a custom order?',
      a: 'Ready-to-ship plushies and totes are dispatched in 1–2 business days. Custom made-to-order cardigans or bulk flower bouquets take between 4 to 7 crafting days. If you have an urgent gift deadline, let us know in your note!'
    },
    {
      q: 'How do I customize the handwritten parcel note?',
      a: 'During checkout or inside any product detail modal, you will find a text area titled "Personalize Your Parcel". Type your message there! We hand-write it onto a kraft gift card with wax seal finish.'
    },
    {
      q: 'Do you ship internationally?',
      a: 'Yes! We ship Crochtales parcels worldwide with full online tracking updates sent directly to your email.'
    },
    {
      q: 'What yarn materials do you use?',
      a: 'We use 100% hypoallergenic organic milk cotton yarn for plushies and totes, and soft wool-cotton blends for wearables. All materials are non-toxic and skin-safe.'
    },
    {
      q: 'Can I send a parcel directly to a gift recipient?',
      a: 'Absolutely! Enter their shipping address during checkout. We do not include any price invoices inside gift packages — only your beautiful custom handwritten note.'
    }
  ];

  return (
    <div className="py-12 bg-[#FAF7F2] min-h-screen space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF2EA] rounded-3xl p-8 sm:p-12 border border-[#E0C9B7] text-center space-y-3 shadow-xs">
          <span className="text-xs uppercase font-bold text-[#B87B64] tracking-widest inline-flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" /> We Love Hearing From You
          </span>
          <h1 className="font-serif-crochet text-4xl sm:text-5xl font-bold text-[#3B2E2A]">
            Get in Touch with Crochtales
          </h1>
          <p className="text-sm text-[#6E5D59] max-w-xl mx-auto leading-relaxed">
            Have questions about a custom crochet commission, bulk party favors, or parcel delivery? Drop us a note or DM us directly on Instagram!
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form & Studio Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-[#E8DDD3] shadow-xs space-y-6">
              <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                Studio Contact Info
              </h3>

              <div className="space-y-4 text-xs text-[#5C4D4A]">
                <a
                  href="https://instagram.com/__crochetales__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-2xl hover:bg-[#F2E8DF] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-sm text-[#3B2E2A]">@__crochetales__</span>
                    <span className="text-[#8C7670]">Fastest response via Instagram DM</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#E8D3C5] text-[#5C4D4A] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-sm text-[#3B2E2A]">hello@crochtales.com</span>
                    <span className="text-[#8C7670]">For order inquiries & business collabs</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-[#FAF7F2] rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-[#E8D3C5] text-[#5C4D4A] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-sm text-[#3B2E2A]">Studio Craft Hours</span>
                    <span className="text-[#8C7670]">Mon – Sat: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Instagram Banner Card */}
              <div className="p-5 bg-[#5C4D4A] rounded-2xl text-[#FAF7F2] text-xs space-y-2">
                <span className="font-bold text-[#E0A96D] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Studio Instagram
                </span>
                <p className="text-[#D9C4B5] leading-relaxed">
                  Join 5,000+ crochet lovers following our daily yarn drops and custom parcel unboxings!
                </p>
                <a
                  href="https://instagram.com/__crochetales__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pt-1 font-bold text-[#E0A96D] underline hover:text-white"
                >
                  Visit Instagram Profile &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8DDD3] shadow-xs space-y-6">
            <h3 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
              Send Us a Message
            </h3>

            {formSubmitted ? (
              <div className="p-8 bg-[#F0F4EF] rounded-3xl border border-[#C3D9C1] text-center space-y-3">
                <div className="w-12 h-12 bg-[#8F9779] text-white rounded-full flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="font-serif-crochet text-2xl font-bold text-[#3B2E2A]">
                  Message Received with Thanks!
                </h4>
                <p className="text-xs text-[#6E5D59] max-w-sm mx-auto">
                  Our lead crochet maker will reply to <strong>{formData.email}</strong> within 12 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Lin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Inquiry Category</label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="custom">Custom Crochet Order Request</option>
                      <option value="order">Existing Order Status</option>
                      <option value="gift">Bulk Gift / Favors</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#5C4D4A]">Needed Delivery Date (If Gift)</label>
                    <input
                      type="date"
                      value={formData.parcelDate}
                      onChange={(e) => setFormData({ ...formData, parcelDate: e.target.value })}
                      className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#5C4D4A]">Your Message / Custom Details *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you'd like us to stitch, preferred colors, or any parcel note requests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#D9C0AE] focus:outline-none focus:border-[#B87B64] font-serif-crochet text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#5C4D4A] hover:bg-[#4A3E3D] text-[#FAF7F2] font-bold rounded-full shadow-md transition-all flex items-center justify-center gap-2 text-sm"
                  id="contact-form-submit-btn"
                >
                  <Send className="w-4 h-4 text-[#E0A96D]" /> Send Studio Message
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B87B64]">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif-crochet text-3xl font-bold text-[#3B2E2A]">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E8DDD3] overflow-hidden shadow-xs transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-serif-crochet font-bold text-lg text-[#3B2E2A] flex items-center justify-between gap-4 hover:bg-[#FAF7F2]"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#B87B64] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-[#6E5D59] leading-relaxed border-t border-[#F4EBE1] pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
