import React from 'react';
import Image from 'next/image';
import gradient2 from "@/assets/gradient-2.webp"
import darkMode from "@/assets/dark-mode-profile.webp"
import ProfileSection from "@/assets/profile-sections.webp"


function SectionAndDrakModeForFeaturePage() {
    return (
        <section>
            <div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
                <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                    <div data-reverse="true" className="w-full relative -z-10 justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1  entry-animate data-[animate='true']:animate-fade-in" data-animate="true">
                        <div className="-z-10 overflow-hidden absolute w-[148%]">
                            <Image src={gradient2} alt='' />
                        </div>
                        <div className="w-[80%] mb-[18%] mr-auto">
                            <Image src={darkMode} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                        <div className="w-[43%] absolute top-1/3 right-0 left-auto">
                            <Image src={ProfileSection} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                    </div>
                    <div data-reverse="true" className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2  entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                        <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">Sections &amp; Dark Mode</h4>
                        <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">Organize &amp; Shine: Sections &amp; Dark Mode</h3>
                        <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Keep it clean &amp; create a captivating view. Use Sections to organize your links, products, and videos for a clear and user-friendly experience. Switch to Dark Mode for a sleek look that's easy on the eyes.</p>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-section "><path d="M20 20h.01"></path><path d="M4 20h.01"></path><path d="M8 20h.01"></path><path d="M12 20h.01"></path><path d="M16 20h.01"></path><path d="M20 4h.01"></path><path d="M4 4h.01"></path><path d="M8 4h.01"></path><path d="M12 4h.01"></path><path d="M16 4l0 .01"></path><path d="M4 8m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z"></path></svg>
                                <h5 className="font-bold capitalize">Sections</h5>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-moon "><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
                                <h5 className="font-bold capitalize">Dark Mode</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionAndDrakModeForFeaturePage;
