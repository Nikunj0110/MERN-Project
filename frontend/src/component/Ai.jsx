// // import React from "react";
// // import { useContext } from "react";
// // // import google from '../assets/google.webp'
// // import { TfiHeadphoneAlt } from "react-icons/tfi";
// // import { shopDataContext } from "../context/ShopContext";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import open from '../assets/audio.mp3'
// // import { useState } from "react";

// // function Ai() {
// //   let { showSearch, setShowSearch } = useContext(shopDataContext);
// //   let navigate = useNavigate();
// //   let openingSound=new Audio(open)
// //   let [activeAi,setActiveAi]=useState(false)

// //   function speak(message) {
// //     let utterence = new SpeechSynthesisUtterance(message);
// //     window.speechSynthesis.speak(utterence);
// //   }

// //   const speechRecognition =
// //     window.SpeechRecognition || window.webkitSpeechRecognition;
// //   const recognition = new speechRecognition();

// //   if (!recognition) {
// //     console.log("Not Supported");
// //   }

// //   recognition.onresult = (e) => {
// //     const transcript = e.results[0][0].transcript.trim();

// //     if (
// //       transcript.toLowerCase().includes("search") &&
// //       transcript.toLowerCase().includes("open") &&
// //       !showSearch
// //     ) {
// //       navigate("/collections");
// //       speak("opening search");
// //       setShowSearch(true);
// //     } 
    
// //     else if (
// //       transcript.toLowerCase().includes("search") &&
// //       transcript.toLowerCase().includes("close") &&
// //       showSearch
// //     ) {
// //       speak("closing search");
// //       setShowSearch(false);
// //     } 
    
// //     else if (
// //       transcript.toLowerCase().includes("collection") ||
// //       transcript.toLowerCase().includes("collections") ||
// //       transcript.toLowerCase().includes("product") ||
// //       transcript.toLowerCase().includes("products")
// //     ) {
// //       navigate("/collections");
// //       speak("opening collection page");
// //     } 
    
// //     else if (
// //       transcript.toLowerCase().includes("about") ||
// //       transcript.toLowerCase().includes("aboutpage")
// //     ) {
// //       navigate("/about");
// //       speak("opening about page");
// //       setShowSearch(false);
// //     }

// //     else if (
// //       transcript.toLowerCase().includes("home") ||
// //       transcript.toLowerCase().includes("homepage")
// //     ) {
// //       navigate("/home");
// //       speak("opening home page");
// //       setShowSearch(false);
// //     }
    


// //     else if (
// //       transcript.toLowerCase().includes("cart") ||
// //       transcript.toLowerCase().includes("kaat") ||
// //       transcript.toLowerCase().includes("caat") ||
// //       transcript.toLowerCase().includes("cartpage")
// //     ) {
// //       navigate("/cart");
// //       speak("opening cart page");
// //       setShowSearch(false)
// //     }




// //      else if (
// //       transcript.toLowerCase().includes("contact") ||
// //       transcript.toLowerCase().includes("contake")
// //     ) {
// //       navigate("/contact");
// //       speak("opening contact page");
// //       setShowSearch(false);
// //     }




// //      else if (
// //       transcript.toLowerCase().includes("order") ||
// //       transcript.toLowerCase().includes("myorder") ||
// //       transcript.toLowerCase().includes("orders") ||
// //       transcript.toLowerCase().includes("myorders")
// //     ) {
// //       navigate("/order");
// //       speak("opening your order page");
// //       setShowSearch(false)
// //     }
// // else{
// //     toast.error("Try Again !")
// // }
// //     recognition.onend=()=>{
// //         setActiveAi(false)
// //     }
// //   };

// //   return (
// //     <div
// //       onClick={() => {recognition.start();
// //       openingSound.play()
// //       setActiveAi(true)
// //       }}
// //       className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
// //     >
// //       {/* <img src={google}  className='w-[100px] cursor-pointer'/> */}

// //       <TfiHeadphoneAlt className={`w-[100px] h-[50px] cursor-pointer text-blue-900 ${activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : 'translate-x-[0] translate-y-[0] scale-100'} transition-transform`} style={{filter:`${activeAi? "drop-shadow(0px 0px 30px black)":"drop-shadow(0px 0px 20px black)"}`}} />
// //     </div>
// //   );
// // }

