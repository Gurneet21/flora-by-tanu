import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-sand py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-charcoal mb-3">Flora by Tanu</h3>
            <p className="text-sm text-taupe">
              Curated fashion that celebrates elegance, comfort, and
              individuality.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-3 text-sm">Shop</h4>
            <ul className="space-y-2 text-sm text-taupe">
              <li>
                <Link
                  href="/category/midi-dresses"
                  className="hover:text-rose-dark transition-colors"
                >
                  Midi Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/category/maxi-dresses"
                  className="hover:text-rose-dark transition-colors"
                >
                  Maxi Dresses
                </Link>
              </li>
              <li>
                <Link
                  href="/category/formal-skirts"
                  className="hover:text-rose-dark transition-colors"
                >
                  Formal Skirts
                </Link>
              </li>
              <li>
                <Link
                  href="/category/accessories"
                  className="hover:text-rose-dark transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-3 text-sm">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-taupe">
              <li>
                <span className="hover:text-rose-dark cursor-pointer transition-colors">
                  About Us
                </span>
              </li>
              <li>
                <span className="hover:text-rose-dark cursor-pointer transition-colors">
                  Contact
                </span>
              </li>
              <li>
                <span className="hover:text-rose-dark cursor-pointer transition-colors">
                  Shipping Policy
                </span>
              </li>
              <li>
                <span className="hover:text-rose-dark cursor-pointer transition-colors">
                  Returns
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-3 text-sm">
              Follow Us
            </h4>
            <ul className="space-y-2 text-sm text-taupe">
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sand mt-8 pt-6 text-center text-xs text-taupe">
          © 2024 Flora by Tanu. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
