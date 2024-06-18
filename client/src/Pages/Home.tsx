import { Booking } from '../Components/Booking';
import { About } from '../Components/About';

export function Home() {
  return (
    <div>
      <div className="container px-6 mt-2 grid gap-4">
        <div className="relative">
          <img src="/hero.png" className="w-full" />
          <div className="hidden lg:block absolute bottom-6 right-2 bg-blue-950 p-4 rounded-lg w-3/5 xl:w-2/5">
            <h1 className="font-semibold text-2xl">
              Certified HVAC, Plumbing, Electrical, Handyman services, &amp;
              more
            </h1>
            <p className="mt-1">
              Our engineering and maintenance team bring 40+ years of experience
            </p>
          </div>
        </div>
        <div className="bg-blue-950 rounded-md p-4 lg:hidden">
          <h2 className="font-semibold">
            Certified HVAC, Plumbing, Electrical, Handyman services, &amp; more
          </h2>
          <h3 className="font-semibold mt-4">
            Our engineering and maintenance team bring 40+ years of experience
          </h3>
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
    </div>
  );
}
