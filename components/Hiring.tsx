import React from "react";

interface ListItem {
  text: string;
}

interface InfoCardProps {
  icon: string;
  iconAlt: string;
  title: string;
  items: ListItem[];
  bgColor: string;
  rotation: string;
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
  rotation,
}) => (
  <div
    className={`w-full border border-gray-200 rounded-2xl p-6 bg-white shadow-lg transform rotate-[${rotation}] hover:rotate-0 transition-transform`}
  >
    <div className="flex items-start gap-4 mb-4">
      <div
        className={`w-8 h-8 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
      >
        <img src={icon} alt={iconAlt} className="w-4 h-4" />
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
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
  <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-sm text-center">
    <h4 className="text-base font-bold text-gray-900 mb-1">{tier}</h4>
    <h5 className="text-sm font-semibold text-gray-800 mb-1">{title}</h5>
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
    <div className="relative mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100/60 to-gray-200/60 rounded-3xl blur-xl" />
      <div className="relative px-6 py-10">
        <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
          Three-Tier Pension System
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pensionTiers.map((tier, index) => (
            <PensionTierCard key={index} {...tier} />
          ))}
        </div>
      </div>
    </div>
  );
};

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
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-6 leading-tight">
        Hiring and Employment
      </h2>
      <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
        Ready to build your dream team? Here&apos;s everything you need to know
        about hiring in Ghana!
      </p>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-center mb-16">
          <div className="flex justify-end">
            <InfoCard
              icon="/search-icon.jpg"
              iconAlt="Search icon"
              title="Where to Find Talent"
              items={talentSources}
              bgColor="bg-blue-100"
              rotation="2deg"
            />
          </div>

          <div className="flex justify-center">
            <img
              src="/smiling-man.png"
              alt="Smiling professional man with outstretched arms"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>

          <div className="flex justify-start">
            <InfoCard
              icon="/hand-group.jpg"
              iconAlt="Group icon"
              title="Employer Responsibilities"
              items={employerResponsibilities}
              bgColor="bg-orange-100"
              rotation="-2deg"
            />
          </div>
        </div>

        <PensionSystemSection />
      </div>
    </div>
  );
};

export default Hiring;
