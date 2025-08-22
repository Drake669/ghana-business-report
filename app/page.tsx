import Navbar from "@/components/Navbar";
import IntroSection from "@/components/Introsection";
import SMEsSection from "@/components/SMEsSection";
import BusinessRegistrationGuide from "@/components/BusinessRegistrationGuide";
import TaxComplianceSection from "@/components/TaxComplianceSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <IntroSection />
      <SMEsSection />
      <BusinessRegistrationGuide />
      <TaxComplianceSection />
    </div>
  );
}
