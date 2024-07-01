import { HoverMenuItem } from './HoverMenuItem';

export function ServicesLinks() {
  return (
    <ul className="absolute top-16 cursor-pointer">
      <HoverMenuItem name="Commercial HVAC" />
      <HoverMenuItem name="Building Engineering" />
    </ul>
  );
}
