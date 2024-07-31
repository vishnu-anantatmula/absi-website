import { MobileBooking } from './MobileBooking';
import { NonMobileBooking } from './NonMobileBooking';

export function BookingSection() {
  return (
    <>
      <MobileBooking />
      <NonMobileBooking />
    </>
  );
}
