import AnalyticsForFeaturePage from '@/widgets/AnalyticsForFeaturePage';
import DesignSectionForFeaturePage from '@/widgets/DesignSectionForFeaturePage';
import FearuresSectionForFeaturePage from '@/widgets/FearuresSectionForFeaturePage';
import ProductsSectionForFeaturePage from '@/widgets/ProductsSectionForFeaturePage';
import ProtectAndAnimate from '@/widgets/ProtectAndAnimate';
import SectionAndDrakModeForFeaturePage from '@/widgets/SectionAndDrakModeForFeaturePage';
import SeoSectionForFeaturePage from '@/widgets/SeoSectionForFeaturePage';
import SubscribeSectionForFeaturePage from '@/widgets/SubscribeSectionForFeaturePage';
import React from 'react';

function page() {
    return (
        <section>
            {/*  <FearuresSectionForFeaturePage /> */}
            <ProductsSectionForFeaturePage />
            {/* <SubscribeSectionForFeaturePage />
            <AnalyticsForFeaturePage />
            <DesignSectionForFeaturePage />
            <ProtectAndAnimate />
            <SectionAndDrakModeForFeaturePage />
            <SeoSectionForFeaturePage /> */}
        </section>
    );
}

export default page;
