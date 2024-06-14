import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface CardProps {
  title: string;
  price: number;
  priceUnit: string;
  description: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void;
  buttonVariantDefault?: boolean;
}
const PricingCard: React.FC<CardProps> = ({
  title,
  price,
  priceUnit,
  description,
  features,
  buttonText,
  onButtonClick,
  buttonVariantDefault = true,
}) => {
  const handleClick = () => {
    onButtonClick();
  };
  return (
    <>
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h3 className="text-[26px] xs:text-[32px] lg:text-4xl font-bold mb-2">
          ${price}
          <span className="text-gray-700 text-base font-medium">/monthly</span>
        </h3>
        <p className="text-gray-700 mb-3 md:mb-4 leading-7">{description}</p>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 bg-zinc-200 dark:bg-zinc-800 h-[1px] w-full my-5 md:my-6"
      ></div>
      <div className="flex flex-col gap-4 *:flex *:gap-1 *:items-center *:text-sm md:*:text-base *:text-gray-700 mb-5 sm:mb-6">
        {features.map((feature, index) => (
          <div key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-check"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            {feature}
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button
          variant={buttonVariantDefault ? "default" : "outline"}
          className="w-full"
          onClick={handleClick}
        >
          {buttonText}
        </Button>
      </div>
    </>
  );
};

export default PricingCard;
