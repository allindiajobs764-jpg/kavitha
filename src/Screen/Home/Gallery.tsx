
const galleryItems = [
  {
    title: "Bridal Mehendi",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1610173827043-7f9e8a7b6c4a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Arabic Elegance",
    category: "Arabic",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Royal Bridal",
    category: "Bridal",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Floral Mehendi",
    category: "Floral",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Traditional Art",
    category: "Traditional",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Minimal Mehendi",
    category: "Minimal",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#fffdf8] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38a3e]">
            Our Collection
          </span>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#315c3a] sm:text-5xl">
            Designs Made With Love
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Explore our beautiful collection of bridal, Arabic,
            traditional and contemporary mehendi designs.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-3xl bg-[#eee8dc] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90" />

              {/* Category */}
              <div className="absolute left-5 top-5">
                <span className="rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-sm text-white/70">
                      Explore design
                    </span>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d0a64a] text-white transition hover:bg-[#b88d35]">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <button className="rounded-full border border-[#315c3a] px-7 py-3 text-sm font-semibold text-[#315c3a] transition-all duration-300 hover:bg-[#315c3a] hover:text-white">
            View All Designs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;