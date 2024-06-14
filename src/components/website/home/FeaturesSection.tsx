import React from "react";
import Image from "next/image";
import darkImage from "@/assets/dark-mode.webp";
import contentOption from "@/assets/content-options.webp";
import seo from "@/assets/seo.webp";

const FeaturesSection = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center md:max-w-[600px] mx-auto mb-10 md:mb-12">
          <h3 className="uppercase text-sm md:text-base font-medium mb-3 md:mb-4 tracking-widest">
            Features
          </h3>
          <h2 className="text-[26px] xs:text-[32px] lg:text-4xl mb-2 font-bold leading-8 xs:leading-10 lg:leading-[46px]">
            Powerful Features for Everyone
          </h2>
          <p className="text-gray-700 leading-7">
            Everything You Need in One Place: Discover the features that help
            you craft a stunning and functional bio link page.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
          <div>
            <Image src={contentOption} alt="content option" />
            <h3 className="text-sm md:text-base font-bold mb-2">
              Three Content Options
            </h3>
            <p className="text-gray-700 leading-7">
              Create a bio page with dedicated sections for links, products, and
              videos. Each section gets its own unique layout for maximum
              impact.
            </p>
          </div>
          <div>
            <Image src={darkImage} alt="dark image" />
            <h3 className="text-sm md:text-base font-bold mb-2">Dark Mode</h3>
            <p className="text-gray-700 leading-7">
              Enjoy a comfortable reading experience with our optional dark
              mode. Perfect for showcasing your bio link page in any lighting.
            </p>
          </div>
          <div>
            <Image src={seo} alt="seo image" />
            <h3 className="text-sm md:text-base font-bold mb-2">SEO</h3>
            <p className="text-gray-700 leading-7">
              Make your bio link page SEO-friendly with custom meta title,
              description, and Open Graph image. Attract new audiences with
              ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
