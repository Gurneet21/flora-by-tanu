"use client";

import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/cart-store";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function CheckoutPage() {
  const { items, totalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
        <ShoppingBag size={64} className="mx-auto text-sand mb-4" />
        <h1 className="text-2xl font-bold text-charcoal mb-2">
          Nothing to checkout
        </h1>
        <Link
          href="/"
          className="inline-block mt-4 bg-charcoal text-white px-6 py-3 rounded-full font-medium hover:bg-rose-dark transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, customerInfo: form }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-charcoal mb-8">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-4">
          <h2 className="font-semibold text-charcoal text-lg">
            Shipping Information
          </h2>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <input
            type="text"
            placeholder="Address"
            value={form.address}
            onChange={(e) => updateField("address", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
            <input
              type="text"
              placeholder="State"
              value={form.state}
              onChange={(e) => updateField("state", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="PIN Code"
              value={form.pincode}
              onChange={(e) => updateField("pincode", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-cream p-6 rounded-xl sticky top-24">
            <h2 className="font-semibold text-charcoal text-lg mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 mb-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.color}-${item.size}`}
                  className="flex justify-between text-sm"
                >
                  <span className="text-taupe truncate mr-2">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="text-charcoal font-medium whitespace-nowrap">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-sand pt-3 flex justify-between">
              <span className="font-semibold text-charcoal">Total</span>
              <span className="font-bold text-charcoal text-xl">
                ₹{totalPrice().toLocaleString("en-IN")}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={loading || !form.email || !form.name}
              className="mt-4 w-full bg-charcoal text-white py-3 rounded-full font-medium hover:bg-rose-dark transition-colors disabled:bg-sand disabled:text-taupe disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Pay with Stripe"}
            </button>
            <p className="text-xs text-taupe mt-3 text-center">
              You&apos;ll be redirected to Stripe for secure payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
