import HeroSection from "@/components/website/home/HeroSection";
import FeaturesSection from "@/components/website/home/FeaturesSection";
import GrowAudienceSection from "@/components/website/home/GrowAudienceSection";
import UnderstandAudienceSection from "@/components/website/home/UnderstandAudienceSection";
import IntegrationSection from "@/components/website/home/IntegrationSection";
import FaqsSection from "@/components/website/home/FaqsSection";


export default function Home() {
  return (
    <>




       <HeroSection />
       <FeaturesSection />
           {<GrowAudienceSection />} 
             {/* problem */}
      <UnderstandAudienceSection />
      <IntegrationSection />
      <FaqsSection /> 
    </>
  );
}
