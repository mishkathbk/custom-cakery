import Link from 'next/link';
import { Tag, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function PricingTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 pt-4 sm:px-6 lg:px-8">
      <AnimatedSection className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-berry/20 bg-blush-light px-6 py-8 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-berry text-cream-light">
            <Tag size={20} />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold text-espresso">How much does a cake cost?</h3>
            <p className="mt-1 font-body text-sm text-espresso/60">
              Every cake is priced by size, flavour and customization — see our starting price guide.
            </p>
          </div>
        </div>
        <Link
          href="/pricing/"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-espresso px-6 py-3 font-body text-sm font-semibold text-cream-light transition-transform hover:scale-105"
        >
          View Pricing Guide <ArrowRight size={15} />
        </Link>
      </AnimatedSection>
    </section>
  );
}
