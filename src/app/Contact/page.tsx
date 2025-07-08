'use client';
import React, { useState } from "react";
import { FaPhoneAlt, FaRegFileAlt } from "react-icons/fa";
import Navbar from "@/Components/Navbar";

import Footer from "@/Components/Footer";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    alert("Please fill out all fields");
    return;
  }

  console.log("Form submitted:", formData);
  setSubmitted(true);
  setFormData({ name: "", email: "", message: "" });
};


  return (
    <>
      <div className="holder bg-purple-700">
        <Navbar />
      </div>
      <div className="bg-white min-h-screen py-12 px-4 font-Primary">
        <div className="max-w-2xl mx-auto p-6 bg-[#d9d2c8] rounded-lg shadow-md mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>

          {submitted && (
            <p className="text-green-600 mb-4 text-center">
              ✅ Message sent successfully! We'll get back to you soon.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-600 px-3 py-2 rounded"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-600 px-3 py-2 rounded"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full border border-gray-600 px-3 py-2 rounded"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f6f0e8] p-8 rounded-lg shadow-sm">
            <FaPhoneAlt className="text-4xl text-black mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Talk to a member of our Support team
            </h2>
            <p className="text-gray-700 mb-6">
              Haven't recieved your shoes yet? We’ll help you get them delivered
              to your location instantly.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition">
              Contact Sales
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f6f0e8] p-8 rounded-lg shadow-sm">
            <FaRegFileAlt className="text-4xl text-black mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Return and Replacement
            </h2>
            <p className="text-gray-700 mb-6">
              Our help center is fresh and always open for queries. If you
              haven't recieved the right product, and wish to return or replace
              it, you can do so easily.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition">
              Go to the help center
            </button>
          </div>
        </div>
      </div>
      <div className="holder">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
