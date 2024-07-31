import { Menu } from './Menu';
import { Consultations } from '../Components/HomeSection/Consultations';
import Services from '../Components/ServicesSection/Services';
import CustomerExperience from '../Components/CustomerExperience/CustomerExperience';
import BuildingEngineering from '../Components/BuildingEngineering/BuildingEngineering';
import { LandingPage } from '../Components/HomeSection/LandingPage';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function Home({ isOpen, setIsOpen }: Props) {
  const description = [
    'Entrust your building needs with the experienced and qualified team of Advanced Building Services today.',
    'We offer free consultations!',
  ];

  if (isOpen) return <Menu isOpen={isOpen} setIsOpen={setIsOpen} />;

  return (
    <div className="space-y-12">
      <LandingPage />
      <CustomerExperience />
      <Services />
      <Consultations
        description={description[0]}
        buttonText="Book a Consultation"
      />
      <BuildingEngineering />
      <Consultations
        description={description[1]}
        buttonText="Book an Appointment"
      />
    </div>
  );
}
