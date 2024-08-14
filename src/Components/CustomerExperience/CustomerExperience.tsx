import CustomerCard from './CustomerCard';
import './customerExperience.css';

export default function CustomerExperience() {
  return (
    <>
      <div className="bg-BrandBlue py-11">
        <div className="customer-section container px-6">
          <div className="text-center pb-5">
            <h1 className="text-white text-5xl pb-6 font-hind">
              Customer Experience
            </h1>
            <span className="text-white py-3 text-2xl font-hind">
              We strive for experienced and diligent quantity for every project.
              What our clients are saying about us
            </span>
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex flex-nowrap space-x-8 overflow-x-auto">
              <CustomerCard
                quote="Excellent to work with, very professional. Able to help solve a long-standing building over heating problem. ABS, Inc is a reliable company for property management companies and managers."
                name="Building Manager"
              />
              <CustomerCard
                quote="ABSI is easy and efficient to work with - All of their employees are very knowledgeable. We use them on approximately 10 properties and have nothing but positive things to say about their work."
                name="DS"
              />
              <CustomerCard
                quote="Advanced building services went above and beyond with their service"
                name="Clara B."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
