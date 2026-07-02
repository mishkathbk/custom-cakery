import { siteConfig } from '@/data/cakes';

export const metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Ordering terms, deposit and pickup policy for ${siteConfig.name}.`,
};

const sections = [
  {
    title: '1. Order Confirmation',
    body: 'All orders are considered confirmed only after a 50% non-refundable deposit has been received. This deposit secures your event date and covers initial preparation, ingredients, and design planning.',
  },
  {
    title: '2. Final Payment',
    body: 'The remaining balance must be paid in full at the time of pickup.',
  },
  {
    title: '3. Cancellation Policy',
    body: 'The 50% deposit is non-refundable under all circumstances. Cancellations made after order confirmation will not be eligible for a refund. Last-minute cancellations may incur additional charges depending on preparation already completed.',
  },
  {
    title: '4. Changes to Orders',
    body: 'Any changes to cake design, flavour, size, or pickup details must be requested with as much notice as possible, and are subject to approval based on availability and preparation stage.',
  },
  {
    title: '5. Pickup Policy',
    body: 'We currently offer pickup only \u2014 delivery is not available. Your exact pickup address in Halifax, NS is shared once your order is confirmed. Once the order has been handed over at pickup, responsibility for safe transport lies with the customer.',
  },
  {
    title: '6. Product Care',
    body: 'All cakes and baked goods are freshly made to order. Customers are responsible for proper storage after pickup. We are not liable for damage caused by improper handling or storage after handover.',
  },
  {
    title: '7. Allergies & Ingredients',
    body: 'Our products may contain or come into contact with common allergens such as nuts, dairy, eggs, gluten, and soy. While we take care in preparation, we cannot guarantee an allergen-free environment.',
  },
  {
    title: '8. Design Disclaimer',
    body: 'All custom cake designs are handcrafted. Minor variations in colour, design, or decoration may occur and are part of the handmade nature of our products.',
  },
  {
    title: '9. Food Safety & Compliance',
    body: 'We follow safe food handling practices. Customers acknowledge that products are intended for consumption within recommended time frames and temperature.',
  },
];

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <span className="font-mono text-xs uppercase tracking-widest text-berry">Please read before ordering</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-espresso sm:text-4xl">Terms &amp; Conditions</h1>
      <p className="mt-3 font-body text-sm leading-relaxed text-espresso/65">
        These Terms &amp; Conditions apply to all orders placed with {siteConfig.name}.
        By placing an order, you agree to the following terms.
      </p>

      <div className="mt-8 space-y-6">
        {sections.map((s) => (
          <div key={s.title} className="rounded-2xl bg-cream-light p-5 shadow-card">
            <h2 className="font-display text-base font-semibold text-espresso">{s.title}</h2>
            <p className="mt-2 font-body text-sm leading-relaxed text-espresso/70">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
