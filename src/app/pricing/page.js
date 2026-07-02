import { MessageCircle, Mail, Info } from 'lucide-react';
import { siteConfig, pricingGuide } from '@/data/cakes';
import AnimatedSection from '@/components/AnimatedSection';
import { generalWhatsAppLink, generalEmailLink } from '@/lib/utils';

export const metadata = {
  title: `Pricing Guide | ${siteConfig.name}`,
  description: 'Starting prices for custom cakes, cupcakes, cake pops, cakesicles and more at Halifax Custom Cakery.',
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <span className="font-mono text-xs uppercase tracking-widest text-berry">Pricing guide</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-espresso sm:text-4xl">
          What a cake costs
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-body text-sm leading-relaxed text-espresso/65">
          Our cake prices depend on the size, flavour, design, and level of customization.
          Every cake is freshly baked and handcrafted using quality ingredients. Use this
          guide as a starting point, then message us for an exact quote on your design.
        </p>
      </div>

      <AnimatedSection className="flex items-start gap-3 rounded-2xl bg-blush-light p-4">
        <Info size={18} className="mt-0.5 shrink-0 text-berry" />
        <p className="font-body text-sm leading-relaxed text-espresso/70">{pricingGuide.frostingNote}</p>
      </AnimatedSection>

      {/* Standard cake prices */}
      <AnimatedSection delay={0.05} className="mt-10">
        <h2 className="font-display text-xl font-semibold text-espresso">{pricingGuide.standardCakes.title}</h2>
        <p className="mt-1 font-mono text-[11px] text-espresso/45">{pricingGuide.currencyNote}</p>
        <div className="mt-4 overflow-hidden rounded-2xl border border-espresso/10">
          <table className="w-full border-collapse font-body text-sm">
            <thead>
              <tr className="bg-espresso text-cream-light">
                <th className="px-4 py-3 text-left font-medium">Weight</th>
                <th className="px-4 py-3 text-left font-medium">Simple → Custom → Fondant</th>
              </tr>
            </thead>
            <tbody>
              {pricingGuide.standardCakes.rows.map((row, i) => (
                <tr key={row.weight} className={i % 2 ? 'bg-cream-light' : 'bg-blush-light/50'}>
                  <td className="px-4 py-3 font-semibold text-espresso">{row.weight}</td>
                  <td className="px-4 py-3 font-mono text-berry">{row.simple}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* Bento cakes */}
      <AnimatedSection delay={0.08} className="mt-10">
        <h2 className="font-display text-xl font-semibold text-espresso">{pricingGuide.bentoCakes.title}</h2>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {pricingGuide.bentoCakes.rows.map((row) => (
            <div key={row.label} className="rounded-2xl bg-cream-light p-4 shadow-card">
              <p className="font-body text-sm text-espresso/60">{row.label}</p>
              <p className="mt-1 font-mono text-lg font-bold text-berry">{row.price}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Individual desserts */}
      <div className="mt-10">
        <h2 className="font-display text-xl font-semibold text-espresso">Individual Desserts</h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {pricingGuide.individualDesserts.map((section, i) => (
            <AnimatedSection key={section.title} delay={0.05 * i} className="rounded-2xl bg-cream-light p-5 shadow-card">
              <h3 className="font-display text-base font-semibold text-espresso">{section.title}</h3>
              <ul className="mt-3 space-y-1.5 font-body text-sm">
                {section.perEach.map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-espresso/70">
                    <span>{item.label}</span>
                    <span className="font-mono text-espresso">{item.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-wide text-espresso/40">Box prices</p>
              <ul className="mt-1.5 space-y-1.5 font-body text-sm">
                {section.boxes.map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-espresso/70">
                    <span>{item.label}</span>
                    <span className="font-mono font-semibold text-berry">{item.price}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <AnimatedSection delay={0.1} className="mt-10">
        <h2 className="font-display text-xl font-semibold text-espresso">{pricingGuide.addOns.title}</h2>
        <div className="mt-4 divide-y divide-espresso/10 rounded-2xl bg-cream-light shadow-card">
          {pricingGuide.addOns.rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between px-5 py-3 font-body text-sm">
              <span className="text-espresso/75">{row.label}</span>
              <span className="font-mono font-semibold text-berry">{row.price}</span>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Closing note */}
      <AnimatedSection delay={0.12} className="mt-10 rounded-2xl bg-espresso p-6 text-center">
        <p className="font-body text-sm leading-relaxed text-cream-light/80">{pricingGuide.closingNote}</p>
        <div className="mt-5 flex flex-col justify-center gap-2.5 sm:flex-row">
          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-body text-sm font-semibold text-white"
          >
            <MessageCircle size={16} fill="white" strokeWidth={0} /> Get a quote on WhatsApp
          </a>
          <a
            href={generalEmailLink()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-light/25 px-6 py-3 font-body text-sm font-semibold text-cream-light"
          >
            <Mail size={16} /> Email us
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
