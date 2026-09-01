// ============================================
// GG Harvester and Earth Movers — Site Data
// ============================================

export const BUSINESS = {
  name: 'GG Harvesters and Earth Movers',
  nameTamil: 'GG ஹார்வெஸ்டர் மற்றும் எர்த் மூவர்ஸ்',
  taglineTamil: 'விவசாயம் மற்றும் நிலப் பணிகளுக்கான இயந்திர சேவைகள்',
  taglineEnglish: 'Agricultural & Earth Moving Machinery Services',
  phones: ['8608522042', '8248287672'],
  whatsapp: '918608522042', // with country code, no +
  address: {
    street: '229 Main Road, Pambapadiyur',
    taluk: 'Kumbakonam Taluk',
    district: 'Thanjavur',
    state: 'Tamil Nadu',
    pin: '612703',
    full: '229 Main Road, Pambapadiyur, Kumbakonam Taluk, Thanjavur, Tamil Nadu – 612703',
    fullTamil: '229 மெயின் ரோடு, பம்பைப்படியூர், கும்பகோணம் தாலுக்கா, தஞ்சாவூர், தமிழ்நாடு – 612703',
  },
  mapUrl: 'https://maps.google.com/?q=229+Main+Road+Pambapadiyur+Kumbakonam',
  website: 'https://www.ggharvesters.com',
  email: '',  // add if available
};

