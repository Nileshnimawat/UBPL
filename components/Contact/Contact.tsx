"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="shadow-sm bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-200">
          We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white mr-4">📍</div>
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-gray-600">
                  Slice-3, Flat No 521/A/G, Scheme-78,<br />
                  Aaranya Nagar, Scheme No-78,<br />
                  Indore, MP – 452001, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white mr-4">📞</div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-600">Mr. Alok Ranjan – 7869977333</p>
                <p className="text-gray-600">Mr. Sandeep Kumar – 9457635747</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white mr-4">✉️</div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-blue-600">ubpl.business@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md"
                placeholder="Type your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
