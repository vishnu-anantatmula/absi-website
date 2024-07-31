import { LinkSection } from './LinkSection';
import { LogoSection } from './LogoSection';
import { MobileSection } from './MobileSection';

export function Footer() {
  return (
    <div className="flex py-11 font-maven container px-6">
      <MobileSection />
      <LogoSection />
      <LinkSection />
    </div>
  );
}
