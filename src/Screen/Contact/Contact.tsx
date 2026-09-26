import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
🌸 *New Enquiry - Beauty By Kavitha*

👤 *Name:* ${form.name}
📱 *Phone:* ${form.phone}

✨ *Service:* ${form.service}
📅 *Preferred Date:* ${form.date || "Not specified"}
📍 *Event Location:* ${form.location}

📝 *Message:*
${form.message || "No additional message"}

Thank you.
    `;

    const whatsappUrl = `https://wa.me/918526716559?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setForm({
      name: "",
      phone: "",
      service: "",
      date: "",
      location: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#fffdf8] px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">

          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c69b4c]/30 bg-[#c69b4c]/10 px-5 py-2 text-sm font-medium text-[#315c3a]">
            <Sparkles size={15} />
            Get In Touch
          </span>

          <h2 className="font-serif text-4xl font-bold text-[#26352a] md:text-5xl">
            Let's Create Something
            <span className="block text-[#c69b4c]">
              Beautiful Together
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
            Planning your wedding, engagement or special occasion?
            Send us your details and we will get back to you through
            WhatsApp.
          </p>

        </div>

        {/* Content */}
        <div className="grid overflow-hidden rounded-3xl border border-[#e8dccb] bg-white shadow-xl lg:grid-cols-5">

          {/* Contact Info */}
          <div className="relative overflow-hidden bg-[#315c3a] p-8 text-white lg:col-span-2 lg:p-10">

            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c69b4c]/10" />

            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5" />

            <div className="relative">

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#f1d083]">
                Contact Us
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold">
                Beauty By Kavitha
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Professional Mehendi and Makeup Artist based in
                Theni, Tamil Nadu. We are here to make your special
                moments even more beautiful.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MapPin
                      size={20}
                      className="text-[#f1d083]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-white/60">
                      Theni, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Phone
                      size={20}
                      className="text-[#f1d083]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      Phone
                    </p>

                    <a
                      href="tel:+918526716559"
                      className="mt-1 block text-sm text-white/60 transition hover:text-[#f1d083]"
                    >
                      +91 85267 16559
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle
                      size={20}
                      className="text-[#f1d083]"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold">
                      WhatsApp
                    </p>

                    <a
                      href="https://wa.me/918526716559"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-white/60 transition hover:text-[#f1d083]"
                    >
                      Chat With Us
                    </a>
                  </div>
                </div>

              </div>

              {/* Services */}
              <div className="mt-10 border-t border-white/10 pt-7">

                <p className="mb-4 text-sm font-semibold text-[#f1d083]">
                  Our Services
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Bridal Mehendi",
                    "Arabic Mehendi",
                    "Bridal Makeup",
                    "Engagement Makeup",
                    "Party Makeup",
                  ].map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/70"
                    >
                      {service}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

          {/* Form */}
          <div className="p-8 lg:col-span-3 lg:p-10">

            <div className="mb-7">
              <h3 className="font-serif text-2xl font-bold text-[#26352a]">
                Send Us an Enquiry
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill in your details and we'll connect with you on
                WhatsApp.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Name + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#26352a]">
                    Your Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#26352a]">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    required
                    className="w-full rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
                  />
                </div>

              </div>

              {/* Service + Date */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#26352a]">
                    Service *
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a]"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="Bridal Mehendi">
                      Bridal Mehendi
                    </option>

                    <option value="Arabic Mehendi">
                      Arabic Mehendi
                    </option>

                    <option value="Engagement Mehendi">
                      Engagement Mehendi
                    </option>

                    <option value="Bridal Makeup">
                      Bridal Makeup
                    </option>

                    <option value="Engagement Makeup">
                      Engagement Makeup
                    </option>

                    <option value="Party Makeup">
                      Party Makeup
                    </option>

                    <option value="Mehendi + Makeup Combo">
                      Mehendi + Makeup Combo
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#26352a]">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a]"
                  />
                </div>

              </div>

              {/* Location */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#26352a]">
                  Event Location *
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Example: Theni, Madurai..."
                  required
                  className="w-full rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#26352a]">
                  Message / Requirements
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-xl border border-[#ddd5c8] bg-[#fffdf8] px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#315c3a] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#264a2e] hover:shadow-xl"
              >
                Send Enquiry on WhatsApp

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-gray-400">
                Your enquiry details will be shared securely through
                WhatsApp.
              </p>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
