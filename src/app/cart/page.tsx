"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useState, useEffect } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-charcoal mb-8">Your Cart</h1>
        <div className="text-center py-20 text-taupe">Loading...</div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 text-center">
        <ShoppingBag size={64} className="mx-auto text-sand mb-4" />
        <h1 className="text-2xl font-bold text-charcoal mb-2">
          Your cart is empty
        </h1>
        <p className="text-taupe mb-6">
          Looks like you haven&apos;t added anything yet.
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold text-charcoal mb-8">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={`${item.productId}-${item.color}-${item.size}`}
            className="flex items-center gap-4 bg-white p-4 rounded-xl border border-sand"
          >
            <div className="w-20 h-24 rounded-lg overflow-hidden shrink-0">
              <img
                src="/model.jpg"
                alt={item.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-charcoal truncate">
                {item.name}
              </h3>
              <p className="text-sm text-taupe">
                {item.color} · {item.size}
              </p>
              <p className="font-bold text-charcoal mt-1">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateQuantity(
                    item.productId,
                    item.color,
                    item.size,
                    item.quantity - 1
                  )
                }
                className="p-1.5 rounded-lg border border-sand hover:border-rose/60 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() =>
                  updateQuantity(
                    item.productId,
                    item.color,
                    item.size,
                    item.quantity + 1
                  )
                }
                className="p-1.5 rounded-lg border border-sand hover:border-rose/60 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              onClick={() =>
                removeItem(item.productId, item.color, item.size)
              }
              className="p-2 text-taupe hover:text-red-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl border border-sand">
        <div className="flex justify-between items-center mb-4">
          <span className="text-taupe">Subtotal</span>
          <span className="font-bold text-charcoal text-xl">
            ₹{totalPrice().toLocaleString("en-IN")}
          </span>
        </div>
        <p className="text-xs text-taupe mb-4">
          Shipping and taxes calculated at checkout
        </p>
        <Link
          href="/checkout"
          className="block w-full text-center bg-charcoal text-white py-3 rounded-full font-medium hover:bg-rose-dark transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
