import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

export function Google() {
  return (
    <Link to="https://g.co/kgs/ovCMz9J" target="_blank">
      <FaGoogle className="text-blue-950 text-lg cursor-pointer" />
    </Link>
  );
}
