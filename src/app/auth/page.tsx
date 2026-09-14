"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Supabase Auth will be connected once you add your Supabase credentials to .env.local"
    );
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-2xl border border-sand">
        <h1 className="text-2xl font-bold text-charcoal text-center mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-taupe text-center text-sm mb-6">
          {isLogin
            ? "Sign in to your Flora by Tanu account"
            : "Join Flora by Tanu today"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-sand bg-white text-charcoal placeholder:text-taupe focus:outline-none focus:ring-2 focus:ring-rose/40"
          />
          <button
            type="submit"
            className="w-full bg-charcoal text-white py-3 rounded-full font-medium hover:bg-rose-dark transition-colors"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <p className="text-center text-sm text-taupe mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-rose-dark font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
}
