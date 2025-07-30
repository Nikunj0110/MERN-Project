import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white py-10 relative overflow-hidden">
      {/* Dot Animations */}
      <style>
        {`
          @keyframes fadeInOut {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          .dot-fade {
            animation: fadeInOut 3s ease-in-out infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-500 text-center pt-10 pb-4 md:py-10 mb-8">Contact Speak Deals</h1>

        {/* Contact Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4 transition-transform transform hover:scale-105">
              <FaEnvelope className="text-blue-500 mr-2" />
              <span>Email: support@speakdeals.com</span>
            </div>
            <div className="flex items-center mb-4 transition-transform transform hover:scale-105">
              <FaPhoneAlt className="text-blue-500 mr-2" />
              <span>Phone: +1 (234) 567-890</span>
            </div>
            <div className="flex items-center mb-4 transition-transform transform hover:scale-105">
              <FaMapMarkerAlt className="text-blue-500 mr-2" />
              <span>Address: 123 Speak St, Deal City, ST 12345</span>
            </div>
            <div className="flex items-center mb-4 transition-transform transform hover:scale-105">
              <FaClock className="text-blue-500 mr-2" />
              <span>Business Hours: Mon-Fri, 9 AM - 5 PM</span>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <img
                src="https://images.samsung.com/is/image/samsung/p6pim/levant/f2507/gallery/levant-galaxy-z-fold7-f966-sm-f966bdbgmea-thumb-547546608?$264_264_PNG$"
                alt="Customer Service"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {/* Animated Dots */}
              <div className="absolute top-2 left-2 w-10 h-10 rounded-full bg-blue-300 dot-fade"></div>
              <div className="absolute top-1/3 right-4 w-3 h-3 rounded-full bg-blue-300 dot-fade delay-200"></div>
              <div className="absolute bottom-6 left-8 w-3 h-3 rounded-full bg-blue-300 dot-fade delay-400"></div>
              <div className="absolute bottom-3 right-5 w-10 h-10 rounded-full bg-purple-300 dot-fade delay-700"></div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 pb-15 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
          {submitted && (
            <div className="mt-4 text-green-500 text-center">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
