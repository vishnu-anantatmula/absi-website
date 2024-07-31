import { About } from './About';
import { Booking } from './Booking';

export function NonMobileBooking() {
  return (
    <div className="hidden lg:flex container">
      <div className="grid gap-6 mt-6 basis-1/2">
        <About />
      </div>
      <div className="flex basis-1/2">
        <div className="m-auto">
          <Booking />
        </div>
      </div>
    </div>
  );
}
