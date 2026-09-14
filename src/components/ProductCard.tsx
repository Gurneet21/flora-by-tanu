import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <Link
      href={`/product/${product.id}`}
      className="group bg-white rounded-xl border border-sand overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[3/4] bg-gradient-to-b from-blush to-cream flex items-center justify-center">
        <span className="text-5xl group-hover:scale-110 transition-transform">
          🌺
        </span>
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-rose text-white text-xs font-medium px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
        {product.isNewArrival && (
          <span className="absolute top-3 right-3 bg-charcoal text-white text-xs font-medium px-2 py-1 rounded-full">
            New
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-charcoal group-hover:text-rose-dark transition-colors truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < Math.round(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-sand"
              }
            />
          ))}
          <span className="text-xs text-taupe ml-1">{product.rating}</span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-bold text-charcoal">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-taupe line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <div className="flex gap-1 mt-2">
          {product.colors.slice(0, 4).map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="w-4 h-4 rounded-full border border-sand"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
