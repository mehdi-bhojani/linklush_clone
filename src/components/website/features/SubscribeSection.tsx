import React from "react";
import Image from "next/image";
import gradient2 from "@/assets/gradient-2.webp";
import profileView from "@/assets/profile-views-chart.webp";
import statistic from "@/assets/statistics-chart.webp";

function SubscribeSection() {
  return (
    <section>
      <div className="container py-16 xs:py-20 md:py-[100px] lg:pt-[120px] border-b">
        <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
          {/* image section */}
          <div
            data-reverse="true"
            className="w-full relative -z-10 justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1  entry-animate data-[animate='true']:animate-fade-in"
            data-animate="true"
          >
            <div className="-z-10 overflow-hidden absolute w-[148%]">
              <Image src={gradient2} alt="" />
            </div>
            <div className="w-[80%] mb-[18%] mr-auto">
              <Image
                src={profileView}
                alt=""
                className="rounded-2xl border w-full drop-shadow-md"
              />
            </div>
            <div className="w-[43%] absolute top-1/3 right-0 left-auto ">
              <Image
                src={statistic}
                alt=""
                className="rounded-2xl border w-full drop-shadow-md"
              />
            </div>
          </div>
          <div
            data-reverse="true"
            className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2  entry-animate data-[animate='true']:animate-fade-in-down"
            data-animate="true"
          >
            <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">
              Subscribe
            </h4>
            <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">
              Grow Your Audience &amp; Connect Deeper
            </h3>
            <p className="text-gray-700 mb-6 lg:mb-8 leading-7">
              Visitors can subscribe to your bio link, and you can capture their
              data (email, phone, location) to Google Sheets or a webhook for
              easy management and automation.
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
                  className="tabler-icon tabler-icon-file-spreadsheet "
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                  <path d="M8 11h8v7h-8z"></path>
                  <path d="M8 15h8"></path>
                  <path d="M11 11v7"></path>
                </svg>
                <h5 className="font-bold capitalize">Google Sheets</h5>
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
                  className="tabler-icon tabler-icon-webhook "
                >
                  <path d="M4.876 13.61a4 4 0 1 0 6.124 3.39h6"></path>
                  <path d="M15.066 20.502a4 4 0 1 0 1.934 -7.502c-.706 0 -1.424 .179 -2 .5l-3 -5.5"></path>
                  <path d="M16 8a4 4 0 1 0 -8 0c0 1.506 .77 2.818 2 3.5l-3 5.5"></path>
                </svg>
                <h5 className="font-bold capitalize">Webhook</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubscribeSection;
