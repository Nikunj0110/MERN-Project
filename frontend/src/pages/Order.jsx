import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import axios, { all } from "axios";
import { authDataContext } from "../context/AuthContext";

function Order() {
  let [orderData, setOrderData] = useState([]);
  let { currency } = useContext(shopDataContext);
  let { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/userorder",
        {},
        { withCredentials: true }
      );
      if (result.data) {
        let allOrdersItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["data"] = order.data;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);
  return (
    <div className="w-[99vw] pt-20 min-h-[100vh] p-[20px] pb-[150px] overflow-hidden bg-gray-50 ">
      <div className="h-[8%] w-[100%] text-center mt-[80px-]">
        <Title text1={"My"} text2={" Order"} />
      </div>
      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {orderData.map((item, index) => (
          <div key={index} className="w-[100%] h-[10%]">
            <div className="w-[100%] bg-white py-[10px] px-[20px]  relative h-[80%] flex items-start gap-6 ">
              <img
                src={item.image1}
                className="w-[130px] h-[130px] rounded-md"
              />
              <div className="flex items-start justify-center flex-col gap-[5px] ">
                <p className="md:text-[25px] text-[20px] text-black">
                  {item.name}
                </p>
                <div className="flex items-center gap-[8px] md:gap-[20px]">
                  <p className="md:text-[18px] text-[12px] text-black">
                    {currency}
                    {item.price.toLocaleString('en-IN')}
                  </p>

                  <p className="md:text-[18px] text-[12px] text-black">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="md:text-[18px] text-black text-[12px]">
                    Date:{" "}
                    <span className="text-black pl-[10px] md:text-[16px] text-[11px]">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="md:text-[16px] text-[12px] text-black">
                    Payment Method : {item.paymentMethod}
                  </p>
                </div>
                <div className="absolute md:left-[55%] md:top-[40%] right-[2%] top-[2%]">
                <div className="flex items-center gap-[5px]">
                <p className="min-w-2 h-2 rounded-full bg-green-500">

                </p>
                <p className="md:text-[17px] text-[10px] text-black">
              {item.status}
                </p>
                </div>
                </div>
                <div className="absolute md:right-[5%] right-[2%] md:top-[40%] top-[75%]">
            <button className="px-[15px] py-[7px]  rounded-md bg-blue-500 text-white text-[12px] md:text-[16px] cursor-pointer active:bg-slate-500" onClick={loadOrderData}>
              Track Order
            </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Order;
