import { FooterIcons } from './FooterIcons';

export function MobileSection() {
  return (
    <div className="w-80 400:w-96 md:basis-1/2 lg:basis-1/3">
      <h1 className="font-bold text-xl mb-2">
        Advanced Building Services, Inc.
      </h1>
      <p className="text-blue-950 tracking-wide">23475 Rock Haven Way #135</p>
      <p className="text-blue-950 tracking-wide">Sterling, VA 20166</p>
      <p className="text-blue-950 tracking-wide">(703) 661-4280</p>
      <FooterIcons />
    </div>
  );
}
