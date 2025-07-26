import React, { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

const MobileSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample mobile phone data - replace with actual mobile phone images
  const mobileData = [
    {
      id: 1,
      title: "Explore Mobile Zone",
      description: "Experience the power of titanium with advanced camera system",
      features: ["48MP Camera", "A17 Pro Chip", "Titanium Build"],
      price: "$999",
      image: "https://images.unsplash.com/photo-1709114108061-7a3b648eba80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGlwaG9uZSUyMDE1fGVufDB8fDB8fHww"
    },
    {
      id: 2,
      title: "Oneplus Smartphones",
      description: "AI-powered smartphone with incredible photography capabilities",
      features: ["200MP Camera", "Snapdragon 8 Gen 3", "AI Features"],
      price: "$899",
      image: "https://www.oneplus.com/content/dam/oasis/page/xueying/red/assets/images-top-emerald-left_mo-1.jpg.webp"
    },
    {
      id: 3,
      title: "Google Launches",
      description: "Pure Android experience with computational photography",
      features: ["Google Tensor G3", "Magic Eraser", "Pure Android"],
      price: "$699",
      image: "https://reebelo.com/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-GOOGLEPIXEL8PRO5G%2FBLA-image-0.jpg&w=640&q=75"
    },
    {
      id: 4,
      title: "Samsung's Newest",
      description: "Fast charging, smooth performance, premium design",
      features: ["100W Charging", "50MP Camera", "OxygenOS"],
      price: "$799",
      image: "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/y/g/l/-original-imagztmghzuhz7kf.jpeg?q=90&crop=false"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mobileData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [mobileData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mobileData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mobileData.length) % mobileData.length);
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Main Slider Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Slide Content */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-20">
            
            {/* Text Content - Left Side */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 lg:pr-12">
              <div className="space-y-6">
                <h1 className="font-[Calibri] text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
                  {mobileData[currentSlide].title}
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {mobileData[currentSlide].description}
                </p>
                
                {/* Features List */}
                {/* <div className="space-y-3">
                  {mobileData[currentSlide].features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center lg:justify-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div> */}
                
                {/* Price and CTA */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="text-3xl font-bold text-blue-600">
                    {mobileData[currentSlide].price}
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg">
                    Buy Now
                  </button>
                </div> */}

              </div>
            </div>
            
            {/* Mobile Image - Right Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative">
                {/* Main Phone Image */}
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src={mobileData[currentSlide].image} 
                    alt={mobileData[currentSlide].title}
                    className="w-64 sm:w-80 lg:w-96 h-auto object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-xl"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute cursor-pointer  left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute cursor-pointer  right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>
      
      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {mobileData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 ${
              currentSlide === index 
                ? 'bg-blue-600 scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
      
      {/* Slide Indicator */}
      {/* <div className="absolute top-8 right-8 bg-white bg-opacity-90 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
        {currentSlide + 1} / {mobileData.length}
      </div> */}
    </div>
  );
};

export default MobileSlider;