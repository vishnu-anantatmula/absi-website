import { PortalLink } from './PortalLink';
import { Title } from './Title';

export function Customer() {
  return (
    <div className="container flex flex-wrap gap-10 py-6 lg:py-2">
      <div className="basis-full">
        <Title title="Customer Portal" />
      </div>
      <div className="basis-full">
        <PortalLink text="Login" url="https://customerabsi.blog/" />
      </div>
    </div>
  );
}
