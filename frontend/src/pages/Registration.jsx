import React, { useContext, useState } from "react";
import logo from "../assets/google.webp";
import { useNavigate } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { userDataContext } from "../context/UserContext";
import { toast } from "react-toastify";


function Registration() {
  let navigate = useNavigate();
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { getCurrentUser } = useContext(userDataContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/registration",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/home");

    } catch (error) {
      console.log(error);

    }
  };

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        {
          name,
          email,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      toast.success("Login Successfull");

      getCurrentUser();
      navigate("/home");

      console.log("✅ Google User:", user);
    } catch (error) {
      console.error("❌ Google Auth Error", error);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate("/")}
      >
        {/* <img className="h-[40px]" src={logo} />
        <h1 className="text-[22px] font-sans">Mobail Zone</h1> */}
      </div>

      <div className="w-[100%] h-[100px] flex items-center justify-center gap-[10px] flex-col">
        <span className="text-3xl font-semibold">Registration Page</span>
        <span className="text-[16px]">
          Welcome to Speak Deals, Place your order!
        </span>
      </div>

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#969696350] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center ">
        <form
          action=""
          onSubmit={handleSignup}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div
            onClick={googleSignup}
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
          >
            <img src={logo} className="w-[40px]" />
            Registration With Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px] ">
            <div className="w-[40%] h-[1px] bg-black"></div>
            OR
            <div className="w-[40%] h-[1px] bg-black"></div>
          </div>
          <div className="w-[90%] h-[400px] flex flex-col relative items-center justify-center gap-[15px]">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
              rounded-lg shadow-lg bg-white placeholder-[black] px-[20px] font-semibold"
            />
            <input
              type="text"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
              rounded-lg shadow-lg bg-white placeholder-[black] px-[20px] font-semibold"
            />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm 
              rounded-lg shadow-lg bg-white placeholder-[black] px-[20px] font-semibold"
            />
            {!show && (
              <FiEye
                className="h-[20px] w-[20px] right-[5%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            {show && (
              <FiEyeOff
                className="h-[20px] w-[20px] right-[5%] absolute cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
            <button
              type="submit"
              className="w-[100%] h-[50px] bg-[#6060f5] flex items-center justify-center mt-[20px]
              rounded-lg text-[17px] font-semibold"
            >
              Create Account
            </button>
            <p className="flex gap-[10px]">
              You have any account?
              <span
                onClick={() => navigate("/login")}
                className="text-[#0d0df1cf] text-[17px] font-semibold cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
