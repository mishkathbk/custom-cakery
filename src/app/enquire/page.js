import EnquiryForm from '@/components/EnquiryForm';
import { siteConfig } from '@/data/cakes';

export const metadata = {
  title: `Enquire — ${siteConfig.name}`,
  description: `Get a custom quote for your cake order from ${siteConfig.name}. Fill in your occasion, date and design ideas and we'll reply within one business day.`,
};

export default function EnquirePage() {
  return (
    <section>
      {/* Header */}
      <div
        className="border-b border-espresso/10 px-6 py-14 text-center sm:py-20"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(217,132,143,0.10), transparent 40%),
            radial-gradient(circle at 80% 10%, rgba(201,162,39,0.09), transparent 40%)
          `,
        }}
      >
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-berry">
          Halifax Custom Cakery — Halifax, NS
        </p>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-espresso sm:text-5xl">
          Tell us about your{' '}
          <em className="font-medium italic text-berry">occasion</em>
        </h1>
        <p className="mx-auto mt-4 max-w-[460px] font-body text-[15.5px] leading-relaxed text-espresso/75">
          Custom cakes, tiered designs and celebration orders start here. Fill this in and we'll reply within one business day.
        </p>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-2xl px-6 py-14 pb-24">
        <EnquiryForm />
      </div>
    </section>
  );
}
