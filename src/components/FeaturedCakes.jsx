import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cakes } from '@/data/cakes';
import CakeGrid from './CakeGrid';
import AnimatedSection from './AnimatedSection';

export default function FeaturedCakes() {
  const featured = cakes.filter((c) => c.featured || c.tags.includes('bestseller')).slice(0, 8);

  return (
    <section className="bg-blush-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-berry">Fan favourites</span>
            <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
              What everyone orders
            </h2>
          </div>
          <Link
            href="/menu/"
            className="inline-flex shrink-0 items-center gap-1.5 font-body text-sm font-semibold text-berry hover:underline"
          >
            See full menu <ArrowRight size={15} />
          </Link>
        </AnimatedSection>

        <div className="mt-10">
          <CakeGrid items={featured} />
        </div>
      </div>
    </section>
  );
}
