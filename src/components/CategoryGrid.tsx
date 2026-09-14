import Link from "next/link";
import { categories } from "@/lib/products";

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="group bg-white rounded-xl border border-sand p-6 text-center hover:shadow-lg hover:border-rose/40 transition-all duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-blush rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-charcoal group-hover:text-rose-dark transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-taupe mt-1 hidden sm:block">
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
