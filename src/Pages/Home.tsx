import { HeroImage } from '../Components/HomeSection/HeroImage';
import { Booking } from '../Components/HomeSection/Booking';
import { Banner } from '../Components/HomeSection/Banner';
import { About } from '../Components/HomeSection/About';
import { Menu } from './Menu';
import Services from '../Components/ServicesSection/Services';
import CustomerExperience from '../Components/CustomerExperience/CustomerExperience';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function Home({ isOpen, setIsOpen }: Props) {
  if (isOpen) return <Menu isOpen={isOpen} setIsOpen={setIsOpen} />;

  return (
    <div>
      <p>Test</p>
      <div className="mt-2 grid gap-4 mb-12">
        <div className="flex flex-wrap w-full">
          <HeroImage />
          <Banner />
        </div>
        <div className="lg:hidden">
          <div className="grid place-items-center gap-6">
            <Booking />
          </div>
          <div className="grid gap-6 mt-6">
            <About />
          </div>
        </div>
        <div className="hidden lg:flex">
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
