import './services.css';
import AllServiceCards from './AllServiceCards';

export default function Services() {
  return (
    <>
      <section className="service-section" id="services">
        <div className="py-10">
          <h1 className="text-2xl lg:text-5xl font-marven leading-9 py-3">
            SERVICES
          </h1>
          <p className="font-hind text-xl">
            Our team of experienced professionals are IAQ certified, provide
            24-hour emergency response, and are available for temporary
            engineering projects as part-time or full-time building engineers
          </p>
        </div>
        <div>
          <h1 className="pb-3 text-xl">Commercial HVAC</h1>
          <div className="lg:flex flex-wrap lg:justify-between">
            <AllServiceCards />
          </div>
        </div>
      </section>
    </>
  );
}
