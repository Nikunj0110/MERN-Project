

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar, FaRegStar, FaShoppingCart } from "react-icons/fa";
import RelatedProducts from "../component/RelatedProducts";

function ProductDetails() {
  let { productId } = useParams();
  let { products, currency,addToCart } = useContext(shopDataContext);
  let [productData, setProductData] = useState(false);
  const [mainImage, setMainImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage1(item.image1);
        setImage2(item.image2);
        setImage3(item.image3);
        setImage4(item.image4);
        setMainImage(item.image1);
        setSelectedColor(item.colors?.[0] || "");
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="min-h-screen bg-white font-[Inter] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Product Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Image Gallery (50% on desktop) */}
          <div className="w-full lg:w-1/2">
            {/* Main Image */}
            <div className="mb-4  bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <img
                src={mainImage}
                alt="Main product view"
                className="w-full h-auto object-contain aspect-square"
              />
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {[image1, image2, image3, image4].map(
                (img, index) =>
                  img && (
                    <div
                      key={index}
                      onClick={() => setMainImage(img)}
                      className={`cursor-pointer bg-white rounded-lg overflow-hidden border ${
                        mainImage === img
                          ? "border-blue-500 ring-2 ring-blue-300"
                          : "border-gray-200"
                      } transition-all duration-200 hover:shadow-md`}
                    >
                      <img
                        src={img}
                        alt={`Product view ${index + 1}`}
                        className="w-full h-auto object-cover aspect-square"
                      />
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Right Side - Product Info (50% on desktop) */}
          <div className="w-full lg:w-1/2">
            {/* Product Title */}
            <h1 className="text-3xl sm:text-4xl font-500 text-gray-900 mb-2 font-[Poppins]">
              {productData.name}
            </h1>

            {/* Rating */}

            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[1, 2, 3, 4].map((star) => (
                  <FaStar key={star} className="text-yellow-400 w-5 h-5" />
                ))}

                {/* Half star logic */}
                <div className="relative w-5 h-5">
                  <FaRegStar className="text-yellow-400 w-5 h-5 absolute top-0 left-0" />
                  <div className="w-1/2 h-5 overflow-hidden absolute top-0 left-0">
                    <FaStar className="text-yellow-400 w-5 h-5" />
                  </div>
                </div>
              </div>
              <span className="text-gray-600 text-sm">(4.5)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-3xl font-500 font-sans text-blue-600">
                {currency}
                {productData.price.toLocaleString()}
              </span>
              {productData.originalPrice && (
                <>
                  <span className="text-gray-500 line-through ml-2">
                    {currency}
                    {productData.originalPrice.toLocaleString()}
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm font-medium ml-2 px-2 py-0.5 rounded">
                    Save {currency}
                    {(
                      productData.originalPrice - productData.price
                    ).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            {productData.description && (
              <div className="mb-6">
                <p className="text-gray-700 font-400 font-sans leading-relaxed">
                  {productData.description}
                </p>
              </div>
            )}

            {/* Add to Cart Button */}
            <div className="mb-4">
              <button onClick={()=>addToCart(productData._id)}  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-500 font-sans py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2">
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

            {/* Guarantee Text */}
            <div className="text-center">
              <p className="text-sm font-medium font-sans text-gray-900 flex items-center justify-center gap-1">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                100% Original Product - 1 Year Warranty
              </p>
            </div>
          </div>
        </div>

        {/* Additional Product Info */}
        {/* {productData.details && (
          <div className="mt-16 border-t border-gray-200 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 font-[Poppins]">
              Product Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(productData.details).map(([key, value]) => (
                <div key={key}>
                  <h4 className="font-medium text-gray-900 mb-2">{key}</h4>
                  <p className="text-gray-600">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}
        <RelatedProducts category={productData.category} currentProductId={productData._id}/>
      </div>
    </div>
  );
}

export default ProductDetails;
