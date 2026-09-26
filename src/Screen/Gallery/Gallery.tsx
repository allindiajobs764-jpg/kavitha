import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="bg-[#fffdf8] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38a3e]"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{
              opacity: 1,
              letterSpacing: "0.3em",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Collection
          </motion.span>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#315c3a] sm:text-5xl">
            Designs Made With Love
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">
            Explore our beautiful collection of bridal, Arabic,
            traditional and contemporary mehendi designs.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-[420px] overflow-hidden rounded-3xl bg-[#eee8dc] shadow-sm"
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={
                  item.title ||
                  `Mehendi design ${index + 1}`
                }
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              />

              {/* Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 0.95 }}
                transition={{ duration: 0.4 }}
              />

              {/* Top decorative glow */}
              <motion.div
                className="absolute left-5 top-5 h-12 w-12 rounded-full border border-white/20 bg-white/10 backdrop-blur-md"
                initial={{ opacity: 0, scale: 0.7 }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
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

                    <motion.button
                      aria-label={`Explore ${
                        item.title || "mehendi design"
                      }`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d0a64a] text-lg text-white shadow-lg"
                      whileHover={{
                        scale: 1.15,
                        rotate: -8,
                        backgroundColor: "#b88d35",
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                    >
                      →
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Border animation */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl border border-white/0"
                whileHover={{
                  borderColor: "rgba(255,255,255,0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
