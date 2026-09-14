import { Award, Leaf, Globe, RotateCcw } from "lucide-react";

const features = [
  { icon: Award, label: "Premium Quality", desc: "Handpicked fabrics" },
  { icon: Leaf, label: "Eco-friendly Materials", desc: "Sustainable fashion" },
  { icon: Globe, label: "Worldwide Shipping", desc: "Delivered to your door" },
  { icon: RotateCcw, label: "Easy Returns", desc: "30-day return policy" },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-8">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.label} className="text-center">
            <div className="w-14 h-14 mx-auto mb-3 bg-blush rounded-full flex items-center justify-center">
              <f.icon size={24} className="text-rose-dark" />
            </div>
            <h3 className="font-semibold text-charcoal text-sm">{f.label}</h3>
            <p className="text-xs text-taupe mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
