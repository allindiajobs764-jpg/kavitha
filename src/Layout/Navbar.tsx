import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Artists", path: "/artists" },
    { label: "Designs", path: "/designs" },
    { label: "Packages", path: "/packages" },
    { label: "Gallery", path: "/gallery" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e8dccb] bg-[#fffdf8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#315c3a] text-xl text-[#f6d98b] shadow-sm">
            ✦
          </div>

          <div>
            <h1 className="font-serif text-xl font-bold tracking-wide text-[#315c3a]">
              Mehendi Artistry
            </h1>

            <p className="text-[10px] uppercase tracking-[0.25em] text-[#a47b36]">
              Art • Love • Tradition
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="group relative text-sm font-medium text-[#4d554c] transition-colors duration-300 hover:text-[#315c3a]"
            >
              {item.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#c69b4c] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-[#4d554c] transition hover:text-[#315c3a]"
            >
              More

              <ChevronDown
                size={15}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute right-0 top-8 w-48 translate-y-2 rounded-xl border border-[#eadfce] bg-white p-2 opacity-0 shadow-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <Link
                to="/designs/bridal"
                className="block rounded-lg px-4 py-3 text-sm text-gray-600 transition hover:bg-[#f5f1e8] hover:text-[#315c3a]"
              >
                Bridal Mehendi
              </Link>

              <Link
                to="/designs/arabic"
                className="block rounded-lg px-4 py-3 text-sm text-gray-600 transition hover:bg-[#f5f1e8] hover:text-[#315c3a]"
              >
                Arabic Designs
              </Link>

              <Link
                to="/designs/custom"
                className="block rounded-lg px-4 py-3 text-sm text-gray-600 transition hover:bg-[#f5f1e8] hover:text-[#315c3a]"
              >
                Custom Designs
              </Link>

            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/booking"
            className="rounded-full bg-[#315c3a] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#264a2e] hover:shadow-lg"
          >
            Book Your Artist
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#315c3a] transition hover:bg-[#f5f1e8] lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#eee4d5] bg-[#fffdf8] transition-all duration-300 lg:hidden ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-5">

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-[#4d554c] transition hover:bg-[#f5f1e8] hover:text-[#315c3a]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/booking"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded-full bg-[#315c3a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#264a2e]"
          >
            Book Your Artist
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
