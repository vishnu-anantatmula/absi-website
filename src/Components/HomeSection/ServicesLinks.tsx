import { HoverMenuItem } from './HoverMenuItem';
import { HashLink } from 'react-router-hash-link';

export function ServicesLinks() {
  return (
    <ul className="absolute cursor-pointer top-16 xl:top-20">
      <HashLink to="#commercial-hvac">
        <HoverMenuItem name="Commercial HVAC" />
      </HashLink>
      <HashLink to="#engineering">
        <HoverMenuItem name="Building Engineering" />
      </HashLink>
    </ul>
  );
}
