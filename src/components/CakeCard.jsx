'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cakeWhatsAppLink, cakeEmailLink } from '@/lib/utils';

export default function CakeCard({ cake, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream-light shadow-card"
    >
      <Link href={`/cake/${cake.slug}/`} className="block">
        <div className="scallop-top relative aspect-[4/3] w-full overflow-hidden bg-blush">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cake.image}
            alt={cake.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]"
          />
          <div className="absolute left-2 top-2 flex flex-wrap gap-1.5">
            {cake.tags.includes('bestseller') && (
              <span className="rounded-full bg-berry px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-cream-light shadow-sm">
                Bestseller
              </span>
            )}
            {cake.tags.includes('new') && (
              <span className="rounded-full bg-gold px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-espresso shadow-sm">
                New
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link href={`/cake/${cake.slug}/`}>
          <h3 className="font-display text-base font-semibold leading-snug text-espresso line-clamp-2">
            {cake.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 font-body text-xs leading-relaxed text-espresso/60">
          {cake.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <Link
            href="/pricing/"
            onClick={(e) => e.stopPropagation()}
            className="font-mono text-[11px] font-semibold text-berry underline decoration-berry/40 underline-offset-2"
          >
            See pricing guide
          </Link>
          <div className="flex items-center gap-1.5">
            <a
              href={cakeWhatsAppLink(cake)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${cake.name} on WhatsApp`}
              onClick={(e) => e.stopPropagation()}
              className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110 active:scale-95"
            >
              <MessageCircle size={14} fill="white" strokeWidth={0} />
            </a>
            {/* <a
              href={cakeEmailLink(cake)}
              aria-label={`Order ${cake.name} by email`}
              onClick={(e) => e.stopPropagation()}
              className="grid h-8 w-8 place-items-center rounded-full bg-espresso text-cream-light transition-transform hover:scale-110 active:scale-95"
            >
              <Mail size={13} />
            </a> */}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
