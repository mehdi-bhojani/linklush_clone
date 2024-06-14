import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
  apiVersion: "2024-04-10",
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const { packages } = body;

    if (packages) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        billing_address_collection: "auto",
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: packages.packagName,
                description: packages.description,
              },
              unit_amount: packages.price * 100, // Convert price to smallest currency unit
              recurring: {
                interval: packages.priceUnit,
              },
            },
            quantity: 1,
          },
        ],
        allow_promotion_codes: true,
        subscription_data: {
          trial_period_days: packages.trial_days,
        },
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });

      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "Invalid Package Type" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(err);
  }
}
