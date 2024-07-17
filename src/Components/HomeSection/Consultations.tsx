import { Link } from 'react-router-dom';

type Props = {
  description: string;
  buttonText: string;
};

export function Consultations({ description, buttonText }: Props) {
  return (
    <div className="grid place-items-center bg-blue-950 text-white py-10 gap-8 px-6">
      <p className="text-center text-lg lg:text-2xl">{description}</p>
      <Link
        to="/contact"
        className="font-semibold bg-white py-3 px-6 rounded-lg shadow-md basis-full text-blue-950 text-xl">
        {buttonText}
      </Link>
    </div>
  );
}
