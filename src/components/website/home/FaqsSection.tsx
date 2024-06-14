import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FaqsSection() {
  const accordionItems = [
    {
      title: "What is a bio link page?",
      content: "Content for &quot;What is a bio link page?&quot;",
    },
    {
      title: "What can I include on my bio link page?",
      content: "Content for &quot;What can I include on my bio link page?&quot;",
    },
    {
      title: "What is Linklush, and how can it enhance my link in bio page?",
      content:
        "Content for &quot;What is Linklush, and how can it enhance my link in bio page?&quot;",
    },
    {
      title:
        "What are the subscription plans available, and what do they offer?",
      content:
        "Content for &quot;What are the subscription plans available, and what do they offer?&quot;",
    },
    {
      title: "Is there a refund policy for subscription payments?",
      content:
        "Content for &quot;Is there a refund policy for subscription payments?&quot;",
    },
    {
      title: "How does the Subscribe feature work?",
      content: "Content for &quot;How does the Subscribe feature work?&quot;",
    },
    {
      title: "Can I track the performance of my link in bio profile?",
      content:
        "Content for &quot;Can I track the performance of my link in bio profile?&quot;",
    },
    {
      title: "Can I integrate Microsoft Clarity and Facebook Pixel?",
      content:
        "Content for &quot;Can I integrate Microsoft Clarity and Facebook Pixel?&quot;",
    },

  ];



  return (
    <section className="pb-16 xs:pb-20 md:pb-[100px] lg:pb-[120px]">
      <div className="container">
        <div className="text-center md:max-w-[600px] mx-auto mb-10 md:mb-12">
          <h3 className="uppercase text-sm md:text-base font-medium mb-3 md:mb-4 tracking-widest">
            FAQS
          </h3>
          <h2 className="text-[26px] xs:text-[32px] lg:text-4xl mb-2 font-bold leading-8 xs:leading-10 lg:leading-[46px]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 leading-7">
            Got Questions? We&aposve Got Answers! Explore our FAQs to find quick
            answers to common questions about Linklush
          </p>
        </div>

        <div className="flex  gap-10 container flex-col lg:flex-row    ">
          <div className="mb-10 md:mb-12 flex-1 text-sm sm:text-lg">
            {accordionItems.map((item, index) => {
              return (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="font-[18px] ">
                      <div className="text-left">
                        {item.title}
                      </div>

                    </AccordionTrigger>
                    <AccordionContent><div className="text-left">{item.content}</div></AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
          <div className="mb-10 md:mb-12 flex-1 text-sm sm:text-lg ">
            {accordionItems.map((item, index) => {
              return (
                <Accordion key={index} type="single" collapsible>
                  <AccordionItem value={`item-${index + 1}`} key={index}>
                    <AccordionTrigger className="font-[18px] ">
                      <div className="text-left">{item.title}</div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="text-left">{item.content}</div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>

        {/* button */}
        <a
          className="items-center  justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 flex w-fit mx-auto"
          href="/register"
        >
          Get started{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-arrow-right ml-2"
          >
            <path d="M5 12l14 0"></path>
            <path d="M13 18l6 -6"></path>
            <path d="M13 6l6 6"></path>
          </svg>
        </a>
      </div>
    </section>
  );
}

export default FaqsSection;
