import { Button } from './Button';
import { Title } from './Title';

export function Customer() {
  return (
    <div className="container flex flex-wrap gap-10 py-2">
      <div className="basis-full px-6">
        <Title title="Customer Portal" />
      </div>
      <div className="px-6">
        <Button text="Login" url="https://customerabsi.blog/" />
      </div>
    </div>
  );
}
