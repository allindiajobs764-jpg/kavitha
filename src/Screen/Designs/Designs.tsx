import React, { useState } from "react";

const categories = [
  "All Designs",
  "Bridal",
  "Arabic",
  "Traditional",
  "Minimal",
  "Engagement",
];

const designs = [
  {
    title: "Royal Bridal Mehendi",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Elegant Arabic",
    category: "Arabic",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Traditional Bridal",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Simple Floral",
    category: "Minimal",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Engagement Special",
    category: "Engagement",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Arabic Bridal",
    category: "Arabic",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Full Hand Bridal",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Classic Traditional",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
];

const Designs = () => {
  const [activeCategory, setActiveCategory] = useState("All Designs");

  const filteredDesigns =
    activeCategory === "All Designs"
      ? designs
      : designs.filter((item) => item.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#fffdf8]">

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#315c3a]">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-[#d0a64a]/20" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-[#d0a64a]/20" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e4c778]">
            Our Mehendi Collection
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Designs Made With
            <span className="block text-[#e4c778]">
              Love & Tradition
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Explore our beautiful collection of mehendi designs,
            carefully created by Kavitha for brides and special
            occasions.
          </p>
        </div>
      </div>

      {/* Designs Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-[#315c3a] text-white shadow-md"
                    : "border border-[#e3d9c8] bg-white text-gray-600 hover:border-[#315c3a] hover:text-[#315c3a]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {filteredDesigns.map((design) => (
            <div
              key={design.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-[390px] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90" />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#315c3a] backdrop-blur">
                    {design.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="font-serif text-xl font-bold text-white">
                    {design.title}
                  </h2>

                  <button className="mt-3 flex items-center gap-2 text-sm font-medium text-[#f1d083] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    View Design
                    <span>→</span>
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-gray-500">
              No designs available in this category.
            </p>
          </div>
        )}

        {/* Booking CTA */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-[#f5f1e8]">
          <div className="px-6 py-14 text-center sm:px-12">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38a3e]">
              Create Your Own Design
            </p>

            <h2 className="mt-3 font-serif text-3xl font-bold text-[#315c3a] sm:text-4xl">
              Looking For Something Special?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-500">
              Tell Kavitha about your occasion and preferred style.
              We can create a beautiful mehendi design especially
              for you.
            </p>

            <a
              href="/booking"
              className="mt-7 inline-block rounded-full bg-[#315c3a] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#264a2e] hover:shadow-lg"
            >
              Book Your Mehendi
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Designs;
