import { Customer } from '../Components/CustomerPortal/Customer';
import { Payment } from '../Components/CustomerPortal/Payment';

export function CustomerPortal() {
  return (
    <div className="flex flex-wrap divide-y-2 lg:divide-x-2 divide-red-600 min-h-96 mt-6 gap-4">
      <div className="basis-full lg:basis-1/2">
        <Customer />
      </div>
      <div className="basis-full lg:basis-1/2">
        <Payment />
      </div>
    </div>
  );
}
