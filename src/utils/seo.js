/**
 * Update document title and meta tags for each page
 */
export function setPageMeta({ title, description, canonical, ogImage, twitterImage }) {
  // Title
  document.title = title;

  const setMeta = (selector, attr, value) => {
    const el = document.querySelector(selector);
    if (el && value) el.setAttribute(attr, value);
  };

  // Primary
  setMeta('meta[name="description"]', 'content', description);
  setMeta('link[rel="canonical"]', 'href', canonical || window.location.href);

  // Open Graph
  setMeta('meta[property="og:title"]', 'content', title);
  setMeta('meta[property="og:description"]', 'content', description);
  setMeta('meta[property="og:url"]', 'content', canonical || window.location.href);
  if (ogImage) setMeta('meta[property="og:image"]', 'content', ogImage);

  // Twitter
  setMeta('meta[name="twitter:title"]', 'content', title);
  setMeta('meta[name="twitter:description"]', 'content', description);
  if (twitterImage || ogImage) {
    setMeta('meta[name="twitter:image"]', 'content', twitterImage || ogImage);
  }
}

/**
 * Inject JSON-LD schema into <head>
 */
export function injectSchema(schema, id = 'page') {
  const existing = document.querySelector(`script[data-schema="${id}"]`);
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', id);
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

/**
 * Generate BreadcrumbList schema
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Service schema
 */
export function serviceSchema({ name, description, url, image, areaServed }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    image,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.ggharvesters.com/#business',
      name: 'GG Harvesters and Earth Movers',
      telephone: '+918608522042',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '229 Main Road, Pambapadiyur',
        addressLocality: 'Kumbakonam',
        addressRegion: 'Tamil Nadu',
        postalCode: '612703',
        addressCountry: 'IN',
      },
    },
    areaServed: areaServed || ['Kumbakonam', 'Thanjavur', 'Tamil Nadu'],
  };
}

/**
 * Generate FAQ schema
 */
export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate LocalBusiness schema (homepage)
 */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.ggharvesters.com/#business',
    name: 'GG Harvesters and Earth Movers',
    alternateName: 'GG Harvester',
    description: 'Agricultural machinery and earth-moving services including paddy harvester, tractor, rotavator, JCB, mini excavator and round baler services in Kumbakonam, Thanjavur, Tamil Nadu.',
    url: 'https://www.ggharvesters.com/',
    telephone: ['+918608522042', '+918248287672'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '229 Main Road, Pambapadiyur',
      addressLocality: 'Kumbakonam',
      addressRegion: 'Tamil Nadu',
      postalCode: '612703',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '10.9601',
      longitude: '79.4197',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '19:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Kumbakonam' },
      { '@type': 'City', name: 'Thanjavur' },
      { '@type': 'Place', name: 'Pambapadiyur' },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
    ],
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.ggharvesters.com/GG_harvester_and_Earth_Movers_Logo_BG.png',
    },
    image: 'https://www.ggharvesters.com/images/og/gg-harvester-og-image.jpg',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI',
    knowsLanguage: ['Tamil', 'English'],
  };
}
