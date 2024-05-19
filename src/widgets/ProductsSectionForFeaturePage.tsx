import React from 'react';
import gradient2 from "@/assets/gradient-2.webp"
import Image from 'next/image';
import statistic from "@/assets/statistics-chart.webp"
import newOrder from "@/assets/new-orders-chart.webp"

const ProductsSectionForFeaturePage = () => {
    return (
        <section>
            <div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
                <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                    <div className="w-full relative  entry-animate animate-fade-in" data-animate="true">
                        {/* Removed incorrect dynamic class */}
                        <div className="-z-10 overflow-hidden absolute w-[148%]">
                            <Image src={gradient2} alt='' />
                        </div>
                        <div className="w-[80%] mb-[18%] mr-auto">
                            <Image src={newOrder} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                        <div className="w-[43%] h-[70%]  absolute top-1/3 right-0 left-auto">
                            <Image src={statistic} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                    </div>
                    <div className="w-full  entry-animate animate-fade-in-down" data-animate="true">
                        <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">Products</h4>
                        <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">Sell Seamlessly: Integrate Your Store</h3>
                        <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Effortless selling starts here. Connect your Shopify or WooCommerce store directly to your link in bio and showcase your products with ease. Manage everything in one place and turn your link into a powerful sales channel.</p>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-plug-connected "><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path><path d="M3 21l2.5 -2.5"></path><path d="M18.5 5.5l2.5 -2.5"></path><path d="M10 11l-2 2"></path><path d="M13 14l-2 2"></path></svg>
                                <h5 className="font-bold capitalize">Shopify</h5>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-plug-connected "><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z"></path><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z"></path><path d="M3 21l2.5 -2.5"></path><path d="M18.5 5.5l2.5 -2.5"></path><path d="M10 11l-2 2"></path><path d="M13 14l-2 2"></path></svg>
                                <h5 className="font-bold capitalize">WooCommerce</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProductsSectionForFeaturePage;
