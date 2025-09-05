"use client";

import { useState } from "react";

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

interface ListItemProps {
  children: React.ReactNode;
}

interface InfoCardProps {
  title: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
}

interface MobileMoneyCardProps {
  logo: string;
  title: string;
  subtitle: string;
}

interface MobileMoneyProvider {
  logo: string;
  title: string;
  subtitle: string;
}

interface Tab {
  id: string;
  label: string;
  component: React.ComponentType;
}

type TabId = "banking" | "funding" | "mobile-money";

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-6 py-4 font-medium rounded-full transition-colors ${
      active ? "bg-primary text-white shadow-sm" : "text-gray-500"
    }`}
  >
    {children}
  </button>
);

const ListItem: React.FC<ListItemProps> = ({ children }) => (
  <li className="flex items-start gap-3">
    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
    {children}
  </li>
);

const MobileMoneyCard: React.FC<MobileMoneyCardProps> = ({
  logo,
  title,
  subtitle,
}) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white text-center">
    <div className="w-16 h-16 bg-gray-100 shadow rounded-2xl flex items-center justify-center mx-auto mb-4">
      <img src={logo} alt={title} className="w-12 h-10" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

interface InfoCardProps {
  title: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
}

interface ListItemProps {
  children: React.ReactNode;
}

const BankingTab: React.FC = () => {
  const bankAccountRequirements: string[] = [
    "Certificate of Incorporation",
    "Company regulations",
    "Board resolution",
    "Ghana Cards of directors",
    "Business address proof",
    "Tax Identification Number (TIN)",
  ];

  const smeFriendlyBanks: string[] = [
    "Absa Bank Ghana - SME Focus",
    "Stanbic Bank - Business Banking",
    "Cal Bank - SME Solutions",
    "Access Bank - Business Support",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center lg:items-stretch justify-center md:max-w-7xl max-w-lg mx-auto gap-6 lg:gap-3">
      <InfoCard
        title="Business Bank Account Requirements"
        items={bankAccountRequirements}
        imageSrc="/person-signing-business-documents-at-desk.jpg"
        imageAlt="Person signing business documents"
      />
      <InfoCard
        title="SME-Friendly Banks"
        items={smeFriendlyBanks}
        imageSrc="/business-handshake-in-office-setting.jpg"
        imageAlt="Business handshake"
      />
    </div>
  );
};

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  items,
  imageSrc,
  imageAlt,
}) => (
  <div className="flex-1 border border-gray-200 rounded-2xl bg-white overflow-hidden">
    <div className="lg:hidden flex flex-col">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full aspect-video object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
        <ul className="space-y-2 text-gray-600">
          {items.map((item: string, index: number) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </div>
    </div>

    <div className="hidden lg:flex h-full p-1 gap-6">
      <div className="flex-1 flex flex-col ml-4 mt-3">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <ul className="space-y-1 text-gray-600">
          {items.map((item: string, index: number) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ul>
      </div>
      <div className="w-60 xl:w-72 flex-shrink-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-[252px] object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
);

const FundingTab: React.FC = () => {
  const governmentPrograms: string[] = [
    "National Entrepreneurship and Innovation Programme (NEIP)",
    "MASLOC (Microfinance and Small Loans Centre)",
    "Ghana Enterprises Agency (GEA)",
  ];

  const privateInvestment: string[] = [
    "MEST Africa Challenge",
    "Angel Investor Networks",
    "Commercial Bank SME Lending",
    "Microfinance Institution Services",
  ];

  return (
    <div className="flex flex-col md:flex-row items-center lg:items-stretch justify-center md:max-w-7xl max-w-lg mx-auto gap-6 lg:gap-3">
      <InfoCard
        title="Government Programs"
        items={governmentPrograms}
        imageSrc="/woman-presenting-business-charts-in-office.jpg"
        imageAlt="Woman presenting business charts"
      />
      <InfoCard
        title="Private Investment"
        items={privateInvestment}
        imageSrc="/two-professional-women-in-business-attire.jpg"
        imageAlt="Two professional women in business attire"
      />
    </div>
  );
};

const MobileMoneyTab: React.FC = () => {
  const providers: MobileMoneyProvider[] = [
    {
      logo: "/mtn-logo.jpg",
      title: "MTN MoMo",
      subtitle: "Market Leader",
    },
    {
      logo: "/at-money.png",
      title: "AirtelTigo",
      subtitle: "Growing Network",
    },
    {
      logo: "/telecel-cash.webp",
      title: "Telecel Cash",
      subtitle: "Business Focus",
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        {providers.map((provider: MobileMoneyProvider, index: number) => (
          <MobileMoneyCard key={index} {...provider} />
        ))}
      </div>
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Mobile Money Integration
        </h3>
        <p className="text-gray-600 text-lg">
          Ghana Is One Of Africa&apos;s Most Mobile-Money-Active Markets!
          Essential Platforms Include:
        </p>
      </div>
    </div>
  );
};

const BankingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("funding");

  const tabs: Tab[] = [
    { id: "funding", label: "Funding", component: FundingTab },
  ];

  const ActiveComponent = tabs.find(
    (tab: Tab) => tab.id === activeTab
  )?.component;

  return (
    <div className="mt-24">
      {/* <div className="flex justify-center mb-12">
        <div className="flex bg-gray-100 rounded-full p-1">
          {tabs.map((tab: Tab) => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>
      </div> */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
        Funding
      </h2>
      <div className="max-w-7xl mx-auto lg:p-0 p-4" id="funding">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default BankingSection;
