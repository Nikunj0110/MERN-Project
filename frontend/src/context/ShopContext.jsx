import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import {authDataContext} from './AuthContext'
import axios from 'axios'

export const shopDataContext=createContext()

function ShopContext({children}) {
 
let [products,setProducts]=useState([])
let [search,setSearch]=useState('')
let [showSearch,setShowSearch]=useState(false)
let [cartItem,setCartItem]=useState({})
let {serverUrl}=useContext(authDataContext)
let currency='₹'
let delivery_fee=10

const getProducts=async()=>{
    try {
        let result=await axios.get(serverUrl+'/api/product/list')
        console.log(result.data);
        setProducts(result.data)
    } catch (error) {
        console.log(error);
    }
}

const addToCart=async(itemId)=>{
    let cartData=structuredClone(cartItem)

    if(cartData[itemId]){
        if(cartData[itemId]){
            cartData[itemId] += 1
        }else{
            cartData[itemId]=1
        }
    }else{
        cartData[itemId]={};
        cartData[itemId]=1
    }
    setCartItem(cartData)
    console.log(cartData);
}

const getCartCount=()=>{
    let totalCount=0;
    for(const items in cartItem){
      
            try {
                if(cartItem[items]>0){
                    totalCount += cartItem [items]
                }
            } catch (error) {
                console.log(error);
            }
    }
    return totalCount;
}

useEffect(()=>{
    getProducts()
},[])

    let value={
        products,currency,delivery_fee,getProducts,search,setSearch,showSearch,setShowSearch,cartItem,addToCart,getCartCount,setCartItem
    }
  return (
    <div>
    <shopDataContext.Provider value={value}>
    {children}
    </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext