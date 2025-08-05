import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";

function List() {
  let [list, setList] = useState([]);
  let { serverUrl } = useContext(authDataContext);

  const fetchList = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list");
      setList(result.data);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeList=async(id)=>{
    try {
      let result=await axios.post(`${serverUrl}/api/product/remove/${id}`,{},{withCredentials:true})

      if(result.data){
        fetchList()
      }else{
        console.log("Failed To Remove Product");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div>
      <div className="h-screen w-screen flex flex-col overflow-hidden">
        <div className="flex-shrink-0 z-50">
          <Nav />
        </div>
        <div className="flex flex-1  overflow-hidden">
          <Sidebar />
          <div className="flex-grow h-full  bg-gray-100 overflow-y-auto">
            <form
              action=""
              className="w-[100%] md:w-[90%]  h-[100%] mt-[20px] flex flex-col gap-[20px] py-[60px] px-[30px] md:px-[60px]"
            >
              <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-black">
                All Listed Products
              </div>
              {list?.length > 0 ? (
                list.map((item, index) => (
                  <div
                    className="w-[100%] bg-white md:h-[120px] h-[90px] rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]"
                    key={index}
                  >
                    <img
                      src={item.image1}
                      className="w-[30%] md:w-[120px] h-[90%] rounded-lg"
                    />
                    <div className="w-[90%] h-[80%] flex flex-col items-start justify-center gap-[2px]">
                      <div className="w-[100%] md:text-[20px] text-[15px] font-semibold font-consolas text-black">
                        {item.name}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-black">
                        {item.category}
                      </div>
                      <div className="md:text-[17px] text-[15px] text-black">
                        ₹ {item.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="w-[10%] h-[100%] bg-transparent flex items-center justify-center">
                      <span onClick={()=>removeList(item._id)} className="cursor-pointer hover:bg-red-600 hover:text-white hover:rounded-2xl">
                        <RxCross2 className="text-[30px]"/>
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-black text-lg">No Products Available.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
