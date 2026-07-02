'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageCircle, MapPin, Tag } from 'lucide-react';
import SectionDivider from './SectionDivider';
import { siteConfig, cakes } from '@/data/cakes';
import { generalWhatsAppLink } from '@/lib/utils';

const heroMain = cakes[8]?.image;
const heroTopRight = cakes[22]?.image;
const heroBottomRight = cakes[41]?.image;
const marqueeSet = cakes.slice(0, 14);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blush-light pb-4 pt-8 sm:pt-14">
      <div className="pointer-events-none absolute inset-0 bg-grain" />
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-72 w-72 rounded-full bg-berry/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-cream-light px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-berry shadow-soft"
          >
            Home-based &amp; handmade in Halifax, NS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-espresso text-balance sm:text-6xl lg:text-6xl"
          >
            Baked with Love.
            <span className="block italic text-berry">Designed for Memories.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-espresso/70 lg:mx-0"
          >
            {cakes.length}+ custom cakes, brownies and treats made fresh to order.
            Browse the menu, then message us for your exact quote — no account,
            no cart, just cake.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-light px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-espresso/70 shadow-sm">
              <MapPin size={11} className="text-berry" /> Pickup only
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-light px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-wider text-espresso/70 shadow-sm">
              <Tag size={11} className="text-berry" /> Priced by size &amp; design
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              href="/menu/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-berry px-7 py-3.5 font-body text-sm font-semibold text-cream-light shadow-card transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              View Full Menu <ArrowRight size={16} />
            </Link>
            <a
              href={generalWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-espresso/15 bg-cream-light px-7 py-3.5 font-body text-sm font-semibold text-espresso transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              <MessageCircle size={16} /> Order on WhatsApp
            </a>
          </motion.div>
        </div>

        <div className="relative z-10 grid h-[360px] grid-cols-5 grid-rows-2 gap-3 sm:h-[440px] lg:h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="col-span-3 row-span-2 overflow-hidden rounded-[2rem] border-4 border-cream-light shadow-lift"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroMain} alt="Signature custom cake" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="animate-float col-span-2 row-span-1 overflow-hidden rounded-3xl border-4 border-cream-light shadow-lift"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroTopRight} alt="Theme cake detail" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ animationDelay: '1.5s' }}
            className="animate-float col-span-2 row-span-1 overflow-hidden rounded-3xl border-4 border-cream-light shadow-lift"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroBottomRight} alt="Fresh baked treat" className="h-full w-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7, type: 'spring' }}
            className="absolute -bottom-4 left-4 grid h-20 w-20 place-items-center rounded-full bg-gold text-center shadow-lift sm:h-24 sm:w-24"
          >
            <span className="font-display text-xl italic text-espresso sm:text-2xl">50%</span>
            <span className="sr-only">deposit secures your order</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee shelf of cakes */}
      <div className="relative z-10 mt-12 overflow-hidden py-2">
        <div className="flex w-max animate-marquee gap-4">
          {[...marqueeSet, ...marqueeSet].map((cake, i) => (
            <div
              key={`${cake.id}-${i}`}
              className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 border-cream-light shadow-card sm:h-24 sm:w-24"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cake.image} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <SectionDivider color="fill-cream" />
    </section>
  );
}
