import { LinkSection } from './LinkSection';
import { LogoSection } from './LogoSection';
import { MobileSection } from './MobileSection';

export function Footer() {
  return (
    <div className="flex py-8 font-maven">
      <MobileSection />
      <LogoSection />
      <LinkSection />
    </div>
  );
}
