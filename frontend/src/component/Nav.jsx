import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { userDataContext } from "../context/UserContext";
import { BiSolidSearch } from "react-icons/bi";

function Nav() {
  let { userData } = useContext(userDataContext);
  let [showSearch, setShowSearch] = useState(false);
  let [showProfile, setShowProfile] = useState(false);

  return (
    <div className="w-[100vw] h-[60px] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[30%] flex items-center justify-start gap-[10px]">
        <img src={logo} className="w-[30px]" />
        <h1 className="text-[25px] text-[black] font-sans">Mobile Zone</h1>
      </div>

      <div className="w-[40%]">
        <ul className="flex gap-[19px] items-center justify-center">
          <li className="text-[18px] hover:text-amber-950 cursor-pointer py-[10px] px-[20px] ">
            Home
          </li>
          <li className="text-[18px] hover:text-amber-950 cursor-pointer py-[10px] px-[20px] ">
            Collections
          </li>
          <li className="text-[18px] hover:text-amber-950 cursor-pointer py-[10px] px-[20px] ">
            About
          </li>
          <li className="text-[18px] hover:text-amber-950 cursor-pointer py-[10px] px-[20px] ">
            Contact
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[30px]">
        {!showSearch && (
          <FaSearch
            className="h-[38px] w-[20px] cursor-pointer text-[#000000]"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}

        {showSearch && (
          <BiSolidSearch
            className="h-[42px] w-[24px] cursor-pointer text-[#000000]"
            onClick={() => setShowSearch((prev) => !prev)}
          />
        )}
        {!userData && (
          <FaUserAlt className="h-[38px] w-[20px] cursor-pointer text-[#000000]" />
        )}

        //aayathi
        {userData && (
          <div
            className="w-[30px] h-[30px] cursor-pointer bg-[#080808] text-white rounded-full flex items-center justify-center"
            onClick={() => setShowProfile((prev) => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}
        <IoCartOutline className="h-[42px] w-[24px] cursor-pointer text-[#000000]" />
        <p className="absolute w-[18px] h-[18px] items-center justify-center bg-black px-[4px] py-[2.5px] text-white rounded-full text-[9px] top-[10px] right-[23px]">
          10
        </p>
      </div>

      {showSearch && 
        <div className="w-[100%] h-[80px]  absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-white rounded-[30px] px-[50px] placeholder:text-black text-[black] font-semibold text-[18px] "
            placeholder="Search here"
          />
        </div>
      }

//aayathi 
         {showProfile && 
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
        </div>
      }

      
    </div>
  );
}

export default Nav;
