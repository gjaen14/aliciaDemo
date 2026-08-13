import Hero from "../components/Hero";
import GapSection from "../components/GapSection";
import SolutionsTeaser from "../components/SolutionsTeaser";
import TrustCenter from "../components/TrustCenter";
import ThreeHero from "../components/ThreeHero";

export default function Home() {
  return (
    <>
      <div className="relative">
        <ThreeHero />
        <Hero />
      </div>
      <GapSection />
      <SolutionsTeaser />
      <TrustCenter />
    </>
  );
}
