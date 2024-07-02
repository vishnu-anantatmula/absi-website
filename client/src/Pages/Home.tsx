import { HeroImage } from '../Components/HomeSection/HeroImage';
import { Booking } from '../Components/HomeSection/Booking';
import { Banner } from '../Components/HomeSection/Banner';
import { About } from '../Components/HomeSection/About';
import Services from '../Components/ServicesSection/Services';
import CustomerExperience from '../Components/CustomerExperience/CustomerExperience';

export function Home() {
  return (
    <div>
      <div className="mt-2 grid gap-4 mb-12">
        <div className="flex flex-wrap w-full">
          <HeroImage />
          <Banner />
        </div>
        <div className="xl:hidden">
          <div className="grid place-items-center gap-6">
            <Booking />
          </div>
          <div className="grid gap-6 mt-6">
            <About />
          </div>
        </div>
        <div className="hidden xl:flex">
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
      <CustomerExperience />
      <Services />
    </div>
  );
}
