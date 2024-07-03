import { HoverMenuItem } from './HoverMenuItem';

export function ServicesLinks() {
  return (
    <ul className="absolute cursor-pointer top-16 xl:top-20">
      <HoverMenuItem name="Commercial HVAC" />
      <HoverMenuItem name="Building Engineering" />
    </ul>
  );
}
