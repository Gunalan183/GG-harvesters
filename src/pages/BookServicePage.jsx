import { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Breadcrumb from '../components/ui/Breadcrumb';
import { setPageMeta } from '../utils/seo';
import { BUSINESS } from '../data/siteData';
import { whatsappLink } from '../utils/whatsapp';

const SERVICE_OPTIONS = [
  { value: '', label: 'சேவை தேர்வு செய்யுங்கள்' },
  { value: 'paddy-harvester', label: '🌾 Paddy Harvester — நெல் அறுவடை' },
  { value: 'tractor', label: '🚜 Tractor — டிராக்டர்' },
  { value: 'tractor-rotavator', label: '🌱 Tractor + Rotavator — ரோட்டவேட்டர்' },
  { value: 'jcb', label: '🚧 JCB — JCB சேவை' },
  { value: 'jcb-3cx', label: '🏗️ JCB 3CX Backhoe Loader' },
  { value: 'jcb-mini-excavator', label: '⛏️ JCB Mini Excavator' },
  { value: 'tractor-round-baler', label: '🌀 Tractor + Round Baler' },
  { value: 'other', label: 'மற்றவை / Other' },
];

function validateForm(data) {
  const errors = {};
  if (!data.name.trim()) errors.name = 'பெயர் தேவை';
  if (!data.phone.trim()) {
    errors.phone = 'மொபைல் எண் தேவை';
  } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ''))) {
    errors.phone = 'சரியான மொபைல் எண் உள்ளிடுங்கள்';
  }
  if (!data.service) errors.service = 'சேவை தேர்வு செய்யுங்கள்';
  if (!data.location.trim()) errors.location = 'ஊர் / இடம் தேவை';
  return errors;
}

