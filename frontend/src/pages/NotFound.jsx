import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiArrowRight, FiHome } from 'react-icons/fi';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
          <div className="flex justify-center mb-4">
            <FiAlertTriangle className="text-white w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold text-white">404 Error</h1>
          <p className="text-red-100 mt-2">Page Not Found</p>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Lost in Space?</h2>
            <p className="text-gray-600">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => navigate('/home')}
              className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:-translate-y-1"
            >
              <FiHome className="mr-2" />
              Go to Homepage
            </button>

           
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-blue-600 hover:underline">Contact support</a>
          </p>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-6 right-6 hidden md:block">
        <div className="w-32 h-32 rounded-full bg-red-100 opacity-20"></div>
      </div>
      <div className="absolute top-10 left-10 hidden md:block">
        <div className="w-24 h-24 rounded-full bg-blue-100 opacity-20"></div>
      </div>
    </div>
  );
};

export default NotFound;