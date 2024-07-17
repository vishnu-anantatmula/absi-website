import { Link } from 'react-router-dom';

export function Booking() {
  return (
    <div className="grid place-items-center gap-6 px-4 md:px-12 mt-4 mb-2">
      <div className="xl:basis-full">
        <h2 className="font-semibold text-xl">Proud to be employee-owned.</h2>
      </div>
      <div className="xl:basis-full">
        <h3 className="font-semibold text-center basis-full text-lg">
          Our highly qualified and licensed team provides exceptional quality
          for your essential building and HVAC needs.
        </h3>
      </div>
      <div className="xl:basis-full">
        <Link
          to="/contact"
          className="font-semibold bg-blue-950 py-3 px-6 rounded-lg shadow-md basis-full text-white hover:ring-2 hover:ring-cyan-950">
          Book a Consultation
        </Link>
      </div>
    </div>
  );
}
