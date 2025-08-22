interface InfoCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const InfoCard = ({
  iconSrc,
  iconAlt,
  title,
  description,
  imageSrc,
  imageAlt,
}: InfoCardProps) => (
  <div className="border border-gray-200 rounded-2xl p-4 bg-white max-w-md">
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-12 h-12 bg-white border shadow rounded-lg flex items-center justify-center mb-3">
          <img src={iconSrc} alt={iconAlt} className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <div className="rounded-2xl overflow-hidden">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-96 object-cover"
        />
      </div>
    </div>
  </div>
);

const cards: InfoCardProps[] = [
  {
    iconSrc: "/Investment chart.jpg",
    iconAlt: "Investment chart icon",
    title: "Investment Boom",
    description:
      "The Ghana Investment Platform has injected substantial capital into SMEs. Successful debt restructuring and credit upgrades make Ghana the hottest investment destination in West Africa.",
    imageSrc: "/Business professionals in a meeting.jpg",
    imageAlt: "Business professionals in meeting",
  },
  {
    iconSrc: "/Money Icon.jpg",
    iconAlt: "Money icon",
    title: "Diaspora Capital Surge",
    description:
      "$6.65 billion in remittances (6% of GDP) is flooding the market – that's more than foreign direct investment! Global Ghanaians are investing back home like never before.",
    imageSrc: "/Woman with smart phone in the marketplace.jpg",
    imageAlt: "Woman with smartphone in marketplace",
  },
];

export default function SMEsSection() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
          Why SMEs Are Ghana&apos;s Economic Powerhouse
        </h1>

        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
          You&apos;re entering the market at the PERFECT moment. Ghana&apos;s
          entrepreneurial ecosystem is experiencing unprecedented growth, with
          record-breaking investment flows and government support.
        </p>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-6 items-stretch justify-center">
          {cards.map((card) => (
            <InfoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}
