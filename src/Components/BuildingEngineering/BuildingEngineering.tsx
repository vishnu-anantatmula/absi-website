import AllEngineeringCards from './AllEngineeringCards';
import './buildingEngineering.css';

export default function BuildingEngineering() {
  return (
    <>
      <section className="engineering-section container px-6" id="engineering">
        <div className="pb-10">
          <h1 className="text-2xl lg:text-3xl font-maven leading-9 pb-3 font-semibold">
            Building Engineering
          </h1>
          <p className="font-maven text-xl">
            The team at Advanced Building Services provides a boutique approach
            establishing what you are looking for and need to achieve optimal
            building performance with our team of engineers with 40+ years of
            experience. The key to success is how we match expertise with
            personality for each individual project.
          </p>
        </div>
        <div>
          <div className="lg:flex flex-wrap lg:justify-between">
            <AllEngineeringCards />
          </div>
        </div>
      </section>
    </>
  );
}
