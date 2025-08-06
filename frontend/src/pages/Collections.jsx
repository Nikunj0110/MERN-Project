import React, { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Title from "../component/Title";
import Card from "../component/Card";
import { shopDataContext } from "../context/ShopContext";

function Collections() {
  let [showFilter, setShowFilter] = useState(false);
  let { products,search,showSearch } = useContext(shopDataContext);
  let [filterProduct, setFilterProduct] = useState([]);
  let [category, setCategory] = useState([]);
  let [sortType, setSortType] = useState("relavent");

  const applyFilter = () => {
    let productCopy = products.slice();

    if(showSearch && search ){
      productCopy=productCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    setFilterProduct(productCopy);
  };

  const sortProducts=(e)=>{
    let fbCopy=filterProduct.slice()

    switch(sortType){
      case 'low-high':
        setFilterProduct(fbCopy.sort((a,b)=>(a.price-b.price)))
        break;

        case 'high-low':
        setFilterProduct(fbCopy.sort((a,b)=>(b.price-a.price)))
        break;

        default:
          applyFilter()
          break
    }
  }

  useEffect(()=>{
    sortProducts()
  },[sortType])

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category,search,showSearch]);

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
          className={`border-[2px] border-white shadow-lg pl-5 py-3 mt-6 rounded-md bg-white ${
            showFilter ? "" : "hidden"
          } md:block`}
        >
          <p className="text-[20px] text-black">Categories</p>
          <div className="w-[230px] h-[120px] flex items-start justify-center gap-[10px] flex-col">
            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Samsung"}
                className="w-3"
              />
              Samsung
            </p>

            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Apple"}
                className="w-3"
              />
              Apple
            </p>

            <p className="flex items-center justify-center gap-[10px] text-[16px] font-light">
              <input
                type="checkbox"
                onChange={toggleCategory}
                value={"Oppo"}
                className="w-3"
              />
              Oppo
            </p>
          </div>
        </div>
      </div>

      <div className="lg:pl-[20%] md:py-[10px]">
        <div className=" md:w-[80vw] w-[100vw] p-[20px] flex justify-between flex-col lg:flex-row lg:px-[50px]">
          <Title text1={"All"} text2={" Collections"} />
          {/* <select onChange={(e)=>setSortType(e.target.value)} className="bg-blue-500 w-[60%] md:w-[200px] font-semibold h-[50px] px-[10px] text-white rounded-lg  ">
            <option value="relavent" className="w-[100%] font-sans font-semibold  h-[100%]">
              Sort By : Relavent
            </option>
            <option value="low-high" className="w-[100%] font-sans font-semibold h-[100%]">
              Sort By : Low to high
            </option>
            <option value="high-low" className="w-[100%] font-sans font-semibold h-[100%]">
              Sort By : High to low
            </option>
          </select> */}
        </div>
        <div className="lg:w-[80vw] md:w-[60vw] w-[100vw] min-h-[70vh] flex items-center justify-center flex-wrap gap-[30px]">
          {filterProduct.map((item, index) => (
            <Card
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections;
