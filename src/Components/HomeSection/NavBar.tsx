import { Outlet, Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ServicesLinks } from './ServicesLinks';
import { useState } from 'react';
import { PortalLinks } from './PortalLinks';
import { HashLink } from 'react-router-hash-link';
import { Footer } from '../FooterSection/Footer';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function NavBar({ isOpen, setIsOpen }: Props) {
  const [isServicesActive, setIsServicesActive] = useState(false);
  const [isPortalActive, setIsPortalActive] = useState(false);

  return (
    <>
      <div className="py-4 font-maven fixed top-0 left-0 right-0 z-50 bg-white mt-0">
        <header className="container px-6 relative">
          <div className="flex justify-between">
            <div className="basis-2/3 lg:basis-1/3">
              <div className="w-full md:w-4/5 lg:4/5">
                <Link to="/">
                  <div className="relative pb-1/4">
                    <img
                      src="abs-logo-full.jpg"
                      className="absolute w-full h-full object-contain bottom-0"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid place-items-center lg:hidden">
              <FaBars
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <div className="hidden lg:flex basis-2/3">
              <div className="absolute right-7 bottom-16 font-bold hidden xl:flex text-xl">
                <span className="pr-6">(703) 661-4280</span>
                <span>support@absi1.com</span>
              </div>
              <div
                className="grid place-items-center basis-1/3"
                onMouseEnter={() => setIsServicesActive(true)}
                onMouseLeave={() => setIsServicesActive(false)}>
                <HashLink
                  to="/#services"
                  className="h-3/4 flex items-end text-xl xl:text-2xl font-bold pb-1 hover:text-blue-950 hover:scale-105">
                  <span className="relative">Services</span>
                </HashLink>
                {isServicesActive && <ServicesLinks />}
              </div>
              <div
                className="grid place-items-center basis-1/3"
                onMouseEnter={() => setIsPortalActive(true)}
                onMouseLeave={() => setIsPortalActive(false)}>
                <Link
                  to="/portal"
                  className="h-3/4 flex items-end text-xl xl:text-2xl font-bold pb-1 hover:text-blue-950 hover:scale-105">
                  Customer Portal
                </Link>
                {isPortalActive && <PortalLinks />}
              </div>
              <div className="flex items-center justify-end basis-1/3">
                <div className="h-4/5 flex items-end">
                  <Link
                    to="/contact"
                    className="xl:text-xl font-bold bg-blue-950 py-2 px-6 rounded-md shadow-lg text-white hover:ring-2 ring-cyan-950 tracking-wide">
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="mt-32">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
