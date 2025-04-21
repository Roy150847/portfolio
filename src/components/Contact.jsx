import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., send to backend or email service)
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <section className="text-center mt-12 px-4">
      <h2 className="text-5xl font-bold mb-3 text-[#8e3d79]">Let's connect</h2>
      <p className="mb-4">Contact me by email</p>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-xl p-6">
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e3d79]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e3d79]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8e3d79]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8e3d79] text-white py-2 rounded-lg font-semibold hover:bg-[#a14c90] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-8 text-zinc-400 text-sm">© 2025 Sumit Kumar</div>
    </section>
  );
}

export default Contact;
