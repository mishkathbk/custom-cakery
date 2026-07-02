'use client';

import { Search, MessageCircleHeart, PackageCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    n: '01',
    icon: Search,
    title: 'Browse the menu',
    body: 'Look through cakes and brownies by category — every item shows the design, flavour and available sizes.',
  },
  {
    n: '02',
    icon: MessageCircleHeart,
    title: 'Message your order',
    body: 'Tap "Order on WhatsApp" or "Email order" on any item — your message comes pre-filled with the design and size, just add your date.',
  },
  {
    n: '03',
    icon: PackageCheck,
    title: 'Confirm & pick up',
    body: "We'll reply with your exact price, confirm your pickup date, and collect a 50% deposit to lock it in. Pickup only — no delivery.",
  },
];

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-berry">Ordering, simplified</span>
        <h2 className="mt-3 font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Three steps, one message
        </h2>
      </AnimatedSection>

      <div className="relative mt-14 grid gap-8 sm:grid-cols-3">
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-espresso/10 sm:block" />
        {steps.map((step, i) => (
          <AnimatedSection key={step.n} delay={i * 0.12} className="relative text-center">
            <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-cream-light shadow-card">
              <step.icon size={26} className="text-berry" />
            </div>
            <span className="mt-4 block font-mono text-xs text-gold-dark">{step.n}</span>
            <h3 className="mt-1 font-display text-lg font-semibold text-espresso">{step.title}</h3>
            <p className="mx-auto mt-2 max-w-xs font-body text-sm leading-relaxed text-espresso/60">
              {step.body}
            </p>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
