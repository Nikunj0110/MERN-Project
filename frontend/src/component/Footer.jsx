import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const menuItems = [
    { name: "Home", link: "/home" },
    { name: "Collections", link: "/collections" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  const contactInfo = [
    { icon: <MdOutlineMarkEmailUnread />, text: "nikunju2005@gmail.com" },
    { icon: <LuPhoneCall />, text: "+1 (123) 456-7890" },
    { icon: <FaLocationDot />, text: "B/204, Science City, Ahmedabad, India" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* First Section - Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              {/* <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-2">
                W
              </div> */}
              <span className="text-xl font-semibold">Speak Deals</span>
            </div>
            <p className="text-gray-600 text-center md:text-left text-sm max-w-xs">
               Speak Deals — Your one-stop destination for unbeatable deals and smart shopping. We bring you the best products at the best prices, every day.

            </p>
          </div>

          {/* Second Section - Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Section - Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <span className="mr-2">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            
          </div>
        </div>

        {/* Copyright Line */}
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {currentYear} Speak Deals. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;