import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"





function FaqsSection() {
    const accordionItems = [
        {
            title: 'What is a bio link page?',
            content: 'Content for "What is a bio link page?"',
        },
        {
            title: 'What can I include on my bio link page?',
            content: 'Content for "What can I include on my bio link page?"',
        },
        {
            title: 'What is Linklush, and how can it enhance my link in bio page?',
            content: 'Content for "What is Linklush, and how can it enhance my link in bio page?"',
        },
        {
            title: 'What are the subscription plans available, and what do they offer?',
            content: 'Content for "What are the subscription plans available, and what do they offer?"',
        },
        {
            title: 'Is there a refund policy for subscription payments?',
            content: 'Content for "Is there a refund policy for subscription payments?"',
        },
        {
            title: 'How does the Subscribe feature work?',
            content: 'Content for "How does the Subscribe feature work?"',
        },
        {
            title: 'Can I track the performance of my link in bio profile?',
            content: 'Content for "Can I track the performance of my link in bio profile?"',
        },
        {
            title: 'Can I integrate Microsoft Clarity and Facebook Pixel?',
            content: 'Content for "Can I integrate Microsoft Clarity and Facebook Pixel?"',
        },
        {
            title: 'How can I customize my link in bio profile?',
            content: 'Content for "How can I customize my link in bio profile?"',
        },
        {
            title: 'Is there a limit to the number of links, products, or videos I can add to my bio link?',
            content: 'Content for "Is there a limit to the number of links, products, or videos I can add to my bio link?"',
        },
    ];


    return (
        <section className="pb-16 xs:pb-20 md:pb-[100px] lg:pb-[120px]">
            <div className="container">
                <div className="text-center md:max-w-[600px] mx-auto mb-10 md:mb-12">
                    <h3 className="uppercase text-sm md:text-base font-medium mb-3 md:mb-4 tracking-widest">FAQS</h3>
                    <h2 className="text-[26px] xs:text-[32px] lg:text-4xl mb-2 font-bold leading-8 xs:leading-10 lg:leading-[46px]">Frequently Asked Questions</h2>
                    <p className="text-gray-700 leading-7">Got Questions? We've Got Answers! Explore our FAQs to find quick answers to common questions about Linklush</p>
                </div>


                <div className='mb-10 md:mb-12'>
                    {accordionItems.map((item) => {
                        return (<Accordion type="single" collapsible >
                            <AccordionItem value="item-1">
                                <AccordionTrigger className='font-[18px] '>{item.title}</AccordionTrigger>
                                <AccordionContent>
                                    {item.content}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>)
                    })}
                </div>

                {/* button */}
                <a className="items-center  justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 flex w-fit mx-auto" href="/register">Get started <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-arrow-right ml-2">
                    <path d="M5 12l14 0">
                    </path>
                    <path d="M13 18l6 -6">
                    </path>
                    <path d="M13 6l6 6">
                    </path>
                </svg>
                </a>
            </div>


        </section >
    );
}

export default FaqsSection;
