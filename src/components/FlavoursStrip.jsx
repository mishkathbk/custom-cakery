import { Cake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const classicFlavours = ['Vanilla', 'Chocolate', 'Red Velvet', 'Butterscotch', 'Vanilla Chocolate', 'Vanilla Velvet'];
const fruitFlavours = ['Strawberry', 'Raspberry', 'Mango', 'Carrot'];
const specialties = [
  'Bento Cakes', 'Cupcakes', 'Birthday Cakes', 'Wedding Cakes', 'Anniversary Cakes',
  'Baby Shower Cakes', 'Graduation Cakes', 'Corporate Event Cakes',
];

function ChipRow({ items, tone = 'blush' }) {
  const toneClasses = tone === 'blush' ? 'bg-blush text-berry-dark' : 'bg-sage/15 text-sage-dark';
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] ${toneClasses}`}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function FlavoursStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2.5rem] bg-cream-light p-8 shadow-soft sm:p-12">
        <AnimatedSection className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-berry">
              <Cake size={14} /> Flavours &amp; specialties
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-espresso sm:text-3xl">
              All homemade, all made to order
            </h2>
          </div>
          <Link href="/menu/" className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-berry hover:underline">
            Browse the menu <ArrowRight size={15} />
          </Link>
        </AnimatedSection>

        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          <AnimatedSection delay={0.05}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-espresso/60">Classic flavours</h3>
            <div className="mt-3">
              <ChipRow items={classicFlavours} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-espresso/60">Fruit flavours</h3>
            <p className="mt-0.5 font-mono text-[10px] text-espresso/40">Seasonal availability</p>
            <div className="mt-3">
              <ChipRow items={fruitFlavours} tone="sage" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-espresso/60">We also make</h3>
            <div className="mt-3">
              <ChipRow items={specialties} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
