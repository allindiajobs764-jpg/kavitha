

const artists = [
  {
    name: "Meera Mehendi",
    location: "Chennai, Tamil Nadu",
    experience: "8 Years Experience",
    rating: "4.9",
    reviews: "128",
    specialty: "Bridal & Traditional",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Aishwarya Arts",
    location: "Coimbatore, Tamil Nadu",
    experience: "6 Years Experience",
    rating: "4.8",
    reviews: "96",
    specialty: "Arabic & Minimal",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Zara Mehendi",
    location: "Bangalore, Karnataka",
    experience: "10 Years Experience",
    rating: "5.0",
    reviews: "214",
    specialty: "Bridal & Luxury",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Divya Henna Art",
    location: "Madurai, Tamil Nadu",
    experience: "5 Years Experience",
    rating: "4.9",
    reviews: "82",
    specialty: "Floral & Arabic",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Nila Mehendi",
    location: "Kochi, Kerala",
    experience: "7 Years Experience",
    rating: "4.9",
    reviews: "105",
    specialty: "Traditional & Bridal",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Riya Henna Studio",
    location: "Hyderabad, Telangana",
    experience: "4 Years Experience",
    rating: "4.8",
    reviews: "67",
    specialty: "Modern & Minimal",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
  },
];

const Artists = () => {
  return (
    <section className="min-h-screen bg-[#fffdf8]">

      {/* Hero */}
      <div className="relative overflow-hidden bg-[#315c3a]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[50px] border-[#d0a64a]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border-[50px] border-[#d0a64a]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e4c778]">
            Meet Our Artists
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Find Your Perfect
            <span className="block text-[#e4c778]">
              Mehendi Artist
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            Discover talented mehendi artists who bring creativity,
            tradition, and beautiful designs to your special occasions.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              "All Artists",
              "Bridal",
              "Arabic",
              "Traditional",
              "Minimal",
            ].map((filter, index) => (
              <button
                key={filter}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-[#315c3a] text-white shadow-md"
                    : "border border-[#e3d9c8] bg-white text-gray-600 hover:border-[#315c3a] hover:text-[#315c3a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <select className="rounded-full border border-[#e3d9c8] bg-white px-5 py-2.5 text-sm text-gray-600 outline-none focus:border-[#315c3a]">
            <option>Sort By</option>
            <option>Top Rated</option>
            <option>Most Experienced</option>
            <option>Most Popular</option>
          </select>
        </div>

        {/* Artist Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="group overflow-hidden rounded-3xl border border-[#eee5d7] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold text-[#315c3a] shadow-sm backdrop-blur">
                  <span className="text-[#d0a64a]">★</span>
                  {artist.rating}
                </div>

                {/* Specialty */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-[#315c3a]/90 px-4 py-2 text-xs font-medium text-white backdrop-blur">
                    {artist.specialty}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#315c3a]">
                      {artist.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      📍 {artist.location}
                    </p>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f1e8] text-[#315c3a]">
                    ♡
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 flex items-center justify-between border-y border-[#eee5d7] py-4">
                  <div>
                    <p className="text-xs text-gray-400">
                      Experience
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-700">
                      {artist.experience}
                    </p>
                  </div>

                  <div className="h-8 w-px bg-[#e8dfd2]" />

                  <div>
                    <p className="text-xs text-gray-400">
                      Reviews
                    </p>
                    <p className="mt-1 text-sm font-semibold text-gray-700">
                      {artist.reviews}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button className="mt-5 w-full rounded-full bg-[#315c3a] py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#264a2e] hover:shadow-lg">
                  View Artist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-[#f5f1e8] px-6 py-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b38a3e]">
            Are You An Artist?
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold text-[#315c3a]">
            Join Our Mehendi Artist Community
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500">
            Showcase your talent, connect with new customers and
            grow your mehendi business.
          </p>

          <button className="mt-6 rounded-full bg-[#315c3a] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#264a2e]">
            Become an Artist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Artists;