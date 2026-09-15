import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-08-26.dahlia",
});

export async function POST(req: Request) {
  try {
    const { items, customerInfo } = await req.json();

    const lineItems = items.map(
      (item: {
        name: string;
        price: number;
        color: string;
        size: string;
        quantity: number;
      }) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
            description: `Color: ${item.color} | Size: ${item.size}`,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      customer_email: customerInfo.email,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cart`,
      metadata: {
        customerName: customerInfo.name,
        address: customerInfo.address,
        city: customerInfo.city,
        state: customerInfo.state,
        pincode: customerInfo.pincode,
        phone: customerInfo.phone,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
