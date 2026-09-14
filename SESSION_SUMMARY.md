# Flora by Tanu — Session Summary

## Stack
Next.js 16 (App Router) + Supabase + Stripe + Tailwind CSS v4 + Zustand

## What Was Built
- **Homepage:** Hero banner, Shop by Category grid, New Arrivals section
- **Product pages:** Color picker, size selector, add-to-cart with feedback
- **Category pages:** Filtered product listings for Midi Dresses, Maxi Dresses, Formal Skirts, Accessories
- **Cart page:** Quantity controls, remove items, subtotal, proceed to checkout
- **Checkout page:** Shipping form + order summary, Stripe Checkout Session integration
- **Auth page:** Google OAuth, Apple OAuth, email/password login/signup, guest checkout
- **Supabase:** Database schema with RLS, products seeded, OAuth callback route
- **Stripe:** Checkout session API route (`/api/checkout`), webhook handler (`/api/webhook`)
- **Design:** Blush/pink/beige theme with CSS custom properties
- **Images:** Model photo (`public/model.jpg`) used across Hero, ProductCard, CategoryGrid, ProductDetail, and Cart

## Key Files
| File | Purpose |
|------|---------|
| `src/lib/products.ts` | Product data, types, helpers (10 products, 4 new arrivals) |
| `src/lib/cart-store.ts` | Zustand cart with localStorage persistence |
| `src/lib/supabase.ts` | Lazy-initialized Supabase client |
| `src/lib/stripe.ts` | Stripe client-side loader |
| `src/components/Hero.tsx` | Hero banner with model photo |
| `src/components/ProductCard.tsx` | Product card with image, price, colors |
| `src/components/CategoryGrid.tsx` | Category grid with images |
| `src/app/product/[id]/ProductDetail.tsx` | Product detail with color/size selectors |
| `src/app/cart/page.tsx` | Shopping cart |
| `src/app/checkout/page.tsx` | Checkout with Stripe |
| `src/app/auth/page.tsx` | Authentication (OAuth + email) |
| `.env.local` | Supabase credentials (DO NOT COMMIT) |

## Pending / Next Steps
1. **Commit** uncommitted changes (model image updates across components)
2. **Deploy to Vercel** so the link can be shared
3. **Configure Google OAuth** in Supabase dashboard (needs Google Cloud OAuth Client ID/Secret)
4. **Add real Stripe keys** in `.env.local` (currently placeholders)
5. **Clean up** `modelphoto.jpg` from project root (duplicate of `public/model.jpg`)

## Git History
- 4 commits on `main`, last: `28a5296`
- Uncommitted: Hero.tsx, ProductCard.tsx, CategoryGrid.tsx, ProductDetail.tsx, Cart page (model image updates), public/model.jpg
