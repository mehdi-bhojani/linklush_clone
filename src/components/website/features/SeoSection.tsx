import React from "react";
import gradient2 from "@/assets/gradient-2.webp";
import Image from "next/image";
import Analytics from "@/assets/analytics-chart.webp";
import HtmlCode from "@/assets/html-code.webp";

function SeoSection() {
  return (
    <section>
      <div className="container pt-16 xs:pt-20 lg:pt-[120px] pb-[100px] xs:pb-[120px] md:pt-[100px] md:pb-[150px]">
        <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
          <div
            className="w-full relative -z-10 justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1 entry-animate data-[animate='true']:animate-fade-in h-full"
            data-animate="true"
          >
            <div className="-z-10 overflow-hidden absolute w-[180%]">
              <Image src={gradient2} alt="" />
            </div>
            <div className="w-[42%] absolute top-1/3 left-0 right-auto z-10">
              <Image
                src={Analytics}
                alt=""
                className="rounded-2xl border w-full drop-shadow-md"
              />
            </div>
            <div className="w-[80%] mb-[25%] ml-auto">
              <Image
                src={HtmlCode}
                alt=""
                className="rounded-2xl border w-full drop-shadow-md"
              />
            </div>
          </div>
          <div
            className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2 entry-animate data-[animate='true']:animate-fade-in-down"
            data-animate="true"
          >
            <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">
              SEO
            </h4>
            <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">
              Boost Visibility: SEO Made Easy
            </h3>
            <p className="text-gray-700 mb-6 lg:mb-8 leading-7">
              Reach a wider audience and dominate search results. Take control
              of your link in bio&aposs SEO with customizable meta titles,
              descriptions, and OG images. Attract more visitors and establish
              yourself as a leader in your niche.
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-seo "
                >
                  <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                  <path d="M14 16h-4v-8h4"></path>
                  <path d="M11 12h2"></path>
                  <path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                </svg>
                <h5 className="font-bold capitalize">Meta Title</h5>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-seo "
                >
                  <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                  <path d="M14 16h-4v-8h4"></path>
                  <path d="M11 12h2"></path>
                  <path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                </svg>
                <h5 className="font-bold capitalize">Meta Description</h5>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-seo "
                >
                  <path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3"></path>
                  <path d="M14 16h-4v-8h4"></path>
                  <path d="M11 12h2"></path>
                  <path d="M17 8m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                </svg>
                <h5 className="font-bold capitalize">Open Graph Image</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeoSection;
