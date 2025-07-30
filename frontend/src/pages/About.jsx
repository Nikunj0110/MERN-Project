import React from "react";
import { FaTag, FaShieldAlt, FaSmile } from "react-icons/fa";
import mobileMockup from "../assets/google.webp"; // Add your mobile image here

export default function AboutSection() {
  return (
    <div className="font-[Poppins]">
      {/* Section 1: About Speak Deals */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-300 text-center py-10 text-gray-800 mb-12">
          About Speak Deals
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={mobileMockup}
              alt="Speak Deals Mobile"
              className="w-[250px] md:w-[300px] z-10 relative animate-pulse-slow"
            />
            {/* Animated Dots */}
            <div className="absolute top-[-20px] left-[30%] w-4 h-4 bg-blue-400 rounded-full animate-dot float-dot" />
            <div className="absolute bottom-[-20px] right-[30%] w-3 h-3 bg-pink-400 rounded-full animate-dot delay-300" />
            <div className="absolute top-[50%] left-[-10px] w-3 h-3 bg-green-400 rounded-full animate-dot delay-500" />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong>Speak Deals</strong> brings you unbeatable offers,
              premium products, and smart shopping experiences — all in one
              place. Whether you're looking for exclusive deals or trusted
              service, we're here to deliver excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Choose Us */}
      <section className="bg-white py-16 px-4 md:px-20">
        <h2 className="text-3xl md:text-4xl font-300 text-center text-gray-800 mb-12 border-b-2 border-gray-100 inline-block">
          Why Choose Us?
        </h2>

        <div className="grid pb-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaTag size={40} className="text-gray-500 mb-4" />,
              title: "Best Deals",
              desc: "We offer the most competitive prices with exclusive offers you won't find elsewhere.",
            },
            {
              icon: <FaShieldAlt size={40} className="text-gray-500 mb-4" />,
              title: "Secure Shopping",
              desc: "Safe payments, trusted vendors, and a secure shopping experience — always.",
            },
            {
              icon: <FaSmile size={40} className="text-gray-500 mb-4" />,
              title: "Customer First",
              desc: "We prioritize your satisfaction and deliver a seamless buying journey.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-50  border border-gray-200 rounded-2xl shadow-md p-6  transition-transform hover:scale-105 duration-300"
            >
              {card.icon}
              <h3 className="text-xl font-500 text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
