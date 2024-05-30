import AnalyticsSection from '@/widgets/features/AnalyticsSection';
import DesignSection from '@/widgets/features/DesignSection';
import DrakModeSection from '@/widgets/features/DrakModeSection';
import FearuresSection from '@/widgets/features/FearuresSection';
import ProductsSection from '@/widgets/features/ProductsSection';
import ProtectAndAnimate from '@/widgets/features/ProtectAndAnimate';
import SeoSection from '@/widgets/features/SeoSection';
import SubscribeSection from '@/widgets/features/SubscribeSection';
import React from 'react';

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
