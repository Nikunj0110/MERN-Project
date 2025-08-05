import React from "react";
import { useContext } from "react";
// import google from '../assets/google.webp'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import open from '../assets/audio.mp3'
import { useState } from "react";

function Ai() {
  let { showSearch, setShowSearch } = useContext(shopDataContext);
  let navigate = useNavigate();
  let openingSound=new Audio(open)
  let [activeAi,setActiveAi]=useState(false)

  function speak(message) {
    let utterence = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterence);
  }

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();

  if (!recognition) {
    console.log("Not Supported");
  }

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim();

    if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("open") &&
      !showSearch
    ) {
      navigate("/collections");
      speak("opening search");
      setShowSearch(true);
    } 
    
    else if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("close") &&
      showSearch
    ) {
      speak("closing search");
      setShowSearch(false);
    } 
    
    else if (
      transcript.toLowerCase().includes("collection") ||
      transcript.toLowerCase().includes("collections") ||
      transcript.toLowerCase().includes("product") ||
      transcript.toLowerCase().includes("products")
    ) {
      navigate("/collections");
      speak("opening collection page");
    } 
    
    else if (
      transcript.toLowerCase().includes("about") ||
      transcript.toLowerCase().includes("aboutpage")
    ) {
      navigate("/about");
      speak("opening about page");
      setShowSearch(false);
    }

    else if (
      transcript.toLowerCase().includes("home") ||
      transcript.toLowerCase().includes("homepage")
    ) {
      navigate("/home");
      speak("opening home page");
      setShowSearch(false);
    }
    


    else if (
      transcript.toLowerCase().includes("cart") ||
      transcript.toLowerCase().includes("kaat") ||
      transcript.toLowerCase().includes("caat") ||
      transcript.toLowerCase().includes("cartpage")
    ) {
      navigate("/cart");
      speak("opening cart page");
      setShowSearch(false)
    }




     else if (
      transcript.toLowerCase().includes("contact") ||
      transcript.toLowerCase().includes("contake")
    ) {
      navigate("/contact");
      speak("opening contact page");
      setShowSearch(false);
    }




     else if (
      transcript.toLowerCase().includes("order") ||
      transcript.toLowerCase().includes("myorder") ||
      transcript.toLowerCase().includes("orders") ||
      transcript.toLowerCase().includes("myorders")
    ) {
      navigate("/order");
      speak("opening your order page");
      setShowSearch(false)
    }
else{
    toast.error("Try Again !")
}
    recognition.onend=()=>{
        setActiveAi(false)
    }
  };

  return (
    <div
      onClick={() => {recognition.start();
      openingSound.play()
      setActiveAi(true)
      }}
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
    >
      {/* <img src={google}  className='w-[100px] cursor-pointer'/> */}

      <TfiHeadphoneAlt className={`w-[100px] h-[50px] cursor-pointer text-blue-900 ${activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : 'translate-x-[0] translate-y-[0] scale-100'} transition-transform`} style={{filter:`${activeAi? "drop-shadow(0px 0px 30px black)":"drop-shadow(0px 0px 20px black)"}`}} />
    </div>
  );
}

export default Ai;
