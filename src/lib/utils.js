import { siteConfig } from '@/data/cakes';

export function cakeWhatsAppLink(cake, weightLabel) {
  const size = weightLabel ? `\nPreferred size: ${weightLabel}` : '';
  const message =
    `Hi ${siteConfig.shortName}! I'd like to order:\n\n` +
    `${cake.name} (${cake.flavour})${size}\n\n` +
    `Could you confirm the exact price for this size/design and your next available pickup date?`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function cakeEmailLink(cake, weightLabel) {
  const size = weightLabel ? weightLabel : 'Not specified';
  const subject = `Order enquiry: ${cake.name}`;
  const body =
    `Hi ${siteConfig.shortName},\n\n` +
    `I'd like to order the ${cake.name} (${cake.flavour}).\n\n` +
    `Preferred size: ${size}\n` +
    `Preferred pickup date:\n` +
    `Design notes / colours / message on cake:\n\n` +
    `Could you please confirm the exact price for this size and design? Thanks!`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function generalWhatsAppLink() {
  const message = `Hi ${siteConfig.shortName}! I have a question about your menu and pricing.`;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function generalEmailLink() {
  const subject = `Enquiry: ${siteConfig.shortName}`;
  const body = `Hi ${siteConfig.shortName},\n\nI have a question about your menu and pricing.\n\n`;
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
