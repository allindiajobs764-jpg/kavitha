
import HeroImage from "../../assets/HeroImage.jpg";
const Hero = () => {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HeroImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#162d1c]/95 via-[#315c3a]/75 to-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl">

          {/* Brand Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e6c77a]/40 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#e6c77a]" />

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#f4d98b]">
              Mehendi • Makeup • Beauty
            </span>
          </div>

          {/* Brand Name */}
          <p className="mb-3 font-serif text-xl font-medium tracking-wide text-[#f4d98b] sm:text-2xl">
            Theni Mehendi & Makeup Artist
          </p>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Beauty
            <br />
            <span className="text-[#f1d083]">By Kavitha</span>
          </h1>

          {/* Tagline */}
          <h2 className="mt-5 font-serif text-2xl font-semibold text-white/95 sm:text-3xl">
            Enhancing Your Beauty, Creating Beautiful Memories
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            Celebrate your special moments with beautifully handcrafted
            mehendi and professional makeup artistry by Kavitha. From
            elegant bridal mehendi and Arabic designs to flawless bridal
            makeup and customized beauty looks, we create a look that
            makes every occasion truly unforgettable.
          </p>

          {/* Services */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/75">
            <span>Bridal Mehendi</span>
            <span>•</span>
            <span>Bridal Makeup</span>
            <span>•</span>
            <span>Arabic Mehendi</span>
            <span>•</span>
            <span>Engagement Makeup</span>
            <span>•</span>
            <span>Special Events</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="rounded-full bg-[#d0a64a] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#b88d35] hover:shadow-xl"
            >
              Book Your Appointment
            </a>

            <a
              href="#gallery"
              className="rounded-full border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-[#315c3a]"
            >
              Explore Our Work
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/20 pt-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                500+
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                10+
              </h3>
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
          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fffdf8] to-transparent" />
    </section>
  );
};

export default Hero;
