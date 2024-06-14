"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import gradient4 from "@/assets/gradient-4.webp";
import Card from "@/components/website/upgrade/Card";

function UpgradePageComponent() {
  interface CardDataType {
    PackageName: string;
    price: number;
    priceUnit: string;
    description: string;
    features: string[];
    buttonText: string;
  }

  const monthlyProPrice = 4;
  const yearlyProPrice = 3;
  const monthlyPremiumPrice = 6;
  const yearlyPremiumPrice = 4.5;

  const freeCardData: CardDataType[] = [
    {
      PackageName: "Free",
      price: 0,
      priceUnit: "month",
      description:
        "Ideal for beginners looking to create a basic Linklush bio link for free.",
      features: ["Links", "Social Profiles", "Basic Design Tools", "Support"],
      buttonText: "Continue for free",
    },
  ];

  const proCardData: CardDataType[] = [
    {
      PackageName: "Pro",
      price: monthlyProPrice,
      priceUnit: "month",
      description:
        "Improve appearance and measure performance of your Linklush bio link.",
      features: [
        "Dark Mode & Sections",
        "Detailed Analytics",
        "Search Engine Optimization",
        "Advanced Design Tools",
      ],
      buttonText: "Start Your Free Trial",
    },
  ];

  const premiumCardData: CardDataType[] = [
    {
      PackageName: "Premium",
      price: monthlyPremiumPrice,
      priceUnit: "month",
      description:
        "Access all features for a fully customized and optimized experience.",
      features: [
        "Links, Products & Videos",
        "Subscribe",
        "Animate & Protect",
        "E-commerce Integrations",
      ],
      buttonText: "Start Your Free Trial",
    },
  ];

  const [isMonthly, setIsMonthly] = useState(true);

  const handleClickMonth = () => {
    setIsMonthly(true);
    console.log("month package selected");
  };
  const handleClickYear = () => {
    setIsMonthly(false);
    console.log("yearly package selected");
  };

  const updatedfreeCardData = freeCardData.map((data) => ({
    ...data,
    price: isMonthly ? 0 : 0,
    priceUnit: isMonthly ? "month" : "year",
  }));
  const updatedProCardData = proCardData.map((data) => ({
    ...data,
    price: isMonthly ? monthlyProPrice : yearlyProPrice,
    priceUnit: isMonthly ? "month" : "year",
  }));

  const updatedPremiumCardData = premiumCardData.map((data) => ({
    ...data,
    price: isMonthly ? monthlyPremiumPrice : yearlyPremiumPrice,
    priceUnit: isMonthly ? "month" : "year",
  }));

  //data

  const handleButtonClick = (data: CardDataType) => () => {
    const { PackageName, price, description, priceUnit } = data;
    console.log({ PackageName, price, description, priceUnit });
  };

  return (
    <section className="relative pt-[110px] pb-16 xs:pt-[120px] xs:pb-[100px] md:pt-[140px] md:pb-[120px] lg:pt-[160px] lg:pb-[150px]">
      <Image
        src={gradient4}
        alt=""
        className="h-screen w-full bg-section-one bg-cover -z-40 absolute bottom-0  "
      />
      <div className="container">
        <div>
          <h1 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-[10px] md:mb-4 text-center">
            Select a plan
          </h1>
          <p className="text-gray-700 text-center">
            Start Your Free 7-Day Trial &amp; Save Up to 25% on Yearly Plans
          </p>
          <div className="flex gap-1 flex-wrap border rounded-lg w-fit p-1 mx-auto bg-white my-6 md:my-8">
            <Button
              variant={isMonthly ? "default" : "outline"}
              className="w-20"
              onClick={handleClickMonth}
            >
              Monthly
            </Button>
            <Button
              variant={isMonthly ? "outline" : "default"}
              className="w-20"
              onClick={handleClickYear}
            >
              Yearly
            </Button>
          </div>

          {/*card */}
          <div className="grid lg:grid-cols-3 gap-8 md:gap-x-10 lg:gap-y-8 lg:gap-x-12">
            {/* free card */}
            {updatedfreeCardData.map((data, index) => (
              <Card
                key={index}
                PackageName={data.PackageName}
                price={data.price}
                priceUnit={data.priceUnit}
                description={data.description}
                features={data.features}
                buttonText={data.buttonText}
                buttonVariantDefault={false}
                onButtonClick={handleButtonClick(data)}
              />
            ))}

            {/* Pro card */}
            {updatedProCardData.map((data, index) => (
              <Card
                key={index}
                PackageName={data.PackageName}
                price={data.price}
                priceUnit={data.priceUnit}
                description={data.description}
                features={data.features}
                buttonText={data.buttonText}
                onButtonClick={handleButtonClick(data)}

              />
            ))}

            {/* Premium card */}
            {updatedPremiumCardData.map((data, index) => (
              <Card
                key={index}
                PackageName={data.PackageName}
                price={data.price}
                priceUnit={data.priceUnit}
                description={data.description}
                features={data.features}
                buttonText={data.buttonText}
                onButtonClick={handleButtonClick(data)}
                buttonVariantDefault={false}

              />
            ))}
          </div>
          <p className="text-center text-gray-500 max-w-96 mt-8 mx-auto">
            You have the option to cancel your subscription at any time before
            the end of the trial period.
          </p>
        </div>
      </div>
    </section>
  );
}

export default UpgradePageComponent;
