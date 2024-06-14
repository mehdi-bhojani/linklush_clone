import AnalyticsSection from "@/components/website/features/AnalyticsSection";
import DesignSection from "@/components/website/features/DesignSection";
import DrakModeSection from "@/components/website/features/DrakModeSection";
import FearuresSection from "@/components/website/features/FearuresSection";
import ProductsSection from "@/components/website/features/ProductsSection";
import ProtectAndAnimate from "@/components/website/features/ProtectAndAnimate";
import SeoSection from "@/components/website/features/SeoSection";
import SubscribeSection from "@/components/website/features/SubscribeSection";
import React from "react";

function page() {
  return (
    <section>
      <FearuresSection />
      <ProductsSection />
      <SubscribeSection />
      <AnalyticsSection />
      <DesignSection />
      <ProtectAndAnimate />
      <DrakModeSection />
      <SeoSection />
    </section>
  );
}

export default page;
