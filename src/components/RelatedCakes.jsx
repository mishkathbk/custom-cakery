import { cakes } from '@/data/cakes';
import CakeGrid from './CakeGrid';

export default function RelatedCakes({ current }) {
  const related = cakes
    .filter((c) => c.category === current.category && c.id !== current.id)
    .slice(0, 4);

  if (!related.length) return null;

  return (
    <section className="mt-16">
      <h2 className="font-display text-2xl font-semibold text-espresso">You might also like</h2>
      <div className="mt-6">
        <CakeGrid items={related} />
      </div>
    </section>
  );
}
