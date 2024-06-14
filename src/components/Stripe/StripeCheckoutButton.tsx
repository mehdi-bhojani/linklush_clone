import React from 'react';

function StripeCheckoutButton() {
  return (
    <div>
      dasda
    </div>
  );
}

export default StripeCheckoutButton;



/* "use client";
import { Button } from "@/components/ui/button";
import React from "react";
import getStripePromise from "@/lib/stripe";

const StripeCheckoutButton = () => {
  const handleCheckOut = async () => {
    const stripe = await getStripePromise();

    const packages = {
      packagName: "pro",
      price: 4,
      description: "this is description",
      trial_days: 7,
      priceUnit: "month"
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
  };

  return <Button onClick={handleCheckOut}>Checkout</Button>;
};

export default StripeCheckoutButton;
 */