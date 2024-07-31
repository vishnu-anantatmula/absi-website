import { HeroImage } from './HeroImage';
import { Banner } from './Banner';

export function HeroSection() {
  return (
    <div className="flex flex-wrap w-full">
      <HeroImage />
      <Banner />
    </div>
  );
}
