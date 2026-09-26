import {
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#162d1c] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#c69b4c]">
                <Sparkles size={21} className="text-white" />
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold">
                  Beauty By Kavitha
                </h2>

                <p className="text-xs uppercase tracking-[0.18em] text-[#d8bb7a]">
                  Mehendi & Makeup Artist
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/65">
              Creating beautiful bridal looks, elegant mehendi designs
              and unforgettable memories for your most special moments.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

              {/* <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#c69b4c] hover:bg-[#c69b4c] hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#c69b4c] hover:bg-[#c69b4c] hover:text-white"
              >
                <Facebook size={18} />
              </a> */}

              <a
                href="https://wa.me/918526716559"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition hover:border-[#c69b4c] hover:bg-[#c69b4c] hover:text-white"
              >
                <MessageCircle size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 font-serif text-lg font-semibold text-[#f1d083]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/65">

              <li>
                <a
                  href="/"
                  className="transition hover:text-[#f1d083]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="transition hover:text-[#f1d083]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/gallery"
                  className="transition hover:text-[#f1d083]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="/packages"
                  className="transition hover:text-[#f1d083]"
                >
                  Packages
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition hover:text-[#f1d083]"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 font-serif text-lg font-semibold text-[#f1d083]">
              Our Services
            </h3>

            <ul className="space-y-3 text-sm text-white/65">

              <li className="flex items-center gap-2">
                <Heart size={14} className="text-[#c69b4c]" />
                Bridal Mehendi
              </li>

              <li className="flex items-center gap-2">
                <Heart size={14} className="text-[#c69b4c]" />
                Arabic Mehendi
              </li>

              <li className="flex items-center gap-2">
                <Heart size={14} className="text-[#c69b4c]" />
                Engagement Mehendi
              </li>

              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#c69b4c]" />
                Bridal Makeup
              </li>

              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#c69b4c]" />
                Engagement Makeup
              </li>

              <li className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#c69b4c]" />
                Party Makeup
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-serif text-lg font-semibold text-[#f1d083]">
              Get In Touch
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin
                  size={19}
                  className="mt-1 shrink-0 text-[#c69b4c]"
                />

                <p className="text-sm leading-6 text-white/65">
                  Theni,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>

              <a
                href="tel:+918526716559"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-[#f1d083]"
              >
                <Phone size={18} className="text-[#c69b4c]" />
                +91 85267 16559
              </a>

              <a
                href="https://wa.me/918526716559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/65 transition hover:text-[#f1d083]"
              >
                <MessageCircle
                  size={18}
                  className="text-[#c69b4c]"
                />
                Chat on WhatsApp
              </a>

            </div>

            {/* Booking Button */}
            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#c69b4c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b58b3d] hover:shadow-lg"
            >
              Book Your Appointment
              <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">

          <p className="text-xs text-white/45">
            © {currentYear} Beauty By Kavitha. All rights reserved.
          </p>

          <p className="text-xs text-white/45">
            Mehendi & Makeup Artist • Theni, Tamil Nadu
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

