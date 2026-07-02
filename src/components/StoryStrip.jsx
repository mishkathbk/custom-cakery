import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cakes } from '@/data/cakes';
import AnimatedSection from './AnimatedSection';

export default function StoryStrip() {
  const img = cakes[41]?.image;
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 rounded-[2.5rem] bg-espresso p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
        <AnimatedSection variant="fade">
          <span className="font-mono text-xs uppercase tracking-widest text-gold">Our story</span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-cream-light sm:text-4xl">
            From a home kitchen,
            <span className="italic text-gold-light"> baked with love.</span>
          </h2>
          <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-cream-light/70">
            Our baking journey began over 4 years ago out of a love for creating
            beautiful, delicious cakes. What started as a hobby has grown into
            Halifax Custom Cakery — every cake still freshly baked to order and
            designed around you.
          </p>
          <Link
            href="/about/"
            className="mt-6 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-gold-light hover:underline"
          >
            Read our story <ArrowRight size={15} />
          </Link>
        </AnimatedSection>
        <AnimatedSection variant="scale" delay={0.1} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt="Halifax Custom Cakery kitchen" className="h-full w-full object-cover" />
        </AnimatedSection>
      </div>
    </section>
  );
}
