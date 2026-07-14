import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import PricingTeaser from '@/components/PricingTeaser';
import FeaturedCakes from '@/components/FeaturedCakes';
import FlavoursStrip from '@/components/FlavoursStrip';
import HowToOrder from '@/components/HowToOrder';
import StoryStrip from '@/components/StoryStrip';
import EnquiryCTA from '@/components/EnquiryCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <PricingTeaser />
      <FeaturedCakes />
      <FlavoursStrip />
      <HowToOrder />
      <EnquiryCTA />
      <StoryStrip />
    </>
  );
}

