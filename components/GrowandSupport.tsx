import React from "react";

interface ImageData {
  src: string;
  alt: string;
}

interface ResourceData {
  title: string;
  items: string[];
  image: ImageData;
}

interface ResourceCardProps {
  title: string;
  items: string[];
  image: ImageData;
}

const RESOURCES_DATA: Record<string, ResourceData> = {
  accelerators: {
    title: "Accelerators & Incubators",
    items: [
      "MEST Africa - Tech Focus",
      "Impact Hub Accra",
      "iSpace Foundation",
      "Ghana Climate Innovation Centre",
    ],
    image: {
      src: "/tech-startup-workspace-with-people-collaborating.jpg",
      alt: "Tech startup workspace with people collaborating",
    },
  },
  networks: {
    title: "Professional Networks",
    items: [
      "Ghana Angel Investor Network",
      "Ghana Startup Forum",
      "GUBA (Ghana UK Based Achievers)",
      "Africa Business Centre",
    ],
    image: {
      src: "/professional-networking-event-with-business-people.jpg",
      alt: "Professional networking event with business people",
    },
  },
  coworking: {
    title: "Coworking Spaces",
    items: ["Hub Accra", "iSpace", "Osu Makers Hub", "Various Kumasi options"],
    image: {
      src: "/modern-coworking-space.jpg",
      alt: "Modern coworking space with people working",
    },
  },
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, items, image }) => (
  <div className="space-y-6 border border-gray-200 rounded-2xl shadow-sm p-1 bg-white">
    <div className="m-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      <ul className="text-gray-600 mb-8">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="rounded-2xl overflow-hidden">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-96 object-cover"
      />
    </div>
  </div>
);

const GrowthAndSupport: React.FC = () => {
  return (
    <div className="mt-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
        Growth & Support Resources
      </h2>

      <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
        Ghana&apos;s startup ecosystem is thriving! Here are the key resources
        to help you grow.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {Object.values(RESOURCES_DATA).map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            items={resource.items}
            image={resource.image}
          />
        ))}
      </div>
    </div>
  );
};

export default GrowthAndSupport;
