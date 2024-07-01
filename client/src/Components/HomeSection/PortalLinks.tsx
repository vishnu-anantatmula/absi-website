import { HoverMenuItem } from './HoverMenuItem';

export function PortalLinks() {
  return (
    <ul className="absolute top-16 cursor-pointer">
      <HoverMenuItem name="Login" />
      <HoverMenuItem name="Payment Portal" />
    </ul>
  );
}
