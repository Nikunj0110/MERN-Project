import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { authDataContext } from "./AuthContext";
import axios from "axios";
import { userDataContext } from "./UserContext";
import { toast } from "react-toastify";
// import Loading from "../../../admin/src/component/Loading";

export const shopDataContext = createContext();

function ShopContext({ children }) {
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");
  let { userData } = useContext(userDataContext);
  let [showSearch, setShowSearch] = useState(false);
  let [cartItem, setCartItem] = useState({});
  let { serverUrl } = useContext(authDataContext);
  const [loading, setLoading] = useState(false);

  let currency = "₹";
  let delivery_fee = 0;

  const getProducts = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/product/list");
      console.log(result.data);
      setProducts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (itemId) => {
    setLoading(true);

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId]) {
        cartData[itemId] += 1;
      } else {
        cartData[itemId] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId] = 1;
    }

    setCartItem(cartData);

    if (userData) {
      try {
        let result = await axios.post(
          serverUrl + "/api/cart/add",
          { itemId },
          { withCredentials: true }
        );
        console.log(result.data);
        toast.success("Product Added");
      } catch (error) {
        console.log(error);
        toast.error("Add Product Failed");
      }
    }
  };

  const getUserCart = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/cart/get",
        {},
        { withCredentials: true }
      );

      setCartItem(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId] = quantity;
    setCartItem(cartData);

    if (userData) {
      try {
        await axios.post(
          serverUrl + "/api/cart/update",
          { itemId, quantity },
          { withCredentials: true }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      try {
        if (cartItem[items] > 0) {
          totalCount += cartItem[items];
        }
      } catch (error) {
        console.log(error);
      }
    }
    return totalCount;
  };

  // const getCartAmount=()=>{
  //     let totalAmount=0;
  //     for(const items in cartItem){
  //         let itemInfo=products.find((product)=> product._id === items);
  //         for(const item in cartItem[items]){
  //             try {
  //                 if(cartItem[items][item]>0){
  //                     totalAmount += itemInfo.price * cartItem[items][item]
  //                 }
  //             } catch (error) {

  //             }
  //         }
  //     }
  //     return totalAmount;
  // }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) continue; // Add safeguard
      try {
        totalAmount += itemInfo.price * cartItem[items];
      } catch (error) {
        console.log(error);
      }
    }
    return totalAmount; // ✅ return the total!
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getUserCart();
  }, []);

  let value = {
    products,
    currency,
    delivery_fee,
    getProducts,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCart,
    getCartCount,
    setCartItem,
    updateQuantity,
    getCartAmount,
  };
  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext;
