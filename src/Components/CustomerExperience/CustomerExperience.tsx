import CustomerCard from './CustomerCard';
import './customerExperience.css';

export default function CustomerExperience() {
  return (
    <>
      <div className="bg-BrandBlue py-10">
        <div className="customer-section">
          <div className="text-center pb-5">
            <h1 className="text-white text-5xl py-5 font-hind">
              Customer Experience
            </h1>
            <span className="text-white py-3 text-2xl font-hind">
              We strive for experienced and diligent quantity for every project.
              What our clients are saying about us
            </span>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-nowrap space-x-8 overflow-x-auto">
              <CustomerCard
                quote="A terrific place of praise"
                profileImage="./images/profile-icon.png"
                name="Name"
                description="Description of project or city"
              />
              <CustomerCard
                quote="A fantastic bit of feedback"
                profileImage="./images/profile-icon.png"
                name="Name"
                description="Description of project or city"
              />
              <CustomerCard
                quote="A genuinely glowing review"
                profileImage="./images/profile-icon.png"
                name="Name"
                description="Description of project or city"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