export default function BookServicePage() {
  const [form, setForm] = useState({
    name: '', phone: '', service: '', location: '', date: '', details: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPageMeta({
      title: 'சேவை பதிவு | Book a Service | GG Harvester and Earth Movers',
      description:
        'GG Harvester and Earth Movers — இயந்திர சேவை பதிவு செய்யுங்கள். நெல் அறுவடை, JCB, டிராக்டர், Mini Excavator. 📞 8608522042',
      canonical: 'https://www.ggharvesters.com/book-service',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const buildWhatsAppMessage = () => {
    const svc = SERVICE_OPTIONS.find((s) => s.value === form.service)?.label || form.service;
    return `வணக்கம் GG Harvester, நான் சேவை பதிவு செய்ய விரும்புகிறேன்.\n\nபெயர்: ${form.name}\nமொபைல்: ${form.phone}\nசேவை: ${svc}\nஊர்/இடம்: ${form.location}${form.date ? `\nதேதி: ${form.date}` : ''}${form.details ? `\nவேலை விவரம்: ${form.details}` : ''}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Simulate submission + redirect to WhatsApp
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Open WhatsApp
      window.open(whatsappLink(buildWhatsAppMessage()), '_blank', 'noopener,noreferrer');
    }, 800);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center p-4">
          <div className="max-w-md w-full text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter">
            <CheckCircle size={64} className="text-[#1a5c2e] mx-auto mb-5" />
            <h1 className="tamil text-2xl font-extrabold text-gray-50 mb-3">
              பதிவு வெற்றிகரமாக அனுப்பப்பட்டது!
            </h1>
            <p className="tamil text-gray-400 mb-6 leading-relaxed">
              உங்கள் சேவை கோரிக்கை WhatsApp மூலம் GG Harvester-க்கு அனுப்பப்பட்டுள்ளது.
              விரைவில் தொடர்பு கொள்வோம்.
            </p>
            <p className="tamil text-gray-500 text-sm mb-8">
              நேரடியாக அழைக்க:{' '}
              <a href={`tel:+91${BUSINESS.phones[0]}`} className="text-[#1a5c2e] font-bold">
                {BUSINESS.phones[0]}
              </a>
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', location: '', date: '', details: '' }); }}
              className="btn-outline"
            >
              மேலும் ஒரு சேவை பதிவு செய்க
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-hero animate-fade-in-up">
        <div className="container-site pt-4">
          <Breadcrumb
            items={[{ label: 'முகப்பு', path: '/' }, { label: 'சேவை பதிவு' }]}
          />
          <div className="mt-6 max-w-2xl">
            <span className="badge-gold mb-3">சேவை பதிவு</span>
            <h1 className="tamil text-white text-3xl md:text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200xl font-extrabold mb-4">
              இயந்திர சேவை{' '}
              <span className="text-[#f0c040]">பதிவு செய்யுங்கள்</span>
            </h1>
            <p className="tamil text-white/85 text-base">
              கீழே உள்ள படிவத்தை நிரப்பி சேவை பதிவு செய்யுங்கள். அல்லது நேரடியாக அழைக்கலாம்.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py animate-fade-in-up">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className=" bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-lg hover:-translate-y-1 transition-all duration-300  rounded-2xl   border border-gray-100 p-6 md:p-8">
                <h2 className="tamil font-bold text-xl text-gray-50 mb-6">
                  சேவை விவரங்கள் உள்ளிடுங்கள்
                </h2>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="sm:col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="form-label">
                        பெயர் <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="உங்கள் பெயர்"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="form-label">
                        மொபைல் எண் <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="9876543210"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        inputMode="numeric"
                        maxLength={10}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div className="sm:col-span-2">
                      <label htmlFor="service" className="form-label">
                        சேவை <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        className={`form-input ${errors.service ? 'error' : ''}`}
                        value={form.service}
                        onChange={handleChange}
                        aria-describedby={errors.service ? 'service-error' : undefined}
                        aria-invalid={!!errors.service}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={!opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p id="service-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="form-label">
                        ஊர் / இடம் <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="location"
                        name="location"
                        type="text"
                        className={`form-input ${errors.location ? 'error' : ''}`}
                        placeholder="வேலை நடைபெறும் ஊர்"
                        value={form.location}
                        onChange={handleChange}
                        aria-describedby={errors.location ? 'location-error' : undefined}
                        aria-invalid={!!errors.location}
                      />
                      {errors.location && (
                        <p id="location-error" className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.location}
                        </p>
                      )}
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="date" className="form-label">
                        தேவைப்படும் தேதி
                      </label>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        className="form-input"
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Details */}
                    <div className="sm:col-span-2">
                      <label htmlFor="details" className="form-label">
                        வேலை விவரம்
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        rows={4}
                        className="form-input resize-none"
                        placeholder="வேலை பற்றிய கூடுதல் விவரங்கள்..."
                        value={form.details}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className=" relative overflow-hidden group bg-gradient-to-br from-amber-500 to-yellow-500 text-emerald-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 rounded-xl  w-full justify-center text-base py-4"
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                          அனுப்புகிறோம்...
                        </>
                      ) : (
                        <>📋 சேவை பதிவு செய்யுங்கள் (WhatsApp)</>
                      )}
                    </button>
                    <p className="tamil text-gray-500 text-xs text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100enter mt-3">
                      படிவம் சமர்ப்பிக்கும்போது WhatsApp திறக்கும். உங்கள் தகவல் பாதுகாப்பாக பகிரப்படும்.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#1a5c2e] text-white rounded-2xl p-6">
                <h3 className="tamil font-bold text-lg mb-4">நேரடி தொடர்பு</h3>
                <div className="space-y-3">
                  {BUSINESS.phones.map((phone) => (
                    <a key={phone} href={`tel:+91${phone}`} className="flex items-center gap-3 bg-white/15 hover:bg-white/25 rounded-xl p-3 transition-colors">
                      <span className="text-[#f0c040]">📞</span>
                      <span className="font-bold">{phone}</span>
                    </a>
                  ))}
                  <a
                    href={whatsappLink('வணக்கம் GG Harvester, சேவை தேவை.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25d366] hover:bg-[#1ebe5d] rounded-xl p-3 transition-colors"
                  >
                    <span>💬</span>
                    <span className="font-bold">WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#fdf8e8] border border-[#d4a017]/30 rounded-2xl p-5">
                <h4 className="tamil font-bold text-gray-50 mb-3">📍 எங்கள் இடம்</h4>
                <p className="tamil text-gray-300 text-sm leading-relaxed">{BUSINESS.address.fullTamil}</p>
              </div>

              <div className=" bg-slate-950  rounded-2xl p-5">
                <h4 className="tamil font-bold text-gray-50 mb-2 text-sm">💡 குறிப்பு</h4>
                <ul className="space-y-1.5 tamil text-gray-400 text-xs leading-relaxed">
                  <li>✓ படிவம் சமர்ப்பிக்கும்போது WhatsApp திறக்கும்</li>
                  <li>✓ உங்கள் தகவல் பாதுகாப்பாக இருக்கும்</li>
                  <li>✓ விரைவில் தொடர்பு கொள்வோம்</li>
                  <li>✓ முன்கூட்டியே பதிவு செய்வது சிறந்தது</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
