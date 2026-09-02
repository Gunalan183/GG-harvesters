import { ArrowRight, Sparkles } from 'lucide-react';
import { whatsappLink, WHATSAPP_MESSAGES } from '../../utils/whatsapp';

const HIGHLIGHTS = [
  {
    titleEn: 'Combine Harvesting',
    titleTamil: 'கம்பைன் அறுவடை சேவை',
    desc: 'Kartar 4000 மூலம் திறமையான அறுவடை சேவை.',
    icon: '🌾',
    gradient: 'from-amber-100/80 to-yellow-50/40',
    iconColor: 'bg-amber-100 text-amber-700',
    borderColor: 'border-amber-200/60',
    textColor: 'text-amber-900'
  },
  {
    titleEn: 'Tractor Services',
    titleTamil: 'டிராக்டர் சேவைகள்',
    desc: 'வயல் உழவு மற்றும் பிற விவசாய பணிகள்.',
    icon: '🚜',
    gradient: 'from-orange-100/80 to-orange-50/40',
    iconColor: 'bg-orange-100 text-orange-700',
    borderColor: 'border-orange-200/60',
    textColor: 'text-orange-900'
  },
  {
    titleEn: 'Agri Transport',
    titleTamil: 'விவசாய போக்குவரத்து',
    desc: 'பொருட்கள் மற்றும் இயந்திரங்கள் போக்குவரத்து.',
    icon: '🚛',
    gradient: 'from-blue-100/80 to-blue-50/40',
    iconColor: 'bg-blue-100 text-blue-700',
    borderColor: 'border-blue-200/60',
    textColor: 'text-blue-900'
  },
  {
    titleEn: 'Machinery Transport',
    titleTamil: 'இயந்திர போக்குவரத்து',
    desc: 'இயந்திரங்களை பாதுகாப்பாக கொண்டு வருதல்.',
    icon: '🏗️',
    gradient: 'from-purple-100/80 to-purple-50/40',
    iconColor: 'bg-purple-100 text-purple-700',
    borderColor: 'border-purple-200/60',
    textColor: 'text-purple-900'
  },
  {
    titleEn: 'Full Support',
    titleTamil: 'முழுமையான உதவி',
    desc: 'அறுவடை முதல் போக்குவரத்து வரை ஆதரவு.',
    icon: '🤝',
    gradient: 'from-emerald-100/80 to-emerald-50/40',
    iconColor: 'bg-emerald-100 text-emerald-700',
    borderColor: 'border-emerald-200/60',
    textColor: 'text-emerald-900'
  },
  {
    titleEn: 'Mechanic Service',
    titleTamil: 'மெக்கானிக்கல் சேவை',
    desc: 'இயந்திரங்கள் பழுது சரிசெய்தல்.',
    icon: '🔧',
    gradient: 'from-rose-100/80 to-rose-50/40',
    iconColor: 'bg-rose-100 text-rose-700',
    borderColor: 'border-rose-200/60',
    textColor: 'text-rose-900'
  },
];

export default function ServiceHighlights() {
  return (
    <section 
      className="py-12 md:py-16 px-4 relative overflow-hidden bg-white"
      aria-label="Service highlights"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-amber-50 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-emerald-50 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100/50 text-amber-800 text-[0.65rem] md:text-sm font-bold uppercase tracking-widest mb-3 border border-amber-200/50">
            <Sparkles size={14} />
            <span>Our Core Services</span>
          </div>
          <h2 className="tamil font-extrabold text-2xl md:text-4xl text-gray-900 mb-3 leading-tight">
            எங்கள் <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">சேவைகள்</span>
          </h2>
          <p className="tamil text-gray-500 text-xs md:text-base max-w-xl mx-auto">
            விவசாயிகளுக்கு தேவையான அனைத்து சேவைகளையும் நம்பகமான முறையில் வழங்குகிறோம்.
          </p>
        </div>

        {/* Mobile: 2 Columns | Tablet: 3 Columns | Desktop: 6 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-5">
          {HIGHLIGHTS.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col bg-white border ${item.borderColor} rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden text-center`}
            >
              {/* Premium Background Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              {/* Icon */}
              <div className="relative z-10 flex justify-center mb-3 md:mb-5">
                <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full md:rounded-2xl shadow-sm ${item.iconColor} text-xl md:text-3xl border border-white/50 group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="font-bold text-[0.55rem] md:text-xs uppercase tracking-widest mb-1 md:mb-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                    {item.titleEn}
                  </h4>
                  <h3 className={`tamil font-bold text-[0.8rem] md:text-[1.05rem] leading-snug mb-1.5 md:mb-2 ${item.textColor}`}>
                    {item.titleTamil}
                  </h3>
                </div>
                <p className="tamil text-[0.65rem] md:text-sm text-gray-500 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-10 md:mt-14">
          <a
            href={whatsappLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold rounded-full px-6 py-3 md:px-8 md:py-4 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <ArrowRight size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            <span className="tamil text-[0.8rem] md:text-base whitespace-nowrap">
              Book Now — முன்பதிவு செய்க
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
