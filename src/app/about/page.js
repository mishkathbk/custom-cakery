import { MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { siteConfig, cakes } from '@/data/cakes';
import AnimatedSection from '@/components/AnimatedSection';
import SectionDivider from '@/components/SectionDivider';
import { generalWhatsAppLink } from '@/lib/utils';

export const metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: `The story behind ${siteConfig.name} — a home-based custom cakery in Halifax, NS.`,
};

const values = [
  { title: 'Baked to order', body: 'Every cake is freshly baked to order and thoughtfully designed to match your special occasion.' },
  { title: 'Quality ingredients', body: 'We focus on quality ingredients and attention to detail in every cake we make.' },
  { title: 'Personalized designs', body: 'We work closely with you to create a cake that reflects your vision and tastes as amazing as it looks.' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-blush-light pb-14 pt-12 sm:pt-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="font-mono text-xs uppercase tracking-widest text-berry">Our story</span>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-espresso sm:text-5xl">
            Welcome to
            <span className="italic text-berry"> Halifax Custom Cakery.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-body text-espresso/65">
            Where every cake is homemade with passion, creativity, and care.
          </p>
        </div>
        <SectionDivider color="fill-cream" />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <AnimatedSection className="space-y-4 font-body text-[15px] leading-relaxed text-espresso/75">
          <p>
            Our baking journey began over 4 years ago, driven by a love for creating
            beautiful and delicious cakes. What started as a hobby soon became a
            passion, and for the past 2 years, we&apos;ve proudly shared our cakes with
            friends, family, and our close community. Their support, encouragement,
            and positive feedback inspired us to take the next step.
          </p>
          <p>
            Today, we&apos;re excited to open our doors to everyone and bring our
            custom creations to more celebrations across Halifax.
          </p>
          <p>
            Every cake is freshly baked to order and thoughtfully designed to match
            your special occasion. Whether it&apos;s a birthday, wedding, baby shower,
            anniversary, graduation, or any milestone worth celebrating, we work
            closely with you to create a cake that reflects your vision and tastes as
            amazing as it looks.
          </p>
          <p>
            We believe a cake is more than just dessert — it&apos;s part of your
            memories. That&apos;s why we focus on quality ingredients, attention to
            detail, and personalized designs that make every celebration extra
            special.
          </p>
          <p className="font-display text-lg italic text-berry">
            Thank you for supporting our small home-based bakery. We look forward to
            being part of your happiest moments — one cake at a time.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1} className="rounded-3xl bg-cream-light p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-espresso">{v.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-espresso/65">{v.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <AnimatedSection className="grid overflow-hidden rounded-[2rem] bg-espresso shadow-lift lg:grid-cols-2">
          <div className="aspect-[4/3] w-full lg:aspect-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={cakes[30]?.image} alt="Halifax Custom Cakery workspace" className="h-full w-full object-cover" />
          </div>
          <div className="p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-cream-light">Order or ask a question</h2>
            <ul className="mt-5 space-y-4 font-body text-sm text-cream-light/75">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold" /> {siteConfig.address}
              </li>
              <li className="flex items-start gap-3">
                <Clock size={17} className="mt-0.5 shrink-0 text-gold" /> {siteConfig.hours}
              </li>
              <li className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 shrink-0 text-gold" /> {siteConfig.email}
              </li>
            </ul>
            <a
              href={generalWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-body text-sm font-semibold text-espresso transition-transform hover:scale-105"
            >
              <MessageCircle size={16} /> Chat with us on WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
