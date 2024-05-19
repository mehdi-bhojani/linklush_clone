import React from 'react';

import visitByCountry from "@/assets/visits-by-country-chart.webp"
import visitByDevice from "@/assets/visits-by-device-chart.webp"

import gradient2 from "@/assets/gradient-2.webp"
import Image from 'next/image';
import statistic from "@/assets/statistics-chart.webp"
import newOrder from "@/assets/new-orders-chart.webp"


function AnalyticsSection() {





    return (
        <div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
            <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                <div className="w-full relative  entry-animate animate-fade-in" data-animate="true">
                    {/* image */}
                    {/* Removed incorrect dynamic class */}
                    <div className="-z-10 overflow-hidden absolute w-[148%]">
                        <Image src={gradient2} alt='' />
                    </div>
                    <div className="w-[80%] mb-[18%] mr-auto">
                        <Image src={visitByDevice} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                    </div>
                    <div className="w-[43%] h-[70%]  absolute top-1/2 right-auto -left-16">
                        <Image src={visitByCountry} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                    </div>
                </div>

                {/* content */}
                <div className="w-full  entry-animate animate-fade-in-down" data-animate="true">
                    <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">Analytics</h4>
                    <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">Understand Your Audience Like Never Before</h3>
                    <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Go beyond basic metrics with in-depth analytics for your bio link page. Gain valuable insights into your audience's location, demographics, and referral sources. Integrate Microsoft Clarity and Facebook Pixel for even deeper insights.</p>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-chart-area ">
                                <path d="M4 19l16 0"></path>
                                <path d="M4 15l4 -6l4 2l4 -5l4 4l0 5l-16 0"></path>
                            </svg><h5 className="font-bold capitalize">Microsoft Clarity</h5></div><div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-facebook ">
                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3">
                                </path>
                            </svg>
                            <h5 className="font-bold capitalize">Facebook Pixel</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalyticsSection;
