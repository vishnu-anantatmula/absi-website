import { Facebook } from './Facebook';
import { LinkedIn } from './LinkedIn';
import { Google } from './Google';

export function FooterIcons() {
  return (
    <div className="flex mt-3 px-3 gap-x-6">
      <Facebook />
      <LinkedIn />
      <Google />
    </div>
  );
}
