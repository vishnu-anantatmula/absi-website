import { Link } from 'react-router-dom';

type Props = {
  description: string;
  buttonText: string;
};

export function Consultations({ description, buttonText }: Props) {
  const handleBookingClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-blue-950 text-white py-11 font-maven">
      <div className="grid place-items-center gap-8 px-6 container">
        <p className="text-center text-2xl lg:text-3xl tracking-wider">
          {description}
        </p>
        <Link
          onClick={handleBookingClick}
          to="/contact"
          className="font-semibold bg-white py-3 px-6 rounded-lg shadow-md basis-full text-blue-950 text-xl lg:text-2xl hover:scale-105">
          {buttonText}
        </Link>
      </div>
    </div>
  );
}
