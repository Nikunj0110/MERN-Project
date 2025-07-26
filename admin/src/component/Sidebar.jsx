// src/component/Sidebar.jsx
import React, { useState } from 'react';
import { IoMdAddCircle } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Add Items', icon: <IoMdAddCircle />, path: '/add' },
    { name: 'List Items', icon: <FaListAlt />, path: '/list' },
    { name: 'View Orders', icon: <MdDownloadDone />, path: '/orders' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Toggle button for mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gray-800 text-white p-2 rounded-md shadow-lg"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Sidebar */}
      <div className={`h-full bg-gray-900 text-white z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:inset-0
        fixed lg:relative w-72 lg:w-[18%] pt-16 lg:pt-15 shadow-xl
      `}>
        <div className="px-6 py-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          <p className="text-gray-400 text-sm mt-1">Mobile Zone</p>
        </div>

        {/* Menu */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors duration-200 group"
                >
                  <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
          <div className="flex items-center px-4 py-3 text-gray-400">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-sm font-bold">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Admin User</p>
              <p className="text-xs text-gray-500">admin@mobilezone.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
