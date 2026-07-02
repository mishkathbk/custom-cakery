import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center">
      <span className="font-display text-6xl italic text-berry">404</span>
      <h1 className="mt-4 font-display text-2xl font-semibold text-espresso">
        That slice isn&apos;t on the menu.
      </h1>
      <p className="mt-2 font-body text-sm text-espresso/60">
        The page you&apos;re looking for may have moved or sold out. Let&apos;s get you back to the cake.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-berry px-6 py-3 font-body text-sm font-semibold text-cream-light"
      >
        Back to home
      </Link>
    </section>
  );
}
