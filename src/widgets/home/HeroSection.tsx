import React from 'react';
import Image from 'next/image';

import img1 from "@/assets/gradient-1.webp"

Image

const HeroSection = () => {
    return (
        <section className="relative pt-[120px] pb-16 xs:pb-20 md:pt-[148px] md:pb-[120px] lg:pt-[150px] lg:pb-[200px] overflow-hidden flex justify-center items-center">
            <div className="w-[2000px] max-w-[2000px] absolute top-0 bottom-0 left-auto right-auto -z-10 lg:translate-x-[-7%] lg:translate-y-[-10%] overflow-hidden">
                <Image src={img1} alt='background image' />
            </div>
            <div className="container">
                <div className="grid gap-10 xs:gap-12 md:gap-14 lg:grid-cols-2 lg:gap-10 items-center">
                    <section>
                        <h1 className="text-4xl xs:text-5xl md:text-[64px] lg:text-[70px] font-bold mb-[10px] md:mb- leading-[37px] xs:leading-[49px] md:leading-[65px] lg:leading-[72px]">Ditch the mess. With One link in bio.</h1>
                        <p className="mb-5 md:mb-6 leading-7">Showcase everything in one stunning bio page. Organize with sections, lock for privacy, and animate for impact. Craft your online presence. Sign up for free!</p>
                        <div className="flex flex-wrap gap-4">
                            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full xs:w-fit" href="/register">Get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right ml-2">
                                    <path d="M5 12l14 0"></path>
                                    <path d="M13 18l6 -6"></path>
                                    <path d="M13 6l6 6"></path>
                                </svg>
                            </a>
                            <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2 w-full xs:w-fit" href="/pricing">View Pricing</a>
                        </div>
                    </section>
                    <section className="h-fit relative   ">
                        <div className="relative mx-auto shadow-2xl border-gray-800 border-[17px] rounded-[2.5rem] sm:h-[600px] w-[250px] sm:w-[300px] ">
                            <div className="h-[32px] w-[6px] bg-gray-800 absolute -start-[19px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[6px] bg-gray-800 absolute -start-[19px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[6px] bg-gray-800 absolute -start-[19px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[6px] bg-gray-800 absolute -end-[20px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[1rem] overflow-hidden w-[220px]  sm:w-[270px]   sm:h-[570px] bg-white">
                                <video className="w-full h-full object-cover object-bottom" src="linklush-profile-demo.mp4" autoPlay loop muted controls></video>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
