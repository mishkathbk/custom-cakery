'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { cakeWhatsAppLink, cakeEmailLink } from '@/lib/utils';

export default function OrderPanel({ cake }) {
  const [selected, setSelected] = useState(cake.availableWeights?.[1] ?? cake.availableWeights?.[0] ?? null);

  return (
    <div className="rounded-3xl bg-cream-light p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-2 rounded-xl bg-blush-light px-3.5 py-2.5">
        <MapPin size={15} className="shrink-0 text-berry" />
        <p className="font-mono text-[11px] leading-snug text-espresso/70">
          Pickup only in Halifax, NS — no delivery. Location shared once your order is confirmed.
        </p>
      </div>

      {cake.availableWeights?.length > 0 && (
        <div className="mt-4">
          <p className="font-body text-xs font-semibold uppercase tracking-wide text-espresso/50">
            {cake.unitType === 'box' ? 'Choose quantity' : 'Choose size'}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {cake.availableWeights.map((w) => (
              <button
                key={w}
                onClick={() => setSelected(w)}
                className={`rounded-full border px-4 py-2 font-body text-sm font-medium transition-colors ${
                  selected === w
                    ? 'border-berry bg-berry text-cream-light'
                    : 'border-espresso/15 bg-transparent text-espresso/70'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 font-body text-sm text-espresso/60">
        Price depends on size, flavour and customization.{' '}
        <Link href="/pricing/" className="font-semibold text-berry hover:underline">
          View the pricing guide <ArrowRight size={12} className="inline" />
        </Link>
      </p>

      <div className="mt-5 flex flex-col gap-2.5">
        <motion.a
          whileTap={{ scale: 0.97 }}
          href={cakeWhatsAppLink(cake, selected)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-body text-sm font-semibold text-white shadow-card"
        >
          <MessageCircle size={17} fill="white" strokeWidth={0} /> Order on WhatsApp
        </motion.a>
        {/* <motion.a
          whileTap={{ scale: 0.97 }}
          href={cakeEmailLink(cake, selected)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/20 bg-transparent px-6 py-3.5 font-body text-sm font-semibold text-espresso"
        >
          <Mail size={16} /> Order by email
        </motion.a> */}
      </div>
      <p className="mt-4 font-mono text-[11px] leading-relaxed text-espresso/45">
        Tapping order pre-fills your message with this item and size — you can edit it before sending. We&apos;ll reply with the exact price and confirm your pickup date. A 50% non-refundable deposit secures your order.
      </p>
    </div>
  );
}
