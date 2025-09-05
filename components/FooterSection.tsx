import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface ServiceItem {
  text: string;
}

interface ContactItem {
  icon: string;
  alt: string;
  text: string;
}

const SERVICES: ServiceItem[] = [
  { text: "Automated invoicing and payments" },
  { text: "Tax-compliant accounting" },
  { text: "Payroll management" },
  { text: "Business credit facilities" },
  { text: "Virtual banking accounts" },
  { text: "Expert financial guidance" },
];

const CONTACT_INFO: ContactItem[] = [
  { icon: "/website-icon.jpg", alt: "Website icon", text: "www.built.africa" },
  { icon: "/email-icon.jpg", alt: "Email icon", text: "hello@built.africa" },
  {
    icon: "/phone-icon.jpg",
    alt: "Phone icon",
    text: "Sign up for free at built.africa",
  },
];

const ServiceList: React.FC = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      What Built Offers:
    </h3>
    <ul className="space-y-4 text-gray-700">
      {SERVICES.map((service, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
          {service.text}
        </li>
      ))}
    </ul>
    <InspirationMessage />
  </div>
);

const HeroImage: React.FC = () => (
  <div className="flex justify-center">
    <img
      src="/smiling-woman-in-traditional-african-dress.png"
      alt="Smiling woman in traditional African dress"
      className="w-full max-w-sm h-auto object-cover"
    />
  </div>
);

const ContactSection: React.FC = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
    <div className="space-y-4 text-gray-700 mb-8">
      {CONTACT_INFO.map((contact, index) => (
        <div key={index} className="flex items-center gap-3">
          <img src={contact.icon} alt={contact.alt} className="w-5 h-5" />
          {contact.text}
        </div>
      ))}
    </div>
    <div className="flex flex-col">
      <Link href={"https://built.africa"} target="_blank">
        <Button className="text-white py-6 rounded-full flex items-center gap-2">
          Start your Journey Now
        </Button>
      </Link>
      <Link
        href={"https://built.africa/contact"}
        target="_blank"
        className="mt-4"
      >
        <Button
          variant="outline"
          className="py-6 rounded-full flex items-center gap-2 border-primary text-primary"
        >
          Contact Built Official
        </Button>
      </Link>
    </div>
  </div>
);

const InspirationMessage: React.FC = () => (
  <div className="flex items-center justify-start max-w-md">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white shadow-2xl rounded-full flex items-center justify-center flex-shrink-0">
        <img src="/rocket-icon.jpg" alt="Rocket icon" className="w-5 h-5" />
      </div>
      <p className="text-gray-800 font-medium leading-relaxed">
        Ghana&apos;s entrepreneurial renaissance is here. Your success story
        starts today!
      </p>
    </div>
  </div>
);

const FooterSection: React.FC = () => {
  return (
    <div className="relative mt-24 mb-10 max-w-7xl mx-auto bg-gradient-to-t rounded-3xl from-blue-50 via-primary-10 to-primary-10 pt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
          Ready to Start Your Journey with Built Financial Technologies?
        </h2>

        <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
          Built is here to support you every step of the way. Our all-in-one
          platform makes managing your business finances simple, compliant, and
          efficient.
        </p>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          <ServiceList />
          <HeroImage />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
