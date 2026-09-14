"use client";

import { useState } from "react";
import { Star, ShoppingBag, Heart } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import type { Product } from "@/lib/products";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor.name,
      size: selectedSize,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="aspect-[3/4] bg-gradient-to-b from-blush to-cream rounded-2xl flex items-center justify-center relative">
          <span className="text-8xl">🌺</span>
          {discount > 0 && (
            <span className="absolute top-4 left-4 bg-rose text-white text-sm font-medium px-3 py-1 rounded-full">
              -{discount}% OFF
            </span>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-taupe uppercase tracking-wider">
              {product.category}
            </p>
            <h1 className="text-3xl font-bold text-charcoal mt-1">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-sand"
                    }
                  />
                ))}
              </div>
              <span className="text-sm text-taupe">({product.rating})</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-charcoal">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-taupe line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <p className="text-taupe leading-relaxed">{product.description}</p>

          <div>
            <h3 className="font-semibold text-charcoal mb-3">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  title={c.name}
                  onClick={() => setSelectedColor(c)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor.name === c.name
                      ? "border-rose-dark ring-2 ring-rose/40 scale-110"
                      : "border-sand hover:border-rose/60"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <p className="text-sm text-taupe mt-2">{selectedColor.name}</p>
          </div>

          <div>
            <h3 className="font-semibold text-charcoal mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                    selectedSize === s
                      ? "border-rose-dark bg-rose-dark text-white"
                      : "border-sand text-charcoal hover:border-rose/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p className="text-xs text-rose-dark mt-2">
                Please select a size
              </p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-medium transition-all ${
                added
                  ? "bg-green-600 text-white"
                  : selectedSize
                    ? "bg-charcoal text-white hover:bg-rose-dark"
                    : "bg-sand text-taupe cursor-not-allowed"
              }`}
            >
              <ShoppingBag size={18} />
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>
            <button className="p-3 rounded-full border border-sand text-charcoal hover:border-rose hover:text-rose transition-colors">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
