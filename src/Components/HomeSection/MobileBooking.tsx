import { Booking } from './Booking';
import { About } from './About';

export function MobileBooking() {
  return (
    <div className="lg:hidden container">
      <div className="grid place-items-center gap-6">
        <Booking />
      </div>
      <div className="grid gap-6 mt-6">
        <About />
      </div>
    </div>
  );
}
