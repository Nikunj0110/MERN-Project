import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { authDataContext } from "../context/authContext";
import axios from 'axios'
import { auth, provider } from "../../utils/Firebase";
import { signInWithPopup } from "firebase/auth";
import { userDataContext } from "../context/UserContext";


function Login() {
  let navigate = useNavigate();
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { serverUrl } = useContext(authDataContext);
  let {getCurrentUser}=useContext(userDataContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
        let result=await axios.post(serverUrl+'/api/auth/login',{
          email,password
        },{withCredentials:true})
        console.log(result.data);
        console.log("Login Successfull");
        getCurrentUser()
        navigate('/')
    } catch (error) {
        console.log(error);
    }
  };

   const googleLogin = async () => {
      try {
        const response = await signInWithPopup(auth, provider);
        const user = response.user;
        let name=user.displayName
        let email=user.email
  
        const result =await axios.post(serverUrl+'/api/auth/googlelogin',{
          name,email
        },{withCredentials:true})
        console.log(result.data);
  
       console.log("✅ Google User:", user);
      } catch (error) {
          console.error("❌ Google Auth Error", error);
      }
    };
  

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="h-[40px]" src={logo} />
        <h1 className="text-[22px] font-sans">Mobail Zone</h1>
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col">
        <span className="text-3xl font-semibold">Login Page</span>
        <span className="text-[16px]">
          Welcome to Mobail Zone, Place your order!
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#969696350] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleLogin}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div onClick={googleLogin} className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
            <img src={logo} className="w-[20px]" />
            Registration With Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px] ">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col relative items-center justify-center gap-[15px]">
            <input
              type="text"
              placeholder="Email"
              onChange={(e)=>setEmail(e.target.value)} value={email}
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
               rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)} value={password}
              required
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
               rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
            />
            {!show && (
              <FiEye
                className="h-[20px] w-[20px] right-[5%] bottom-[56%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <FiEyeOff
                className="h-[20px] w-[20px] right-[5%] bottom-[56%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button
            type="submit"
              className="w-[100%] h-[50px] bg-[#5c5c9d] flex items-center justify-center mt-[20px]
               rounded-lg text-[17px] font-semibold"
            >
              Login
            </button>
            <p className="flex gap-[10px]">
              You haven't any account?
              <span
                onClick={() => navigate("/signup")}
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
              >
                Create new account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
