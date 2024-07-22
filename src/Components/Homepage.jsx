// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import Carousel from "./Carousel";
// import AboutUs from "./AboutUs";
// import Footer from "./Footer";
// import GetInTouch from "./GetInTouch";
// import LatestBlog from "./Blog/LatestBlog";
// import Modal from "./Modal";

// function ComingSoon() {
//   const [email, setEmail] = useState("");
//   const [emails, setEmails] = useState([]);
//   const { t, i18n } = useTranslation("global");
//   const [currentLanguage, setCurrentLanguage] = useState(
//     i18n.language.toUpperCase()
//   );
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // Initial state is false

//   const handleReadMoreClick = () => {
//     window.open("/terms-and-conditions", "_blank", "noopener,noreferrer");
//   };

//   useEffect(() => {
//     // Load stored emails from Local Storage on component mount
//     const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
//     setEmails(storedEmails);

//     // Check if the modal has been shown in this session
//     const isModalShown = sessionStorage.getItem("isModalShown");
//     if (!isModalShown) {
//       setIsModalOpen(true);
//       sessionStorage.setItem("isModalShown", "true");
//     }
//   }, []);

//   const handleChangeLanguage = (lang) => {
//     setCurrentLanguage(lang.toUpperCase());
//     i18n.changeLanguage(lang);
//     setIsDropdownOpen(false);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newEmails = [...emails, email];
//     setEmails(newEmails);
//     localStorage.setItem("emails", JSON.stringify(newEmails));

//     fetch("/api/subscribe", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email: email }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         alert(`Thank you for subscribing, ${email}!`);
//         setEmail(""); // Resetează câmpul de email doar după succes
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleModalClose = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="video-background absolute top-16 inset-0 w-full h-full overflow-hidden z-2">
//         <video
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//           preload="metadata"
//           poster="./video-poster.jpg"
//         >
//           <source src="./zmeivid.mp4" type="video/mp4" />
//           <source src="./zmeivid.webm" type="video/webm" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div
//         className="bg-cover bg-center md:pt-12 2xl:pt-32 relative  justify-center object-scale-down"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="flex flex-col items-center  pt-20 text-center justify-center">
//           <Carousel />
//         </div>

//         <div className="text-gray-700  md:w-8/12">
//           <h1 className=" pt-16  md:pt-4 pl-4  md:pl-0 pb-4 md:pb-6 text-5xl  md:text-6xl font-bold relative inline-block "></h1>
//           <div className=" inline-block  absolute top-20 right-8  text-left">
//             <button
//               type="button"
//               className="inline-flex w-full justify-center  px-3 py-2 text-sm font-semibold text-gray-900"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             >
//               <img src="./world-wide-web.png" className="w-5 mr-2 " alt="" />
//               {currentLanguage}
//               <svg
//                 className="-mr-1 h-5 w-5 text-white-400"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div
//                 className="z-10 mt-0 ml-4 text-center w-16 absolute bg-blur  rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                 role="menu"
//                 aria-orientation="vertical"
//                 aria-labelledby="menu-button"
//                 tabIndex="-1"
//               >
//                 <div className="py-1" role="none">
//                   <a
//                     href="#"
//                     className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-800"
//                     role="menuitem"
//                     tabIndex="-1"
//                     id="menu-item-0"
//                     onClick={() => handleChangeLanguage("en")}
//                   >
//                     EN
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 block px-4 py-2 hover:bg-slate-800 text-sm"
//                     role="menuitem"
//                     tabIndex="-1"
//                     id="menu-item-1"
//                     onClick={() => handleChangeLanguage("da")}
//                   >
//                     DA
//                   </a>
//                   <a
//                     href="#"
//                     className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-800"
//                     role="menuitem"
//                     tabIndex="-1"
//                     id="menu-item-2"
//                     onClick={() => handleChangeLanguage("ro")}
//                   >
//                     RO
//                   </a>
//                 </div>
//               </div>
//             )}
//           </div>
//           <p className="relative text-xs ml-4 mr-4 md:ml-0  pt-4"></p>
//         </div>
//       </div>
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleModalClose}
//         handleReadMoreClick={handleReadMoreClick}
//       />
//       <LatestBlog />
//       <AboutUs />
//       <GetInTouch />
//       <Footer />
//     </>
//   );
// }

// export default ComingSoon;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import GetInTouch from "./GetInTouch";
import LatestBlog from "./Blog/LatestBlog";
import Modal from "./Modal";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [emails, setEmails] = useState([]);
  const { t, i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Initial state is false

  const handleReadMoreClick = () => {
    window.open("/terms-and-conditions", "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    // Load stored emails from Local Storage on component mount
    const storedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    setEmails(storedEmails);

    // Check if the modal has been shown in this session
    const isModalShown = sessionStorage.getItem("isModalShown");
    if (!isModalShown) {
      setIsModalOpen(true);
      sessionStorage.setItem("isModalShown", "true");
    }

    // Get user's location and set language
    axios
      .get("/api/ip-location")
      .then((response) => {
        const country = response.data.country_name;
        if (country === "Romania") {
          handleChangeLanguage("ro");
        } else if (country === "Denmark") {
          handleChangeLanguage("da");
        } else {
          handleChangeLanguage("en");
        }
      })
      .catch((error) => {
        console.error("Error fetching IP location data:", error);
      });
  }, []);

  const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang.toUpperCase());
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmails = [...emails, email];
    setEmails(newEmails);
    localStorage.setItem("emails", JSON.stringify(newEmails));

    fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(`Thank you for subscribing, ${email}!`);
        setEmail(""); // Resetează câmpul de email doar după succes
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="video-background absolute top-16 inset-0 w-full h-full overflow-hidden z-2">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          preload="metadata"
          poster="./video-poster.jpg"
        >
          <source src="./zmeifinal.mp4" type="video/mp4" />
          <source src="./zmeivid.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div
        className="bg-cover bg-center md:pt-12 2xl:pt-32 relative justify-center object-scale-down"
        style={{ minHeight: "100vh" }}
      >
        <div className="flex flex-col items-center pt-20 text-center justify-center">
          <Carousel />
        </div>

        <div className="text-gray-700 md:w-8/12">
          <h1 className="pt-16 md:pt-4 pl-4 md:pl-0 pb-4 md:pb-6 text-5xl md:text-6xl font-bold relative inline-block "></h1>
          <div className="inline-block absolute top-20 right-8 text-left">
            <button
              type="button"
              className="inline-flex w-full justify-center px-3 py-2 text-sm font-semibold text-gray-900"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <img src="./world-wide-web.png" className="w-5 mr-2 " alt="" />
              {currentLanguage}
              <svg
                className="-mr-1 h-5 w-5 text-white-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                className="z-10 mt-0 ml-4 text-center w-16 absolute bg-blur rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-800"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    onClick={() => handleChangeLanguage("en")}
                  >
                    EN
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 block px-4 py-2 hover:bg-slate-800 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={() => handleChangeLanguage("da")}
                  >
                    DA
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 block px-4 py-2 text-sm hover:bg-slate-800"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-2"
                    onClick={() => handleChangeLanguage("ro")}
                  >
                    RO
                  </a>
                </div>
              </div>
            )}
          </div>
          <p className="relative text-xs ml-4 mr-4 md:ml-0 pt-4"></p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        handleReadMoreClick={handleReadMoreClick}
      />
      <LatestBlog />
      <AboutUs />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default ComingSoon;
