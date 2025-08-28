import Navbar from "@/components/Navbar";
import IntroSection from "@/components/Introsection";
import SMEsSection from "@/components/SMEsSection";
import BusinessRegistrationGuide from "@/components/BusinessRegistrationGuide";
import TaxComplianceSection from "@/components/TaxComplianceSection";
import BankingSection from "@/components/BankingSection";
import Hiring from "@/components/Hiring";
import GrowandSupport from "@/components/GrowandSupport";
import JourneyStart from "@/components/JourneyStart";
import FooterSection from "@/components/FooterSection";
import ReportDownloadSection from "@/components/ReportDownloadSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <IntroSection />
      <SMEsSection />
      <BusinessRegistrationGuide />
      <TaxComplianceSection />
      <BankingSection />
      <Hiring />
      <GrowandSupport />
      <JourneyStart />
      <ReportDownloadSection />
      <FooterSection />
    </div>
  );
}
