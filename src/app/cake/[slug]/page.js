import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Sparkles, MapPin } from 'lucide-react';
import { cakes, categories, siteConfig } from '@/data/cakes';
import CakeGallery from '@/components/CakeGallery';
import OrderPanel from '@/components/OrderPanel';
import RelatedCakes from '@/components/RelatedCakes';

export function generateStaticParams() {
  return cakes.map((cake) => ({ slug: cake.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cake = cakes.find((c) => c.slug === slug);
  if (!cake) return {};
  return {
    title: `${cake.name} | ${siteConfig.name}`,
    description: cake.description,
  };
}

export default async function CakeDetailPage({ params }) {
  const { slug } = await params;
  const cake = cakes.find((c) => c.slug === slug);
  if (!cake) notFound();

  const category = categories.find((c) => c.id === cake.category);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/menu/"
        className="inline-flex items-center gap-1 font-body text-sm font-medium text-espresso/60 hover:text-berry"
      >
        <ChevronLeft size={16} /> Back to menu
      </Link>

      <div className="mt-5 grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Images — left column, swipeable when there's more than one */}
        <CakeGallery images={[cake.image, ...cake.gallery]} name={cake.name} />

        {/* Details + order — right column */}
        <div>
          {category && (
            <Link
              href={`/menu/?category=${category.id}`}
              className="font-mono text-xs uppercase tracking-widest text-berry hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="mt-2 font-display text-3xl font-semibold leading-tight text-espresso sm:text-4xl">
            {cake.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {cake.tags.includes('bestseller') && (
              <span className="inline-flex items-center gap-1 rounded-full bg-berry/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-berry">
                <Sparkles size={11} /> Bestseller
              </span>
            )}
            <span className="rounded-full bg-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-gold-dark">
              {cake.flavour}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blush px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-berry-dark">
              <MapPin size={10} /> Pickup only
            </span>
          </div>

          <p className="mt-4 font-body text-[15px] leading-relaxed text-espresso/70">
            {cake.longDescription}
          </p>

          <div className="mt-6">
            <OrderPanel cake={cake} />
          </div>
        </div>
      </div>

      <RelatedCakes current={cake} />
    </section>
  );
}
