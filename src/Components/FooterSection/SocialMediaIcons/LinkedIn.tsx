import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

export function LinkedIn() {
  return (
    <Link
      to="https://www.linkedin.com/company/advanced-building-services-inc/mycompany/"
      target="_blank">
      <FaLinkedin className="text-blue-950 text-lg cursor-pointer" />
    </Link>
  );
}
