import React from 'react';
import gradient2 from "@/assets/gradient-2.webp"
import Image from 'next/image';
import Animate from "@/assets/animate-select.webp"
import codeLock from "@/assets/code-lock.webp"


function ProtectAndAnimate() {
    return (
        <section>
            <div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
                <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
                    <div className="w-full relative -z-10 justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1  entry-animate data-[animate='true']:animate-fade-in" data-animate="true">
                        <div className="-z-10 overflow-hidden absolute w-[148%]">
                            <Image src={gradient2} alt='' />
                        </div>
                        <div className="w-[80%] mb-[18%] mr-auto">
                            <Image src={Animate} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                        <div className="w-[43%] absolute top-1/3 right-0 left-auto">
                            <Image src={codeLock} alt='' className='rounded-2xl border w-full drop-shadow-md' />
                        </div>
                    </div>
                    <div className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2  entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                        <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">Protect &amp; Animate</h4>
                        <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">Protect &amp; Animate Your Content</h3>
                        <p className="text-gray-700 mb-6 lg:mb-8 leading-7">Control access and grab attention. Protect exclusive content with code lock or subscribe lock. Animate your links, products, and videos to make them stand out. Craft a dynamic and engaging link in bio that keeps your audience hooked.</p>
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-lock ">
                                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z"></path>
                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0">
                                    </path>
                                    <path d="M8 11v-4a4 4 0 1 1 8 0v4">
                                    </path>
                                </svg>
                                <h5 className="font-bold capitalize">Code Lock</h5>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-user-plus ">
                                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                    <path d="M16 19h6"></path>
                                    <path d="M19 16v6"></path>
                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path></svg>
                                <h5 className="font-bold capitalize">Subscribe Lock</h5> </div>
                            <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-keyframes ">
                                <path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z"></path>
                                <path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"></path>
                                <path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836"></path></svg>
                                <h5 className="font-bold capitalize">20+ Animations</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProtectAndAnimate;
