export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  description: string;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  rating: number;
  isNewArrival: boolean;
}

export const categories = [
  {
    name: "Midi Dresses",
    slug: "midi-dresses",
    icon: "👗",
    description: "Elegant midi-length dresses for every occasion",
  },
  {
    name: "Maxi Dresses",
    slug: "maxi-dresses",
    icon: "👗",
    description: "Flowing maxi dresses that make a statement",
  },
  {
    name: "Formal Skirts",
    slug: "formal-skirts",
    icon: "🩳",
    description: "Sophisticated skirts for the modern woman",
  },
  {
    name: "Accessories",
    slug: "accessories",
    icon: "👜",
    description: "Complete your look with curated accessories",
  },
];

export const products: Product[] = [
  {
    id: "flora-bloom-midi",
    name: "Flora Bloom Midi",
    price: 3499,
    originalPrice: 4999,
    category: "Midi Dresses",
    categorySlug: "midi-dresses",
    description:
      "A beautiful floral print midi dress with a flattering A-line silhouette. Features a cinched waist and flowing skirt that moves gracefully with every step. Perfect for brunches, garden parties, and special occasions.",
    colors: [
      { name: "Blush Pink", hex: "#f5c6c6" },
      { name: "Sage Green", hex: "#b5c9b0" },
      { name: "Ivory", hex: "#fffff0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.8,
    isNewArrival: true,
  },
  {
    id: "petal-wrap-midi",
    name: "Petal Wrap Midi",
    price: 3999,
    category: "Midi Dresses",
    categorySlug: "midi-dresses",
    description:
      "An elegant wrap-style midi dress with delicate petal embroidery. The V-neckline and adjustable tie waist create a universally flattering fit. Made from premium breathable fabric.",
    colors: [
      { name: "Dusty Rose", hex: "#d4a69a" },
      { name: "Cream", hex: "#fdf8f4" },
      { name: "Lavender", hex: "#c8b6d4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.9,
    isNewArrival: true,
  },
  {
    id: "garden-linen-midi",
    name: "Garden Linen Midi",
    price: 2999,
    category: "Midi Dresses",
    categorySlug: "midi-dresses",
    description:
      "A relaxed linen midi dress inspired by garden florals. Button-front design with side pockets and a comfortable fit. Ideal for everyday elegance.",
    colors: [
      { name: "Natural Linen", hex: "#e8ddd4" },
      { name: "Soft Blue", hex: "#b8cce0" },
      { name: "Terracotta", hex: "#c87856" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.6,
    isNewArrival: true,
  },
  {
    id: "orchid-pleated-midi",
    name: "Orchid Pleated Midi",
    price: 4499,
    originalPrice: 5499,
    category: "Midi Dresses",
    categorySlug: "midi-dresses",
    description:
      "A luxurious pleated midi dress with an orchid-inspired print. Features a high neckline, fitted bodice, and knife-pleated skirt. An elevated choice for formal events.",
    colors: [
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Midnight", hex: "#2c2c3e" },
      { name: "Rose Gold", hex: "#c9928e" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.7,
    isNewArrival: true,
  },
  {
    id: "sunset-maxi",
    name: "Sunset Maxi Dress",
    price: 4299,
    category: "Maxi Dresses",
    categorySlug: "maxi-dresses",
    description:
      "A stunning floor-length maxi with sunset-inspired ombré tones. Adjustable spaghetti straps and a flowing silhouette make it perfect for beach weddings and summer evenings.",
    colors: [
      { name: "Sunset Coral", hex: "#e8946a" },
      { name: "Ocean Blue", hex: "#6b9cc4" },
      { name: "Sand", hex: "#e8ddd4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.5,
    isNewArrival: false,
  },
  {
    id: "meadow-maxi",
    name: "Meadow Maxi Dress",
    price: 3799,
    category: "Maxi Dresses",
    categorySlug: "maxi-dresses",
    description:
      "A dreamy tiered maxi dress with meadow-inspired prints. Puff sleeves and a smocked bodice create a romantic look. Made from lightweight cotton blend.",
    colors: [
      { name: "White Floral", hex: "#faf7f5" },
      { name: "Dusty Pink", hex: "#e8cfc5" },
    ],
    sizes: ["S", "M", "L", "XL"],
    images: [],
    rating: 4.8,
    isNewArrival: false,
  },
  {
    id: "tailored-pencil-skirt",
    name: "Tailored Pencil Skirt",
    price: 2499,
    category: "Formal Skirts",
    categorySlug: "formal-skirts",
    description:
      "A classic pencil skirt with impeccable tailoring. High-waisted with a back slit for ease of movement. A wardrobe essential for professional settings.",
    colors: [
      { name: "Charcoal", hex: "#3d3632" },
      { name: "Navy", hex: "#2c3e50" },
      { name: "Camel", hex: "#c9a96e" },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    images: [],
    rating: 4.4,
    isNewArrival: false,
  },
  {
    id: "pleated-formal-skirt",
    name: "Pleated Formal Skirt",
    price: 2799,
    category: "Formal Skirts",
    categorySlug: "formal-skirts",
    description:
      "An elegant pleated midi skirt in premium satin finish. The accordion pleats catch light beautifully. Pairs perfectly with blouses and structured tops.",
    colors: [
      { name: "Champagne", hex: "#f7e7ce" },
      { name: "Emerald", hex: "#3d8b6e" },
      { name: "Blush", hex: "#f5e6e0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [],
    rating: 4.6,
    isNewArrival: false,
  },
  {
    id: "silk-scarf",
    name: "Flora Silk Scarf",
    price: 1299,
    category: "Accessories",
    categorySlug: "accessories",
    description:
      "A luxurious silk scarf with a signature Flora by Tanu botanical print. Can be worn as a headband, neck scarf, or bag accessory. 100% mulberry silk.",
    colors: [
      { name: "Rose Garden", hex: "#d4a69a" },
      { name: "Sage", hex: "#b5c9b0" },
      { name: "Ivory", hex: "#fffff0" },
    ],
    sizes: ["One Size"],
    images: [],
    rating: 4.9,
    isNewArrival: false,
  },
  {
    id: "pearl-hair-clip",
    name: "Pearl Hair Clip Set",
    price: 899,
    category: "Accessories",
    categorySlug: "accessories",
    description:
      "A set of three elegant pearl-adorned hair clips. Perfect for adding a touch of sophistication to any hairstyle. Comes in a Flora by Tanu gift box.",
    colors: [
      { name: "Gold & Pearl", hex: "#f7e7ce" },
      { name: "Silver & Pearl", hex: "#e0e0e0" },
    ],
    sizes: ["One Size"],
    images: [],
    rating: 4.7,
    isNewArrival: false,
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNewArrival);
}
