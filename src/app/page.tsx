import HeroSection from "@/widgets/home/HeroSection";
import FeaturesSection from "@/widgets/home/FeaturesSection";
import GrowAudienceSection from "@/widgets/home/GrowAudienceSection";
import UnderstandAudienceSection from "@/widgets/home/UnderstandAudienceSection";
import IntegrationSection from "@/widgets/home/IntegrationSection";
import FaqsSection from "@/widgets/home/FaqsSection";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <GrowAudienceSection />
      <UnderstandAudienceSection />
      <IntegrationSection />
      <FaqsSection />
    </main>
  );
}
