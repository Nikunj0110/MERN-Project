import React from "react";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function Login() {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let {adminData,getAdmin}=useContext(adminDataContext)
  let navigate=useNavigate()
  

  const AdminLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/adminlogin",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      toast.success("Login Successfully")
      getAdmin()
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!")
    }
  };
  return (
    <div className="w-[100vw] h-[100vh] bg-white flex flex-col items-center justify-start">
      <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
        {/* <img className="h-[40px]" src={logo} /> */}
        <h1 className="text-[22px] font-sans">Mobail Zone</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col">
        <span className="text-3xl font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to Mobail Zone, Place your order!
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#969696350] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={AdminLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div className="w-[90%] h-[400px] flex flex-col relative items-center justify-center gap-[15px]">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
               rounded-lg shadow-lg bg-white placeholder-black px-[20px] font-semibold"
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
               rounded-lg shadow-lg bg-white placeholder-black px-[20px] font-semibold"
            />
            {!show && (
              <FiEye
                className="h-[20px] w-[20px] right-[5%] bottom-[50%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <FiEyeOff
                className="h-[20px] w-[20px] right-[5%] bottom-[50%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button
              type="submit"
              className="w-[100%] h-[50px] bg-[#6060f5] flex items-center justify-center mt-[20px]
               rounded-lg text-[17px] font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
