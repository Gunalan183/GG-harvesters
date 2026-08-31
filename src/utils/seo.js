/**
 * Update document title and meta tags for each page
 * (Used in useEffect inside page components)
 */
export function setPageMeta({ title, description, canonical, ogImage }) {
  // Title
  document.title = title;

  // Meta description
  let descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', description);

  // Canonical
  let canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.setAttribute('href', canonical || window.location.href);

  // OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonical || window.location.href);

  if (ogImage) {
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);
  }
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
      name: 'GG Harvester and Earth Movers',
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
 * Inject JSON-LD into head
 */
export function injectSchema(schema) {
  const existing = document.querySelector('script[data-schema="page"]');
  if (existing) existing.remove();

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'page');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
