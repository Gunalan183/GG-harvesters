import { BUSINESS } from '../data/siteData';

/**
 * Generate WhatsApp deep link with pre-filled message
 * @param {string} message - Pre-filled message text
 * @param {string} [phone] - Phone number with country code (default: business WhatsApp)
 * @returns {string} WhatsApp URL
 */
export function whatsappLink(message, phone = BUSINESS.whatsapp) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * Service-specific WhatsApp messages
 */
export const WHATSAPP_MESSAGES = {
  general: 'வணக்கம் GG Harvester, எனக்கு இயந்திர சேவை தேவை. என் தேவை: ______',
  'paddy-harvester': 'வணக்கம் GG Harvester, எனக்கு நெல் அறுவடை சேவை தேவை.\nஊர் / இடம்: ______\nவயல் அளவு: ______',
  'tractor': 'வணக்கம் GG Harvester, எனக்கு Tractor சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nவேலை விவரம்: ______',
  'tractor-rotavator': 'வணக்கம் GG Harvester, எனக்கு Tractor + Rotavator சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nநிலத்தின் அளவு: ______',
  'jcb': 'வணக்கம் GG Harvester, எனக்கு JCB சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nவேலை விவரம்: ______',
  'jcb-3cx': 'வணக்கம் GG Harvester, எனக்கு JCB 3CX Backhoe Loader சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nவேலை விவரம்: ______',
  'jcb-mini-excavator': 'வணக்கம் GG Harvester, எனக்கு JCB Mini Excavator சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nவேலை விவரம்: ______',
  'tractor-round-baler': 'வணக்கம் GG Harvester, எனக்கு Tractor + Round Baler சேவை தேவை.\nவேலை நடைபெறும் இடம்: ______\nவயல் அளவு: ______',
  contact: 'வணக்கம் GG Harvester, நான் உங்களை தொடர்பு கொள்கிறேன். என் பெயர்: ______\nதேவை: ______',
  booking: 'வணக்கம் GG Harvester, நான் ஒரு சேவையை பதிவு செய்ய விரும்புகிறேன்.\nபெயர்: ______\nசேவை: ______\nஊர்: ______\nதேதி: ______',
};

/**
 * Get WhatsApp link for a specific service
 * @param {string} serviceSlug
 * @returns {string}
 */
export function getServiceWhatsApp(serviceSlug) {
  const msg = WHATSAPP_MESSAGES[serviceSlug] || WHATSAPP_MESSAGES.general;
  return whatsappLink(msg);
}

/**
 * Call link
 * @param {string} phone
 * @returns {string}
 */
export function callLink(phone) {
  return `tel:+91${phone}`;
}
