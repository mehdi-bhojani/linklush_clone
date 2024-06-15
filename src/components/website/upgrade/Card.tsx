"use client"
import StripeCheckoutButton from "@/components/Stripe/StripeCheckoutButton";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

import getStripePromise from "@/lib/stripe";

interface CardProps {
  PackageName: string;
  price: number;
  priceUnit: string;
  description: string;
  features: string[];
  buttonText: string;
  onButtonClick: () => void | string;
  buttonVariantDefault?: boolean;
}

const Card: React.FC<CardProps> = ({
  PackageName,
  price,
  priceUnit,
  description,
  features,
}) => {


  const handleCheckOut = async () => {
    const stripe = await getStripePromise();

    const packages = {
      packagName: PackageName,
      price: price,
      description: description,
      trial_days: 7,
      priceUnit: priceUnit
    };

    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify({
        packages,
      }),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  }

  return (
    <div className="px-6 py-8 xs:px-8 xs:py-10 md:p-10 lg:px-6 bg-white rounded-2xl shadow-md border h-fit">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-2">{PackageName}</h2>
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
        {/* <Button
          variant={buttonVariantDefault ? "default" : "outline"}
          className="w-full"
          onClick={handleClick}
        >
          {buttonText}
        </Button> */}

        <Button className="w-full" onClick={handleCheckOut}>Start your Free Trial</Button>
      </div>
    </div>
  );
};

export default Card;
