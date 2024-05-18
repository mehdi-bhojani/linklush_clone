import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import HeroSection from "@/widgets/HeroSection";
import FeaturesSection from "@/widgets/FeaturesSection";
import GrowAudienceSection from "@/widgets/GrowAudienceSection";
import UnderstandAudienceSection from "@/widgets/UnderstandAudienceSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <GrowAudienceSection />
      <UnderstandAudienceSection />
      {/*      <Footer /> */}

    </main>
  );
}
