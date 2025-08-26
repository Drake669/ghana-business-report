import React from "react";

interface TimelineStep {
  id: string;
  timeframe: string;
  description: string;
}

interface JourneyStartProps {
  title?: string;
  subtitle?: string;
  timelineSteps?: TimelineStep[];
}

const defaultTimelineSteps: TimelineStep[] = [
  {
    id: "this-week",
    timeframe: "This Week",
    description:
      "Finalize Your Business Idea And Choose Structure. Reserve Company Name.",
  },
  {
    id: "next-week",
    timeframe: "Next Week",
    description: "Gather Documents And Complete Registration With ORC And GRA.",
  },
  {
    id: "30-days",
    timeframe: "30 Days",
    description:
      "Open Business Bank Account. Register With SSNIT, Set Up Accounting.",
  },
  {
    id: "60-days",
    timeframe: "60 Days",
    description: "Launch Business, Start Marketing, Begin Serving Customers!",
  },
];

const TimelineCard: React.FC<{ step: TimelineStep }> = ({ step }) => (
  <div className="bg-gray-100 rounded-2xl p-8 transition-transform hover:scale-105 hover:shadow-lg">
    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.timeframe}</h3>
    <p className="text-gray-600 leading-relaxed">{step.description}</p>
  </div>
);

const JourneyStart: React.FC<JourneyStartProps> = ({
  title = "Your Entrepreneurial Journey Starts Here!",
  subtitle = "Congratulations! You've absorbed everything you need to know about starting a business in Ghana. The opportunities are incredible, the support systems are in place, and the time is right.",
  timelineSteps = defaultTimelineSteps,
}) => {
  return (
    <section className="mt-24" aria-labelledby="journey-heading">
      <h2
        id="journey-heading"
        className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight"
      >
        {title}
      </h2>

      <p className="text-lg text-gray-600 text-center mb-16 max-w-4xl mx-auto leading-relaxed">
        {subtitle}
      </p>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {timelineSteps.map((step) => (
            <TimelineCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyStart;
