import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openContact", handler);
    return () => window.removeEventListener("openContact", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Get in Touch — ${form.company}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`;
    window.open(`mailto:hello@fairblock.network?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSubmitted(false);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div
        className="relative border border-primary-blue/40 rounded-2xl p-8 w-full max-w-md shadow-[0_0_60px_rgba(88,189,246,0.2)]"
        style={{
          background: "linear-gradient(135deg, #000D14 0%, #001a2e 100%)",
          animation: "pageFadeIn 0.3s ease forwards",
        }}
      >
        <button
          className="absolute top-4 right-4 text-2xl opacity-50 hover:opacity-100 transition-opacity"
          onClick={handleClose}
        >
          <IoClose />
        </button>

        {!submitted ? (
          <>
            <h2 className="font-heading text-3xl mb-1">Get in Touch</h2>
            <p className="opacity-50 text-sm mb-6">Tell us about your use case and we will get back to you.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                required
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-blue transition-colors placeholder:opacity-40 text-sm"
              />
              <input
                required
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-blue transition-colors placeholder:opacity-40 text-sm"
              />
              <input
                required
                type="text"
                placeholder="Company"
                value={form.company}
                onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-blue transition-colors placeholder:opacity-40 text-sm"
              />
              <textarea
                placeholder="Message (optional)"
                rows={3}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary-blue transition-colors placeholder:opacity-40 resize-none text-sm"
              />
              <button
                type="submit"
                className="bg-primary-blue text-black font-semibold py-3 rounded-xl hover:brightness-110 transition-all duration-200 mt-2 text-sm"
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <span className="text-primary-blue text-5xl font-maison-neue">✓</span>
            <h2 className="font-heading text-3xl">
              Thanks, {form.name.split(" ")[0]}!
            </h2>
            <p className="opacity-50 text-sm max-w-xs">
              Your email client should have opened. We will get back to you shortly.
            </p>
            <button
              className="mt-2 bg-primary-blue text-black font-semibold px-8 py-3 rounded-xl hover:brightness-110 transition-all duration-200 text-sm"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
