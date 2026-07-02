import CakeCard from './CakeCard';

export default function CakeGrid({ items }) {
  if (!items.length) {
    return (
      <div className="rounded-2xl border border-dashed border-espresso/20 py-16 text-center">
        <p className="font-display text-lg text-espresso/70">No items match this filter yet.</p>
        <p className="mt-1 font-body text-sm text-espresso/50">Try a different category or search term.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((cake, i) => (
        <CakeCard key={cake.id} cake={cake} index={i} />
      ))}
    </div>
  );
}
