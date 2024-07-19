import { Link } from 'react-router-dom';

type Props = {
  description: string;
  buttonText: string;
};

export function Consultations({ description, buttonText }: Props) {
  return (
    <div className="grid place-items-center bg-blue-950 text-white py-10 gap-8 px-6 font-maven text-xl lg:text-2xl">
      <p className="text-center">{description}</p>
      <Link
        to="/contact"
        className="font-semibold bg-white py-3 px-6 rounded-lg shadow-md basis-full text-blue-950 hover:scale-105">
        {buttonText}
      </Link>
    </div>
  );
}
