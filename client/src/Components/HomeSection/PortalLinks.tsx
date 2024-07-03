import { HoverMenuItem } from './HoverMenuItem';

export function PortalLinks() {
  return (
    <ul className="absolute cursor-pointer top-16 xl:top-20">
      <HoverMenuItem name="Login" />
      <HoverMenuItem name="Payment Portal" />
    </ul>
  );
}
