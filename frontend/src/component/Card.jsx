import React, { useContext } from "react";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

function Card({ name, image, id, price }) {
  let { currency } = useContext(shopDataContext);
  let navigate=useNavigate()

  return (
    // <div className="w-[300px] max-w-[90%] h-[400px] bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer border-[1px] border-[#80808049]">
    //   <img src={image} className="w-[100%] h-[80%] rounded-sm object-cover" />
    //   <div className="text-black text-[18px] py-[10px]">{name}</div>
    //   <div className="text-black text-[14px]">
    //     {currency}
    //     {price}
    //   </div>
    // </div>

    <div onClick={()=>navigate(`/productdetail/${id}`)} className="w-[300px] max-w-[90%]  bg-[#ffffff0a] backdrop:blur-lg rounded-lg hover:scale-[102%] flex items-start justify-start flex-col p-[10px] cursor-pointer ">
      <div className="relative">
        {/* Phone Image */}
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          <img
            src={image}
            className="w-full h-[80%] sm:w-80 lg:w-96 object-cover rounded-3xl shadow-2xl"
          />

          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20 blur-xl pointer-events-none"></div>
        </div>

        {/* Floating Circles */}
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10 animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-10 animate-pulse pointer-events-none"></div>
      </div>
      <div className="text-black text-[18px] py-[10px]">{name}</div>
      <div className="text-black text-[14px]">
        {currency}
        {price}
      </div>
    </div>
  );
}

export default Card;
