import { Suspense } from 'react';
import MenuExplorer from '@/components/MenuExplorer';
import { siteConfig } from '@/data/cakes';

export const metadata = {
  title: `Full Menu | ${siteConfig.name}`,
  description: 'Browse every cake, brownie and treat on the Halifax Custom Cakery menu.',
};

export default function MenuPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-berry">The full menu</span>
        <h1 className="mt-2 font-display text-3xl font-semibold text-espresso sm:text-4xl">
          Everything we bake
        </h1>
        <p className="mt-2 max-w-lg font-body text-sm text-espresso/60">
          {siteConfig.leadTimeNote}
        </p>
      </div>
      <Suspense fallback={<div className="py-20 text-center font-body text-espresso/50">Loading menu…</div>}>
        <MenuExplorer />
      </Suspense>
    </section>
  );
}
