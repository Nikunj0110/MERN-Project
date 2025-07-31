import React, { useContext, useEffect, useState } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import CartTotal from "../component/CartTotal";
import { LuCircleGauge } from "react-icons/lu";


function Cart() {
  const { products, currency, cartItem, updateQuantity } =
    useContext(shopDataContext);

  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItem) {
      if (cartItem[items] > 0) {
        tempData.push({
          _id: items,
          quantity: cartItem[items],
        });
      }
    }
    setCartData(tempData);
  }, [cartItem]);

  return (
    <div className="w-[99vw] min-h-[100vh] p-[20px] overflow-hidden bg-white">
      <div className="h-[8%] w-[100%] text-center mt-[80px]">
        <Title text1={"Your"} text2={" Cart"} />
      </div>

      <div className="w-[100%] h-[92%] flex flex-wrap gap-[20px]">
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div key={index} className="w-[100%] h-[10%]">
              <div className="w-[100%] h-[80%] flex items-start gap-6 bg-gray-200 py-[10px] px-[20px] rounded-2xl relative">
                <img
                  className="w-[100px] h-[100px] rounded-md"
                  src={productData.image1}
                />
                <div className="flex items-start justify-center flex-col gap-[10px]">
                  <p className="md:text-[25px] text-[20px] text-black">
                    {productData.name}
                  </p>
                  <div className="flex items-start gap-[20px]">
                    <p className="text-[20px] text-black">
                      {currency} {productData.price}
                    </p>
                  </div>
                </div>

                <input
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                  className="md:max-w-20 max-w-10 md:px-2 md:py-2 py-[5px] px-[10px] text-black text-[18px] font-semibold bg-gray-300 absolute md:top-[40%] top-[46%] left-[75%] md:left-[50%] rounded-md"
                  onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,Number(e.target.value))}
                />
                <MdDelete onClick={()=>updateQuantity(item._id,0)} className="text-black w-[25px] h-[25px] absolute top-[50%] md:top-[40%] cursor-pointer md:right-[5%] right-1"/>

              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-end my-20">
        <div className="w-full sm:w-[450px]">
            <CartTotal/>
            <button onClick={()=>{
                if(cartData.length>0){
                    navigate('/placeorder')
                }else{
                    console.log('Your Cart Is Empty')
                }
            }} className="text-[18px] font-400 cursor-pointer bg-blue-400 py-[10px] px-[50px] rounded-2xl text-black flex items-center justify-center gap-[20px]  ml-[30px] mt-[20px]">
                Proceed To Chekout
            </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
