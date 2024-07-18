import { Link } from 'react-router-dom';
import { GoXCircle } from 'react-icons/go';
import { HashLink } from 'react-router-hash-link';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function Menu({ isOpen, setIsOpen }: Props) {
  const menu = [
    'Menu',
    'Home',
    'Book a Consultation',
    'Our Services',
    'Customer Portal',
    '(703) 661-4280',
    'support@absi1.com',
  ];

  return (
    <>
      {menu.map((item, index) => {
        if (index === 0)
          return (
            <MenuItem
              name={item}
              style={'border-t-2 border-cyan-500 text-white bg-blue-950'}
              key={index}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          );
        return (
          <MenuItem
            name={item}
            key={index}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </>
  );
}

type MenuItemProps = {
  name: string;
  style?: string;
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

function MenuItem({ name, style, isOpen, setIsOpen }: MenuItemProps) {
  let path = '';

  switch (name) {
    case 'Menu':
      break;
    case 'Home':
      path = '/';
      break;
    case 'Book a Consultation':
      path = '/contact';
      break;
    case 'Our Services':
      path = '#services';
      break;
    case 'Customer Portal':
      path = '/portal';
      break;
    case '(703) 661-4280':
      path = 'tel:703-661-4280';
      break;
    case 'support@absi1.com':
      path = 'mailto:support@absi1.com';
      break;
  }

  if (name === 'Menu')
    return (
      <Link to={path} className="cursor-pointer">
        <div
          className={`px-6 py-3 text-2xl font-semibold border-b-2 border-cyan-500 ${style} flex justify-between`}>
          <span>{name}</span>
          <span
            className="flex items-center"
            onClick={() => setIsOpen(!isOpen)}>
            <GoXCircle className="text-blue-950 bg-white rounded-full text-4xl" />
          </span>
        </div>
      </Link>
    );

  if (name === 'Our Services')
    return (
      <HashLink
        to={path}
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <div
          className={`px-6 py-3 text-2xl font-semibold border-b-2 border-cyan-500 ${style} hover:bg-blue-950 hover:text-white`}>
          {name}
        </div>
      </HashLink>
    );

  if (name === '(703) 661-4280' || name === 'support@absi1.com')
    return (
      <Link to={path} className="cursor-pointer">
        <div
          className={`px-6 py-3 text-2xl font-semibold border-b-2 border-cyan-500 ${style} hover:bg-blue-950 hover:text-white`}>
          {name}
        </div>
      </Link>
    );

  return (
    <Link
      to={path}
      className="cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}>
      <div
        className={`px-6 py-3 text-2xl font-semibold border-b-2 border-cyan-500 ${style} hover:bg-blue-950 hover:text-white`}>
        {name}
      </div>
    </Link>
  );
}
