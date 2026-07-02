'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { categories, cakes } from '@/data/cakes';
import AnimatedSection from './AnimatedSection';

export default function CategoryGrid() {
  return (
    <section id="categories" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-berry">Browse the menu</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Every category, one shelf
        </h2>
        <p className="mt-3 font-body text-espresso/65">
          Cakes, brownies and custom designs — organised the way our kitchen makes them.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((cat, i) => {
          const sample = cakes.find((c) => c.category === cat.id);
          const count = cakes.filter((c) => c.category === cat.id).length;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            >
              <Link
                href={`/menu/?category=${cat.id}`}
                className="group relative block overflow-hidden rounded-3xl bg-espresso shadow-card"
              >
                <div className="aspect-square w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={sample?.image ? encodeURI(sample.image) : undefined}
                    alt={cat.name}
                    className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-95"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gold-light">
                    {count} designs
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug text-cream-light sm:text-lg">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
