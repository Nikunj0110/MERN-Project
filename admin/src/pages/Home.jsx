// import React, { useContext, useEffect, useState } from "react";
// import Nav from "../component/Nav";
// import Sidebar from "../component/Sidebar";
// import { authDataContext } from "../context/AuthContext";
// import axios from "axios";

// function Home() {
//   const [totalProducts, setTotalProducts] = useState(0);
//   const [totalOrders, setTotalOrders] = useState(0);
//   const { serverUrl } = useContext(authDataContext);

//   const fetchCounts = async () => {
//     try {
//       const products = await axios.get(
//         `${serverUrl}/api/product/list`,
//         {},
//         { withCredentials: true }
//       );
//       setTotalProducts(products.data.length);

//       const orders = await axios.post(
//         `${serverUrl}/api/order/list`,
//         {},
//         { withCredentials: true }
//       );
//       setTotalOrders(orders.data.length);
//     } catch (error) {
//       console.error("Failed to fetch counts", error);
//     }
//   };

//   useEffect(() => {
//     fetchCounts();
//   }, []);
//   return (
//     <div>
//       <div className="h-screen w-screen flex flex-col overflow-hidden">
//         <div className="flex-shrink-0 z-50">
//           <Nav />
//         </div>
//         <div className="flex flex-1  overflow-hidden">
//           <Sidebar />
//           <div className="w-[70vw] h-[100vh] absolute left-[23%] flex items-start justify-start flex-col gap-[40px] py-[100px]">
//             <h1 className="text-[35px] text-black ">Speak Deals Admin Panel</h1>
//             <div className="flex items-center justify-start gap-[50px] flex-col md:flex-row">
//               <div className="text-black w-[400px] max-w-[90%] h-[200px] bg-gray-300 flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px]">
//                 Total Products :{" "}
//                 <span className="px-[20px] py-[10px] rounded-lg flex items-center border-[1px] bg-gray-400 justify-center">
//                   {totalProducts}
//                 </span>
//               </div>

//                <div className="text-black w-[400px] max-w-[90%] h-[200px] bg-gray-300 flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blur-lg md:text-[25px] text-[20px] border-[1px]">
//                 Total Orders :{" "}
//                 <span className="px-[20px] py-[10px] rounded-lg flex items-center border-[1px] bg-gray-400 justify-center">
//                   {totalOrders}
//                 </span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React, { useContext, useEffect, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Home() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const { serverUrl } = useContext(authDataContext);

  const fetchCounts = async () => {
    try {
      const products = await axios.get(
        `${serverUrl}/api/product/list`,
        {},
        { withCredentials: true }
      );
      setTotalProducts(products.data.length);

      const orders = await axios.post(
        `${serverUrl}/api/order/list`,
        {},
        { withCredentials: true }
      );
      setTotalOrders(orders.data.length);
    } catch (error) {
      console.error("Failed to fetch counts", error);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex-shrink-0 z-50">
          <Nav />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-10">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-500 pt-18 text-gray-800 mb-8 md:mb-12 animate-fade-in">
                Speak Deals Admin Panel
              </h1>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10">
                {/* Products Card */}
                <div className="w-full md:w-[400px] h-[200px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-4 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                    Total Products
                  </h2>
                  <div className="px-6 py-3 bg-blue-50 rounded-lg border border-blue-100 shadow-inner">
                    <span className="text-2xl md:text-3xl font-bold text-blue-600">
                      {totalProducts}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(100, (totalProducts / 100) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Orders Card */}
                <div className="w-full md:w-[400px] h-[200px] bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col items-center justify-center gap-4 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-200">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
                    Total Orders
                  </h2>
                  <div className="px-6 py-3 bg-green-50 rounded-lg border border-green-100 shadow-inner">
                    <span className="text-2xl md:text-3xl font-bold text-green-600">
                      {totalOrders}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-green-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(100, (totalOrders / 100) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;