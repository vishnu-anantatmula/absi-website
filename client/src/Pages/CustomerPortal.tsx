import { Customer } from '../Components/CustomerPortal/Customer';
import { Payment } from '../Components/CustomerPortal/Payment';

export function CustomerPortal() {
  return (
    <div className="flex flex-wrap divide-y-2 sm:divide-x-2 sm:divide-y-0 divide-red-600 min-h-96 mt-6 gap-4 justify-center sm:flex-nowrap">
      <div className="basis-1/2">
        <Customer />
      </div>
      <div className="basis-1/2">
        <Payment />
      </div>
    </div>
  );
}
