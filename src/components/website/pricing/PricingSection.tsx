import React from 'react';

function PricingSection() {
    return (
        <section className="pt-[110px] pb-16 xs:pt-[120px] xs:pb-20 md:pt-[140px] md:pb-[100px] lg:pt-40 lg:pb-[120px] relative border-b">
            <div className="container">
                <div className="max-w-[760px] text-center mx-auto mb-10 md:mb-12"><div>
                    <h2 className="font-medium tracking-widest uppercase mb-3 md:mb-4">Pricing</h2>
                    <h1 className="text-4xl xs:text-5xl md:text-[64px] lg:text-[70px] font-bold mb-4 md:leading-tight">Find Your Perfect Pricing Plan</h1>
                    <p className="mb-[10px] leading-7">Start Your Free 7-Day Trial &amp; Save Up to 25% on Yearly Plans</p>
                    <div className="flex gap-1 flex-wrap border rounded-lg w-fit p-1 mx-auto bg-white">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">Monthly</button><button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2">Yearly</button>
                    </div></div>
                </div>
                <div>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 md:gap-x-10 lg:gap-y-8 lg:gap-x-12">
                    <div className="px-6 py-8 xs:px-8 xs:py-10 md:p-10 lg:px-6 bg-white rounded-2xl shadow-md border h-fit lg:mt-10  entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">Free</h2>
                            <h3 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-2">$0<span className="text-gray-700 text-base font-medium">/month</span></h3>
                            <p className="text-gray-700 mb-3 md:mb-4 leading-7">Ideal for beginners looking to create a basic Linklush bio link for free.</p>
                        </div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-zinc-200 dark:bg-zinc-800 h-[1px] w-full my-5 md:my-6"></div>
                        <div className="flex flex-col gap-4 *:flex *:gap-1 *:items-center *:text-sm md:*:text-base *:text-gray-700 mb-5 sm:mb-6">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path>
                                </svg>Links
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Social Profiles</div><div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Basic Design Tools</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Support</div></div>
                        <div className="text-center"><a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2 w-full" href="/register">Get started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-arrow-right ml-2"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg>
                        </a>
                        </div>
                    </div>
                    <div className="px-6 py-8 xs:px-8 xs:py-10 md:p-10 lg:px-6 bg-white rounded-2xl shadow-md border h-fit  entry-animate data-[animate='true']:animate-fade-in-down animate-delay-200" data-animate="true">
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">Pro</h2>
                            <h3 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-2">$4<span className="text-gray-700 text-base font-medium">/month</span>
                            </h3><p className="text-gray-700 mb-3 md:mb-4 leading-7">Improve appearance and measure performance of your Linklush bio link.</p></div>
                        <div data-orientation="horizontal" role="none" className="shrink-0 bg-zinc-200 dark:bg-zinc-800 h-[1px] w-full my-5 md:my-6"></div>
                        <div className="flex flex-col gap-4 *:flex *:gap-1 *:items-center *:text-sm md:*:text-base *:text-gray-700 mb-5 sm:mb-6">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Dark Mode &amp; Sections</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Detailed Analytics</div><div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Search Engine Optimization</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Advanced Design Tools</div>
                        </div>
                        <div className="text-center"><a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-full" href="/register">Get started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-arrow-right ml-2"><path d="M5 12l14 0"></path>
                            <path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path></svg></a></div></div><div className="px-6 py-8 xs:px-8 xs:py-10 md:p-10 lg:px-6 bg-white rounded-2xl shadow-md border h-fit lg:mt-10  entry-animate data-[animate='true']:animate-fade-in-down animate-delay-300" data-animate="true"><div className="text-center"><h2 className="text-xl font-bold mb-2">Premium</h2><h3 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-2">$6<span className="text-gray-700 text-base font-medium">/month</span>
                            </h3><p className="text-gray-700 mb-3 md:mb-4 leading-7">Access all features for a fully customized and optimized experience.</p></div><div data-orientation="horizontal" role="none" className="shrink-0 bg-zinc-200 dark:bg-zinc-800 h-[1px] w-full my-5 md:my-6"></div><div className="flex flex-col gap-4 *:flex *:gap-1 *:items-center *:text-sm md:*:text-base *:text-gray-700 mb-5 sm:mb-6"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Links, Products &amp; Videos</div><div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Subscribe</div><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>Animate &amp; Protect</div>
                            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-circle-check "><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>E-commerce Integrations</div></div><div className="text-center"><a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-4 py-2 w-full" href="/register">Get started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-arrow-right ml-2"><path d="M5 12l14 0"></path><path d="M13 18l6 -6"></path><path d="M13 6l6 6"></path>
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="-z-10 flex justify-center items-start absolute top-0 bottom-0 left-0 right-0">
                    <div className="w-[2000px] md:w-[2895px] absolute -z-10 translate-x-[5%] translate-y-[58%] md:translate-y-[42%] lg:translate-y-[33%] overflow-hidden">
                        {/*  <img alt="Gradient" loading="lazy" width="2000" height="613" decoding="async" data-nimg="1" className="w-full" style="color:transparent" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-4.8d4cb4a4.jpg&amp;w=2048&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-4.8d4cb4a4.jpg&amp;w=3840&amp;q=75 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgradient-4.8d4cb4a4.jpg&amp;w=3840&amp;q=75"> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
