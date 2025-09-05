import React from "react";

const TaxComplianceSection = () => {
  return (
    <div className="mt-24 max-w-7xl mx-auto px-4" id="tax-and-compliance">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-8 max-w-4xl mx-auto leading-tight">
        Tax and Compliance Requirements
      </h2>

      <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
        Staying compliant from day one will save you headaches later.
      </p>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-white to-primary/20 rounded-3xl"></div>

        <div className="relative border border-gray-100 rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className={cardClasses}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={iconContainerClasses}>
                    <img
                      src="/NewsDocument.jpg"
                      alt="News document icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Great News: Tax Reforms for 2025
                  </h3>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className={listItemClasses}>
                    <div className={bulletClasses}></div>
                    Abolition of the Electronic Levy (E-Levy)
                  </li>
                  <li className={listItemClasses}>
                    <div className={bulletClasses}></div>
                    Reduction of VAT from 22% to 15%
                  </li>
                  <li className={listItemClasses}>
                    <div className={bulletClasses}></div>
                    Simplified tax filing procedures
                  </li>
                </ul>
              </div>
            </div>

            <div className={cardClasses}>
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={iconContainerClasses}>
                    <img
                      src="/Calendar.jpg"
                      alt="Calendar icon"
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Tax Calendar - Mark Your Dates
                  </h3>
                </div>

                <ul className="space-y-3 text-gray-600">
                  {listItem(" VAT returns, PAYE remittance", "Monthly:")}
                  {listItem(
                    " Provisional corporate tax installments",
                    "Quarterly:"
                  )}
                  {listItem(
                    " Corporate Income Tax return (April 30)",
                    "Annual:"
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              Key Tax Rates You Need to Know
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {taxRateCard(
                "/Briefcase.jpg",
                "Briefcase icon",
                "25%",
                "Corporate Income Tax"
              )}
              {taxRateCard(
                "/NewsDocument.jpg",
                "News Document icon",
                "15%",
                "VAT (additional levies which adds up to 21.9%)"
              )}
              {taxRateCard(
                "/Shield.jpg",
                "Shield icon",
                "13.5%",
                "SSNIT Contributions"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxComplianceSection;

const cardClasses = "border border-gray-200 rounded-2xl p-6 bg-white shadow-sm";
const iconContainerClasses =
  "w-12 h-12 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center flex-shrink-0";
const listItemClasses = "flex items-start gap-3";
const bulletClasses = "w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0";

const taxRateCard = (
  iconSrc: string,
  iconAlt: string,
  rate: string,
  description: string
) => (
  <div className="text-center">
    <div className="w-20 h-20 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center mx-auto mb-6">
      <img src={iconSrc} alt={iconAlt} className="w-12 h-12" />
    </div>
    <div className="text-4xl font-bold text-gray-900 mb-2">{rate}</div>
    <div className="text-gray-600">{description}</div>
  </div>
);

const listItem = (text: string, boldText = "") => (
  <li className={listItemClasses}>
    <div className={bulletClasses}></div>
    <div>
      {boldText && (
        <span className="font-medium text-gray-900">{boldText}</span>
      )}
      {text}
    </div>
  </li>
);
