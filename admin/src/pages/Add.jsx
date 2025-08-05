import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { FaPlus, FaSleigh } from "react-icons/fa";
import { authDataContext } from "../context/AuthContext";
import axios from 'axios'
import { toast } from "react-toastify";
import Loading from "../component/Loading";

function Add() {
  let [image1, setImage1] = useState(false);
  let [image2, setImage2] = useState(false);
  let [image3, setImage3] = useState(false);
  let [image4, setImage4] = useState(false);

  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let [price, setPrice] = useState("");
  let [bestseller, setBestseller] = useState(false);

  const [loading,setLoading]=useState(false)

  let {serverUrl}=useContext(authDataContext)

  let handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let formData=new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("bestseller",bestseller)
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)

      let result=await axios.post(serverUrl+"/api/product/addproduct",formData,{withCredentials:true})

      console.log(result.data);
toast.success("Add Product Successfully")
      setLoading(false)

      if(result.data){
        setName("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setDescription("")
        setBestseller(false)
        setCategory("")
      }
    } catch (error) {
      console.log(error);
      toast.error("Add Product Failed")
      setLoading(false)
    }

  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div className="flex-shrink-0 z-50">
        <Nav />
      </div>
      <div className="flex flex-1  overflow-hidden">
        <Sidebar />
        {/* Main DIv */}
        {/* <div className="w-[82%] h-full flex items-center justify-start overflow-x-hidden absolute right-0  bg-gray-100"> */}
        <div className="flex-grow h-full  bg-gray-100 overflow-y-auto">
          <form
            action=""
            onSubmit={handleAddProduct}
            className="w-[100%] md:w-[90%]  h-[100%] mt-[20px] flex flex-col gap-[20px] py-[60px] px-[30px] md:px-[60px]"
          >
            <div className="w-[400px] h-[50px] text-[25px] md:text-[40px] text-black">
              Add Product Page
            </div>
            <div className="w-[80%] h-[130px] flex items-start justify-center flex-col md:mt-[20px] gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">
                Upload Image
              </p>

              <div className="w-[100%] gap-[10px] h-[100%] flex items-center justify-start">
                <label
                  htmlFor="image1"
                  className="cursor-pointer w-full max-w-[400px]"
                  required
                >
                  <input
                    type="file"
                    id="image1"
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage1(e.target.files[0])}
                  />

                  {image1 ? (
                    <img
                      src={URL.createObjectURL(image1)}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-32 border border-dotted border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-50 transition">
                      <FaPlus className="text-gray-500 text-2xl" />
                    </div>
                  )}
                </label>

                <label
                  htmlFor="image2"
                  className="cursor-pointer w-full max-w-[400px]"
                  required
                >
                  <input
                    type="file"
                    id="image2"
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage2(e.target.files[0])}
                  />

                  {image2 ? (
                    <img
                      src={URL.createObjectURL(image2)}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-32 border border-dotted border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-50 transition">
                      <FaPlus className="text-gray-500 text-2xl" />
                    </div>
                  )}
                </label>

                <label
                  htmlFor="image3"
                  className="cursor-pointer w-full max-w-[400px]"
                  required
                >
                  <input
                    type="file"
                    id="image3"
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage3(e.target.files[0])}
                  />

                  {image3 ? (
                    <img
                      src={URL.createObjectURL(image3)}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-32 border border-dotted border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-50 transition">
                      <FaPlus className="text-gray-500 text-2xl" />
                    </div>
                  )}
                </label>

                <label
                  htmlFor="image4"
                  className="cursor-pointer w-full max-w-[400px]"
                  required
                >
                  <input
                    type="file"
                    id="image4"
                    hidden
                    accept="image/*"
                    onChange={(e) => setImage4(e.target.files[0])}
                  />

                  {image4 ? (
                    <img
                      src={URL.createObjectURL(image4)}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-md"
                    />
                  ) : (
                    <div className="w-full h-32 border border-dotted border-gray-400 rounded-md flex items-center justify-center hover:bg-gray-50 transition">
                      <FaPlus className="text-gray-500 text-2xl" />
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">
                Product Name
              </p>
              <input
                type="text"
                placeholder="Type Here.."
                className="w-[600px] border border-dotted max-w-[98%] h-[40px] rounded-lg cursor-pointer px-[20px] text-[18px] bg-amber border-grey-200 placeholder:text-[#000000c2]"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="w-[80%] flex items-start justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">
                Product Description
              </p>
              <textarea
                type="text"
                placeholder="Type Here.."
                className="w-[600px] border py-[8px] border-dotted max-w-[98%] h-[100px] rounded-lg cursor-pointer px-[20px] text-[18px] bg-amber border-grey-200 placeholder:text-[#000000c2]"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
            </div>

            <div className="w-[80%] flex items-center gap-[10px] flex-wrap">
              <div className="md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]">
                <p className="text-[20px] md:text-[25px] font-semibold w-[100%]">
                  Product Category
                </p>
                <select
                  className="w-[60%] px-[10px] py-[7px] rounded-lg border-[2px]"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Oppo">Oppo</option>
                </select>
              </div>
            </div>

            <div className="w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]">
              <p className="text-[20px] md:text-[25px] font-semibold">
                Product Price
              </p>
              <input
                type="number"
                placeholder="₹"
                required
                className="w-[600px] border border-dotted max-w-[98%] h-[40px] rounded-lg cursor-pointer px-[20px] text-[18px] bg-amber border-grey-200 placeholder:text-[#000000c2]"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </div>

            <div className="w-[80%] flex items-center justify-start gap-[10px] mt-[20px]">
              <input
                type="checkbox"
                id="checkbox"
                className="w-[25px] h-[25px] cursor-pointer"
                onChange={()=>setBestseller(prev=>!prev)}
              />
              <label
                htmlFor="checkbox"
                className="text-[18px] md:text-[22px] font-semibold"
              >
                Add to Bestseller
              </label>
            </div>
            <button className="mt-[18px] text-[18px] w-[140px] px-[10px] py-[10px] rounded-xl flex bg-blue-600 items-center justify-center gap-[10px] text-white active:bg-blue-800 active:text-amber-50 active:border-[2px] border-black">
              {loading ? <Loading/> : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;



