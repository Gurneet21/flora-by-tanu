import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blush via-cream to-blush overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col sm:flex-row items-center gap-8">
        <div className="flex-1 space-y-6 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tight">
            Discover Your
            <br />
            <span className="text-rose-dark">Style</span>
          </h1>
          <p className="text-taupe text-lg max-w-md mx-auto sm:mx-0">
            Premium clothing for every occasion. Curated with love by Tanu.
          </p>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link
              href="/category/midi-dresses"
              className="bg-charcoal text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-rose-dark transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="#new-arrivals"
              className="border border-charcoal text-charcoal px-6 py-3 rounded-full text-sm font-medium hover:bg-charcoal hover:text-white transition-colors"
            >
              Explore New Arrivals
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-72 h-96 sm:w-80 sm:h-[28rem] bg-gradient-to-b from-blush-dark/40 to-rose/20 rounded-2xl flex items-center justify-center">
            <span className="text-6xl">🌸</span>
          </div>
        </div>
      </div>
    </section>
  );
}
