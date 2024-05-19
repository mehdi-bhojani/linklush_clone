import React from 'react';

function GetIntouch() {
    return (
        <div>
            <section className="pt-[120px] pb-16 xs:pb-20 md:pt-[140px] md:pb-[100px] lg:pt-[160px] lg:pb-[120px]">
                <div className="container">
                    <div className="grid gap-x-12 gap-y-7 lg:grid-cols-2">
                        <div className=" entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                            <h2 className="font-medium tracking-widest uppercase mb-3 md:mb-4">Get in touch</h2>
                            <h1 className="text-4xl xs:text-5xl md:text-[64px] lg:text-[70px] font-bold mb-[10px] md:mb-4">Contact us!</h1>
                            <p className="text-gray-700 mb-5 md:mb-6 leading-7">Contact us to learn more about our link in bio tool and how it can help streamline your online presence!</p>
                            <div>
                                <form className="grid grid-cols-2 gap-y-7 gap-x-5 md:gap-y-8">
                                    <div>
                                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2 text-base font-medium">Name</label
                                        ><input
                                            className="flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                                            placeholder="John"
                                            required
                                            name="entry.2005620554"
                                        />
                                    </div>
                                    <div>
                                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2 text-base font-medium">Email</label
                                        ><input
                                            type="email"
                                            className="flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300"
                                            placeholder="hello@linklu.sh"
                                            required
                                            name="entry.1045781291"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2 text-base font-medium">Message</label
                                        ><textarea
                                            className="flex min-h-[60px] w-full rounded-md border border-zinc-200 bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 resize-y"
                                            name="entry.839337160"
                                            placeholder="Type your message here..."
                                            rows={5}
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 w-fit col-span-2"
                                    >
                                        Send Message
                                    </button>
                                </form>
                                <div id="contact-form" className="cf-turnstile mt-3 rounded-lg overflow-hidden w-fit" data-theme="light" data-appearance="interaction-only">
                                    <iframe
                                        src="https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/turnstile/if/ov2/av0/rcv0/0/5f99p/0x4AAAAAAASJU2WCD1G40R1H/light/normal"
                                        allow="cross-origin-isolated; fullscreen; autoplay"
                                        sandbox="allow-same-origin allow-scripts allow-popups"
                                        id="cf-chl-widget-5f99p"
                                        tabIndex={0}
                                        title="Widget containing a Cloudflare security challenge"
                                        style={{ border: "none", overflow: "hidden", width: "0px", height: "0px" }}
                                    ></iframe>
                                    <input
                                        type="hidden"
                                        name="cf-turnstile-response"
                                        id="cf-chl-widget-5f99p_response"
                                        value="0.nus4jk2rZ34Bcv326Kt1hQ9oWU_umivo0nK4nPmOivLMbvICuegK7tqyczNo-N2EAxKgSc9WaRduC2pIr4Ron_H1Vndgq6EWa1Qb-aavbSgC2s5fppF6jOhAdGtYB9XSUdq6lGhb_YgPQ0dVJ9-8_FPYNobSIisN2K8gtHQ2E55ANdC-TxqjvBLSSzG54Kd3eG9iuTseITQ6wQX9DzVy8rdmUaVk_Zuu8QIiAoFU5iqUeR35xTNXWUC77tjSSa5M--YgiKFprwW3LI_xSfeXTH4p4Pep1_0ocUOKy0bP0UcBWsM4wnrcSdNWSfm8MtNKa6oIGZTt5xirH58F_rAD6MpzyjzglVLJVtDz1NqLyXRHb_Uz1ab0wFiaiDf3U_85-1ieYWN-3gbUo4bgVQO0wAGwVNzlyX1yZYDtSMsWlrwmFEDYk2zTk8iyRSqbodFX.ryjkXg0zPcMMEY2vJX0WSw.529e1a4c77da1a95dc60541fb57570efe50b50c7d369077ac35ed91146b34f80"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className=" entry-animate data-[animate='true']:animate-fade-in-down" data-animate="true">
                            <div className="rounded-2xl px-6 pt-8 pb-12 xs:px-8 xs:pt-10 md:pt-12 md:px-10 lg:px-12 lg:py-16 border bg-[url(' / assets / backgrounds / gradient - 5.jpg')] bg-cover bg-no-repeat bg-center">
                                <h2 className="text-2xl md:text-[26px] mb-3 lg:mb-4 font-bold">Contact details</h2>
                                <p className="text-gray-700 mb-8 md:mb-10 leading-7">Discover more about our link in bio tool. Get in touch to see how it can amplify your online presence!</p>
                                <div className="flex gap-3 mb-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-mail ">
                                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                                        <path d="M3 7l9 6l9 -6"></path>
                                    </svg>
                                    <div>
                                        <h5 className="font-semibold text-sm md:text-base mb-3">Email</h5>
                                        <a href="mailto:hello@linklu.sh"><p className="md:text-lg text-gray-700">hello@linklu.sh</p></a>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-medium mb-3 sm:mb-4">Follow us:</h5>
                                    <div className="flex gap-3">
                                        <a href="https://www.instagram.com/linklush/"
                                        ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-instagram ">
                                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                <path d="M16.5 7.5l0 .01"></path></svg></a
                                        ><a href="https://www.facebook.com/profile.php?id=61550116601035"
                                        ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-facebook "><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default GetIntouch;
