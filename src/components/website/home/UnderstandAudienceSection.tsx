import React from 'react';
import Image from 'next/image';
import gradient3 from "@/assets/gradient-3.webp"
import countryChart from "@/assets/visits-by-country-chart.webp"
import visitDevice from "@/assets/visits-by-device-chart.webp"


function UnderstandAudienceSection() {
    return (
        <section className=''>
            <div className="container overflow-hidden pt-32">
                <div className="grid md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                    <div
                        data-reverse="true"
                        className="w-full relative justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1 lg:max-w-[522px]"
                    >
                        <div className="-z-10 overflow-hidden absolute w-[180%]">
                            <Image src={gradient3} alt='gradient' />
                        </div>
                        <div className="w-[67%] mt-[27%] mr-auto">
                            <Image src={countryChart} alt='country chart' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                        <div className="w-[71%] top-0 bottom-auto left-auto right-0 absolute -z-10">
                            <Image src={visitDevice} alt='visit device chart' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                    </div>
                    <div
                        data-reverse="true"
                        className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2 lg:max-w-[560px]"
                    >
                        <h3 className="text-[26px] leading-8 xs:text-[32px] xs:leading-10 lg:text-[36px] lg:leading-[46px] font-bold mb-3 lg:mb-4 capitalize">
                            Understand Your Audience Like Never Before
                        </h3>
                        <p className="text-gray-700 mb-6 lg:mb-8 leading-7">
                            Go beyond basic metrics with in-depth analytics for your bio link page. Track profile views, subscriptions, devices, and clicks. Gain valuable insights into your audience's location, demographics, and referral sources.
                        </p>
                        <ul className="flex flex-col gap-4 lg:gap-8 *:flex *:gap-3 md:*:gap-4 *:font-bold *:text-sm md:*:text-base">
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-circle-check"
                                >
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M9 12l2 2l4 -4"></path>
                                </svg>
                                Microsoft clarity and Pixel Integration
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-circle-check"
                                >
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M9 12l2 2l4 -4"></path>
                                </svg>
                                Desktop and mobile tracking built-in
                            </li>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="tabler-icon tabler-icon-circle-check"
                                >
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M9 12l2 2l4 -4"></path>
                                </svg>
                                Hassle-free profile monitoring
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default UnderstandAudienceSection;
