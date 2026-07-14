'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PenLine } from 'lucide-react';

export default function EnquiryCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-28">
      {/* Background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-berry/10 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-berry">
          Get a custom quote
        </p>

        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-espresso sm:text-5xl">
          Have a cake in mind?<br />
          <em className="font-medium italic text-berry">Tell us about it.</em>
        </h2>

        <p className="mx-auto mt-5 max-w-[420px] font-body text-[15.5px] leading-relaxed text-espresso/70">
          Fill in your occasion, date and design ideas — we'll get back to you within one business day with a quote.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/enquire/"
            className="inline-flex items-center gap-2 rounded-full bg-berry px-8 py-4 font-body text-sm font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-berry-dark active:scale-95"
          >
            <PenLine size={16} />
            Start your enquiry
          </Link>
          <Link
            href="/menu/"
            className="inline-flex items-center gap-2 rounded-full border border-espresso/20 bg-cream-light px-8 py-4 font-body text-sm font-semibold text-espresso transition-colors hover:border-berry/40 hover:text-berry"
          >
            Browse the menu first
          </Link>
        </div>

        {/* Scallop decorative line */}
        <div
          aria-hidden
          className="mx-auto mt-12 h-3 w-48 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #B85C68 3px, transparent 3px)',
            backgroundSize: '16px 12px',
          }}
        />
      </motion.div>
    </section>
  );
}
