import { getNewArrivals } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function NewArrivals() {
  const arrivals = getNewArrivals();

  return (
    <section id="new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
        New Arrivals
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {arrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
