import React from "react";
import Image from "next/image";
import gradient1 from "@/assets/gradient-1.webp";
import gradient2 from "@/assets/gradient-2.webp";
import contactOption from "@/assets/three-content-options.webp";
import visitorStatistic from "@/assets/visitors-statistics-chart.webp";

function FearuresSection() {
  return (
    <section>
      <div className="container">
        <div className="pt-[110px] pb-16 xs:pt-[120px] xs:pb-20 md:pt-[140px] md:pb-[100px] lg:pt-40 lg:pb-[120px] relative">
          <div className="container">
            <div className="max-w-[510px] text-center mx-auto mb-10 md:mb-12">
              <div>
                <h1 className="text-4xl xs:text-5xl md:text-[64px] lg:text-[70px] font-bold mb-6">
                  Features
                </h1>
                <p className="text-gray-700">
                  Explore features designed to help you manage, showcase, and
                  optimize your link in bio experience.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 w-[1754px] max-w-[750px] xs:max-w-[900px] md:max-w-[1250px] lg:max-w-[1754px] top-0 bottom-auto left-auto right-1/2 overflow-hidden translate-x-[22%] translate-y-[0%] xs:translate-x-[11%] xs:translate-y-[6%] md:translate-x-[11%] md:translate-y-[-9%] lg:translate-y-[-14%]">
              <Image src={gradient1} alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="container pb-16 xs:pb-20 md:pb-[100px] border-b">
            <div className="grid items-center md:grid-cols-2 gap-y-12 gap-x-10 xs:gap-x-12 md:gap-x-16 lg:gap-x-14">
              <div
                data-reverse="true"
                className="w-full relative justify-self-end flex justify-center items-center md:data-[reverse='true']:order-2 md:data-[reverse='false']:order-1"
              >
                <div className="-z-20 overflow-hidden absolute w-[148%]">
                  <Image src={gradient2} alt="" />
                </div>
                <div className="w-[80%] mb-[18%] mr-auto">
                  <Image
                    src={contactOption}
                    alt=""
                    className="rounded-2xl border w-full drop-shadow-md"
                  />
                </div>
                <div className="w-[43%] absolute top-1/3 right-0 left-auto">
                  <Image
                    src={visitorStatistic}
                    alt=""
                    className="rounded-2xl border w-full drop-shadow-md"
                  />
                </div>
              </div>

              <div
                data-reverse="true"
                className="w-full justify-self-end md:data-[reverse='true']:order-1 md:data-[reverse='false']:order-2"
              >
                <h4 className="font-medium text-sm md:text-base mb-3 md:mb-4 uppercase">
                  Content
                </h4>
                <h3 className="font-bold text-[26px] xs:text-[32px] lg:text-[36px] mb-5 md:mb-6 leading-8 xs:leading-10 lg:leading-[46px] capitalize">
                  Go Beyond Links: Showcase What Matters Most
                </h3>
                <p className="text-gray-700 mb-6 lg:mb-8 leading-7">
                  Don&apost just link, impress! Showcase products, videos, and other content alongside your links for a richer, more engaging experience.
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
                      className="tabler-icon tabler-icon-link"
                    >
                      <path d="M9 15l6 -6"></path>
                      <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464"></path>
                      <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"></path>
                    </svg>
                    <h5 className="font-bold capitalize">Links</h5>
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
                      className="tabler-icon tabler-icon-shopping-bag"
                    >
                      <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                      <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                    </svg>
                    <h5 className="font-bold capitalize">Products</h5>
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
                      className="tabler-icon tabler-icon-video"
                    >
                      <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                      <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                    </svg>
                    <h5 className="font-bold capitalize">Videos</h5>
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
                      className="tabler-icon tabler-icon-social"
                    >
                      <path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                      <path d="M12 14m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M12 7l0 4"></path>
                      <path d="M6.7 17.8l2.8 -2"></path>
                      <path d="M17.3 17.8l-2.8 -2"></path>
                    </svg>
                    <h5 className="font-bold capitalize">Social Profiles</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FearuresSection;
