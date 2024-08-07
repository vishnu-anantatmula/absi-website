import { Link } from 'react-router-dom';

export function LinkSection() {
  return (
    <ul className="hidden basis-1/2 md:flex lg:basis-1/3">
      <div className="basis-1/2"></div>
      <div className="basis-1/2 flex flex-col justify-center gap-4">
        <li className="font-semibold">Quick Links</li>
        <li>
          <Link
            to="https://customerabsi.blog/"
            target="_blank"
            className="hover:text-blue-950 hover:font-bold">
            CUSTOMER PORTAL
          </Link>
        </li>
        <li>
          <Link
            to="https://paylink.paytrace.com/?m=eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMTI4R0NNIn0.fO0ihhOXoZ_z16U6PRCL147vyFshztfc._dDxvwAAzFW12wu_.0Qkm708rS3L2-zCIFtHTvjf7DVZzyw9Sq09UKpHsFgDksBmYAJ-0JfKsdqrF6PZXjby7smMqo2x5YClbPTSR8aJMK11smAIcl8kg9pdvOafZhg7Yf5-fh4VPBcuUU8d4hFeo4UkirZwW3p9PVrnl60jjqVBqWSQqxbL1Xd3heMmBsHQbnB7f6ixcI54kd6eKe8DGptprlpwNSIsYoVeiPSSaykEekMFhgMbo9-KXFzuwvkytrR0ALMcsDHqmEbcZPpeSBaYEm2-ltgHV13cSa0bd52xl_xZ-ZwSJBQ.Wn_N65IYNW-YRbrejDh1Ug&amount=0%2E00&amountReadOnly=false&invoiceReadOnly=false"
            target="_blank"
            className="hover:text-blue-950 hover:font-bold">
            PAYMENT PORTAL
          </Link>
        </li>
        <li>
          <Link to="/portal" className="hover:text-blue-950 hover:font-bold">
            CONTACT US
          </Link>
        </li>
      </div>
    </ul>
  );
}
