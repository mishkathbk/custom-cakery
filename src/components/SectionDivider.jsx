const ARC = 'M0,0 ' + Array.from({ length: 24 }, () => 'a25,25 0 0 0 50,0').join(' ');

export default function SectionDivider({ flip = false, color = 'fill-cream' }) {
  return (
    <div className={`relative -mt-px w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 26" preserveAspectRatio="none" className="h-5 w-full sm:h-7">
        <path d={`${ARC} L1200,26 L0,26 Z`} className={color} />
      </svg>
    </div>
  );
}
