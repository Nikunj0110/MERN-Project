import React from 'react';
import { FaExchangeAlt, FaUndoAlt, FaShippingFast } from 'react-icons/fa';
import { RiExchangeFundsLine } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";


const OurPolicy = () => {
  const policies = [
    {
      title: 'Easy Exchange Policy',
      icon: <RiExchangeFundsLine  size={50}   className="text-gray-500" />,
      description: 'Easy 7-day exchange available on all items.',
    },
    {
      title: '7 Days Return Policy',
      icon: <FaUndoAlt size={50} className="text-gray-500" />,
      description: 'Hassle-free 10-day returns with full refund.',
    },
    {
      title: 'Best Customer Support',
      icon: <RiCustomerServiceFill  size={50} className="text-gray-500" />,
      description: 'Trusted Customer Support - Your Satisfaction is Our Priority',
    },
  ];

  return (
    <div className="bg-white w-full py-22 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-400 text-center mb-3 text-gray-800 font-[Poppins]">
        Our Policies
      </h2>
      <h3 className=' font-light text-center mb-10 text-gray-800 font-[Poppins]'>
        Customer-Friendly Policies - Committed to Your Satisfaction and Safety.
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-gray-50  hover:bg-gray-100 transition-all duration-300 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center border border-gray-200"
          >
            <div className="mb-4">{policy.icon}</div>
            <h3 className="text-xl font-500 text-gray-800 mb-2 font-[Poppins]">
              {policy.title}
            </h3>
            <p className="text-gray-600 font-light text-sm font-[Poppins]">
              {policy.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
