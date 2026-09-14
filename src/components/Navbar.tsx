"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useState, useEffect } from "react";

export default function Navbar() {
  const totalItems = useCartStore((s) => s.totalItems);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-charcoal">
              Flora
            </span>
            <span className="text-sm text-taupe font-light">by Tanu</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal">
            <Link href="/" className="hover:text-rose transition-colors">
              Home
            </Link>
            <Link
              href="/category/midi-dresses"
              className="hover:text-rose transition-colors"
            >
              Midi Dresses
            </Link>
            <Link
              href="/category/maxi-dresses"
              className="hover:text-rose transition-colors"
            >
              Maxi Dresses
            </Link>
            <Link
              href="/category/formal-skirts"
              className="hover:text-rose transition-colors"
            >
              Formal Skirts
            </Link>
            <Link
              href="/category/accessories"
              className="hover:text-rose transition-colors"
            >
              Accessories
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-charcoal hover:text-rose transition-colors">
              <Search size={20} />
            </button>
            <Link
              href="/cart"
              className="relative text-charcoal hover:text-rose transition-colors"
            >
              <ShoppingBag size={20} />
              {mounted && totalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {totalItems()}
                </span>
              )}
            </Link>
            <Link
              href="/auth"
              className="text-charcoal hover:text-rose transition-colors"
            >
              <User size={20} />
            </Link>
            <button
              className="md:hidden text-charcoal"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-charcoal">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-rose"
            >
              Home
            </Link>
            <Link
              href="/category/midi-dresses"
              onClick={() => setMenuOpen(false)}
              className="hover:text-rose"
            >
              Midi Dresses
            </Link>
            <Link
              href="/category/maxi-dresses"
              onClick={() => setMenuOpen(false)}
              className="hover:text-rose"
            >
              Maxi Dresses
            </Link>
            <Link
              href="/category/formal-skirts"
              onClick={() => setMenuOpen(false)}
              className="hover:text-rose"
            >
              Formal Skirts
            </Link>
            <Link
              href="/category/accessories"
              onClick={() => setMenuOpen(false)}
              className="hover:text-rose"
            >
              Accessories
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
