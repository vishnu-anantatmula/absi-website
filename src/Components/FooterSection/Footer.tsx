import { FooterIcons } from './FooterIcons';

export function Footer() {
  return (
    <div className="flex py-8">
      <div className="m-auto">
        <h1 className="font-bold text-xl mb-2">
          Advanced Building Services, Inc.
        </h1>
        <p className="text-blue-950">23475 Rock Haven Way #135</p>
        <p className="text-blue-950">Sterling, VA 20166</p>
        <p className="text-blue-950">(703) 661-4280</p>
        <FooterIcons />
      </div>
    </div>
  );
}
