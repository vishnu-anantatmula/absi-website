import { FaFacebook, FaGoogle, FaLinkedin, FaYelp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function FooterIcons() {
  return (
    <div className="flex mt-3 px-3 gap-x-6">
      <Link
        to="https://www.facebook.com/profile.php?id=100095237958475&mibextid=ZbWKwL"
        target="_blank">
        <FaFacebook className="text-blue-950 text-lg cursor-pointer" />
      </Link>
      <Link
        to="https://www.linkedin.com/company/advanced-building-services-inc/mycompany/"
        target="_blank">
        <FaLinkedin className="text-blue-950 text-lg cursor-pointer" />
      </Link>
      <FaGoogle className="text-blue-950 text-lg cursor-pointer" />
      <FaYelp className="text-blue-950 text-lg cursor-pointer" />
    </div>
  );
}
