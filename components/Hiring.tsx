import React from "react";

// Types
interface ListItem {
  text: string;
}

interface InfoCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  items: ListItem[];
  bgColor: string;
}

interface PensionTier {
  tier: string;
  title: string;
  description: string;
}

const BulletPoint: React.FC = () => (
  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
);

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  iconAlt,
  title,
  items,
  bgColor,
}) => (
  <div className="border border-gray-200 rounded-2xl p-6 bg-white backdrop-blur-sm">
    <div className="flex items-start gap-4 mb-4">
      <div
        className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
      >
        <img src={icon} alt={iconAlt} className="w-4 h-4" />
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <ul className="space-y-3 text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <BulletPoint />
          {item.text}
        </li>
      ))}
    </ul>
  </div>
);

const PensionTierCard: React.FC<PensionTier> = ({
  tier,
  title,
  description,
}) => (
  <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl p-6 shadow-sm">
    <h4 className="text-lg font-bold text-gray-900 mb-2">{tier}</h4>
    <h5 className="text-base font-semibold text-gray-800 mb-2">{title}</h5>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const PensionSystemSection: React.FC = () => {
  const pensionTiers: PensionTier[] = [
    {
      tier: "Tier 1",
      title: "SSNIT Basic Pension",
      description: "Mandatory for all",
    },
    {
      tier: "Tier 2",
      title: "Occupational Pension",
      description: "Choose a provider",
    },
    {
      tier: "Tier 3",
      title: "Voluntary Pension",
      description: "Personal savings",
    },
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/80 to-gray-200/80 backdrop-blur-sm rounded-3xl" />
      <div className="relative p-8">
        <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Three-Tier Pension System
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {pensionTiers.map((tier, index) => (
            <PensionTierCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Component
const Hiring: React.FC = () => {
  const talentSources: ListItem[] = [
    { text: "JobWeb Ghana - Top job portal" },
    { text: "LinkedIn - Professional networking" },
    { text: "University career centers" },
    { text: "Industry associations" },
    { text: "Referral networks" },
  ];

  const employerResponsibilities: ListItem[] = [
    { text: "Register with SSNIT within 30 days" },
    { text: "Register employees with SSNIT and GRA" },
    { text: "Deduct and remit SSNIT contributions (13%)" },
    { text: "Deduct and remit PAYE taxes" },
    { text: "Provide safe working conditions" },
  ];

  return (
    <div className="mt-24">
      {/* Header */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
        Hiring and Employment
      </h2>
      <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
        Ready to build your dream team? Here&apos;s everything you need to know
        about hiring in Ghana!
      </p>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          <InfoCard
            icon="/search-icon.jpg"
            iconAlt="Search icon"
            title="Where to Find Talent"
            items={talentSources}
            bgColor="bg-blue-100"
          />

          <div className="flex justify-center">
            <img
              src="/smiling-man.png"
              alt="Smiling professional man with outstretched arms"
              className="w-full max-w-sm h-auto object-contain"
            />
          </div>

          <InfoCard
            icon="/hand-group.jpg"
            iconAlt="Document icon"
            title="Employer Responsibilities"
            items={employerResponsibilities}
            bgColor="bg-orange-100"
          />
        </div>

        <PensionSystemSection />
      </div>
    </div>
  );
};

export default Hiring;
