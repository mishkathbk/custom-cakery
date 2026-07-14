'use client';

import { useState, useRef } from 'react';
import { siteConfig } from '@/data/cakes';

const CAKE_STYLES = ['Single tier', '2-tier', '3+ tier', 'Cupcakes', 'Brownies', 'Not sure yet'];
const OCCASIONS = ['Birthday', 'Wedding', 'Anniversary', 'Baby Shower', 'Corporate Event', 'Other'];
const BUDGETS = ['Prefer not to say', 'Under $100', '$100–$250', '$250–$500', '$500+'];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!fields.occasion) errors.occasion = 'Please select an occasion.';
  if (!fields.date) errors.date = 'Please select a date.';
  if (!fields.details.trim()) errors.details = "Let us know a bit about what you're picturing.";
  return errors;
}

export default function EnquiryForm() {
  const [fields, setFields] = useState({
    name: '', email: '', phone: '',
    occasion: '', date: '', guests: '',
    style: '', budget: '', details: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const firstErrorRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setFields(f => ({ ...f, [name]: value }));
    setErrors(err => { const n = { ...err }; delete n[name]; return n; });
  }

  function handleStyleSelect(val) {
    setFields(f => ({ ...f, style: val }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTimeout(() => {
        firstErrorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }

    const lines = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Phone: ${fields.phone || '—'}`,
      `Occasion: ${fields.occasion}`,
      `Date needed: ${fields.date}`,
      `Guests: ${fields.guests || '—'}`,
      `Style: ${fields.style || '—'}`,
      `Budget: ${fields.budget || '—'}`,
      ``,
      `Details:`,
      fields.details,
    ];
    const subject = encodeURIComponent(`New cake enquiry — ${fields.name}`);
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div
          style={{ fontFamily: "'Caveat', cursive" }}
          className="rotate-[-3deg] rounded-full border-2 border-[#5B7A5A] px-6 py-3 text-2xl font-bold text-[#5B7A5A]"
        >
          sent!
        </div>
        <p className="max-w-[34ch] font-body text-sm leading-relaxed text-espresso/70">
          Thanks — your enquiry is in. We'll get back to you by email within one business day.
        </p>
      </div>
    );
  }

  const field = (name) => ({
    base: 'w-full rounded-md border-[1.5px] bg-[#F7EDE2] px-3 py-2.5 font-body text-[15px] text-espresso placeholder:text-espresso/40 transition-colors focus:border-berry-dark focus:bg-white focus:outline-none',
    error: errors[name] ? 'border-red-500 bg-red-50' : 'border-espresso/20',
  });

  let firstErrorSet = false;
  function errorRef(name) {
    if (errors[name] && !firstErrorSet) {
      firstErrorSet = true;
      return firstErrorRef;
    }
    return null;
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-sm border border-espresso/15 bg-[#fffdf9] px-6 py-9 shadow-[0_18px_40px_-24px_rgba(46,33,27,0.35)] sm:px-9"
      style={{
        backgroundImage: 'none',
      }}
    >
      {/* Scallop decoration top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-[7px] h-3.5"
        style={{
          backgroundImage: 'radial-gradient(circle, #FBF3E7 6px, transparent 7px)',
          backgroundSize: '20px 20px',
          backgroundPosition: 'center',
        }}
      />

      {/* ── Your details ── */}
      <fieldset className="mb-7 border-0 p-0">
        <legend className="mb-4 w-full border-b border-dashed border-espresso/20 pb-3 font-display text-lg font-semibold text-espresso">
          Your details
        </legend>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div ref={errorRef('name')}>
            <label htmlFor="name" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
              Full name
            </label>
            <input
              type="text" id="name" name="name"
              placeholder="Jane Doe"
              value={fields.name} onChange={handleChange}
              className={`${field('name').base} ${field('name').error}`}
            />
            {errors.name && <p className="mt-1 text-[12.5px] text-red-600">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
              Phone <span className="font-normal opacity-55">(optional)</span>
            </label>
            <input
              type="tel" id="phone" name="phone"
              placeholder="(902) 555-0123"
              value={fields.phone} onChange={handleChange}
              className={`${field('phone').base} border-espresso/20`}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mt-4" ref={errorRef('email')}>
          <label htmlFor="email" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
            Email
          </label>
          <input
            type="email" id="email" name="email"
            placeholder="jane@email.com"
            value={fields.email} onChange={handleChange}
            className={`${field('email').base} ${field('email').error}`}
          />
          {errors.email && <p className="mt-1 text-[12.5px] text-red-600">{errors.email}</p>}
        </div>
      </fieldset>

      {/* ── The cake ── */}
      <fieldset className="mb-7 border-0 p-0">
        <legend className="mb-4 w-full border-b border-dashed border-espresso/20 pb-3 font-display text-lg font-semibold text-espresso">
          The cake
        </legend>

        {/* Occasion */}
        <div className="mb-4" ref={errorRef('occasion')}>
          <label htmlFor="occasion" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
            Occasion
          </label>
          <select
            id="occasion" name="occasion"
            value={fields.occasion} onChange={handleChange}
            className={`${field('occasion').base} ${field('occasion').error}`}
          >
            <option value="" disabled>Select one</option>
            {OCCASIONS.map(o => <option key={o}>{o}</option>)}
          </select>
          {errors.occasion && <p className="mt-1 text-[12.5px] text-red-600">{errors.occasion}</p>}
        </div>

        {/* Date + Guests */}
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div ref={errorRef('date')}>
            <label htmlFor="date" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
              Date needed
            </label>
            <input
              type="date" id="date" name="date"
              value={fields.date} onChange={handleChange}
              className={`${field('date').base} ${field('date').error}`}
            />
            {errors.date && <p className="mt-1 text-[12.5px] text-red-600">{errors.date}</p>}
          </div>
          <div>
            <label htmlFor="guests" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
              Guests <span className="font-normal opacity-55">(approx.)</span>
            </label>
            <input
              type="number" id="guests" name="guests" min="1"
              placeholder="20"
              value={fields.guests} onChange={handleChange}
              className={`${field('guests').base} border-espresso/20`}
            />
          </div>
        </div>

        {/* Cake Style chips */}
        <div className="mb-4">
          <p className="mb-2 text-[13px] font-bold tracking-wide text-espresso/75">Cake style</p>
          <div className="flex flex-wrap gap-2">
            {CAKE_STYLES.map(s => (
              <button
                type="button" key={s}
                onClick={() => handleStyleSelect(fields.style === s ? '' : s)}
                className={`rounded-full border-[1.5px] px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                  fields.style === s
                    ? 'border-berry bg-berry text-white'
                    : 'border-espresso/20 bg-[#F7EDE2] text-espresso hover:border-berry/60'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="mb-4" ref={errorRef('details')}>
          <label htmlFor="details" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
            Flavour, design ideas, dietary needs
          </label>
          <textarea
            id="details" name="details" rows={4}
            placeholder="e.g. chocolate and raspberry, gold accents, one guest is nut-allergic"
            value={fields.details} onChange={handleChange}
            className={`${field('details').base} ${field('details').error} resize-y`}
          />
          {errors.details && <p className="mt-1 text-[12.5px] text-red-600">{errors.details}</p>}
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="mb-1.5 block text-[13px] font-bold tracking-wide text-espresso/75">
            Budget range <span className="font-normal opacity-55">(optional)</span>
          </label>
          <select
            id="budget" name="budget"
            value={fields.budget} onChange={handleChange}
            className={`${field('budget').base} border-espresso/20`}
          >
            {BUDGETS.map(b => <option key={b}>{b}</option>)}
          </select>
        </div>
      </fieldset>

      <button
        type="submit"
        className="mt-2 w-full rounded-lg bg-berry py-4 font-body text-[15px] font-bold text-white transition-all hover:bg-berry-dark active:scale-[.99]"
      >
        Send enquiry
      </button>
      <p className="mt-3 text-center font-body text-[11.5px] text-espresso/50 leading-relaxed">
        We'll reply by email within one business day to confirm details and pricing.<br />
        No payment is required to enquire.
      </p>

      {/* Scallop decoration bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-[7px] h-3.5"
        style={{
          backgroundImage: 'radial-gradient(circle, #FBF3E7 6px, transparent 7px)',
          backgroundSize: '20px 20px',
          backgroundPosition: 'center',
        }}
      />
    </form>
  );
}