export const SERVICES = [
  {
    id: 'paddy-harvester',
    slug: 'paddy-harvester',
    icon: '🌾',
    nameTamil: 'நெல் அறுவடை இயந்திரம்',
    nameEnglish: 'Paddy Harvester',
    shortDesc: 'நெல் வயல்களில் வேகமான மற்றும் திறமையான அறுவடை சேவை.',
    shortDescEnglish: 'Fast and efficient paddy harvesting service for rice fields.',
    image: '/images/services/gg-paddy-harvester-service-kumbakonam.jpg',
    altText: 'GG paddy harvester machine working in a rice field near Kumbakonam Thanjavur',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு நெல் அறுவடை சேவை தேவை. என் இடம்: ______',
    seoTitle: 'Paddy Harvester Service in Kumbakonam | GG Harvester',
    metaDesc: 'Kumbakonam & Thanjavur பகுதியில் நெல் அறுவடை இயந்திர சேவை. நேர்த்தியான மற்றும் விரைவான அறுவடை. 📞 8608522042 — GG Harvester and Earth Movers.',
    applications: [
      'நெல் வயல் அறுவடை',
      'சிறிய மற்றும் பெரிய வயல்களுக்கு',
      'குறுகிய நேரத்தில் முடிக்கும் பணி',
    ],
    color: 'green',
  },
  {
    id: 'lorry',
    slug: 'lorry',
    icon: '🚛',
    nameTamil: 'லாரி சேவை',
    nameEnglish: 'Lorry Service',
    shortDesc: 'இயந்திரங்கள் மற்றும் விளைபொருட்களை ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு லாரி மூலம் கொண்டு செல்லும் சேவை.',
    shortDescEnglish: 'Lorry transport service for machinery and agricultural produce.',
    image: '/images/machinery/gg-paddy-harvester-transport-lorry.png',
    altText: 'GG lorry transport service for paddy harvester and agricultural machinery Kumbakonam',
    whatsappMsg: 'வணக்கம் GG Harvesters, எனக்கு லாரி சேவை தேவை. வேலை நடைபெறும் இடம்: ______\nபொருள் விவரம்: ______',
    seoTitle: 'Lorry Transport Service in Kumbakonam | GG Harvesters',
    metaDesc: 'GG Harvesters and Earth Movers — Kumbakonam & Thanjavur பகுதியில் லாரி போக்குவரத்து சேவை. இயந்திரங்கள் மற்றும் விளைபொருட்கள் கொண்டு செல்ல. 📞 8608522042.',
    applications: [
      'இயந்திர போக்குவரத்து',
      'நெல் மற்றும் விளைபொருட்கள் கொண்டு செல்லல்',
      'கட்டுமான பொருட்கள் கொண்டு செல்லல்',
    ],
    color: 'blue',
  },
  {
    id: 'tractor-tailer',
    slug: 'tractor-tailer',
    icon: '🚜',
    nameTamil: 'டிராக்டர் + டெய்லர் சேவை',
    nameEnglish: 'Tractor with Tailer',
    shortDesc: 'விளைபொருட்கள் மற்றும் பொருட்களை வயலிலிருந்து இடம் மாற்றுவதற்கு டிராக்டர் + டெய்லர் சேவை.',
    shortDescEnglish: 'Tractor with tailer service for transporting produce and materials.',
    image: '/images/services/tractor with tailer.jpg',
    altText: 'GG tractor with tailer transport service Kumbakonam Thanjavur',
    whatsappMsg: 'வணக்கம் GG Harvesters, எனக்கு Tractor + Tailer சேவை தேவை. வேலை நடைபெறும் இடம்: ______\nபொருள் விவரம்: ______',
    seoTitle: 'Tractor Tailer Service in Kumbakonam | GG Harvesters',
    metaDesc: 'GG Harvesters and Earth Movers — Kumbakonam & Thanjavur பகுதியில் டிராக்டர் டெய்லர் சேவை. விளைபொருட்கள் மற்றும் பொருட்கள் கொண்டு செல்ல. 📞 8608522042.',
    applications: [
      'விளைபொருட்கள் கொண்டு செல்லல்',
      'வயல் முதல் கோடவரை போக்குவரத்து',
      'கட்டுமான பொருட்கள் ஏற்றுமதி',
      'நடமாடும் பொருட்கள் இடமாற்றம்',
    ],
    color: 'green',
  },
  {
    id: 'tractor',
    slug: 'tractor',
    icon: '🚜',
    nameTamil: 'டிராக்டர் சேவை',
    nameEnglish: 'Tractor Service',
    shortDesc: 'நிலம் தயார் செய்வதற்கும் விவசாய பணிகளுக்கும் டிராக்டர் சேவை.',
    shortDescEnglish: 'Tractor service for land preparation and agricultural work.',
    image: '/images/services/gg-tractor-agricultural-kumbakonam.jpg',
    altText: 'GG tractor service for agricultural land preparation in Kumbakonam Thanjavur',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு Tractor சேவை தேவை. வேலை நடைபெறும் இடம்: ______',
    seoTitle: 'Tractor Service in Kumbakonam & Thanjavur | GG Harvester',
    metaDesc: 'GG Harvester and Earth Movers — Kumbakonam & Thanjavur பகுதியில் டிராக்டர் சேவை. விவசாய பணிகளுக்கு நம்பகமான சேவை. 📞 8608522042.',
    applications: [
      'நிலம் தயார் செய்தல்',
      'விவசாய பணிகள்',
      'பொருட்கள் ஏற்றி இறக்குதல்',
    ],
    color: 'green',
  },
  {
    id: 'tractor-rotavator',
    slug: 'tractor-rotavator',
    icon: '🌱',
    nameTamil: 'டிராக்டர் + ரோட்டவேட்டர் சேவை',
    nameEnglish: 'Tractor + Rotavator',
    shortDesc: 'நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு தயார்படுத்துவதற்கு ரோட்டவேட்டர் சேவை.',
    shortDescEnglish: 'Deep soil tilling with rotavator for seed bed preparation.',
    image: '/images/services/gg-tractor-rotavator-service-kumbakonam.jpg',
    altText: 'GG tractor with rotavator tilling agricultural land in Kumbakonam Tamil Nadu',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு Tractor + Rotavator சேவை தேவை. வேலை நடைபெறும் இடம்: ______',
    seoTitle: 'Tractor Rotavator Service in Kumbakonam | GG Harvester',
    metaDesc: 'Kumbakonam & Thanjavur பகுதியில் டிராக்டர் ரோட்டவேட்டர் சேவை. நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு தயார்படுத்துங்கள். 📞 8608522042.',
    applications: [
      'ஆழமான மண் உழவு',
      'விதை விதைப்பிற்கு நிலம் தயார்',
      'ஈரமான மற்றும் உலர்ந்த நிலம்',
    ],
    color: 'green',
  },
  {
    id: 'jcb',
    slug: 'jcb',
    icon: '🚧',
    nameTamil: 'JCB சேவை',
    nameEnglish: 'JCB Service',
    shortDesc: 'மண் தோண்டுதல், கட்டுமான பணிகள் மற்றும் நில சீரமைப்பிற்கு JCB சேவை.',
    shortDescEnglish: 'JCB earthmoving and construction service for various projects.',
    image: '/images/services/gg-jcb-service-kumbakonam.jpg',
    altText: 'GG JCB earthmoving machine working on construction site near Kumbakonam',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு JCB சேவை தேவை. வேலை நடைபெறும் இடம்: ______',
    seoTitle: 'JCB Service in Kumbakonam | GG Harvester & Earth Movers',
    metaDesc: 'GG Harvester and Earth Movers — Kumbakonam & Thanjavur பகுதியில் JCB சேவை. மண் தோண்டல், கட்டுமானம், நில சீரமைப்பு. 📞 8608522042.',
    applications: [
      'மண் தோண்டல்',
      'கட்டுமான பணிகள்',
      'நில சீரமைப்பு',
      'கால்வாய் தோண்டல்',
    ],
    color: 'gold',
  },
  {
    id: 'jcb-mini-excavator',
    slug: 'jcb-mini-excavator',
    icon: '⛏️',
    nameTamil: 'JCB Mini Excavator சேவை',
    nameEnglish: 'JCB Mini Excavator',
    shortDesc: 'குறுகிய இடங்களில் தோண்டுதல், கால்வாய் பணிகள் மற்றும் நில சீரமைப்பிற்கு Mini Excavator.',
    shortDescEnglish: 'Compact mini excavator for tight spaces, canal work and land levelling.',
    image: '/images/services/jcb_mini_service.jpg',
    altText: 'GG JCB mini excavator digging canal and earthwork near Thanjavur Tamil Nadu',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு JCB Mini Excavator சேவை தேவை. வேலை நடைபெறும் இடம்: ______',
    seoTitle: 'JCB Mini Excavator Service in Thanjavur | GG Harvester',
    metaDesc: 'GG Harvester and Earth Movers — JCB Mini Excavator சேவை Kumbakonam & Thanjavur பகுதியில். குறுகிய இடங்கள், கால்வாய் தோண்டல், நில சீரமைப்பு. 📞 8608522042.',
    applications: [
      'குறுகிய இடங்களில் தோண்டல்',
      'கால்வாய் மற்றும் வடிகால் பணிகள்',
      'நிலத்தடி குழாய் பணிகள்',
      'நில சீரமைப்பு',
    ],
    color: 'gold',
  },
  {
    id: 'tractor-round-baler',
    slug: 'tractor-round-baler',
    icon: '🌀',
    nameTamil: 'டிராக்டர் + Round Baler சேவை',
    nameEnglish: 'Tractor + Round Baler',
    shortDesc: 'அறுவடைக்கு பின் வைக்கோல் மற்றும் தாவர கழிவுகளை சுருட்டி பேக் செய்ய Round Baler சேவை.',
    shortDescEnglish: 'Round baler service for baling straw and crop residue after harvest.',
    image: '/images/services/gg-tractor-round-baler-service-thanjavur.jpg',
    altText: 'GG tractor with round baler baling straw after paddy harvest in Thanjavur Tamil Nadu',
    whatsappMsg: 'வணக்கம் GG Harvester, எனக்கு Tractor + Round Baler சேவை தேவை. வேலை நடைபெறும் இடம்: ______',
    seoTitle: 'Tractor Round Baler Service in Tamil Nadu | GG Harvester',
    metaDesc: 'GG Harvester and Earth Movers — Round Baler சேவை Kumbakonam & Thanjavur பகுதியில். அறுவடைக்கு பின் வைக்கோல் பேக் செய்யும் சேவை. 📞 8608522042.',
    applications: [
      'நெல் வைக்கோல் சுருட்டல்',
      'தாவர கழிவு மேலாண்மை',
      'வயல் சுத்தப்படுத்தல்',
    ],
    color: 'green',
  },
];

