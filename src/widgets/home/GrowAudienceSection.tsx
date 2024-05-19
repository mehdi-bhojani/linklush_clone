import React from 'react';
import Image from 'next/image';
import profileView from "@/assets/profile-views-chart.webp"
import statistic from "@/assets/statistics-chart.webp"
import gradient2 from "@/assets/gradient-2.webp"

function GrowAudienceSection() {
    return (
        <section >
            <div className="grid md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14 container pt-32">
                <div className="w-full relative justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1 lg:max-w-[560px]"><div className="-z-10 overflow-hidden absolute w-[148%]">
                    {/*  <img alt="Gradient" loading="lazy" width="1080" height="825" decoding="async" data-nimg="1" style={{ color: "transparent" }} srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-2.f11d288e.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-2.f11d288e.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-2.f11d288e.jpg&amp;w=3840&amp;q=75" /> */}
                    <Image src={gradient2} alt='gradient' />
                </div>
                    <div className="w-[80%] mb-[18%] mr-auto">
                        <Image src={profileView} alt='profile videw picture' className='rounded-2xl border w-full drop-shadow-md' />
                    </div>
                    <div className="w-[43%] absolute top-1/3 right-0 left-auto">
                        <Image src={statistic} alt='statistics picture' className='rounded-2xl border w-full drop-shadow-md' />
                    </div>
                </div>
                <div className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2 lg:max-w-[500px]">
                    <h3 className="text-[26px] leading-8 xs:text-[32px] xs:leading-10 lg:text-[36px] lg:leading-[46px] font-bold mb-3 lg:mb-4 capitalize">Grow Your Audience &amp; Connect Deeper</h3>
                    <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Visitors can subscribe to your bio link, and you can capture their data (email, phone, location) to Google Sheets or a webhook for easy management and automation.</p>
                    <ul className="flex flex-col gap-4 lg:gap-8 md:gap-4 font-bold text-sm md:text-base">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check">
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M9 12l2 2l4 -4"></path>
                            </svg>
                            Google Sheets Integration
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check">
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M9 12l2 2l4 -4"></path>
                            </svg>
                            Automate with Webhook
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-circle-check">
                                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                <path d="M9 12l2 2l4 -4"></path>
                            </svg>
                            Effortless Data Capture
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
}

export default GrowAudienceSection;
