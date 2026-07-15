'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SWIPE_THRESHOLD = 60;

export default function CakeGallery({ images, name }) {
  const [[index, direction], setIndex] = useState([0, 0]);
  const active = ((index % images.length) + images.length) % images.length;

  function go(dir) {
    setIndex([index + dir, dir]);
  }

  function onDragEnd(_, info) {
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  }

  return (
    <div>
      {/* scallop-bottom */}
      <div className=" relative aspect-square w-full touch-pan-y overflow-hidden rounded-3xl bg-blush shadow-card">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={active}
            custom={direction}
            drag={images.length > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full cursor-grab active:cursor-grabbing"
          >
            <Image
              src={encodeURI(images[active])}
              alt={`${name} — view ${active + 1} of ${images.length}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover pointer-events-none"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream-light/85 text-espresso shadow-soft backdrop-blur-sm transition-transform hover:scale-110"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-cream-light/85 text-espresso shadow-soft backdrop-blur-sm transition-transform hover:scale-110"
            >
              <ChevronRight size={18} />
            </button>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > active ? 1 : -1])}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? 'w-5 bg-berry' : 'w-1.5 bg-cream-light/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2.5">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex([i, i > active ? 1 : -1])}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                active === i ? 'border-berry' : 'border-transparent opacity-70'
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={encodeURI(img)} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
      {images.length > 1 && (
        <p className="mt-2 text-center font-mono text-[10px] text-espresso/40 sm:hidden">
          Swipe to see more views
        </p>
      )}
    </div>
  );
}
