import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { formatPhoneNumber } from './functions/formatPhoneNumber';
import FormInterface from './Interfaces/FormInterface';
import ContactFormProps from './Interfaces/ContactFormProps';

export default function ContactForm({ onData }: ContactFormProps) {
  const [formData, setFormData] = useState<FormInterface>({
    firstName: '',
    lastName: '',
    role: '',
    userEmail: '',
    userPhone: '',
    contactMethod: '',
    projectType: '',
    projectDetails: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const formattedPhoneNumber = formatPhoneNumber(value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedPhoneNumber,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();

    emailjs
      .send(
        'absi_contact',
        'absi_contact',
        formData as unknown as Record<string, any>,
        'CEk5ieHTMvujA9Lx5'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleSubmit = () => {
    onData(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <form onSubmit={sendEmail}>
        <div className="w-full space-y-8">
          <div className="flex flex-wrap lg:flex-nowrap w-full">
            <div className="flex-wrap w-full lg:w-1/2">
              <span className="font-bold">First Name*</span>
              <input
                className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                placeholder="John"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required></input>
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <span className="font-bold">Last Name*</span>
              <input
                className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                placeholder="Smith"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required></input>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-11/12">
              <span className="font-bold">
                Your title or role for this project
              </span>
              <input
                className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                placeholder="Property Manager"
                name="role"
                value={formData.role}
                onChange={handleChange}></input>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-11/12">
              <span className="font-bold">Email Address*</span>
              <input
                className="outline outline-1 w-full pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                placeholder="email@domain.com"
                name="userEmail"
                value={formData.userEmail}
                onChange={handleChange}
                required></input>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-1/2">
                <span className="font-bold">Phone number*</span>
                <input
                  className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 placeholder-BrandBlueText rounded"
                  placeholder="(XXX) XXX-XXXX"
                  name="userPhone"
                  inputMode="numeric"
                  value={formData.userPhone}
                  onChange={handlePhoneChange}
                  required></input>
              </div>
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                <span className="font-bold">Preferred contact method*</span>
                <select
                  className="outline outline-1 w-full lg:w-10/12 pt-2 pb-1 pl-3 text-BrandBlueText rounded h-9"
                  required
                  name="contactMethod"
                  value={formData.contactMethod}
                  onChange={handleChange}>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Email">Email</option>
                  <option value="Phone Number">Phone Number</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-11/12">
              <span className="font-bold">Project type*</span>
              <select
                className="outline outline-1 w-full pt-2 pb-1 pl-3 text-BrandBlueText rounded h-9"
                required
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Installation">Installation</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
          </div>
          <div>
            <div className="w-full lg:w-11/12">
              <span className="font-bold">Project details or message*</span>
              <textarea
                className="outline outline-1 w-full pt-2 pb-20 pl-3 placeholder-BrandBlueText rounded"
                placeholder="Enter the details of the project, your question, or another message."
                required
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleChange}></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full lg:w-11/12 bg-BrandBlue text-white py-3 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
