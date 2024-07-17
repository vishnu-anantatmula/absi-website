import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export function FooterIcons() {
  return (
    <div className="flex mt-3 px-3 gap-x-6">
      <FaFacebook className="text-blue-950 text-lg" />
      <FaLinkedin className="text-blue-950 text-lg" />
      <FaYoutube className="text-blue-950 text-lg" />
      <FaInstagram className="text-blue-950 text-lg" />
    </div>
  );
}
