import { useState } from "react";
import { X } from "lucide-react";

interface BookingModalProps {
  packageName: string;
  onClose: () => void;
}

const Booking = ({
  packageName,
  onClose,
}: BookingModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    eventType: "",
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
🌸 *New Booking Request*

👤 *Name:* ${form.name}
📱 *Phone:* ${form.phone}

💄 *Package:* ${packageName}

📅 *Event Date:* ${form.date}
🎉 *Event Type:* ${form.eventType}
📍 *Location:* ${form.location}

📝 *Requirements:*
${form.message || "No additional requirements"}

Thank you.
    `;

    const whatsappUrl = `https://wa.me/918526716559?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#fffdf8] p-6 shadow-2xl sm:p-8">

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-gray-500 transition hover:bg-[#315c3a] hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-7">
          <p className="text-sm font-medium uppercase tracking-wider text-[#c69b4c]">
            Booking Request
          </p>

          <h2 className="mt-1 text-3xl font-bold text-[#26352a]">
            Book Your Package
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {packageName}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}
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
              className="w-full rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#26352a]">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
            />
          </div>

          {/* Date + Event */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-[#26352a]">
                Event Date *
              </label>

              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#315c3a]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#26352a]">
                Event Type *
              </label>

              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none focus:border-[#315c3a]"
              >
                <option value="">Select</option>
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Reception">Reception</option>
                <option value="Birthday">Birthday</option>
                <option value="Party">Party</option>
                <option value="Other">Other</option>
              </select>
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
              placeholder="Enter event location"
              required
              className="w-full rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-[#26352a]">
              Additional Requirements
            </label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about your requirements..."
              className="w-full resize-none rounded-xl border border-[#ded6c8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#315c3a] focus:ring-2 focus:ring-[#315c3a]/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-[#315c3a] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#264a2e] hover:shadow-lg"
          >
            Submit Booking Request
          </button>

          <p className="text-center text-xs text-gray-500">
            Your booking details will be sent through WhatsApp.
          </p>

        </form>
      </div>
    </div>
  );
};

export default Booking;
