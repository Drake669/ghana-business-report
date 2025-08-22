"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

const BusinessRegistrationGuide = () => {
  const [activeTab, setActiveTab] = useState("structure");

  const TabButton = ({
    tabKey,
    children,
  }: {
    tabKey: string;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveTab(tabKey)}
      className={`px-6 py-4 font-medium rounded-full transition-colors ${
        activeTab === tabKey
          ? "bg-primary text-white shadow-sm"
          : "text-gray-500"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="mt-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
        Step-by-Step Business Registration Guide
      </h2>

      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
        The process is more streamlined than ever, and we&apos;ll walk you
        through every step.
      </p>

      <div className="flex justify-center mb-12">
        <div className="flex bg-white border border-primary/20 rounded-full p-1">
          <TabButton tabKey="structure">Choose Structure</TabButton>
          <TabButton tabKey="process">Registration Process</TabButton>
        </div>
      </div>

      {activeTab === "structure" && (
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <BusinessStructure
            iconSrc="/Investment chart.jpg"
            iconAlt="Investment Chart icon"
            title="Sole Proprietorship"
            description="Perfect for individual entrepreneurs. Simple setup, personal liability."
            cost="GH₵100 - GH₵500"
          />
          <BusinessStructure
            iconSrc="/Handshake.jpg"
            iconAlt="Handshake icon"
            title="Partnership"
            description="For 2+ partners sharing profits and responsibilities."
            cost="GH₵250"
          />
          <BusinessStructure
            iconSrc="/Building.jpg"
            iconAlt="Building icon"
            title="Limited Company"
            description="Separate legal entity, limited liability protection."
            cost="GH₵450 + 1% stamp duty"
          />
        </div>
      )}

      {activeTab === "process" && (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            {processSteps.slice(0, 3).map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            {processSteps.slice(3, 5).map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="border border-gray-200 rounded-2xl p-2 bg-white">
          <div className="border border-gray-100 rounded-xl bg-gray-50 overflow-hidden">
            <div className="bg-gradient-to-r from-secondary/20 to-orange-50 px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <IconWrap src="/Lightbulb.jpg" alt="Lightbulb icon" />
                <h3 className="text-xl font-bold text-primary">
                  Pro Tip from Built Financial Technologies
                </h3>
              </div>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Once registered, streamline your business finances with
                Built&apos;s automated solutions. From invoicing to tax
                compliance, we&apos;ve got your back!
              </p>
              <div className="flex justify-end border-t border-gray-100 pt-4">
                <Button className="text-white px-8 py-6 rounded-full">
                  Learn More...
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistrationGuide;

export const IconWrap = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-12 h-12 bg-white border shadow rounded-lg flex items-center justify-center flex-shrink-0">
    <img src={src} alt={alt} className="w-6 h-6" />
  </div>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
    {children}
  </li>
);

const ProcessStep = ({
  stepNumber,
  iconSrc,
  iconAlt,
  title,
  description,
  items,
}: {
  stepNumber: string;
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  items: string[];
}) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
    <div className="flex items-center gap-3 mb-4">
      <span className="text-2xl font-bold text-gray-900">{stepNumber}</span>
      <IconWrap src={iconSrc} alt={iconAlt} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
    <ul className="space-y-2 text-sm text-gray-600">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </ul>
  </div>
);

const BusinessStructure = ({
  iconSrc,
  iconAlt,
  title,
  description,
  cost,
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  cost: string;
}) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white">
    <div className="flex items-center gap-4 mb-4">
      <IconWrap src={iconSrc} alt={iconAlt} />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
      <span className="text-gray-700 font-medium">{cost}</span>
    </div>
  </div>
);

const processSteps = [
  {
    stepNumber: "1",
    iconSrc: "/Document.jpg",
    iconAlt: "Document icon",
    title: "Reserve Your Business Name",
    description:
      "Visit the ORC website or office to search for name availability.",
    items: [
      "Choose 3 potential names (backup options)",
      "Reservation valid for 3 months",
      "Search available at ORC website",
    ],
  },
  {
    stepNumber: "2",
    iconSrc: "/folder.jpg",
    iconAlt: "Folder icon",
    title: "Gather Required Documents",
    description: "Collect all necessary paperwork before submission.",
    items: [
      "Ghana Card (National ID) for all founders",
      "Tax Identification Number (TIN)",
      "Business address proof",
      "Company regulations (for companies)",
    ],
  },
  {
    stepNumber: "3",
    iconSrc: "/Form.jpg",
    iconAlt: "Form icon",
    title: "Complete Registration Forms",
    description: "Download and fill appropriate forms from ORC website.",
    items: [
      "Form 3 & 4 for companies",
      "Form A for sole proprietorships",
      "Ensure all details are accurate",
    ],
  },
  {
    stepNumber: "4",
    iconSrc: "/Computer.jpg",
    iconAlt: "Computer icon",
    title: "Submit and Pay",
    description: "Submit online via RGD.Gov portal or visit ORC office.",
    items: [
      "Online submission available",
      "Pay registration fees and stamp duty",
      "VIP/Express options available",
    ],
  },
  {
    stepNumber: "5",
    iconSrc: "/Certificate.jpg",
    iconAlt: "Certificate icon",
    title: "Receive Your Certificates",
    description: "Get your Certificate of Incorporation and other documents.",
    items: [
      "Keep certificates safe",
      "You'll need them for banking and permits",
      "Digital copies recommended",
    ],
  },
];
