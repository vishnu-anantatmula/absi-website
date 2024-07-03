import { Title } from './Title';
import { Button } from './Button';

export function Payment() {
  return (
    <div className="container flex flex-wrap gap-10 py-2">
      <div className="basis-full px-6">
        <Title title="Payment Portal" />
      </div>
      <div className="px-6 basis-full">
        <p className="text-lg">
          For financing, enter{' '}
          <span className="text-red-600 font-bold">
            Advanced Building Services, Inc.
          </span>{' '}
          and select{' '}
          <span className="text-red-600 font-bold">Start Application</span> then{' '}
          <span className="text-red-600 font-bold">Payment.</span>
        </p>
      </div>
      <div className=" basis-full px-6">
        <Button
          text="Click to Pay Here"
          url="https://paylink.paytrace.com/?m=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMTI4R0NNIn0.fO0ihhOXoZ_z16U6PRCL147vyFshztfc._dDxvwAAzFW12wu_.0Qkm708rS3L2-zCIFtHTvjf7DVZzyw9Sq09UKpHsFgDksBmYAJ-0JfKsdqrF6PZXjby7smMqo2x5YClbPTSR8aJMK11smAIcl8kg9pdvOafZhg7Yf5-fh4VPBcuUU8d4hFeo4UkirZwW3p9PVrnl60jjqVBqWSQqxbL1Xd3heMmBsHQbnB7f6ixcI54kd6eKe8DGptprlpwNSIsYoVeiPSSaykEekMFhgMbo9-KXFzuwvkytrR0ALMcsDHqmEbcZPpeSBaYEm2-ltgHV13cSa0bd52xl_xZ-ZwSJBQ.Wn_N65IYNW-YRbrejDh1Ug&amount=0%2E00&amountReadOnly=false&invoiceReadOnly=false"
        />
      </div>
    </div>
  );
}
