"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useEffect } from "react";

export default function SuccessPage() {
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-charcoal mb-2">
        Order Confirmed!
      </h1>
      <p className="text-taupe mb-8">
        Thank you for shopping with Flora by Tanu. You&apos;ll receive an order
        confirmation email shortly.
      </p>
      <Link
        href="/"
        className="inline-block bg-charcoal text-white px-6 py-3 rounded-full font-medium hover:bg-rose-dark transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
