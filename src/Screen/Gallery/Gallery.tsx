import { images } from "../../constent/imageConstent";

const galleryItems = [
  { image: images.image1 },
  { image: images.image2 },
  { image: images.image3 },
  { title: "Floral Mehendi", image: images.image4 },
  { title: "Traditional Art", image: images.image5 },
  { image: images.image6 },
  { image: images.image7 },
  { image: images.image8 },
  { image: images.image9 },
  { image: images.image10 },
  { image: images.image11 },
  { image: images.image12 },
  { image: images.image13 },
  { image: images.image14 },
  { image: images.image15 },
  { image: images.image16 },
  { image: images.image17 },
  { image: images.image18 },
  { image: images.image19 },
  { image: images.image20 },
  { image: images.image21 },
  { image: images.image22 },
  { image: images.image23 },
  { image: images.image24 },
  { image: images.image25 },
  { image: images.image26 },
  { image: images.image27 },
  { image: images.image28 },
  { image: images.image29 },
  { image: images.image30 },
  { image: images.image31 },
  { image: images.image33 },
  { image: images.image34 },
  { image: images.image35 },
  { image: images.image36 },
  { image: images.image37 },
  { image: images.image38 },
  { image: images.image39 },
  { image: images.image40 },
  { image: images.image41 },
  { image: images.image42 },
  { image: images.image43 },
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
              className="
                group
                relative
                h-[420px]
                overflow-hidden
                rounded-3xl
                bg-[#eee8dc]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title || `Mehendi design ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              {/* Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                  transition-opacity
                  duration-300
                  group-hover:opacity-95
                "
              />

              {/* Top decorative glow */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  h-12
                  w-12
                  scale-75
                  rounded-full
                  border
                  border-white/20
                  bg-white/10
                  opacity-0
                  backdrop-blur-md
                  transition-all
                  duration-300
                  group-hover:scale-100
                  group-hover:opacity-100
                "
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="
                    translate-y-4
                    opacity-0
                    transition-all
                    duration-400
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {item.title && (
                    <h3 className="font-serif text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                  )}

                  <div
                    className={`flex items-center justify-between ${
                      item.title ? "mt-4" : ""
                    }`}
                  >
                    <span className="text-sm text-white/75">
                      Explore design
                    </span>

                    <button
                      type="button"
                      aria-label={`Explore ${
                        item.title || "mehendi design"
                      }`}
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-[#d0a64a]
                        text-lg
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:-rotate-6
                        hover:bg-[#b88d35]
                        active:scale-90
                      "
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Border */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-3xl
                  border
                  border-transparent
                  transition-colors
                  duration-300
                  group-hover:border-white/30
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;