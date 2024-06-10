import React from 'react';
import Image from 'next/image';
import gradient2 from "@/assets/gradient-2.webp"
import front from "@/assets/advanced-design-mode.webp"
import linklish from "@/assets/linklush-themes.webp"

function DesignSection() {
    return (
        <div>
            <section><div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
                <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                    <div data-reverse="true" className="w-full relative -z-10 justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1 entry-animate data-[animate='true']:animate-fade-in h-full" data-animate="true">
                        <div className="-z-10 overflow-hidden absolute w-[180%]">
                            <Image src={gradient2} alt='' />

                        </div>
                        <div className="w-[42%] absolute top-1/3 left-0 right-auto z-10">
                            <Image src={front} alt='' className='rounded-2xl border w-full drop-shadow-md' />

                        </div>
                        <div className="w-[80%] mb-[25%] ml-auto">
                            <Image src={linklish} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                    </div>
                    <div data-reverse="true" className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2 entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                        <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">Design</h4>
                        <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">Design Your Way: From Simple to Stunning</h3>
                        <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Create a link in bio that reflects your style. Choose from a variety of pre-designed themes in basic mode, or dive into advanced design options for complete customization. Control colors, fonts, and more to craft the perfect look.</p>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-filters ">
                                    <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                                    <path d="M8 11a5 5 0 1 0 3.998 1.997"></path>
                                    <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003">
                                    </path>
                                </svg>
                                <h5 className="font-bold capitalize">Basic Design Mode</h5>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-wand ">
                                    <path d="M6 21l15 -15l-3 -3l-15 15l3 3"></path>
                                    <path d="M15 6l3 3"></path>
                                    <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2">

                                    </path>
                                    <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2">
                                    </path></svg><h5 className="font-bold capitalize">Advanced Design Mode</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
}

export default DesignSection;
