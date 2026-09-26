import {
  Heart,
  Sparkles,
  Crown,
  Check,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fffdf8]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#315c3a] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,155,76,0.22),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8bb7a]/40 bg-white/10 px-5 py-2 text-sm font-medium text-[#f5dfad]">
            <Sparkles size={15} />
            About Beauty By Kavitha
          </span>

          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
            Where Tradition Meets
            <span className="block text-[#e3c477]">
              Beauty & Elegance
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
            Creating beautiful Mehendi designs and elegant makeup looks
            for your most special moments in Theni, Tamil Nadu.
          </p>
        </div>
      </section>

      {/* About Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Image Placeholder */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-[#f1eadc] p-3 shadow-xl">
              <div className="flex min-h-[480px] items-center justify-center rounded-[1.5rem] bg-[#315c3a]">
                <div className="text-center text-white/70">
                  <Sparkles
                    className="mx-auto mb-4 text-[#e3c477]"
                    size={45}
                  />

                  <p className="font-serif text-2xl">
                    Beauty By Kavitha
                  </p>

                  <p className="mt-2 text-sm">
                    Mehendi & Makeup Artist
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#c69b4c] px-6 py-5 text-center text-white shadow-xl sm:-right-6">
              <p className="font-serif text-3xl font-bold">
                10+
              </p>

              <p className="text-xs uppercase tracking-wider text-white/80">
                Years Experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c69b4c]">
              Our Story
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#26352a] md:text-5xl">
              Creating Beauty For
              <span className="block text-[#315c3a]">
                Your Special Moments
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              Welcome to <strong>Beauty By Kavitha</strong>, a professional
              Mehendi and Makeup artistry service based in Theni,
              Tamil Nadu.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              We believe every bride and every celebration deserves a
              unique touch of beauty. From intricate traditional Mehendi
              designs to elegant bridal makeup, our goal is to make you
              feel confident, beautiful, and special on your most
              memorable occasions.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Every design and makeup look is created with creativity,
              patience, and attention to detail. We take the time to
              understand your preferences and create a look that
              reflects your personality and style.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315c3a]/10 text-[#315c3a]">
                  <Check size={17} />
                </div>

                <span className="text-sm font-medium text-[#26352a]">
                  Personalized Designs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315c3a]/10 text-[#315c3a]">
                  <Check size={17} />
                </div>

                <span className="text-sm font-medium text-[#26352a]">
                  Quality Products
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315c3a]/10 text-[#315c3a]">
                  <Check size={17} />
                </div>

                <span className="text-sm font-medium text-[#26352a]">
                  Professional Service
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315c3a]/10 text-[#315c3a]">
                  <Check size={17} />
                </div>

                <span className="text-sm font-medium text-[#26352a]">
                  Customized Looks
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f5f1e8] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c69b4c]">
              What We Do
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#26352a] md:text-5xl">
              Our Beauty Services
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              From beautiful Mehendi artwork to elegant makeup,
              we create personalized looks for every special occasion.
            </p>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {/* Mehendi */}
            <div className="group rounded-3xl border border-[#e5dac8] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#315c3a]/10 text-[#315c3a] transition group-hover:bg-[#315c3a] group-hover:text-white">
                <Heart size={30} />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#26352a]">
                Mehendi Artistry
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Beautiful handcrafted Mehendi designs created with
                creativity and attention to detail. From minimal
                designs to intricate bridal artwork, every design is
                customized for you.
              </p>

              <ul className="mt-6 space-y-3">

                {[
                  "Bridal Mehendi",
                  "Arabic Mehendi",
                  "Engagement Mehendi",
                  "Traditional Designs",
                  "Customized Mehendi",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <Check
                      size={16}
                      className="text-[#315c3a]"
                    />

                    {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Makeup */}
            <div className="group rounded-3xl border border-[#e5dac8] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c69b4c]/10 text-[#c69b4c] transition group-hover:bg-[#c69b4c] group-hover:text-white">
                <Crown size={30} />
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#26352a]">
                Makeup Artistry
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Elegant and personalized makeup looks designed to
                enhance your natural beauty and complement your outfit,
                event, and personal style.
              </p>

              <ul className="mt-6 space-y-3">

                {[
                  "Bridal Makeup",
                  "Engagement Makeup",
                  "Reception Makeup",
                  "Party Makeup",
                  "Hair Styling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-600"
                  >
                    <Check
                      size={16}
                      className="text-[#c69b4c]"
                    />

                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c69b4c]">
              Why Choose Us
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-[#26352a] md:text-5xl">
              Beauty With
              <span className="block text-[#315c3a]">
                Care & Creativity
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Your special day deserves more than just a service.
              It deserves an experience that makes you feel confident,
              comfortable, and beautiful.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                icon: Heart,
                title: "Personalized",
                text: "Every look is customized to your preferences.",
              },
              {
                icon: Sparkles,
                title: "Creative",
                text: "Unique designs created with passion.",
              },
              {
                icon: Crown,
                title: "Professional",
                text: "Careful attention to every detail.",
              },
              {
                icon: Check,
                title: "Quality",
                text: "Focused on beautiful and lasting results.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e8dccb] bg-white p-6 shadow-sm"
                >
                  <Icon
                    size={25}
                    className="text-[#c69b4c]"
                  />

                  <h3 className="mt-4 font-semibold text-[#26352a]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#315c3a] px-8 py-14 text-center shadow-xl md:px-16">

          <Sparkles
            className="mx-auto mb-5 text-[#e3c477]"
            size={32}
          />

          <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
            Ready To Create Your Perfect Look?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
            Whether you are looking for bridal Mehendi, professional
            makeup, or a complete bridal package, we would love to
            be part of your special day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              to="/packages"
              className="rounded-full bg-[#c69b4c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#b58b3d] hover:shadow-lg"
            >
              Explore Packages
            </Link>

            <a
              href="https://wa.me/918526716559"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#315c3a]"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default About;
