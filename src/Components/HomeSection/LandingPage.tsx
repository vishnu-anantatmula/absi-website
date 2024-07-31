import { HeroImage } from './HeroImage';
import { Banner } from './Banner';
import { Booking } from './Booking';
import { About } from './About';

export function LandingPage() {
  return (
    <div className="mt-2 grid">
      <div className="flex flex-wrap w-full">
        <HeroImage />
        <Banner />
      </div>
      <div className="lg:hidden container">
        <div className="grid place-items-center gap-6">
          <Booking />
        </div>
        <div className="grid gap-6 mt-6">
          <About />
        </div>
      </div>
      <div className="hidden lg:flex container">
        <div className="grid gap-6 mt-6 basis-1/2">
          <About />
        </div>
        <div className="flex basis-1/2">
          <div className="m-auto">
            <Booking />
          </div>
        </div>
      </div>
    </div>
  );
}
