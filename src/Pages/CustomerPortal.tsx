import { Customer } from '../Components/CustomerPortal/Customer';
import { Payment } from '../Components/CustomerPortal/Payment';
import { Menu } from './Menu';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export function CustomerPortal({ isOpen, setIsOpen }: Props) {
  if (isOpen) return <Menu isOpen={isOpen} setIsOpen={setIsOpen} />;

  return (
    <div className="flex flex-wrap divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-red-600 min-h-96 mt-6 gap-4 justify-center lg:flex-nowrap">
      <div className="basis-1/2">
        <Customer />
      </div>
      <div className="basis-1/2">
        <Payment />
      </div>
    </div>
  );
}
