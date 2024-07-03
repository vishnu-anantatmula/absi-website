import { Link } from 'react-router-dom';

type Props = {
  text: string;
  url: string;
};

export function Button({ text, url }: Props) {
  return (
    <Link
      className="font-semibold bg-blue-950 py-3 px-12 rounded-lg shadow-md basis-full text-white min-w-64"
      to={url}
      target="_blank">
      {text}
    </Link>
  );
}
