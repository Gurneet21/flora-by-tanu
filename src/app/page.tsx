import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import NewArrivals from "@/components/NewArrivals";
import PromoBanner from "@/components/PromoBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <NewArrivals />
      <PromoBanner />
      <WhyChooseUs />
      <Newsletter />
    </>
  );
}
