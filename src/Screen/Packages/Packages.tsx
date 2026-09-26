import { Check, Sparkles, Crown, Heart, Brush, Gem } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Booking from "../Booking/Booking";

const packages = [
  {
    title: "Basic Mehendi",
    subtitle: "Perfect for simple occasions",
    icon: Heart,
    price: "₹999",
    popular: false,
    features: [
      "Simple Mehendi Design",
      "Both Hands",
      "Traditional / Minimal Design",
      "Natural Mehendi",
    ],
  },
  {
    title: "Bridal Mehendi",
    subtitle: "Beautiful designs for your special day",
    icon: Crown,
    price: "₹4,999",
    popular: true,
    features: [
      "Full Bridal Mehendi",
      "Hands & Feet",
      "Customized Bridal Design",
      "Detailed Artwork",
      "Natural Mehendi",
      "Bridal Consultation",
    ],
  },
  {
    title: "Premium Mehendi",
    subtitle: "Complete mehendi experience",
    icon: Sparkles,
    price: "₹7,999",
    popular: false,
    features: [
      "Premium Bridal Design",
      "Hands & Feet",
      "Customized Designs",
      "Engagement Mehendi",
      "Detailed Artwork",
      "Natural Mehendi",
      "Personalized Consultation",
    ],
  },
  {
    title: "Bridal Makeup",
    subtitle: "Elegant makeup for your wedding day",
    icon: Brush,
    price: "₹6,999",
    popular: false,
    features: [
      "Bridal Makeup",
      "HD / Professional Finish",
      "Eye Makeup",
      "Hair Styling",
      "Saree / Dress Draping",
      "Makeup Consultation",
    ],
  },
  {
    title: "Engagement Makeup",
    subtitle: "Look stunning for your special event",
    icon: Gem,
    price: "₹3,999",
    popular: false,
    features: [
      "Professional Makeup",
      "Eye Makeup",
      "Hair Styling",
      "Base & Finishing",
      "Customized Look",
      "Touch-up Assistance",
    ],
  },
  {
    title: "Bridal Combo",
    subtitle: "Mehendi + Makeup for your big day",
    icon: Crown,
    price: "₹10,999",
    popular: true,
    features: [
      "Full Bridal Mehendi",
      "Hands & Feet Mehendi",
      "Bridal Makeup",
      "Eye Makeup",
      "Hair Styling",
      "Saree / Dress Draping",
      "Customized Bridal Look",
      "Personalized Consultation",
    ],
  },
];

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#315c3a] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,155,76,0.2),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="mb-4 inline-block rounded-full border border-[#d8bb7a]/40 bg-white/10 px-5 py-2 text-sm font-medium text-[#f5dfad]">
            ✨ Mehendi & Makeup Packages
          </span>

          <h1 className="text-4xl font-bold text-white md:text-6xl">
            Beauty Packages
            <span className="block text-[#e3c477]">
              Made For Your Special Moments
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            From beautiful bridal mehendi to flawless makeup looks, choose the
            perfect package for your wedding, engagement, celebration or special
            occasion.
          </p>
        </div>
      </section>

      {/* Package Categories */}
      <section className="mx-auto max-w-7xl px-6 pt-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-[#e8dccb] bg-white p-5 text-center shadow-sm">
            <Heart className="mx-auto mb-2 text-[#315c3a]" size={25} />
            <h3 className="font-semibold text-[#26352a]">Mehendi</h3>
            <p className="mt-1 text-xs text-gray-500">
              Traditional & Bridal Designs
            </p>
          </div>

          <div className="rounded-2xl border border-[#e8dccb] bg-white p-5 text-center shadow-sm">
            <Brush className="mx-auto mb-2 text-[#315c3a]" size={25} />
            <h3 className="font-semibold text-[#26352a]">Makeup</h3>
            <p className="mt-1 text-xs text-gray-500">
              Bridal & Special Event Makeup
            </p>
          </div>

          <div className="rounded-2xl border border-[#e8dccb] bg-white p-5 text-center shadow-sm">
            <Crown className="mx-auto mb-2 text-[#c69b4c]" size={25} />
            <h3 className="font-semibold text-[#26352a]">Combo</h3>
            <p className="mt-1 text-xs text-gray-500">
              Complete Bridal Experience
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <div
                key={pkg.title}
                className={`group relative rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-[#c69b4c] shadow-lg"
                    : "border-[#e8dccb]"
                }`}
              >
                {/* Popular */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="whitespace-nowrap rounded-full bg-[#c69b4c] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#315c3a]/10 text-[#315c3a] transition-all duration-300 group-hover:bg-[#315c3a] group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-[#26352a]">
                  {pkg.title}
                </h2>

                <p className="mt-2 text-sm text-[#777]">{pkg.subtitle}</p>

                {/* Price */}
                <div className="my-7">
                  <span className="text-4xl font-bold text-[#315c3a]">
                    {pkg.price}
                  </span>

                  <span className="ml-2 text-sm text-gray-500">onwards</span>
                </div>

                <div className="mb-7 h-px bg-[#eee5d8]" />

                {/* Features */}
                <ul className="space-y-4">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#555]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#315c3a]/10 text-[#315c3a]">
                        <Check size={13} strokeWidth={3} />
                      </span>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => setSelectedPackage(pkg.title)}
                  className={`mt-8 flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-[#315c3a] text-white hover:bg-[#264a2e]"
                      : "border border-[#315c3a] text-[#315c3a] hover:bg-[#315c3a] hover:text-white"
                  }`}
                >
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Custom Package */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#f5f1e8] px-8 py-12 text-center md:px-16">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#c69b4c]/10" />

          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-[#315c3a]/10" />

          <div className="relative">
            <Sparkles className="mx-auto mb-4 text-[#c69b4c]" size={30} />

            <h2 className="text-3xl font-bold text-[#26352a] md:text-4xl">
              Need a Custom Package?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#666] md:text-base">
              Every bride and celebration is unique. Tell us about your event,
              preferred mehendi style and makeup look. We can create a
              customized package based on your requirements.
            </p>

            <Link
              to="/booking"
              className="mt-7 inline-flex rounded-xl bg-[#315c3a] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#264a2e] hover:shadow-lg"
            >
              Get a Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {selectedPackage && (
        <Booking
          packageName={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
};

export default Packages;
