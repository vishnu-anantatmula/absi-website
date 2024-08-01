import './contactPage.css';
import ContactForm from './ContactForm';
import { useState } from 'react';
import { Menu } from '../../Pages/Menu';

type Props = {
  isOpen: boolean;
  setIsOpen: (arg1: boolean) => void;
};

export default function ContactPage({ isOpen, setIsOpen }: Props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormData = (onData: boolean) => {
    setIsFormSubmitted(onData);
    console.log(isFormSubmitted);
  };

  if (isOpen) return <Menu isOpen={isOpen} setIsOpen={setIsOpen} />;

  return (
    <>
      <div className="w-full lg:hidden pb-5">
        <img className="w-full" src="./images/form-image-mobile.png" />
      </div>
      <div className="contact-section mt-12 px-6">
        <div className="flex">
          <div className="w-full lg:w-6/12">
            {isFormSubmitted ? (
              <div className="pt-5">
                <h1 className="font-hind text-4xl font-medium">
                  Message received
                </h1>
                <span className="block pt-10">
                  A member of our team will reach out soon.
                </span>
              </div>
            ) : (
              <>
                <h1 className="font-hind inline-block contact-header font-medium align-text-top">
                  How can we help?
                </h1>
                <div>
                  <span className="block font-maven py-5 lg:pr-10">
                    Once we receive the details of your project, a
                    representative will reach out to schedule a meeting. We look
                    forward to partnering with you.
                  </span>
                  <span className="block pb-5">*Required Fields</span>
                </div>
                <ContactForm onData={handleFormData} />
              </>
            )}
          </div>
          <div className="hidden lg:w-6/12 lg:flex flex-wrap justify-end">
            <div className="w-10/12">
              <img src="./images/form-image.png" className="w-full" />
            </div>
            <div className="flex flex-wrap justify-center px-10 w-10/12">
              <h1 className="text-3xl pt-5 text-center">
                Proud to be employee-owned.
              </h1>
              <span className="text-lg px-10 py-5 text-center">
                Serving the Washington DC, Maryland, and Virginia area since
                1997.
              </span>
              <div className="flex flex-wrap text-center">
                <span className="w-full font-bold">
                  Advanced Building Services, Inc.
                </span>
                <span className="w-full">23475 Rock Haven Way #135</span>
                <span className="w-full">Sterling, VA 20166</span>
                <span className="w-full">(703)661-4280</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
