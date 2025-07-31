import React, { useContext, useState } from "react";
import logo from "../assets/main.png";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { userDataContext } from "../context/UserContext";
import { BiSolidSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { authDataContext } from '../context/AuthContext';
import axios from "axios";
import { GoHome } from "react-icons/go";

import { HiOutlineCollection } from "react-icons/hi";
import { RiContactsLine } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let {showSearch, setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async (req, res) => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[60px] z-10 fixed top-0 flex items-center justify-between md:px-[30px] px-[10px] bg-white shadow-lg shadow-gray-200 border-b border-gray-100 backdrop-blur-sm">
      <div className="md:w-[30%] w-[50%] flex items-center">
          <img src={logo} className="w-[40px] h-[40px]" />
        <h1 className="text-[26px] font-semibold  bg-clip-text text-black tracking-tight -ml-2">
          peak Deals
        </h1>
      </div>

      <div className="w-[40%] hidden lg:flex">
        <ul className="flex gap-[8px] items-center justify-center">
          {
            <li
              onClick={() => navigate("/home")}
              className="text-[16px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-[12px] px-[20px] rounded-xl transition-all duration-300 ease-in-out font-medium hover:scale-105 active:scale-95"
            >
              Home
            </li>
          }
          <li
            onClick={() => navigate("/collections")}
            className="text-[16px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-[12px] px-[20px] rounded-xl transition-all duration-300 ease-in-out font-medium hover:scale-105 active:scale-95"
          >
            Collections
          </li>
          <li
            onClick={() => navigate("/about")}
            className="text-[16px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-[12px] px-[20px] rounded-xl transition-all duration-300 ease-in-out font-medium hover:scale-105 active:scale-95"
          >
            About
          </li>
          <li
            onClick={() => navigate("/contact")}
            className="text-[16px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer py-[12px] px-[20px] rounded-xl transition-all duration-300 ease-in-out font-medium hover:scale-105 active:scale-95"
          >
            Contact
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch && (
          <div className="p-[10px] hover:bg-gray-100 rounded-full transition-all duration-300 cursor-pointer group">
            <FaSearch
              className="h-[20px] w-[20px] cursor-pointer text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
              onClick={() => {setShowSearch((prev) => !prev);navigate('/collections')}}
            />
          </div>
        )}

        {showSearch && (
          <div className="p-[10px] bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-300 cursor-pointer group">
            <FaSearch
              className="h-[20px] w-[20px] cursor-pointer text-blue-600 transition-colors duration-300"
              onClick={() => setShowSearch((prev) => !prev)}
            />
          </div>
        )}
        {!userData && (
          <div className="p-[10px] hover:bg-gray-100 rounded-full transition-all duration-300 cursor-pointer group">
            <FaUserAlt
              onClick={() => setShowProfile((prev) => !prev)}
              className="h-[20px] w-[20px] cursor-pointer text-gray-600 group-hover:text-blue-600 transition-colors duration-300"
            />
          </div>
        )}

        {userData && (
          <div
            className="w-[36px] h-[36px] cursor-pointer bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-semibold text-[14px] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}
        <div className="relative hidden lg:block">
          <div className="p-[10px] hover:bg-gray-100 rounded-full transition-all duration-300 cursor-pointer group">
            <IoCartOutline onClick={()=>navigate('/cart')} className="h-[24px] w-[24px] cursor-pointer text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
          </div>
          <div className="absolute w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-[10px] font-bold top-[2px] right-[2px] shadow-md">
            {getCartCount()}
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="w-[100%] h-[80px] absolute top-[100%] left-0 right-0 flex items-center justify-center bg-white shadow-lg border-b border-gray-100">
          <div className="relative w-[80%]  lg:w-[50%]">
            <input
              type="text"
              className="w-[100%] h-[50px] bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:bg-white rounded-2xl px-[50px] pr-[50px] placeholder:text-gray-500 text-gray-800 font-medium text-[16px] outline-none transition-all duration-300 shadow-sm focus:shadow-md"
              placeholder="Search for products..."
              onChange={(e)=>{setSearch(e.target.value)}}
              value={search}
            />
            <BiSolidSearch className="absolute left-[18px] top-[50%] transform -translate-y-[50%] text-gray-400 w-[20px] h-[20px]" />
          </div>
        </div>
      )}

      {showProfile && (
        <div className="absolute w-[240px] bg-white top-[110%] right-[4%] border border-gray-200 rounded-2xl z-10 shadow-xl backdrop-blur-sm overflow-hidden">
          <ul className="w-[100%] flex flex-col text-[15px] py-[8px]">
            {!userData && (
              <li
                className="w-[100%] hover:bg-blue-50 px-[18px] py-[12px] cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
                className="w-[100%] hover:bg-red-50 px-[18px] py-[12px] cursor-pointer text-gray-700 hover:text-red-600 transition-all duration-200 font-medium"
              >
                Logout
              </li>
            )}
            <li className="w-[100%] hover:bg-blue-50 px-[18px] py-[12px] cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium">
              Orders
            </li>
            <li
              // onClick={() => {
              //   () => navigate("/about");
              //   setShowProfile(false);
              // }}
          onClick={() => navigate("/about")}
              className="w-[100%] hover:bg-blue-50 px-[18px] py-[12px] cursor-pointer text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium"
            >
              About
            </li>
          </ul>
        </div>
      )}

      {/* FOR RESPONSIVE USE ONLY  */}
      <div className="w-[100vw] h-[60px] flex items-center justify-between px-[20px] fixed bottom-0 top-162 left-0 bg-white shadow-[0_-8px_25px_-5px_rgba(0,0,0,0.1)] border-t border-gray-100 md:hidden backdrop-blur-sm z-50">
        <button
          onClick={() => navigate("/home")}
          className="text-gray-600 hover:text-blue-600 flex items-center justify-center flex-col gap-[4px] py-[10px] px-[8px] rounded-xl hover:bg-blue-50 transition-all duration-300 active:scale-95 min-w-[60px]"
        >
          <GoHome className="w-[24px] h-[24px]" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button
          onClick={() => navigate("/collections")}
          className="text-gray-600 hover:text-blue-600 flex items-center justify-center flex-col gap-[4px] py-[10px] px-[8px] rounded-xl hover:bg-blue-50 transition-all duration-300 active:scale-95 min-w-[60px]"
        >
          <HiOutlineCollection className="w-[24px] h-[24px]" />
          <span className="text-[10px] font-medium">Collections</span>
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="text-gray-600 hover:text-blue-600 flex items-center justify-center flex-col gap-[4px] py-[10px] px-[8px] rounded-xl hover:bg-blue-50 transition-all duration-300 active:scale-95 min-w-[60px]"
        >
          <RiContactsLine className="w-[24px] h-[24px]" />
          <span className="text-[10px] font-medium">Contact</span>
        </button>
        <button onClick={()=>navigate('/cart')} className="text-gray-600 hover:text-blue-600 flex items-center justify-center flex-col gap-[4px] py-[10px] px-[8px] rounded-xl hover:bg-blue-50 transition-all duration-300 active:scale-95 relative min-w-[60px]">
          <FaOpencart className="w-[24px] h-[24px]" />
          <span className="text-[10px] font-medium">Cart</span>
          <div className="absolute w-[18px] h-[18px] flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-[9px] font-bold top-[0px] right-[10px] shadow-md">
            {getCartCount()}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Nav;
