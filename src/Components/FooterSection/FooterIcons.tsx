import { Facebook } from './SocialMediaIcons/Facebook';
import { Google } from './SocialMediaIcons/Google';
import { LinkedIn } from './SocialMediaIcons/LinkedIn';

export function FooterIcons() {
  return (
    <div className="flex mt-3 px-3 gap-x-6">
      <Facebook />
      <LinkedIn />
      <Google />
    </div>
  );
}
