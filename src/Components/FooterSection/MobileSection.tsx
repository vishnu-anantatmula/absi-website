import { FooterIcons } from './FooterIcons';

export function MobileSection() {
  return (
    <div className="m-auto lg:basis-1/3 lg: pl-12">
      <h1 className="font-bold text-xl mb-2">
        Advanced Building Services, Inc.
      </h1>
      <p className="text-blue-950">23475 Rock Haven Way #135</p>
      <p className="text-blue-950">Sterling, VA 20166</p>
      <p className="text-blue-950">(703) 661-4280</p>
      <FooterIcons />
    </div>
  );
}
