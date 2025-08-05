import React from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { useState, useContext, useEffect } from "react";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { GiCardboardBoxClosed } from "react-icons/gi";

function Orders() {
  let [orders, setOrders] = useState([]);
  let { serverUrl } = useContext(authDataContext);

  const fetchAllOrders = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/list",
        {},
        { withCredentials: true }
      );
      setOrders(result.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  const statusHandler=async(e,orderId)=>{
    try {
      const result=await axios.post(serverUrl+'/api/order/status',{orderId,status:e.target.value},{withCredentials:true})
      if(result.data){
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="h-screen w-screen flex overflow-hidden flex-col bg-gray-50">
      <div className="flex-shrink-0 z-50">
        <Nav />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Orders List</h1>
            
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <div className="p-6 flex flex-col lg:flex-row gap-6 lg:items-center">
                    {/* Order Icon */}
                    <div className="flex-shrink-0">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <GiCardboardBoxClosed className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap gap-1 mb-3">
                        {order.items.map((item, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {item.name.toUpperCase()} × {item.quantity}
                            {idx !== order.items.length - 1 && ','}
                          </span>
                        ))}
                      </div>

                      {/* Address */}
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="font-medium text-gray-900">
                          {order.address.firstName} {order.address.lastName}
                        </p>
                        <p>{order.address.address},</p>
                        <p>
                          {order.address.city}, {order.address.state}, {order.address.country}
                        </p>
                        <p>Phone: {order.address.phone}</p>
                      </div>
                    </div>

                    {/* Order Meta */}
                    <div className="flex flex-col gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">Items:</span>
                        <span className="text-gray-900">{order.items.length}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">Method:</span>
                        <span className="text-gray-900 capitalize">{order.paymentMethod}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">Payment:</span>
                        <span className={`font-medium ${order.payment ? 'text-green-600' : 'text-yellow-600'}`}>
                          {order.payment ? 'Done' : 'Pending'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-500">Date:</span>
                        <span className="text-gray-900">{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xl font-bold text-gray-900">₹{order.amount.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    {/* Status Selector */}
                    <div className="lg:self-start">
                      <select 
                        value={order.status} 
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        onChange={(e)=>statusHandler(e,order._id)}
                      >
                        <option value="Order Placed">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out For Delivery">Out For Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {orders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No orders found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;