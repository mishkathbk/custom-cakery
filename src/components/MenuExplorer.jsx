'use client';

import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { categories, cakes } from '@/data/cakes';
import CakeGrid from './CakeGrid';

export default function MenuExplorer() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const results = useMemo(() => {
    return cakes.filter((cake) => {
      if (activeCategory !== 'all' && cake.category !== activeCategory) return false;
      if (query.trim()) {
        const q = query.trim().toLowerCase();
        if (!cake.name.toLowerCase().includes(q) && !cake.flavour.toLowerCase().includes(q)) {
          return false;
        }
      }
      return true;
    });
  }, [activeCategory, query]);

  return (
    <div>
      <div className="sticky top-[57px] z-30 -mx-4 border-b border-espresso/10 bg-cream/95 px-4 py-4 backdrop-blur-md sm:top-[65px] sm:mx-0 sm:rounded-2xl sm:border sm:px-5">
        <div className="flex items-center gap-2 rounded-full border border-espresso/15 bg-cream-light px-4 py-2.5">
          <Search size={16} className="shrink-0 text-espresso/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cakes, flavours…"
            className="w-full bg-transparent font-body text-sm text-espresso outline-none placeholder:text-espresso/40"
          />
          {query && (
            <button onClick={() => setQuery('')} aria-label="Clear search">
              <X size={15} className="text-espresso/40" />
            </button>
          )}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
              activeCategory === 'all' ? 'bg-espresso text-cream-light' : 'bg-cream-light text-espresso/70 border border-espresso/10'
            }`}
          >
            All items
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                activeCategory === c.id ? 'bg-berry text-cream-light' : 'bg-cream-light text-espresso/70 border border-espresso/10'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-5 font-mono text-xs text-espresso/50">
        Showing {results.length} of {cakes.length} items · exact pricing confirmed on order
      </p>

      <div className="mt-4">
        <CakeGrid items={results} />
      </div>
    </div>
  );
}
