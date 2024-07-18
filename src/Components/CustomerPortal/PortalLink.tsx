import { Link } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
};

export function PortalLink({ text, url }: Props) {
  return (
    <Link
      className="font-semibold bg-blue-950 py-5 px-12 rounded-lg shadow-md text-white block w-96 text-center text-lg hover:ring-2 hover:ring-cyan-950"
      to={url}
      target="_blank">
      {text}
    </Link>
  );
}
