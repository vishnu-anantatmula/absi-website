import { Customer } from '../Components/CustomerPortal/Customer';
import { Payment } from '../Components/CustomerPortal/Payment';

export function CustomerPortal() {
  return (
    <div className="flex">
      <div className="basis-1/2">
        <Customer />
      </div>
      <div className="basis-1/2">
        <Payment />
      </div>
    </div>
  );
}
