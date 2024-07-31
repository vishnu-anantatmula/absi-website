import { BookingSection } from './BookingSection';
import { HeroSection } from './HeroSection';

export function LandingPage() {
  return (
    <div className="mt-2 grid gap-y-11 lg:gap-y-0">
      <HeroSection />
      <BookingSection />
    </div>
  );
}
