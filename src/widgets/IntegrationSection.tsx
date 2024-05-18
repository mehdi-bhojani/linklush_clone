import React from 'react';
import Image from 'next/image';
import MicrosoftClarity from "@/assets/microsoft-clarity.webp"
import facebook from "@/assets/facebook.webp"
import shopify from "@/assets/shopify.webp"
import woocommerce from "@/assets/woocommerce.webp"
import googleSheets from "@/assets/google-sheets.webp"
import webhook from "@/assets/webhook.webp"

const IntegrationSection = () => {
    return (
        <section className="py-16 xs:py-20 md:py-[100px] lg:py-[120px]">
            <div className="container">
                <div className="text-center md:max-w-[600px] mx-auto mb-10 md:mb-12">
                    <h3 className="uppercase text-sm md:text-base font-medium mb-3 md:mb-4 tracking-widest">Integrations</h3>
                    <h2 className="text-[26px] xs:text-[32px] lg:text-4xl mb-2 font-bold leading-8 xs:leading-10 lg:leading-[46px]">Integrated with all the tools you already know and love</h2>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-8 max-w-64 sm:max-w-3xl mx-auto">
                    <div className="border rounded-2xl shadow p-4" title="Microsoft Clarity">
                        <Image src={MicrosoftClarity} alt='microsoft clarity' />
                    </div>
                    <div className="border rounded-2xl shadow p-4" title="Facebook">
                        <Image src={facebook} alt='facebook' />
                    </div>
                    <div className="border rounded-2xl shadow p-4" title="Shopify">
                        <Image src={shopify} alt='shopify' />
                    </div>
                    <div className="border rounded-2xl shadow p-4" title="WooCommerce">
                        <Image src={woocommerce} alt='woocommerce ' />
                    </div>
                    <div className="border rounded-2xl shadow p-4" title="Google Sheets">
                        <Image src={googleSheets} alt='google sheets' />
                    </div>
                    <div className="border rounded-2xl shadow p-4" title="Webhook">
                        <Image src={webhook} alt='webhook' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default IntegrationSection;