export const TRUST_POINTS = [
  {
    icon: '⚙️',
    title: 'நம்பகமான இயந்திரங்கள்',
    desc: 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள்',
  },
  {
    icon: '👷',
    title: 'அனுபவமிக்க ஆபரேட்டர்கள்',
    desc: 'திறமையான மற்றும் பயிற்சி பெற்ற ஆபரேட்டர்கள்',
  },
  {
    icon: '⏰',
    title: 'சரியான நேரத்தில் சேவை',
    desc: 'கோரிய நேரத்தில் இயந்திரம் வரும்',
  },
  {
    icon: '🌾',
    title: 'விவசாயிகளுக்கான சேவை',
    desc: 'விவசாய தேவைகளை முழுமையாக புரிந்து சேவை',
  },
  {
    icon: '📍',
    title: 'சுற்றுவட்டார பகுதிகள்',
    desc: 'கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில் உள்ள கிராமங்கள்',
  },
  {
    icon: '📞',
    title: 'நேரடி தொடர்பு',
    desc: 'நேரடியாக அழைத்து சேவை பதிவு செய்யலாம்',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    titleTamil: 'தொடர்பு கொள்ளுங்கள்',
    descTamil: 'தொலைபேசி அல்லது WhatsApp மூலம் தொடர்பு கொள்ளுங்கள்.',
  },
  {
    step: '02',
    titleTamil: 'உங்கள் தேவையை சொல்லுங்கள்',
    descTamil: 'எந்த இயந்திரம் தேவை, எவ்வளவு நேரம் என்பதை சொல்லுங்கள்.',
  },
  {
    step: '03',
    titleTamil: 'இடம் மற்றும் விவரங்களை பகிருங்கள்',
    descTamil: 'வேலை நடைபெறும் இடம் மற்றும் வேலை விவரங்களை தெரிவியுங்கள்.',
  },
  {
    step: '04',
    titleTamil: 'சேவை நேரத்தை உறுதி செய்யுங்கள்',
    descTamil: 'தேதி மற்றும் நேரம் உறுதி செய்யப்படும்.',
  },
  {
    step: '05',
    titleTamil: 'இயந்திரம் உங்கள் இடத்திற்கு வரும்',
    descTamil: 'உங்கள் வயலுக்கு அல்லது தொழில் இடத்திற்கு இயந்திரம் வரும்.',
  },
];

