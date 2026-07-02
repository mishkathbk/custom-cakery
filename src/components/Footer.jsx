import Link from 'next/link';
import { MapPin, Clock, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import { siteConfig, categories } from '@/data/cakes';
import { generalWhatsAppLink } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-espresso text-cream-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-espresso font-display text-lg italic">H</span>
              <span className="font-display text-xl font-semibold">{siteConfig.shortName}</span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream-light/70">
              {siteConfig.description}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream-light/10 px-3 py-1.5 font-mono text-xs text-gold-light">
              {siteConfig.leadTimeNote}
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">Categories</h4>
            <ul className="mt-4 space-y-2 font-body text-sm text-cream-light/70">
              {categories.map((c) => (
                <li key={c.id}>
                  <Link href={`/menu/?category=${c.id}`} className="transition-colors hover:text-cream-light">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">Order / Contact</h4>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream-light/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.hours}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream-light">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href={generalWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-cream-light">
                  Message us on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Facebook size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href="https://www.facebook.com/profile.php?id=61591240951635&mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-cream-light">
                  Facebook
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram size={16} className="mt-0.5 shrink-0 text-gold" />
                <a href="https://www.instagram.com/halifaxcustomcakery?utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-cream-light">
                  Instagram
                </a>
              </li>
            </ul>
            <ul className="mt-5 space-y-1.5 border-t border-cream-light/10 pt-4 font-mono text-xs text-cream-light/50">
              <li><Link href="/pricing/" className="hover:text-cream-light">Pricing Guide</Link></li>
              <li><Link href="/terms/" className="hover:text-cream-light">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-light/10 pt-6 font-mono text-xs text-cream-light/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Pickup only in Halifax, NS · Ordering via WhatsApp &amp; email · No online payments.</p>
        </div>
      </div>
    </footer>
  );
}
