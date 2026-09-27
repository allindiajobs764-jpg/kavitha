import { motion } from "motion/react";
import HeroImage from "../../assets/HeroImage.jpg";
import { images } from "../../constent/imageConstent";

const Hero = () => {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* ================= BACKGROUND IMAGE ================= */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
      />

      {/* ================= OVERLAY ================= */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#162d1c]/95 via-[#315c3a]/75 to-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 lg:px-8">
        {/* LEFT CONTENT */}
        <div className="w-full max-w-3xl py-16 lg:w-[55%]">
          {/* Brand Label */}
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e6c77a]/40 bg-white/10 px-4 py-2 backdrop-blur-sm"
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <motion.span
              className="h-2 w-2 rounded-full bg-[#e6c77a]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
            />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#f4d98b]">
              Mehendi • Makeup • Beauty
            </span>
          </motion.div>

          {/* Small Title */}
          <motion.p
            className="mb-3 font-serif text-xl font-medium tracking-wide text-[#f4d98b] sm:text-2xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
            }}
          >
            Theni Mehendi & Makeup Artist
          </motion.p>

          {/* Heading */}
          <motion.h1
            className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
            }}
          >
            Beauty
            <br />
            <motion.span
              className="inline-block text-[#f1d083]"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
              }}
            >
              By Kavitha
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            className="mt-5 font-serif text-2xl font-semibold text-white/95 sm:text-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1,
            }}
          >
            Enhancing Your Beauty, Creating
            <br className="hidden sm:block" />
            Beautiful Memories
          </motion.h2>

          {/* Description */}
          <motion.p
            className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.15,
            }}
          >
            Celebrate your special moments with beautifully handcrafted mehendi
            and professional makeup artistry by Kavitha. From elegant bridal
            mehendi and Arabic designs to flawless bridal makeup and customized
            beauty looks, we create a look that makes every occasion truly
            unforgettable.
          </motion.p>

          {/* Services */}
          <motion.div
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/75"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.3,
            }}
          >
            <span>Bridal Mehendi</span>
            <span>•</span>
            <span>Bridal Makeup</span>
            <span>•</span>
            <span>Arabic Mehendi</span>
            <span>•</span>
            <span>Engagement Makeup</span>
            <span>•</span>
            <span>Special Events</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.45,
            }}
          >
            <motion.button
              type="button"
              onClick={() => {
                window.location.href = "/packages";
              }}
              className="rounded-full bg-[#d0a64a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg"
              whileHover={{
                y: -5,
                scale: 1.04,
                backgroundColor: "#b88d35",
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              Book Your Appointment
            </motion.button>

            <motion.a
              href="#gallery"
              className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm"
              whileHover={{
                y: -5,
                scale: 1.04,
                backgroundColor: "#ffffff",
                color: "#315c3a",
              }}
              whileTap={{
                scale: 0.96,
              }}
            >
              Explore Our Work
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-10 flex flex-wrap gap-8 border-t border-white/20 pt-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.6,
            }}
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">50+</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white">3+</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Theni
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Tamil Nadu
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= KAVITHA IMAGE ================= */}
        <motion.div
          className="absolute bottom-20 right-[-200px] hidden h-[800px] w-[52%] lg:block"
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: "easeOut",
          }}
        >
          <img
            src={images.kavitha}
            alt="Kavitha - Mehendi and Makeup Artist"
            className="h-full w-full object-contain object-bottom"
          />

          {/* Green transparent overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#315c3a]/8" />
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdf8] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1.8,
        }}
      />
    </section>
  );
};

export default Hero;