// // export default Ai;


// import React, { useContext, useState } from "react";
// import { TfiHeadphoneAlt } from "react-icons/tfi";
// import { shopDataContext } from "../context/ShopContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import open from "../assets/audio.mp3";

// function Ai() {
//   const { showSearch, setShowSearch } = useContext(shopDataContext);
//   const navigate = useNavigate();
//   const openingSound = new Audio(open);

//   const [activeAi, setActiveAi] = useState(false);
//   const [hover, setHover] = useState(false);

//   function speak(message) {
//     let utterence = new SpeechSynthesisUtterance(message);
//     window.speechSynthesis.speak(utterence);
//   }

//   const speechRecognition =
//     window.SpeechRecognition || window.webkitSpeechRecognition;
//   const recognition = new speechRecognition();

//   if (!recognition) {
//     console.log("Not Supported");
//   }

//   recognition.onresult = (e) => {
//     const transcript = e.results[0][0].transcript.trim().toLowerCase();

//     if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
//       navigate("/collections");
//       speak("opening search");
//       setShowSearch(true);
//     } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
//       speak("closing search");
//       setShowSearch(false);
//     } else if (
//       transcript.includes("collection") ||
//       transcript.includes("collections") ||
//       transcript.includes("product") ||
//       transcript.includes("products")
//     ) {
//       navigate("/collections");
//       speak("opening collection page");
//     } else if (transcript.includes("about") || transcript.includes("aboutpage")) {
//       navigate("/about");
//       speak("opening about page");
//       setShowSearch(false);
//     } else if (transcript.includes("home") || transcript.includes("homepage")) {
//       navigate("/home");
//       speak("opening home page");
//       setShowSearch(false);
//     } else if (
//       transcript.includes("cart") ||
//       transcript.includes("kaat") ||
//       transcript.includes("caat") ||
//       transcript.includes("cartpage")
//     ) {
//       navigate("/cart");
//       speak("opening cart page");
//       setShowSearch(false);
//     } else if (transcript.includes("contact") || transcript.includes("contake")) {
//       navigate("/contact");
//       speak("opening contact page");
//       setShowSearch(false);
//     } else if (
//       transcript.includes("order") ||
//       transcript.includes("myorder") ||
//       transcript.includes("orders") ||
//       transcript.includes("myorders")
//     ) {
//       navigate("/order");
//       speak("opening your order page");
//       setShowSearch(false);
//     } else {
//       toast.error("Try Again!");
//     }

//     recognition.onend = () => {
//       setActiveAi(false);
//     };
//   };

//   return (
//     <div
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%] z-50"
//     >
//       {/* Info Box */}
//       {hover && (
//         <div className="absolute bottom-[70px] left-0 bg-white text-black p-4 rounded-lg shadow-xl border border-gray-300 w-[120px] text-sm space-y-2 transition-opacity duration-300">
//           <p className="hover:text-blue-700 cursor-pointer">Home</p>
//           <p className="hover:text-blue-700 cursor-pointer">Collection</p>
//           <p className="hover:text-blue-700 cursor-pointer">About</p>
//           <p className="hover:text-blue-700 cursor-pointer">Contact</p>
//           <p className="hover:text-blue-700 cursor-pointer">Order</p>
//           <p className="hover:text-blue-700 cursor-pointer">Cart</p>
//         </div>
//       )}

//       {/* Headphone Icon */}
//       <TfiHeadphoneAlt
//         onClick={() => {
//           recognition.start();
//           openingSound.play();
//           setActiveAi(true);
//         }}
//         className={`w-[100px] h-[50px] cursor-pointer text-blue-900 
//           ${activeAi ? 'translate-x-[10%] translate-y-[-10%] scale-125' : 'translate-x-[0] translate-y-[0] scale-100'} 
//           transition-transform`}
//         style={{
//           filter: `${activeAi ? "drop-shadow(0px 0px 30px black)" : "drop-shadow(0px 0px 20px black)"}`
//         }}
//       />
//     </div>
//   );
// }

// export default Ai;




