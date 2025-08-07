import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Title from "../component/Title";
import Card from "../component/Card";
import { shopDataContext } from "../context/ShopContext";

function Collections() {
  let [showFilter, setShowFilter] = useState(false);
  let { products, search, showSearch } = useContext(shopDataContext);
  let [filterProduct, setFilterProduct] = useState([]);
  let [category, setCategory] = useState([]);
  let [sortType, setSortType] = useState("relavent");

  const applyFilter = () => {
    let productCopy = products.slice();

    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProducts = (e) => {
    let fbCopy = filterProduct.slice();

    switch (sortType) {
      case "low-high":
        setFilterProduct(fbCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProduct(fbCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  return (
    <div className="w-full min-h-[100vh] flex items-start pb-[90px] flex-col md:flex-row justify-start pt-[70px] overflow-x-hidden z-[2]">
      <div
        className={`md:w-[30vw] ${
          showFilter ? "h-[45vh]" : "h-[8vh]"
        } lg:w-[20vw] w-[100vw] md:min-h-[100vh] p-[20px] border-r-[1px] border-gray-400 text-black lg:fixed`}
      >
        <p
          className="text-[25px] cursor-pointer font-semibold flex gap-[5px] items-center justify-start"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
          {!showFilter && <FaAngleRight className="text-[18px] md:hidden" />}
          {showFilter && <FaAngleDown className="text-[18px] md:hidden" />}
        </p>
        <div
          className={`border-[2px] border-white shadow-lg pl-5   rounded-md bg-white ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Brands</h3>
            <div className="flex flex-col space-y-3">
              {/* First Row */}
              <div className="flex flex-wrap gap-4">
                {/* Samsung */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="samsung-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Samsung"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="samsung-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Samsung
                  </label>
                </div>

                {/* Apple */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="apple-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Apple"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="apple-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Apple
                  </label>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap gap-4">
                {/* Google */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="google-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Google"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="google-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Google
                  </label>
                </div>

                {/* Xiaomi */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="xiaomi-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Xiaomi"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="xiaomi-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Xiaomi
                  </label>
                </div>
              </div>

              {/* Third Row */}
              <div className="flex flex-wrap gap-4">
                {/* Oppo */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="oppo-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Oppo"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="oppo-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Oppo
                  </label>
                </div>

                {/* Realme */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="realme-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Realme"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="realme-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Realme
                  </label>
                </div>
              </div>

              {/* Fourth Row */}
              <div className="flex flex-wrap gap-4">
                {/* Vivo */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="vivo-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Vivo"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="vivo-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Vivo
                  </label>
                </div>

                {/* Motorola */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="motorola-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Motorola"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="motorola-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Motorola
                  </label>
                </div>
              </div>

              {/* Fifth Row */}
              <div className="flex flex-wrap gap-4">
                {/* Nothing */}
                <div className="flex items-center w-[calc(50%-8px)] min-w-[120px]">
                  <input
                    id="nothing-checkbox"
                    type="checkbox"
                    onChange={toggleCategory}
                    value="Nothing"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="nothing-checkbox"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    Nothing
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pl-[20%] md:py-[10px]">
        <div className=" md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]">
          <Title text1={"All"} text2={" Collections"} />
        </div>
        <div className="lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]">
          {filterProduct.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              name={item.name}
              price={item.price.toLocaleString("en-IN")}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
