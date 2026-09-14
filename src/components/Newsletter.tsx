"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-2">
          Newsletter Signup
        </h2>
        <p className="text-taupe mb-6">
          Get the latest styles and exclusive offers delivered to your inbox.
        </p>
        {submitted ? (
          <p className="text-rose-dark font-medium">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
            <button
              type="submit"
              className="bg-rose-dark text-white px-6 py-3 rounded-full font-medium hover:bg-rose transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
