import { Link } from "react-router-dom";
import { images } from "../../constent/imageConstent";
import { motion } from "motion/react";

const galleryItems = [
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
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Gallery = () => {
  return (
    <motion.section
      id="gallery"
      className="bg-[#fffdf8] px-6 py-20 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b38a3e]"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Our Collection
          </motion.span>

          <motion.h2
            className="mt-3 font-serif text-4xl font-bold text-[#315c3a] sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Designs Made With Love
          </motion.h2>

          <motion.p
            className="mt-4 text-sm leading-6 text-gray-500 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Explore our beautiful collection of bridal, Arabic,
            traditional and contemporary mehendi designs.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              //@ts-ignore
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotate: index % 2 === 0 ? -0.5 : 0.5,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group relative h-[420px] cursor-pointer overflow-hidden rounded-3xl bg-[#eee8dc] shadow-sm"
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={`Mehendi design ${index + 1}`}
                className="h-full w-full object-cover"
                initial={{
                  scale: 1.15,
                }}
                whileInView={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />

              {/* Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.95 }}
                transition={{ duration: 0.4 }}
              />

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                whileHover={{
                  translateX: "100%",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{
                      opacity: 1,
                      y: 0,
                    }}
                  >
                    <span className="text-sm text-white/80">
                      Explore design
                    </span>

                    <motion.button
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d0a64a] text-white"
                      whileHover={{
                        scale: 1.15,
                        rotate: 45,
                        backgroundColor: "#b88d35",
                      }}
                      whileTap={{
                        scale: 0.9,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      →
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <Link to="/gallery">
            <motion.button
              className="rounded-full border border-[#315c3a] px-7 py-3 text-sm font-semibold text-[#315c3a]"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#315c3a",
                color: "#ffffff",
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              View All Designs →
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;