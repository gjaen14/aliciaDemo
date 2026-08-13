import Hero from "../components/Hero";
import GapSection from "../components/GapSection";
import SolutionsSection from "../components/SolutionsSection";
import EcosystemDiagnostic from "../components/EcosystemDiagnostic";
import FounderLetter from "../components/FounderLetter";
import TrustCenter from "../components/TrustCenter";
import GrowthEcosystem from "../components/GrowthEcosystem";
import ThreeHero from "../components/ThreeHero";

export default function Home() {
  return (
    <>
      <div className="relative">
        <ThreeHero />
        <Hero />
      </div>
      <GapSection />
      <SolutionsSection />
      <EcosystemDiagnostic />
      <FounderLetter />
      <GrowthEcosystem />
      <TrustCenter />
    </>
  );
}