export const SERVICE_AREAS = {
  primary: ['Pambapadiyur', 'Kumbakonam', 'Thanjavur'],
  nearby: [
    'Papanasam', 'Thiruvidaimarudur', 'Nannilam', 'Orathanadu',
    'Peravurani', 'Pattukottai', 'Thiruvarur', 'Nagapattinam',
    'Sirkazhi', 'Mayiladuthurai',
  ],
  note: 'சேவை கிடைக்கும் இடங்களை உறுதி செய்ய தொடர்பு கொள்ளவும்.',
};

export const FAQ_LIST = [
  {
    question: 'நெல் அறுவடை சேவை எந்த பகுதிகளில் கிடைக்கும்?',
    answer: 'கும்பகோணம், தஞ்சாவூர், பம்பைப்படியூர் மற்றும் அருகில் உள்ள பகுதிகளில் சேவை கிடைக்கும். சரியான விவரத்திற்கு தொடர்பு கொள்ளவும்.',
  },
  {
    question: 'டிராக்டர் மற்றும் ரோட்டவேட்டர் சேவை கிடைக்குமா?',
    answer: 'ஆம், டிராக்டர் மற்றும் ரோட்டவேட்டர் சேவை கிடைக்கும். நிலம் தயார் செய்வதற்கு இந்த சேவை மிகவும் பயனுள்ளது.',
  },
  {
    question: 'JCB Mini Excavator சேவை எதற்கெல்லாம் பயன்படுத்தலாம்?',
    answer: 'கால்வாய் தோண்டல், நிலத்தடி குழாய் பணிகள், குறுகிய இடங்களில் மண் தோண்டல் மற்றும் நில சீரமைப்பிற்கு JCB Mini Excavator பயன்படும்.',
  },
  {
    question: 'JCB 3CX சேவை எதற்கெல்லாம் பயன்படுத்தலாம்?',
    answer: 'குழி தோண்டல், கட்டுமான அடிப்படை பணிகள், மண் அகற்றல், ரோடு பணிகள் மற்றும் பல்வேறு நில பணிகளுக்கு JCB 3CX Backhoe Loader பயன்படும்.',
  },
  {
    question: 'சேவையை எவ்வாறு பதிவு செய்வது?',
    answer: '8608522042 அல்லது 8248287672 என்ற எண்ணில் அழைக்கலாம் அல்லது WhatsApp மூலம் தொடர்பு கொள்ளலாம். இணையதளத்தில் உள்ள படிவம் மூலமும் பதிவு செய்யலாம்.',
  },
  {
    question: 'முன்கூட்டியே எத்தனை நாட்களுக்கு முன்பு தொடர்பு கொள்ள வேண்டும்?',
    answer: 'முடிந்தவரை முன்கூட்டியே தொடர்பு கொள்வது நல்லது. அறுவடை காலங்களில் அதிக தேவை இருக்கும் என்பதால் சீசனுக்கு முன்பே பதிவு செய்வது சிறந்தது.',
  },
  {
    question: 'இயந்திரத்துடன் ஆபரேட்டர் வருவாரா?',
    answer: 'ஆம், அனைத்து இயந்திரங்களுடனும் அனுபவமிக்க ஆபரேட்டர் வருவார்.',
  },
  {
    question: 'Round Baler என்றால் என்ன? எதற்கு பயன்படும்?',
    answer: 'Round Baler என்பது நெல் அறுவடைக்கு பின் வயலில் விடப்படும் வைக்கோல் மற்றும் தாவர கழிவுகளை உருண்டை வடிவில் சுருட்டி பேக் செய்யும் இயந்திரம். இதனால் வயல் விரைவாக சுத்தப்படும்.',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'when-to-book-paddy-harvester',
    titleTamil: 'நெல் அறுவடை இயந்திரத்தை எப்போது முன்பதிவு செய்வது?',
    titleEnglish: 'When to Book a Paddy Harvester Service',
    excerpt: 'நெல் அறுவடை காலத்தில் இயந்திரம் கிடைப்பது சவாலாக இருக்கும். முன்பதிவு செய்வதன் மூலம் சரியான நேரத்தில் சேவை பெறலாம்.',
    date: '2026-07-10',
    category: 'paddy-harvester',
    readTime: '3 நிமிடம்',
    image: '/images/blog/paddy-harvester-booking-guide.jpg',
    altText: 'Paddy harvester working in rice field at harvest time',
  },
  {
    id: 2,
    slug: 'rotavator-benefits-land-preparation',
    titleTamil: 'ரோட்டவேட்டர் மூலம் நிலத்தை தயார் செய்வதன் பயன்கள்',
    titleEnglish: 'Benefits of Rotavator for Land Preparation',
    excerpt: 'ரோட்டவேட்டர் உபயோகிப்பதால் மண் நன்கு தளர்ந்து விதை விதைப்பிற்கு சிறந்த சூழல் உருவாகும். விரிவான நன்மைகள் இங்கே.',
    date: '2026-07-18',
    category: 'tractor-rotavator',
    readTime: '4 நிமிடம்',
    image: '/images/blog/rotavator-land-preparation-benefits.jpg',
    altText: 'Tractor with rotavator tilling soil for crop cultivation',
  },
  {
    id: 3,
    slug: 'jcb-mini-excavator-uses',
    titleTamil: 'Mini Excavator எங்கு பயன்படுத்தலாம்?',
    titleEnglish: 'Where Can You Use a Mini Excavator?',
    excerpt: 'JCB Mini Excavator சிறிய மற்றும் குறுகிய இடங்களுக்கு மிகவும் பொருத்தமான இயந்திரம். கால்வாய் முதல் கட்டுமான பணிகள் வரை.',
    date: '2026-07-25',
    category: 'jcb-mini-excavator',
    readTime: '3 நிமிடம்',
    image: '/images/blog/jcb-mini-excavator-uses-guide.jpg',
    altText: 'JCB mini excavator digging in a narrow space construction site',
  },
  {
    id: 4,
    slug: 'round-baler-explained',
    titleTamil: 'Round Baler என்றால் என்ன? விவசாயிகளுக்கு எப்படி உதவும்?',
    titleEnglish: 'What is a Round Baler and How Does it Help Farmers?',
    excerpt: 'Round Baler இயந்திரத்தைப் பற்றி விரிவான விளக்கம். நெல் வைக்கோல் சுருட்டும் இந்த இயந்திரம் விவசாயிகளுக்கு எவ்வாறு நேரம் மிச்சப்படுத்துகிறது என்பதை அறியுங்கள்.',
    date: '2026-08-01',
    category: 'tractor-round-baler',
    readTime: '4 நிமிடம்',
    image: '/images/blog/round-baler-explained-tamil.jpg',
    altText: 'Round baler machine making straw bales in paddy field after harvest',
  },
];

export const NAV_LINKS = [
  { label: 'முகப்பு', labelEn: 'Home', path: '#top' },
  { label: 'எங்கள் சேவைகள்', labelEn: 'Services', path: '#services' },
  { label: 'இயந்திரங்கள்', labelEn: 'Machinery', path: '#machinery' },
  { label: 'எங்கள் பணிகள்', labelEn: 'Gallery', path: '#gallery' },
  { label: 'வீடியோக்கள்', labelEn: 'Videos', path: '#videos' },
  { label: 'தொடர்புக்கு', labelEn: 'Contact', path: '#contact' },
];

export const MOBILE_NAV = [
  { label: 'முகப்பு', icon: 'Home', path: '#top' },
  { label: 'சேவைகள்', icon: 'Wrench', path: '#services' },
  { label: 'இயந்திரங்கள்', icon: 'Tractor', path: '#machinery' },
  { label: 'பணிகள்', icon: 'Images', path: '#gallery' },
  { label: 'தொடர்பு', icon: 'Phone', path: '#contact' },
];
