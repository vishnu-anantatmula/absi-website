import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

export function Facebook() {
  return (
    <Link
      to="https://www.facebook.com/profile.php?id=100095237958475"
      target="_blank">
      <FaFacebook className="text-blue-950 text-lg cursor-pointer" />
    </Link>
  );
}
