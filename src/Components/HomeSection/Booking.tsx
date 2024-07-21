import { Link } from 'react-router-dom';

export function Booking() {
  return (
    <div className="grid place-items-center gap-8 px-4 md:px-12 mt-4 mb-2 font-maven">
      <div className="xl:basis-full">
        <h2 className="font-semibold text-2xl">Proud to be employee-owned.</h2>
      </div>
      <div className="xl:basis-full">
        <h3 className="text-center basis-full text-xl">
          Our highly qualified and licensed team provides exceptional quality
          for your essential building and HVAC needs.
        </h3>
      </div>
      <div className="xl:basis-full">
        <Link
          to="/contact"
          className="font-semibold text-2xl bg-blue-950 py-3 px-6 rounded-lg shadow-md basis-full text-white hover:ring-2 hover:ring-cyan-950">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}
