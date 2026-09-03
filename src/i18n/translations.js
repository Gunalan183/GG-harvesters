// ============================================================
// GG Harvesters — Site-wide translations
// Supported languages: en (English), ta (Tamil / தமிழ்), kn (Kannada / ಕನ್ನಡ)
// ============================================================

const translations = {
  en: {
    // ── Nav ──────────────────────────────────────────────────
    nav: {
      home: 'Home',
      services: 'Services',
      machinery: 'Machinery',
      works: 'Our Works',
      videos: 'Videos',
      contact: 'Contact',
    },

    // ── Hero ─────────────────────────────────────────────────
    hero: {
      taglineBadge: 'Machines That Power Every Harvest',
      availabilityBadge: 'Services Available In Tamil Nadu & Karnataka',
      tamilLine1: 'உங்கள் உழைப்புக்கு துணையாக,',
      tamilLine2: 'உங்கள் பணிக்கு GG இயந்திர சேவை.',
      englishLine1: 'Supporting Your Hard Work,',
      englishLine2: 'Powering Every Harvest.',
      whatsapp: 'WhatsApp Contact',
      scroll: 'Scroll',
    },

    // ── Services Section ──────────────────────────────────────
    services: {
      badge: 'Our Services',
      heading: 'Machinery Services',
      headingHighlight: 'We Provide',
      subtitle: 'From agricultural work to earthmoving — we arrive with the right machine for your needs.',
      details: 'Details',
      whatsappBook: 'Book via WhatsApp',
      applications: 'Applications',
    },

    // ── Machinery Showcase ────────────────────────────────────
    machinery: {
      badge: 'Machinery',
      title: 'Our',
      titleHighlight: 'Machinery Fleet',
      subtitle: 'Well-maintained machines operated by experienced operators.',
    },

    // ── Why Choose ────────────────────────────────────────────
    whyChoose: {
      badge: 'Why GG?',
      heading: 'Why Choose',
      headingHighlight: 'GG Harvester?',
      subtitle: 'The value we deliver to every one of our customers.',
      points: [
        {
          title: 'Reliable Machines',
          desc: 'Well-maintained, modern machinery',
        },
        {
          title: 'Experienced Operators',
          desc: 'Skilled and trained operators',
        },
        {
          title: 'On-Time Service',
          desc: 'Machine arrives at the requested time',
        },
        {
          title: 'Farmer-First Service',
          desc: 'We understand and serve agricultural needs',
        },
        {
          title: 'Local Coverage',
          desc: 'Kumbakonam, Thanjavur and surrounding villages',
        },
        {
          title: 'Direct Contact',
          desc: 'Call us directly to book a service',
        },
        {
          title: 'Mechanical Service',
          desc: 'Machinery Mechanical Service — repairs and maintenance',
        },
      ],
    },

    // ── How It Works ──────────────────────────────────────────
    howItWorks: {
      badge: 'How to Get Service',
      heading: 'Getting Service is',
      headingHighlight: 'Very Simple!',
      subtitle: 'Your machine arrives in just 5 easy steps.',
      cta: 'Book Service Now',
      steps: [
        {
          title: 'Get in Touch',
          desc: 'Contact us via phone or WhatsApp.',
        },
        {
          title: 'Tell Us Your Need',
          desc: 'Let us know which machine you need and for how long.',
        },
        {
          title: 'Share Location & Details',
          desc: 'Provide the work location and task details.',
        },
        {
          title: 'Confirm the Time',
          desc: 'Date and time will be confirmed.',
        },
        {
          title: 'Machine Arrives',
          desc: 'The machine comes to your field or worksite.',
        },
      ],
    },

    // ── Gallery ───────────────────────────────────────────────
    gallery: {
      badge: 'Our Work',
      title: 'Photos of',
      titleHighlight: 'Our Work',
      subtitle: 'Photos of GG Harvester machines working in real fields.',
      filters: {
        all: 'All',
        paddyHarvester: 'Paddy Harvester',
        tractor: 'Tractor',
        jcb: 'JCB',
        roundBaler: 'Round Baler',
      },
      captions: [
        'GG Harvester working in a paddy field',
        'GG Harvester in Thanjavur rice field',
        'Land preparation with Rotavator',
        'JCB Mini Excavator canal work',
        'JCB 3CX Backhoe Loader work',
        'Round Baler straw baling',
      ],
    },

    // ── Service Highlights ────────────────────────────────────
    serviceHighlights: {
      badge: 'Our Core Services',
      heading: 'Our',
      headingHighlight: 'Services',
      subtitle: 'We provide all the services farmers need in a reliable way.',
      cta: 'Book Now',
      items: [
        { titleEn: 'Combine Harvesting', title: 'Combine Harvesting Service', desc: 'Efficient harvesting service using Kartar 4000.' },
        { titleEn: 'Tractor Services', title: 'Tractor Services', desc: 'Field ploughing and other agricultural work.' },
        { titleEn: 'Agri Transport', title: 'Agricultural Transport', desc: 'Transport of goods and machinery.' },
        { titleEn: 'Machinery Transport', title: 'Machinery Transport', desc: 'Safe transportation of all machines.' },
        { titleEn: 'Full Support', title: 'Full Support', desc: 'Support from harvesting to transportation.' },
        { titleEn: 'Mechanic Service', title: 'Mechanic Service', desc: 'Machine repair and maintenance.' },
      ],
    },

    // ── Owner Contact ─────────────────────────────────────────
    contact: {
      badge: 'Contact Us',
      heading: 'Need',
      headingHighlight: 'Machinery Service?',
      subtitle: 'Contact us now for the machinery services you need for your farming and earthmoving work.',
      primaryPhone: 'Primary Phone',
      altPhone: 'Alternate Phone',
      whatsapp: 'Contact via WhatsApp',
      addressLabel: 'Our Address',
      hoursLabel: 'Working Hours',
      hoursLine1: 'Monday – Sunday',
      hoursLine2: '6:00 AM – 7:00 PM',
    },

    // ── Service Areas ─────────────────────────────────────────
    serviceAreas: {
      mapHeading: 'Our Location',
      mapCta: 'View on Google Maps',
      badge: 'Service Areas',
      title: 'Areas We',
      titleHighlight: 'Serve',
      primaryLabel: 'Primary Areas',
      nearbyLabel: 'Nearby Areas',
      note: 'Contact us to confirm service availability in your area.',
      fullDetailsLink: 'Full Service Area Details',
    },

    // ── Footer ────────────────────────────────────────────────
    footer: {
      servicesHeading: 'Services',
      contactHeading: 'Contact Us',
      addressLabel: 'Our Address',
      hours: 'Monday – Sunday',
      hoursTime: '6:00 AM – 7:00 PM',
      cta: 'Book a Service',
      copyright: 'All rights reserved.',
      tagline: 'Agricultural & Earth Moving Machinery Services',
      description:
        'GG Harvesters and Earth Movers provides agricultural machinery and earth-moving services for farmers, landowners and other customers around Kumbakonam and Thanjavur.',
    },

    // ── Works Page ────────────────────────────────────────────
    worksPage: {
      badge: 'Our Works',
      heading: 'Work We',
      headingHighlight: 'Have Done',
      subtitle: 'A showcase of GG Harvesters machinery working in real fields and construction sites.',
      stats: [
        { num: '500+', label: 'Field Works' },
        { num: '6+',   label: 'Years Experience' },
        { num: '13',   label: 'Districts' },
      ],
      ctaBadge: 'Your Work?',
      ctaHeading: 'Want to Get Similar Work Done?',
      ctaSubtitle: 'Contact us now and book the service.',
      ctaButton: 'Book via WhatsApp',
      works: [
        { title: 'Paddy Harvesting Work',     desc: 'Paddy harvesting carried out by GG Harvesters machinery in rice fields around Kumbakonam and Thanjavur.',             tag: 'Paddy Harvester' },
        { title: 'Earthwork & Construction',  desc: 'Canal digging, land levelling and construction work using JCB and Mini Excavator.',                                   tag: 'JCB Work' },
        { title: 'JCB Machinery Work',        desc: 'Soil excavation, earth removal and construction foundation work using JCB machinery.',                               tag: 'JCB Work' },
        { title: 'Tractor with Tailer',       desc: 'Transport of produce and materials from one location to another using tractor with tailer.',                        tag: 'Tailer Work' },
        { title: 'Tractor Rotavator',         desc: 'Deep soil tilling using tractor rotavator to prepare land for sowing.',                                             tag: 'Rotavator Work' },
        { title: 'Lorry Transport',           desc: 'Safe transport of machinery and agricultural produce using lorry service.',                                          tag: 'Lorry Work' },
      ],
    },

    // ── Service card / modal ──────────────────────────────────
    serviceCard: {
      details: 'Details',
      whatsappBook: 'Book via WhatsApp',
      applications: 'Applications',
    },

    // ── SERVICES data (per slug) ──────────────────────────────
    serviceData: {
      'paddy-harvester': {
        name: 'Paddy Harvester',
        shortDesc: 'Fast and efficient paddy harvesting service for rice fields.',
        applications: [
          'Rice field harvesting',
          'Suitable for small and large fields',
          'Work completed in minimum time',
        ],
      },
      lorry: {
        name: 'Lorry Service',
        shortDesc: 'Lorry transport service for machinery and agricultural produce.',
        applications: [
          'Machinery transport',
          'Transport of paddy and produce',
          'Transport of construction materials',
        ],
      },
      'tractor-tailer': {
        name: 'Tractor with Tailer',
        shortDesc: 'Tractor with tailer service for transporting produce and materials.',
        applications: [
          'Transport of produce',
          'Field-to-warehouse transport',
          'Export of construction materials',
          'Relocation of goods',
        ],
      },
      tractor: {
        name: 'Tractor Service',
        shortDesc: 'Tractor service for land preparation and agricultural work.',
        applications: [
          'Land preparation',
          'Agricultural tasks',
          'Loading and unloading goods',
        ],
      },
      'tractor-rotavator': {
        name: 'Tractor + Rotavator',
        shortDesc: 'Deep soil tilling with rotavator for seed bed preparation.',
        applications: [
          'Deep soil ploughing',
          'Land preparation for sowing',
          'Wet and dry land tilling',
        ],
      },
      jcb: {
        name: 'JCB Service',
        shortDesc: 'JCB earthmoving and construction service for various projects.',
        applications: [
          'Soil excavation',
          'Construction work',
          'Land levelling',
          'Canal digging',
        ],
      },
      'jcb-mini-excavator': {
        name: 'JCB Mini Excavator',
        shortDesc: 'Compact mini excavator for tight spaces, canal work and land levelling.',
        applications: [
          'Excavation in narrow spaces',
          'Canal and drainage work',
          'Underground pipe laying',
          'Land levelling',
        ],
      },
      'tractor-round-baler': {
        name: 'Tractor + Round Baler',
        shortDesc: 'Round baler service for baling straw and crop residue after harvest.',
        applications: [
          'Paddy straw baling',
          'Crop residue management',
          'Field cleanup',
        ],
      },
    },

    // ── MACHINES data (for MachineryShowcase) ─────────────────
    machineData: {
      'Paddy Harvester': 'Fast and efficient paddy harvesting.',
      Tractor: 'Land preparation and various agricultural tasks.',
      'Tractor + Rotavator': 'Deep tilling for land preparation.',
      JCB: 'Powerful JCB for construction and earthwork.',
      'JCB Mini Excavator': 'Digging in small spaces and canal work.',
      'Round Baler': 'Baling straw after harvest.',
      Lorry: 'Transport of machinery and produce.',
    },
  },

  // ============================================================
  kn: {
    // ── Nav ──────────────────────────────────────────────────
    nav: {
      home: 'ಮುಖಪುಟ',
      services: 'ಸೇವೆಗಳು',
      machinery: 'ಯಂತ್ರಗಳು',
      works: 'ನಮ್ಮ ಕೆಲಸಗಳು',
      videos: 'ವೀಡಿಯೋಗಳು',
      contact: 'ಸಂಪರ್ಕ',
    },

    // ── Hero ─────────────────────────────────────────────────
    hero: {
      taglineBadge: 'ಪ್ರತಿ ಕೊಯ್ಲಿಗೆ ಶಕ್ತಿ ನೀಡುವ ಯಂತ್ರಗಳು',
      availabilityBadge: 'ತಮಿಳುನಾಡು ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ಸೇವೆ ಲಭ್ಯ',
      tamilLine1: 'உங்கள் உழைப்புக்கு துணையாக,',
      tamilLine2: 'உங்கள் பணிக்கு GG இயந்திர சேவை.',
      englishLine1: 'ನಿಮ್ಮ ಶ್ರಮಕ್ಕೆ ಬೆಂಬಲ,',
      englishLine2: 'ಪ್ರತಿ ಕೊಯ್ಲಿಗೆ ಶಕ್ತಿ.',
      whatsapp: 'WhatsApp ಸಂಪರ್ಕ',
      scroll: 'ಕೆಳಗೆ ನೋಡಿ',
    },

    // ── Services Section ──────────────────────────────────────
    services: {
      badge: 'ನಮ್ಮ ಸೇವೆಗಳು',
      heading: 'ಯಂತ್ರ ಸೇವೆಗಳು',
      headingHighlight: 'ನಾವು ನೀಡುವ',
      subtitle: 'ಕೃಷಿ ಕೆಲಸದಿಂದ ಭೂಕೆಲಸದವರೆಗೆ — ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ಸರಿಯಾದ ಯಂತ್ರದೊಂದಿಗೆ ನಾವು ಬರುತ್ತೇವೆ.',
      details: 'ವಿವರಗಳು',
      whatsappBook: 'WhatsApp ಮೂಲಕ ಬುಕ್ ಮಾಡಿ',
      applications: 'ಉಪಯೋಗಗಳು',
    },

    // ── Machinery Showcase ────────────────────────────────────
    machinery: {
      badge: 'ಯಂತ್ರಗಳು',
      title: 'ನಮ್ಮ',
      titleHighlight: 'ಯಂತ್ರ ಸಂಗ್ರಹ',
      subtitle: 'ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಲ್ಪಟ್ಟ ಯಂತ್ರಗಳು, ಅನುಭವಿ ಆಪರೇಟರ್‌ಗಳೊಂದಿಗೆ.',
    },

    // ── Why Choose ────────────────────────────────────────────
    whyChoose: {
      badge: 'ಏಕೆ GG?',
      heading: 'ಏಕೆ ಆಯ್ಕೆ ಮಾಡಬೇಕು',
      headingHighlight: 'GG Harvester?',
      subtitle: 'ನಮ್ಮ ಪ್ರತಿಯೊಬ್ಬ ಗ್ರಾಹಕರಿಗೆ ನಾವು ನೀಡುವ ಮೌಲ್ಯ.',
      points: [
        {
          title: 'ವಿಶ್ವಾಸಾರ್ಹ ಯಂತ್ರಗಳು',
          desc: 'ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸಲ್ಪಟ್ಟ ಆಧುನಿಕ ಯಂತ್ರಗಳು',
        },
        {
          title: 'ಅನುಭವಿ ಆಪರೇಟರ್‌ಗಳು',
          desc: 'ಕುಶಲ ಮತ್ತು ತರಬೇತಿ ಪಡೆದ ಆಪರೇಟರ್‌ಗಳು',
        },
        {
          title: 'ಸಮಯಕ್ಕೆ ಸೇವೆ',
          desc: 'ಕೋರಿಕೆ ನೀಡಿದ ಸಮಯಕ್ಕೆ ಯಂತ್ರ ಬರುತ್ತದೆ',
        },
        {
          title: 'ರೈತರಿಗಾಗಿ ಸೇವೆ',
          desc: 'ಕೃಷಿ ಅಗತ್ಯಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಂಡು ಸೇವೆ',
        },
        {
          title: 'ಸ್ಥಳೀಯ ವ್ಯಾಪ್ತಿ',
          desc: 'ಕುಂಭಕೋಣಂ, ತಂಜಾವೂರು ಮತ್ತು ಸುತ್ತಮುತ್ತಲ ಗ್ರಾಮಗಳು',
        },
        {
          title: 'ನೇರ ಸಂಪರ್ಕ',
          desc: 'ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ ಸೇವೆ ಬುಕ್ ಮಾಡಿ',
        },
        {
          title: 'ಯಂತ್ರ ಮೆಕ್ಯಾನಿಕ್ ಸೇವೆ',
          desc: 'Machinery Mechanical Service — ಯಂತ್ರ ದುರಸ್ತಿ ಮತ್ತು ನಿರ್ವಹಣೆ',
        },
      ],
    },

    // ── How It Works ──────────────────────────────────────────
    howItWorks: {
      badge: 'ಹೇಗೆ ಪಡೆಯಬೇಕು?',
      heading: 'ಸೇವೆ ಪಡೆಯುವುದು',
      headingHighlight: 'ತುಂಬಾ ಸುಲಭ!',
      subtitle: '5 ಸರಳ ಹಂತಗಳಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಯಂತ್ರ ಬರುತ್ತದೆ.',
      cta: 'ಈಗಲೇ ಸೇವೆ ಬುಕ್ ಮಾಡಿ',
      steps: [
        {
          title: 'ಸಂಪರ್ಕ ಮಾಡಿ',
          desc: 'ದೂರವಾಣಿ ಅಥವಾ WhatsApp ಮೂಲಕ ಸಂಪರ್ಕ ಮಾಡಿ.',
        },
        {
          title: 'ನಿಮ್ಮ ಅಗತ್ಯ ತಿಳಿಸಿ',
          desc: 'ಯಾವ ಯಂತ್ರ ಬೇಕು, ಎಷ್ಟು ಸಮಯ ಬೇಕೆಂದು ತಿಳಿಸಿ.',
        },
        {
          title: 'ಸ್ಥಳ ಮತ್ತು ವಿವರ ಹಂಚಿಕೊಳ್ಳಿ',
          desc: 'ಕೆಲಸ ನಡೆಯುವ ಸ್ಥಳ ಮತ್ತು ಕೆಲಸದ ವಿವರ ತಿಳಿಸಿ.',
        },
        {
          title: 'ಸಮಯ ದೃಢಪಡಿಸಿ',
          desc: 'ದಿನಾಂಕ ಮತ್ತು ಸಮಯ ದೃಢಪಡಿಸಲಾಗುತ್ತದೆ.',
        },
        {
          title: 'ಯಂತ್ರ ಬರುತ್ತದೆ',
          desc: 'ನಿಮ್ಮ ಹೊಲ ಅಥವಾ ಕೆಲಸದ ಸ್ಥಳಕ್ಕೆ ಯಂತ್ರ ಬರುತ್ತದೆ.',
        },
      ],
    },

    // ── Gallery ───────────────────────────────────────────────
    gallery: {
      badge: 'ನಮ್ಮ ಕೆಲಸಗಳು',
      title: 'ನಮ್ಮ',
      titleHighlight: 'ಕೆಲಸದ ಚಿತ್ರಗಳು',
      subtitle: 'GG Harvester ಯಂತ್ರಗಳು ನಿಜವಾದ ಹೊಲಗಳಲ್ಲಿ ಮಾಡಿದ ಕೆಲಸಗಳ ಚಿತ್ರಗಳು.',
      filters: {
        all: 'ಎಲ್ಲವೂ',
        paddyHarvester: 'ಭತ್ತ ಕೊಯ್ಲು',
        tractor: 'ಟ್ರ್ಯಾಕ್ಟರ್',
        jcb: 'JCB',
        roundBaler: 'ರೌಂಡ್ ಬೇಲರ್',
      },
      captions: [
        'ಭತ್ತದ ಕ್ಷೇತ್ರದಲ್ಲಿ GG Harvester ಕಾರ್ಯ',
        'ತಂಜಾವೂರು ಭತ್ತದ ಗದ್ದೆಯಲ್ಲಿ GG Harvester',
        'ರೋಟವೇಟರ್‌ನಿಂದ ಭೂ ತಯಾರಿ',
        'JCB Mini Excavator ಕಾಲುವೆ ಕೆಲಸ',
        'JCB 3CX Backhoe Loader ಕೆಲಸ',
        'ರೌಂಡ್ ಬೇಲರ್ ಹುಲ್ಲು ಸುತ್ತುವಿಕೆ',
      ],
    },

    // ── Service Highlights ────────────────────────────────────
    serviceHighlights: {
      badge: 'ನಮ್ಮ ಮುಖ್ಯ ಸೇವೆಗಳು',
      heading: 'ನಮ್ಮ',
      headingHighlight: 'ಸೇವೆಗಳು',
      subtitle: 'ರೈತರಿಗೆ ಅಗತ್ಯವಾದ ಎಲ್ಲಾ ಸೇವೆಗಳನ್ನು ವಿಶ್ವಾಸಾರ್ಹ ರೀತಿಯಲ್ಲಿ ನೀಡುತ್ತೇವೆ.',
      cta: 'ಈಗ ಬುಕ್ ಮಾಡಿ',
      items: [
        { titleEn: 'Combine Harvesting', title: 'ಸಂಯೋಜಿತ ಕೊಯ್ಲು ಸೇವೆ', desc: 'Kartar 4000 ಬಳಸಿ ದಕ್ಷ ಕೊಯ್ಲು ಸೇವೆ.' },
        { titleEn: 'Tractor Services', title: 'ಟ್ರ್ಯಾಕ್ಟರ್ ಸೇವೆಗಳು', desc: 'ಗದ್ದೆ ಉಳುಮೆ ಮತ್ತು ಇತರ ಕೃಷಿ ಕೆಲಸಗಳು.' },
        { titleEn: 'Agri Transport', title: 'ಕೃಷಿ ಸಾರಿಗೆ', desc: 'ಸರಕು ಮತ್ತು ಯಂತ್ರಗಳ ಸಾಗಣೆ.' },
        { titleEn: 'Machinery Transport', title: 'ಯಂತ್ರ ಸಾರಿಗೆ', desc: 'ಎಲ್ಲಾ ಯಂತ್ರಗಳ ಸುರಕ್ಷಿತ ಸಾಗಣೆ.' },
        { titleEn: 'Full Support', title: 'ಸಂಪೂರ್ಣ ಬೆಂಬಲ', desc: 'ಕೊಯ್ಲಿನಿಂದ ಸಾರಿಗೆಯವರೆಗೆ ಬೆಂಬಲ.' },
        { titleEn: 'Mechanic Service', title: 'ಮೆಕ್ಯಾನಿಕ್ ಸೇವೆ', desc: 'ಯಂತ್ರ ದುರಸ್ತಿ ಮತ್ತು ನಿರ್ವಹಣೆ.' },
      ],
    },

    // ── Owner Contact ─────────────────────────────────────────
    contact: {
      badge: 'ಸಂಪರ್ಕ',
      heading: 'ಯಂತ್ರ ಸೇವೆ',
      headingHighlight: 'ಬೇಕೇ?',
      subtitle: 'ನಿಮ್ಮ ಕೃಷಿ ಮತ್ತು ಭೂ ಕೆಲಸಗಳಿಗೆ ಅಗತ್ಯವಾದ ಯಂತ್ರ ಸೇವೆಗಳಿಗಾಗಿ ಈಗಲೇ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      primaryPhone: 'ಮುಖ್ಯ ದೂರವಾಣಿ',
      altPhone: 'ಪರ್ಯಾಯ ದೂರವಾಣಿ',
      whatsapp: 'WhatsApp ಮೂಲಕ ಸಂಪರ್ಕ',
      addressLabel: 'ನಮ್ಮ ವಿಳಾಸ',
      hoursLabel: 'ಕೆಲಸದ ಸಮಯ',
      hoursLine1: 'ಸೋಮವಾರ – ಭಾನುವಾರ',
      hoursLine2: 'ಬೆಳಿಗ್ಗೆ 6:00 – ಸಂಜೆ 7:00',
    },

    // ── Service Areas ─────────────────────────────────────────
    serviceAreas: {
      mapHeading: 'ನಮ್ಮ ಸ್ಥಳ',
      mapCta: 'Google Maps ನಲ್ಲಿ ನೋಡಿ',
      badge: 'ಸೇವಾ ಪ್ರದೇಶಗಳು',
      title: 'ನಾವು ಸೇವೆ ನೀಡುವ',
      titleHighlight: 'ಪ್ರದೇಶಗಳು',
      primaryLabel: 'ಮುಖ್ಯ ಪ್ರದೇಶಗಳು',
      nearbyLabel: 'ಹತ್ತಿರದ ಪ್ರದೇಶಗಳು',
      note: 'ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಸೇವೆ ಲಭ್ಯತೆ ದೃಢಪಡಿಸಲು ಸಂಪರ್ಕಿಸಿ.',
      fullDetailsLink: 'ಸೇವಾ ಪ್ರದೇಶ ಸಂಪೂರ್ಣ ವಿವರ',
    },

    // ── Footer ────────────────────────────────────────────────
    footer: {
      servicesHeading: 'ಸೇವೆಗಳು',
      contactHeading: 'ಸಂಪರ್ಕ',
      addressLabel: 'ನಮ್ಮ ವಿಳಾಸ',
      hours: 'ಸೋಮವಾರ – ಭಾನುವಾರ',
      hoursTime: 'ಬೆಳಿಗ್ಗೆ 6:00 – ಸಂಜೆ 7:00',
      cta: 'ಸೇವೆ ಬುಕ್ ಮಾಡಿ',
      copyright: 'ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      tagline: 'ಕೃಷಿ ಮತ್ತು ಭೂ ಚಲನ ಯಂತ್ರ ಸೇವೆಗಳು',
      description:
        'GG Harvesters and Earth Movers ಕುಂಭಕೋಣಂ ಮತ್ತು ತಂಜಾವೂರು ಸುತ್ತ ರೈತರು, ಭೂ ಮಾಲೀಕರು ಮತ್ತು ಇತರ ಗ್ರಾಹಕರಿಗೆ ಕೃಷಿ ಯಂತ್ರ ಮತ್ತು ಭೂಕೆಲಸ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತದೆ.',
    },

    // ── Works Page ────────────────────────────────────────────
    worksPage: {
      badge: 'ಕನ್ನಡ ಕೆಲಸಗಳು',
      heading: 'ನಾವು ಮಾಡಿದ',
      headingHighlight: 'ಕೆಲಸಗಳು',
      subtitle: 'ನಿಜವಾದ ಹೊಲಗಳು ಮತ್ತು ನಿರ್ಮಾಣ ಸ್ಥಳಗಳಲ್ಲಿ GG Harvesters ಯಂತ್ರಗಳು ಮಾಡಿದ ಕೆಲಸಗಳ ಪ್ರದರ್ಶನ.',
      stats: [
        { num: '500+', label: 'ಹೊಲ ಕೆಲಸಗಳು' },
        { num: '6+',   label: 'ವರ್ಷಗಳ ಅನುಭವ' },
        { num: '13',   label: 'ಜಿಲ್ಲೆಗಳು' },
      ],
      ctaBadge: 'ನಿಮ್ಮ ಕೆಲಸ?',
      ctaHeading: 'ಇದೇ ರೀತಿ ನಿಮ್ಮ ಕೆಲಸ ಮುಗಿಸಬೇಕೇ?',
      ctaSubtitle: 'ಈಗಲೇ ಸಂಪರ್ಕಿಸಿ ಸೇವೆ ಬುಕ್ ಮಾಡಿ.',
      ctaButton: 'WhatsApp ಮೂಲಕ ಬುಕ್ ಮಾಡಿ',
      works: [
        { title: 'ಭತ್ತ ಕೊಯ್ಲು ಕೆಲಸ',         desc: 'ಕುಂಭಕೋಣಂ ಮತ್ತು ತಂಜಾವೂರು ಸುತ್ತ ಭತ್ತದ ಗದ್ದೆಗಳಲ್ಲಿ GG Harvesters ಯಂತ್ರಗಳಿಂದ ನಡೆಸಿದ ಕೊಯ್ಲು ಕೆಲಸ.', tag: 'ಭತ್ತ ಕೊಯ್ಲು' },
        { title: 'ಭೂಕೆಲಸ & ನಿರ್ಮಾಣ',          desc: 'JCB ಮತ್ತು Mini Excavator ಬಳಸಿ ಕಾಲುವೆ ಅಗೆಯುವಿಕೆ, ಭೂ ಸಮತಟ್ಟು ಮತ್ತು ನಿರ್ಮಾಣ ಕೆಲಸ.',                 tag: 'JCB ಕೆಲಸ' },
        { title: 'JCB ಯಂತ್ರ ಕೆಲಸ',            desc: 'JCB ಯಂತ್ರ ಬಳಸಿ ಮಣ್ಣು ಅಗೆಯುವಿಕೆ, ಮಣ್ಣು ತೆರವು ಮತ್ತು ನಿರ್ಮಾಣ ಅಡಿಪಾಯ ಕೆಲಸ.',                        tag: 'JCB ಕೆಲಸ' },
        { title: 'ಟ್ರ್ಯಾಕ್ಟರ್ + ಟ್ರೇಲರ್',    desc: 'ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರೇಲರ್ ಬಳಸಿ ಕೃಷಿ ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳ ಒಂದೆಡೆಯಿಂದ ಇನ್ನೊಂದೆಡೆಗೆ ಸಾಗಣೆ.',        tag: 'ಟ್ರೇಲರ್ ಕೆಲಸ' },
        { title: 'ಟ್ರ್ಯಾಕ್ಟರ್ ರೋಟವೇಟರ್',     desc: 'ಟ್ರ್ಯಾಕ್ಟರ್ ರೋಟವೇಟರ್ ಬಳಸಿ ಭೂಮಿಯನ್ನು ಆಳವಾಗಿ ಉಳುಮೆ ಮಾಡಿ ಬಿತ್ತನೆಗೆ ತಯಾರಿ.',                         tag: 'ರೋಟವೇಟರ್ ಕೆಲಸ' },
        { title: 'ಲಾರಿ ಸಾರಿಗೆ',                desc: 'ಯಂತ್ರಗಳು ಮತ್ತು ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಲಾರಿ ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ಸಾಗಿಸುವ ಸೇವೆ.',                        tag: 'ಲಾರಿ ಕೆಲಸ' },
      ],
    },

    // ── Service card / modal ──────────────────────────────────
    serviceCard: {
      details: 'ವಿವರಗಳು',
      whatsappBook: 'WhatsApp ಮೂಲಕ ಬುಕ್ ಮಾಡಿ',
      applications: 'ಉಪಯೋಗಗಳು',
    },

    // ── SERVICES data (per slug) ──────────────────────────────
    serviceData: {
      'paddy-harvester': {
        name: 'ಭತ್ತ ಕೊಯ್ಲು ಯಂತ್ರ',
        shortDesc: 'ಭತ್ತದ ಗದ್ದೆಗಳಲ್ಲಿ ವೇಗ ಮತ್ತು ದಕ್ಷ ಕೊಯ್ಲು ಸೇವೆ.',
        applications: [
          'ಭತ್ತದ ಗದ್ದೆ ಕೊಯ್ಲು',
          'ಸಣ್ಣ ಮತ್ತು ದೊಡ್ಡ ಗದ್ದೆಗಳಿಗೆ ಸೂಕ್ತ',
          'ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ ಕೆಲಸ ಮುಗಿಸುವ ಸಾಮರ್ಥ್ಯ',
        ],
      },
      lorry: {
        name: 'ಲಾರಿ ಸೇವೆ',
        shortDesc: 'ಯಂತ್ರಗಳು ಮತ್ತು ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಲಾರಿ ಸಾಗಣೆ ಸೇವೆ.',
        applications: [
          'ಯಂತ್ರ ಸಾಗಣೆ',
          'ಭತ್ತ ಮತ್ತು ಕೃಷಿ ಉತ್ಪನ್ನಗಳ ಸಾಗಣೆ',
          'ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿಗಳ ಸಾಗಣೆ',
        ],
      },
      'tractor-tailer': {
        name: 'ಟ್ರ್ಯಾಕ್ಟರ್ + ಟ್ರೇಲರ್',
        shortDesc: 'ಉತ್ಪನ್ನಗಳು ಮತ್ತು ಸಾಮಗ್ರಿಗಳ ಸಾಗಣೆಗೆ ಟ್ರ್ಯಾಕ್ಟರ್ ಟ್ರೇಲರ್ ಸೇವೆ.',
        applications: [
          'ಕೃಷಿ ಉತ್ಪನ್ನ ಸಾಗಣೆ',
          'ಗದ್ದೆಯಿಂದ ಗೋದಾಮಿಗೆ ಸಾರಿಗೆ',
          'ನಿರ್ಮಾಣ ಸಾಮಗ್ರಿ ರಫ್ತು',
          'ಸರಕು ಸ್ಥಳಾಂತರ',
        ],
      },
      tractor: {
        name: 'ಟ್ರ್ಯಾಕ್ಟರ್ ಸೇವೆ',
        shortDesc: 'ಭೂ ತಯಾರಿ ಮತ್ತು ಕೃಷಿ ಕೆಲಸಗಳಿಗೆ ಟ್ರ್ಯಾಕ್ಟರ್ ಸೇವೆ.',
        applications: [
          'ಭೂ ತಯಾರಿ',
          'ಕೃಷಿ ಕೆಲಸಗಳು',
          'ಸರಕು ಲೋಡಿಂಗ್ ಮತ್ತು ಅನ್‌ಲೋಡಿಂಗ್',
        ],
      },
      'tractor-rotavator': {
        name: 'ಟ್ರ್ಯಾಕ್ಟರ್ + ರೋಟವೇಟರ್',
        shortDesc: 'ಬಿತ್ತನೆ ಹಾಸಿಗೆ ತಯಾರಿಗಾಗಿ ರೋಟವೇಟರ್‌ನಿಂದ ಆಳ ಮಣ್ಣು ಉಳುಮೆ.',
        applications: [
          'ಆಳ ಮಣ್ಣು ಉಳುಮೆ',
          'ಬಿತ್ತನೆಗಾಗಿ ಭೂ ತಯಾರಿ',
          'ಒದ್ದೆ ಮತ್ತು ಒಣ ಭೂಮಿ ಉಳುಮೆ',
        ],
      },
      jcb: {
        name: 'JCB ಸೇವೆ',
        shortDesc: 'ವಿವಿಧ ಯೋಜನೆಗಳಿಗೆ JCB ಭೂ ಚಲನ ಮತ್ತು ನಿರ್ಮಾಣ ಸೇವೆ.',
        applications: [
          'ಮಣ್ಣು ಅಗೆಯುವಿಕೆ',
          'ನಿರ್ಮಾಣ ಕೆಲಸಗಳು',
          'ಭೂ ಸಮತಟ್ಟು',
          'ಕಾಲುವೆ ಅಗೆಯುವಿಕೆ',
        ],
      },
      'jcb-mini-excavator': {
        name: 'JCB Mini Excavator',
        shortDesc: 'ಇಕ್ಕಟ್ಟಾದ ಸ್ಥಳಗಳು, ಕಾಲುವೆ ಕೆಲಸ ಮತ್ತು ಭೂ ಸಮತಟ್ಟಿಗೆ ಮಿನಿ ಎಕ್ಸ್‌ಕೆವೇಟರ್.',
        applications: [
          'ಇಕ್ಕಟ್ಟಾದ ಸ್ಥಳಗಳಲ್ಲಿ ಅಗೆಯುವಿಕೆ',
          'ಕಾಲುವೆ ಮತ್ತು ಚರಂಡಿ ಕೆಲಸಗಳು',
          'ನೆಲದಡಿ ಪೈಪ್ ಹಾಕುವಿಕೆ',
          'ಭೂ ಸಮತಟ್ಟು',
        ],
      },
      'tractor-round-baler': {
        name: 'ಟ್ರ್ಯಾಕ್ಟರ್ + ರೌಂಡ್ ಬೇಲರ್',
        shortDesc: 'ಕೊಯ್ಲಿನ ನಂತರ ಹುಲ್ಲು ಮತ್ತು ಬೆಳೆ ಅವಶೇಷ ಬೇಲಿಂಗ್ ಸೇವೆ.',
        applications: [
          'ಭತ್ತದ ಹುಲ್ಲು ಸುತ್ತುವಿಕೆ',
          'ಬೆಳೆ ಅವಶೇಷ ನಿರ್ವಹಣೆ',
          'ಗದ್ದೆ ಸ್ವಚ್ಛತೆ',
        ],
      },
    },

    // ── MACHINES data (for MachineryShowcase) ─────────────────
    machineData: {
      'Paddy Harvester': 'ವೇಗ ಮತ್ತು ದಕ್ಷ ಭತ್ತ ಕೊಯ್ಲು.',
      Tractor: 'ಭೂ ತಯಾರಿ ಮತ್ತು ವಿವಿಧ ಕೃಷಿ ಕೆಲಸಗಳು.',
      'Tractor + Rotavator': 'ಭೂ ತಯಾರಿಗಾಗಿ ಆಳ ಉಳುಮೆ.',
      JCB: 'ನಿರ್ಮಾಣ ಮತ್ತು ಭೂಕೆಲಸಕ್ಕೆ ಶಕ್ತಿಶಾಲಿ JCB.',
      'JCB Mini Excavator': 'ಸಣ್ಣ ಸ್ಥಳಗಳಲ್ಲಿ ಅಗೆಯುವಿಕೆ ಮತ್ತು ಕಾಲುವೆ ಕೆಲಸ.',
      'Round Baler': 'ಕೊಯ್ಲಿನ ನಂತರ ಹುಲ್ಲು ಸುತ್ತುವಿಕೆ.',
      Lorry: 'ಯಂತ್ರಗಳು ಮತ್ತು ಉತ್ಪನ್ನಗಳ ಸಾಗಣೆ.',
    },
  },

  // ============================================================
  ta: {
    // ── Nav ──────────────────────────────────────────────────
    nav: {
      home: 'முகப்பு',
      services: 'சேவைகள்',
      machinery: 'இயந்திரங்கள்',
      works: 'எங்கள் பணிகள்',
      videos: 'வீடியோக்கள்',
      contact: 'தொடர்புக்கு',
    },

    // ── Hero ─────────────────────────────────────────────────
    hero: {
      taglineBadge: 'விவசாயத்தின் வெற்றிக்கு இயந்திரங்களின் துணை',
      availabilityBadge: 'தமிழ்நாடு மற்றும் கர்நாடகாவில் சேவை கிடைக்கும்',
      tamilLine1: 'உங்கள் உழைப்புக்கு துணையாக,',
      tamilLine2: 'உங்கள் பணிக்கு GG இயந்திர சேவை.',
      englishLine1: 'Supporting Your Hard Work,',
      englishLine2: 'Powering Every Harvest.',
      whatsapp: 'WhatsApp தொடர்பு',
      scroll: 'கீழே பார்க்க',
    },

    // ── Services Section ──────────────────────────────────────
    services: {
      badge: 'எங்கள் சேவைகள்',
      heading: 'இயந்திர சேவைகள்',
      headingHighlight: 'நாங்கள் வழங்கும்',
      subtitle: 'விவசாய பணிகள் முதல் நிலப் பணிகள் வரை — உங்கள் தேவைக்கேற்ப சரியான இயந்திரத்துடன் நாங்கள் வருகிறோம்.',
      details: 'விவரங்கள்',
      whatsappBook: 'WhatsApp மூலம் பதிவு செய்யுங்கள்',
      applications: 'பயன்பாடுகள்',
    },

    // ── Machinery Showcase ────────────────────────────────────
    machinery: {
      badge: 'இயந்திரங்கள்',
      title: 'எங்கள்',
      titleHighlight: 'இயந்திர சேகரிப்பு',
      subtitle: 'நன்கு பராமரிக்கப்பட்ட இயந்திரங்கள், அனுபவமிக்க ஆபரேட்டர்களுடன்.',
    },

    // ── Why Choose ────────────────────────────────────────────
    whyChoose: {
      badge: 'ஏன் GG?',
      heading: 'GG Harvester-ஐ',
      headingHighlight: 'ஏன் தேர்வு செய்வது?',
      subtitle: 'எங்கள் வாடிக்கையாளர்களுக்கு நாங்கள் வழங்கும் மதிப்பு.',
      points: [
        { title: 'நம்பகமான இயந்திரங்கள்',       desc: 'நன்கு பராமரிக்கப்பட்ட நவீன இயந்திரங்கள்' },
        { title: 'அனுபவமிக்க ஆபரேட்டர்கள்',     desc: 'திறமையான, பயிற்சி பெற்ற ஆபரேட்டர்கள்' },
        { title: 'சரியான நேரத்தில் சேவை',        desc: 'கோரிய நேரத்தில் இயந்திரம் வரும்' },
        { title: 'விவசாயிகளுக்கான சேவை',         desc: 'விவசாய தேவைகளை புரிந்து சேவை' },
        { title: 'சுற்றுவட்டார பகுதிகள்',         desc: 'கும்பகோணம், தஞ்சாவூர் மற்றும் அருகில்' },
        { title: 'நேரடி தொடர்பு',                desc: 'நேரடியாக அழைத்து சேவை பதிவு செய்யலாம்' },
        { title: 'இயந்திர மெக்கானிக்கல் சேவை',   desc: 'Machinery Mechanical Service — இயந்திரங்கள் பழுது சரிசெய்தல்' },
      ],
    },

    // ── How It Works ──────────────────────────────────────────
    howItWorks: {
      badge: 'எப்படி பெறுவது?',
      heading: 'சேவை பெறுவது',
      headingHighlight: 'மிகவும் எளிது!',
      subtitle: '5 எளிய படிகளில் உங்கள் இடத்திற்கு இயந்திரம் வரும்.',
      cta: 'இப்பொழுதே சேவை பதிவு செய்யுங்கள்',
      steps: [
        { title: 'தொடர்பு கொள்ளுங்கள்',                      desc: 'தொலைபேசி அல்லது WhatsApp மூலம் தொடர்பு கொள்ளுங்கள்.' },
        { title: 'உங்கள் தேவையை சொல்லுங்கள்',               desc: 'எந்த இயந்திரம் தேவை, எவ்வளவு நேரம் என்பதை சொல்லுங்கள்.' },
        { title: 'இடம் மற்றும் விவரங்களை பகிருங்கள்',        desc: 'வேலை நடைபெறும் இடம் மற்றும் வேலை விவரங்களை தெரிவியுங்கள்.' },
        { title: 'சேவை நேரத்தை உறுதி செய்யுங்கள்',          desc: 'தேதி மற்றும் நேரம் உறுதி செய்யப்படும்.' },
        { title: 'இயந்திரம் உங்கள் இடத்திற்கு வரும்',        desc: 'உங்கள் வயலுக்கு அல்லது தொழில் இடத்திற்கு இயந்திரம் வரும்.' },
      ],
    },

    // ── Gallery ───────────────────────────────────────────────
    gallery: {
      badge: 'எங்கள் பணிகள்',
      title: 'நாங்கள் செய்த',
      titleHighlight: 'பணிகளின் படங்கள்',
      subtitle: 'GG Harvester இயந்திரங்கள் உண்மையான வயல்களில் செய்த வேலைகளின் படங்கள்.',
      filters: {
        all: 'அனைத்தும்',
        paddyHarvester: 'நெல் அறுவடை',
        tractor: 'டிராக்டர்',
        jcb: 'JCB',
        roundBaler: 'Round Baler',
      },
      captions: [
        'நெல் அறுவடை பணியில் GG Harvester',
        'தஞ்சாவூர் நெல் வயலில் GG Harvester',
        'ரோட்டவேட்டர் மூலம் நிலம் தயார்',
        'JCB Mini Excavator கால்வாய் பணி',
        'JCB 3CX Backhoe Loader பணி',
        'Round Baler வைக்கோல் சுருட்டல்',
      ],
    },

    // ── Service Highlights ────────────────────────────────────
    serviceHighlights: {
      badge: 'எங்கள் முக்கிய சேவைகள்',
      heading: 'எங்கள்',
      headingHighlight: 'சேவைகள்',
      subtitle: 'விவசாயிகளுக்கு தேவையான அனைத்து சேவைகளையும் நம்பகமான முறையில் வழங்குகிறோம்.',
      cta: 'முன்பதிவு செய்க',
      items: [
        { titleEn: 'Combine Harvesting', title: 'கம்பைன் அறுவடை சேவை',     desc: 'Kartar 4000 மூலம் திறமையான அறுவடை சேவை.' },
        { titleEn: 'Tractor Services',   title: 'டிராக்டர் சேவைகள்',         desc: 'வயல் உழவு மற்றும் பிற விவசாய பணிகள்.' },
        { titleEn: 'Agri Transport',     title: 'விவசாய போக்குவரத்து',        desc: 'பொருட்கள் மற்றும் இயந்திரங்கள் போக்குவரத்து.' },
        { titleEn: 'Machinery Transport',title: 'இயந்திர போக்குவரத்து',       desc: 'இயந்திரங்களை பாதுகாப்பாக கொண்டு வருதல்.' },
        { titleEn: 'Full Support',       title: 'முழுமையான உதவி',             desc: 'அறுவடை முதல் போக்குவரத்து வரை ஆதரவு.' },
        { titleEn: 'Mechanic Service',   title: 'மெக்கானிக்கல் சேவை',         desc: 'இயந்திரங்கள் பழுது சரிசெய்தல்.' },
      ],
    },

    // ── Owner Contact ─────────────────────────────────────────
    contact: {
      badge: 'தொடர்புக்கு',
      heading: 'இயந்திர சேவை',
      headingHighlight: 'தேவையா?',
      subtitle: 'உங்கள் விவசாயம் மற்றும் நிலப் பணிகளுக்கு தேவையான இயந்திர சேவைகளுக்கு இப்போதே எங்களை தொடர்பு கொள்ளுங்கள்.',
      primaryPhone: 'முதன்மை தொலைபேசி',
      altPhone: 'மாற்று தொலைபேசி',
      whatsapp: 'WhatsApp மூலம் தொடர்பு கொள்ளவும்',
      addressLabel: 'எங்கள் முகவரி',
      hoursLabel: 'பணி நேரம்',
      hoursLine1: 'திங்கள் – ஞாயிறு',
      hoursLine2: 'காலை 6.00 – மாலை 7.00',
    },

    // ── Service Areas ─────────────────────────────────────────
    serviceAreas: {
      mapHeading: 'எங்கள் இடம்',
      mapCta: 'Google Maps-ல் பார்க்க',
      badge: 'சேவை பகுதிகள்',
      title: 'நாங்கள் சேவை செய்யும்',
      titleHighlight: 'பகுதிகள்',
      primaryLabel: 'முதன்மை பகுதிகள்',
      nearbyLabel: 'அருகில் உள்ள பகுதிகள்',
      note: 'சேவை கிடைக்கும் இடங்களை உறுதி செய்ய தொடர்பு கொள்ளவும்.',
      fullDetailsLink: 'சேவை பகுதிகள் முழு விவரம்',
    },

    // ── Footer ────────────────────────────────────────────────
    footer: {
      servicesHeading: 'சேவைகள்',
      contactHeading: 'தொடர்புக்கு',
      addressLabel: 'எங்கள் முகவரி',
      hours: 'திங்கள் – ஞாயிறு',
      hoursTime: 'காலை 6.00 – மாலை 7.00',
      cta: 'சேவை பதிவு செய்யுங்கள்',
      copyright: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      tagline: 'விவசாயம் மற்றும் நிலப் பணிகளுக்கான இயந்திர சேவைகள்',
      description:
        'GG Harvesters and Earth Movers கும்பகோணம் மற்றும் தஞ்சாவூர் சுற்றுவட்டாரத்தில் விவசாயிகள், நில உரிமையாளர்கள் மற்றும் பிற வாடிக்கையாளர்களுக்கு விவசாய இயந்திர மற்றும் நிலப் பணி சேவைகளை வழங்குகிறது.',
    },

    // ── Works Page ────────────────────────────────────────────
    worksPage: {
      badge: 'எங்கள் பணிகள்',
      heading: 'நாங்கள் செய்த',
      headingHighlight: 'வேலைகள்',
      subtitle: 'உண்மையான வயல்கள் மற்றும் கட்டுமான இடங்களில் GG Harvesters இயந்திரங்கள் செய்த பணிகளின் காட்சிகள்.',
      stats: [
        { num: '500+', label: 'வயல் பணிகள்' },
        { num: '6+',   label: 'ஆண்டுகள் அனுபவம்' },
        { num: '13',   label: 'மாவட்டங்கள்' },
      ],
      ctaBadge: 'உங்கள் பணி?',
      ctaHeading: 'இதே போல் உங்கள் பணியும் முடிக்கணுமா?',
      ctaSubtitle: 'இப்போதே தொடர்பு கொண்டு சேவை பதிவு செய்யுங்கள்.',
      ctaButton: 'WhatsApp மூலம் பதிவு செய்யுங்கள்',
      works: [
        { title: 'நெல் அறுவடை பணி',           desc: 'கும்பகோணம் மற்றும் தஞ்சாவூர் பகுதியில் நெல் வயல்களில் GG Harvesters இயந்திரங்களால் செய்யப்பட்ட அறுவடை பணி.',  tag: 'நெல் அறுவடை' },
        { title: 'மண் பணி & கட்டுமானம்',      desc: 'JCB மற்றும் Mini Excavator மூலம் கால்வாய் தோண்டல், நில சீரமைப்பு மற்றும் கட்டுமான பணிகள்.',                     tag: 'JCB பணி' },
        { title: 'JCB இயந்திர பணி',            desc: 'JCB இயந்திரம் மூலம் நில தோண்டல், மண் அகற்றல் மற்றும் கட்டுமான அடிப்படை பணிகள்.',                              tag: 'JCB பணி' },
        { title: 'டிராக்டர் + டெய்லர் பணி',   desc: 'டிராக்டர் + டெய்லர் மூலம் விளைபொருட்கள் மற்றும் பொருட்களை ஒரு இடத்திலிருந்து மற்றொரு இடத்திற்கு கொண்டு செல்லும் பணி.', tag: 'டெய்லர் பணி' },
        { title: 'டிராக்டர் + ரோட்டவேட்டர் பணி', desc: 'டிராக்டர் ரோட்டவேட்டர் மூலம் நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு தயார்படுத்தும் பணி.',                    tag: 'ரோட்டவேட்டர் பணி' },
        { title: 'லாரி போக்குவரத்து பணி',     desc: 'இயந்திரங்கள் மற்றும் விளைபொருட்களை லாரி மூலம் பாதுகாப்பாக கொண்டு செல்லும் போக்குவரத்து சேவை.',                  tag: 'லாரி பணி' },
      ],
    },

    // ── Service card / modal ──────────────────────────────────
    serviceCard: {
      details: 'விவரங்கள்',
      whatsappBook: 'WhatsApp மூலம் பதிவு செய்யுங்கள்',
      applications: 'பயன்பாடுகள்',
    },

    // ── SERVICES data (per slug) ──────────────────────────────
    serviceData: {
      'paddy-harvester': {
        name: 'நெல் அறுவடை இயந்திரம்',
        shortDesc: 'நெல் வயல்களில் வேகமான மற்றும் திறமையான அறுவடை சேவை.',
        applications: ['நெல் வயல் அறுவடை', 'சிறிய மற்றும் பெரிய வயல்களுக்கு', 'குறுகிய நேரத்தில் முடிக்கும் பணி'],
      },
      lorry: {
        name: 'லாரி சேவை',
        shortDesc: 'இயந்திரங்கள் மற்றும் விளைபொருட்களை கொண்டு செல்லும் லாரி சேவை.',
        applications: ['இயந்திர போக்குவரத்து', 'நெல் மற்றும் விளைபொருட்கள் கொண்டு செல்லல்', 'கட்டுமான பொருட்கள் கொண்டு செல்லல்'],
      },
      'tractor-tailer': {
        name: 'டிராக்டர் + டெய்லர் சேவை',
        shortDesc: 'விளைபொருட்கள் மற்றும் பொருட்களை இடம் மாற்றுவதற்கு டிராக்டர் + டெய்லர் சேவை.',
        applications: ['விளைபொருட்கள் கொண்டு செல்லல்', 'வயல் முதல் கோடவரை போக்குவரத்து', 'கட்டுமான பொருட்கள் ஏற்றுமதி', 'நடமாடும் பொருட்கள் இடமாற்றம்'],
      },
      tractor: {
        name: 'டிராக்டர் சேவை',
        shortDesc: 'நிலம் தயார் செய்வதற்கும் விவசாய பணிகளுக்கும் டிராக்டர் சேவை.',
        applications: ['நிலம் தயார் செய்தல்', 'விவசாய பணிகள்', 'பொருட்கள் ஏற்றி இறக்குதல்'],
      },
      'tractor-rotavator': {
        name: 'டிராக்டர் + ரோட்டவேட்டர் சேவை',
        shortDesc: 'நிலத்தை ஆழமாக உழுது விதை விதைப்பிற்கு தயார்படுத்துவதற்கு ரோட்டவேட்டர் சேவை.',
        applications: ['ஆழமான மண் உழவு', 'விதை விதைப்பிற்கு நிலம் தயார்', 'ஈரமான மற்றும் உலர்ந்த நிலம்'],
      },
      jcb: {
        name: 'JCB சேவை',
        shortDesc: 'மண் தோண்டுதல், கட்டுமான பணிகள் மற்றும் நில சீரமைப்பிற்கு JCB சேவை.',
        applications: ['மண் தோண்டல்', 'கட்டுமான பணிகள்', 'நில சீரமைப்பு', 'கால்வாய் தோண்டல்'],
      },
      'jcb-mini-excavator': {
        name: 'JCB Mini Excavator சேவை',
        shortDesc: 'குறுகிய இடங்களில் தோண்டுதல், கால்வாய் பணிகள் மற்றும் நில சீரமைப்பிற்கு Mini Excavator.',
        applications: ['குறுகிய இடங்களில் தோண்டல்', 'கால்வாய் மற்றும் வடிகால் பணிகள்', 'நிலத்தடி குழாய் பணிகள்', 'நில சீரமைப்பு'],
      },
      'tractor-round-baler': {
        name: 'டிராக்டர் + Round Baler சேவை',
        shortDesc: 'அறுவடைக்கு பின் வைக்கோல் மற்றும் தாவர கழிவுகளை சுருட்டி பேக் செய்ய Round Baler சேவை.',
        applications: ['நெல் வைக்கோல் சுருட்டல்', 'தாவர கழிவு மேலாண்மை', 'வயல் சுத்தப்படுத்தல்'],
      },
    },

    // ── MACHINES data ──────────────────────────────────────────
    machineData: {
      'Paddy Harvester': 'நெல் வயல்களில் வேகமான மற்றும் திறமையான அறுவடை.',
      Tractor: 'விவசாய நிலம் தயாரிப்பு மற்றும் பல்வேறு பணிகளுக்கு.',
      'Tractor + Rotavator': 'மண்ணை ஆழமாக உழுது நிலம் தயார் செய்ய.',
      JCB: 'கட்டுமான மற்றும் மண் பணிகளுக்கு சக்திவாய்ந்த JCB.',
      'JCB Mini Excavator': 'சிறிய இடங்களில் தோண்டுதல் மற்றும் கால்வாய் பணிகள்.',
      'Round Baler': 'அறுவடைக்கு பின் வைக்கோலை சுருட்டி பேக் செய்ய.',
      Lorry: 'இயந்திரங்கள் மற்றும் விளைபொருட்கள் போக்குவரத்து.',
    },
  },
};

/**
 * Simple accessor — returns a nested key from the translations object.
 * Usage: t('hero.taglineBadge') or t('nav.home')
 */
export function getTranslations(lang) {
  return translations[lang] || translations.en;
}

export default translations;