import React, { useContext, useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { shopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import open from "../assets/audio.mp3";
import { RiSpeakAiLine } from "react-icons/ri";


function Ai() {
  const { showSearch, setShowSearch } = useContext(shopDataContext);
  const navigate = useNavigate();
  const openingSound = new Audio(open);
  const [activeAi, setActiveAi] = useState(false);
  const [hover, setHover] = useState(false);

  function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();

  if (!recognition) {
    console.log("Speech Recognition not supported");
  }

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim().toLowerCase();

    if (transcript.includes("search") && transcript.includes("open") && !showSearch) {
      navigate("/collections");
      speak("opening search");
      setShowSearch(true);
    } else if (transcript.includes("search") && transcript.includes("close") && showSearch) {
      speak("closing search");
      setShowSearch(false);
    } else if (
      transcript.includes("collection") ||
      transcript.includes("collections") ||
      transcript.includes("product") ||
      transcript.includes("products")
    ) {
      navigate("/collections");
      speak("opening collection page");
    } else if (transcript.includes("about") || transcript.includes("aboutpage")) {
      navigate("/about");
      speak("opening about page");
      setShowSearch(false);
    } else if (transcript.includes("home") || transcript.includes("homepage")) {
      navigate("/home");
      speak("opening home page");
      setShowSearch(false);
    } else if (
      transcript.includes("cart") ||
      transcript.includes("kaat") ||
      transcript.includes("caat") ||
      transcript.includes("cartpage")
    ) {
      navigate("/cart");
      speak("opening cart page");
      setShowSearch(false);
    } else if (transcript.includes("contact") || transcript.includes("contake")) {
      navigate("/contact");
      speak("opening contact page");
      setShowSearch(false);
    } else if (
      transcript.includes("order") ||
      transcript.includes("myorder") ||
      transcript.includes("orders") ||
      transcript.includes("myorders")
    ) {
      navigate("/order");
      speak("opening your order page");
      setShowSearch(false);
    } else {
      toast.error("Command not recognized. Try again!");
    }

    recognition.onend = () => {
      setActiveAi(false);
    };
  };

  const voiceCommands = [
    { name: <><RiSpeakAiLine className="inline mr-1" /> Home</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> Collection</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> About</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> Contact</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> Orders</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> Cart</> },
    { name: <><RiSpeakAiLine className="inline mr-1" /> Search</> }
  ];

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%] z-50"
    >
      {/* Enhanced Voice Command Tooltip */}
      {hover && (
        <div className="absolute bottom-full left-0 mb-3 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 transform origin-bottom">
          {/* Tooltip Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-700 dark:to-blue-600 px-4 py-3">
            <div className="flex items-center space-x-2">
              <TfiHeadphoneAlt className="text-white text-lg" />
              <h3 className="text-white font-medium text-sm">Voice Command Assistant</h3>
            </div>
          </div>
          
          {/* Tooltip Body */}
          <div className="p-3 max-h-64 overflow-y-auto">
            {voiceCommands.map((cmd, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <p className="font-medium text-gray-800 dark:text-gray-200 ">{cmd.name}</p>
                <div className="flex flex-wrap gap-1">
                  {/* {cmd.commands.map((command, cmdIndex) => (
                    <span 
                      key={cmdIndex}
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full"
                    >
                      "{command}"
                    </span>
                  ))} */}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tooltip Footer */}
          {/* <div className="bg-gray-50 dark:bg-gray-700/50 px-3 py-2 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
            Click the microphone to start speaking
          </div> */}
        </div>
      )}

      {/* Headphone Icon */}
      <div
        onClick={() => {
          recognition.start();
          openingSound.play();
          setActiveAi(true);
        }}
        className="relative cursor-pointer transition-all duration-300 hover:scale-105"
      >
        <TfiHeadphoneAlt
          className={`w-16 h-16 p-3 text-white bg-blue-600 dark:bg-blue-700 rounded-full shadow-lg ${
            activeAi ? "animate-pulse ring-4 ring-blue-400/50" : ""
          }`}
        />
        {activeAi && (
          <div className="absolute inset-0 rounded-full animate-ping bg-blue-400 opacity-75"></div>
        )}
      </div>
    </div>
  );
}

export default Ai;
