"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const mailtoLink = `mailto:your@email.com?subject=Message from ${form.name}&body=Name: ${form.name}%0AEmail: ${form.email}%0A%0A${form.message}`;

    window.location.href = mailtoLink;

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#050816] via-[#060c1a] to-[#050816] text-white"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sky-300 mb-3 sm:mb-4">
          Contact Me
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-slate-300/70 mb-8 sm:mb-10 px-2 sm:px-0">
          Have a project or idea? Let’s build something amazing together.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 bg-white/5 border border-white/10 p-5 sm:p-8 rounded-2xl backdrop-blur-md"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-black/20 border border-white/10 outline-none focus:border-sky-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-black/20 border border-white/10 outline-none focus:border-sky-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 text-sm sm:text-base rounded-xl bg-black/20 border border-white/10 outline-none focus:border-sky-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-sky-400 text-black font-semibold text-sm sm:text-base hover:bg-sky-300 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400 text-xs sm:text-sm mt-3">
              Message ready to send via email ✔
            </p>
          )}
        </form>
      </div>
    </section>
  );
}