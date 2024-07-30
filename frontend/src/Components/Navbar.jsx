// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Navbar() {
//   const { t, i18n } = useTranslation("global");

//   const [currentLanguage, setCurrentLanguage] = useState(
//     i18n.language.toUpperCase()
//   );
//   const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

//   const [dropdownStates, setDropdownStates] = useState({
//     contact: false,
//   });

//   const dropdownRefs = {
//     contact: useRef(null),
//     language: useRef(null),
//   };

//   const navigate = useNavigate();

//   const toggleDropdown = (key) => {
//     setDropdownStates((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   const toggleLanguageDropdown = () => {
//     setLanguageDropdownOpen((prevOpen) => !prevOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       dropdownRefs.contact.current &&
//       !dropdownRefs.contact.current.contains(event.target)
//     ) {
//       setDropdownStates({
//         contact: false,
//       });
//     }
//     if (
//       dropdownRefs.language.current &&
//       !dropdownRefs.language.current.contains(event.target)
//     ) {
//       setLanguageDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const menuItems = [
//     {
//       label: t("navbar.contactus"),
//       key: "contact",
//       options: [
//         { name: t("navbar.contactform"), route: "/contactUs" },
//         { name: t("navbar.locations"), route: "/contactUs/locations" },
//       ],
//     },
//   ];

//   const handleChangeLanguage = (lang) => {
//     setCurrentLanguage(lang.toUpperCase());
//     i18n.changeLanguage(lang).then(() => {
//       setIsMainDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     });
//   };

//   const handleNavigation = (route) => {
//     setIsMainDropdownOpen(false);
//     navigate(route);
//   };

//   return (
//     <>
//       <nav className="border-gray-200 font-sans dark:border-gray-700 relative z-10 ml-4  mr-4  ">
//         <div className="sm:ml-16 sm:mr-16 flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src="./zmeibun.png" className="h-5" alt="Zmei logo" />
//           </Link>

//           <button
//             data-collapse-toggle="navbar-multi-level"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-multi-level"
//             aria-expanded={isMainDropdownOpen ? "true" : "false"}
//             onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className={`w-5 h-5 ${
//                 isMainDropdownOpen ? "rotate-0" : "rotate-180"
//               }`}
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             className={`w-full flex md:block md:w-auto ${
//               isMainDropdownOpen ? "block" : "hidden"
//             }`}
//             id="navbar-multi-level"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
//               <li className="flex items-center">
//                 <Link
//                   to="/expertise"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   {t("navbar.expertise")}
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <Link
//                   to="/GetToKnowUs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   {t("navbar.knowuss")}
//                 </Link>
//               </li>

//               <li className="flex items-center">
//                 <Link
//                   to="/careers"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   {t("navbar.careers")}
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <Link
//                   to="/blogs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               {menuItems.map((item) => (
//                 <li
//                   key={item.key}
//                   ref={dropdownRefs[item.key]}
//                   className="relative flex items-center"
//                 >
//                   <button
//                     onClick={() => toggleDropdown(item.key)}
//                     className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   >
//                     {item.label}
//                     <svg
//                       className={`w-2.5 h-2.5 ms-2.5 ${
//                         dropdownStates[item.key] ? "rotate-0" : "rotate-180"
//                       }`}
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>
//                   {/* Dropdown menu */}
//                   {item.key === "contact" && (
//                     <div
//                       className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
//                         dropdownStates[item.key] ? "block" : "hidden"
//                       } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//                     >
//                       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                         {item.options.map((option, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to={option.route}
//                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                               onClick={() => handleNavigation(option.route)}
//                             >
//                               {option.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               ))}

//               {/* Language dropdown */}
//               <li
//                 className="relative flex items-center"
//                 ref={dropdownRefs.language}
//               >
//                 <button
//                   className="flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent hover:bg-gray-100 rounded-md dark:text-white dark:hover:bg-gray-800 focus:outline-none"
//                   onClick={toggleLanguageDropdown}
//                 >
//                   <img
//                     src="/world-wide-web.png"
//                     className="w-5 h-5 mr-2 filter invert brightness-120"
//                     alt=""
//                   />
//                   {currentLanguage}
//                 </button>
//                 {languageDropdownOpen && (
//                   <div
//                     className="absolute right-0 mt-44  w-16 bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="language-menu"
//                     tabIndex="-1"
//                   >
//                     <div className="py-1" role="none">
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("en")}
//                       >
//                         EN
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("da")}
//                       >
//                         DA
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("ro")}
//                       >
//                         RO
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Navbar() {
//   const { t, i18n } = useTranslation("global");

//   const [currentLanguage, setCurrentLanguage] = useState(
//     i18n.language.toUpperCase()
//   );
//   const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
//   const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

//   const [dropdownStates, setDropdownStates] = useState({
//     contact: false,
//   });

//   const dropdownRefs = {
//     contact: useRef(null),
//     language: useRef(null),
//   };

//   const navigate = useNavigate();

//   const toggleDropdown = (key) => {
//     setDropdownStates((prevState) => ({
//       ...prevState,
//       [key]: !prevState[key],
//     }));
//   };

//   const toggleLanguageDropdown = () => {
//     setLanguageDropdownOpen((prevOpen) => !prevOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (
//       dropdownRefs.contact.current &&
//       !dropdownRefs.contact.current.contains(event.target)
//     ) {
//       setDropdownStates({
//         contact: false,
//       });
//     }
//     if (
//       dropdownRefs.language.current &&
//       !dropdownRefs.language.current.contains(event.target)
//     ) {
//       setLanguageDropdownOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const menuItems = [
//     {
//       label: t("navbar.contactus"),
//       key: "contact",
//       options: [
//         { name: t("navbar.contactform"), route: "/contactUs" },
//         { name: t("navbar.locations"), route: "/contactUs/locations" },
//       ],
//     },
//   ];

//   const handleChangeLanguage = (lang) => {
//     setCurrentLanguage(lang.toUpperCase());
//     i18n.changeLanguage(lang).then(() => {
//       setIsMainDropdownOpen(false);
//       setLanguageDropdownOpen(false);
//     });
//   };

//   const handleNavigation = (route) => {
//     setIsMainDropdownOpen(false);
//     navigate(route);
//   };

//   return (
//     <>
//       <nav className="border-gray-200 font-sans dark:border-gray-700 relative z-10 ml-4 mr-4">
//         <div className="sm:ml-16 sm:mr-16 flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src="./zmeibun.png" className="h-5" alt="Zmei logo" />
//           </Link>

//           <button
//             data-collapse-toggle="navbar-multi-level"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10  justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-multi-level"
//             aria-expanded={isMainDropdownOpen ? "true" : "false"}
//             onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
//           >
//             <span className="sr-only">Open main menu</span>
//             {isMainDropdownOpen ? (
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             )}
//           </button>

//           <div
//             className={`w-full fixed top-0 left-0 h-full bg-gray-900 bg-opacity-95 flex items-center justify-center transition-transform transform ${
//               isMainDropdownOpen ? "translate-x-0" : "-translate-x-full"
//             } md:block md:static md:bg-transparent md:translate-x-0 md:w-auto`}
//             id="navbar-multi-level"
//           >
//             <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
//               <li className="flex items-center">
//                 <Link
//                   to="/expertise"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   onClick={() => setIsMainDropdownOpen(false)}
//                 >
//                   {t("navbar.expertise")}
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <Link
//                   to="/GetToKnowUs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   onClick={() => setIsMainDropdownOpen(false)}
//                 >
//                   {t("navbar.knowuss")}
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <Link
//                   to="/careers"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   onClick={() => setIsMainDropdownOpen(false)}
//                 >
//                   {t("navbar.careers")}
//                 </Link>
//               </li>
//               <li className="flex items-center">
//                 <Link
//                   to="/blogs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   onClick={() => setIsMainDropdownOpen(false)}
//                 >
//                   Blog
//                 </Link>
//               </li>
//               {menuItems.map((item) => (
//                 <li
//                   key={item.key}
//                   ref={dropdownRefs[item.key]}
//                   className="relative flex items-center"
//                 >
//                   <button
//                     onClick={() => toggleDropdown(item.key)}
//                     className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                   >
//                     {item.label}
//                     <svg
//                       className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
//                         dropdownStates[item.key] ? "rotate-180" : "rotate-0"
//                       }`}
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 10 6"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 4 4 4-4"
//                       />
//                     </svg>
//                   </button>
//                   {/* Dropdown menu */}
//                   {item.key === "contact" && (
//                     <div
//                       className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
//                         dropdownStates[item.key] ? "block" : "hidden"
//                       } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//                     >
//                       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                         {item.options.map((option, subIndex) => (
//                           <li key={subIndex}>
//                             <Link
//                               to={option.route}
//                               className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                               onClick={() => handleNavigation(option.route)}
//                             >
//                               {option.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </li>
//               ))}

//               {/* Language dropdown */}
//               <li
//                 className="relative flex items-center"
//                 ref={dropdownRefs.language}
//               >
//                 <button
//                   className="flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent hover:bg-gray-100 rounded-md dark:text-white dark:hover:bg-gray-800 focus:outline-none"
//                   onClick={toggleLanguageDropdown}
//                 >
//                   <img
//                     src="/world-wide-web.png"
//                     className="w-5 h-5 mr-2 filter invert brightness-120"
//                     alt=""
//                   />
//                   {currentLanguage}
//                 </button>
//                 {languageDropdownOpen && (
//                   <div
//                     className="absolute right-0 mt-2 w-16 bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//                     role="menu"
//                     aria-orientation="vertical"
//                     aria-labelledby="language-menu"
//                     tabIndex="-1"
//                   >
//                     <div className="py-1" role="none">
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("en")}
//                       >
//                         EN
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("da")}
//                       >
//                         DA
//                       </a>
//                       <a
//                         href="#"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
//                         role="menuitem"
//                         tabIndex="-1"
//                         onClick={() => handleChangeLanguage("ro")}
//                       >
//                         RO
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t, i18n } = useTranslation("global");

  const [currentLanguage, setCurrentLanguage] = useState(
    i18n.language.toUpperCase()
  );
  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
  });

  const dropdownRefs = {
    contact: useRef(null),
    language: useRef(null),
  };

  const navigate = useNavigate();

  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen((prevOpen) => !prevOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRefs.contact.current &&
      !dropdownRefs.contact.current.contains(event.target)
    ) {
      setDropdownStates({
        contact: false,
      });
    }
    if (
      dropdownRefs.language.current &&
      !dropdownRefs.language.current.contains(event.target)
    ) {
      setLanguageDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      label: t("navbar.contactus"),
      key: "contact",
      options: [
        { name: t("navbar.contactform"), route: "/contactUs" },
        { name: t("navbar.locations"), route: "/contactUs/locations" },
      ],
    },
  ];

  const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang.toUpperCase());
    i18n.changeLanguage(lang).then(() => {
      setIsMainDropdownOpen(false);
      setLanguageDropdownOpen(false);
    });
  };

  const handleNavigation = (route) => {
    setIsMainDropdownOpen(false);
    navigate(route);
  };

  return (
    <>
      <nav className="border-gray-200 font-sans dark:border-gray-700 relative z-10 ml-4 mr-4">
        <div className="sm:ml-16 sm:mr-16 flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./Untitled-1.png" className="h-6 " alt="Zmei logo" />
          </Link>

          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-20 relative"
            aria-controls="navbar-multi-level"
            aria-expanded={isMainDropdownOpen ? "true" : "false"}
            onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMainDropdownOpen ? (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>

          <div
            className={`w-full fixed top-0 left-0 h-full bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center transition-transform transform ${
              isMainDropdownOpen ? "translate-x-0" : "-translate-x-full"
            } md:block md:static md:bg-transparent md:translate-x-0 md:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li className="flex items-center">
                <Link
                  to="/expertise"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  onClick={() => setIsMainDropdownOpen(false)}
                >
                  {t("navbar.expertise")}
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/GetToKnowUs"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  onClick={() => setIsMainDropdownOpen(false)}
                >
                  {t("navbar.knowuss")}
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/careers"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  onClick={() => setIsMainDropdownOpen(false)}
                >
                  {t("navbar.careers")}
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/blogs"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  onClick={() => setIsMainDropdownOpen(false)}
                >
                  Blog
                </Link>
              </li>
              {menuItems.map((item) => (
                <li
                  key={item.key}
                  ref={dropdownRefs[item.key]}
                  className="relative flex items-center"
                >
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  >
                    {item.label}
                    <svg
                      className={`w-2.5 h-2.5 ms-2.5 transition-transform ${
                        dropdownStates[item.key] ? "rotate-180" : "rotate-0"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {item.key === "contact" && (
                    <div
                      className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
                        dropdownStates[item.key] ? "block" : "hidden"
                      } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 text-center">
                        {item.options.map((option, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={option.route}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => {
                                setIsMainDropdownOpen(false);
                                handleNavigation(option.route);
                              }}
                            >
                              {option.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
              {/* Language dropdown */}
              <li
                className="relative flex items-center"
                ref={dropdownRefs.language}
              >
                <button
                  className="flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-900 bg-transparent hover:bg-gray-100 rounded-md dark:text-white dark:hover:bg-gray-800 focus:outline-none"
                  onClick={toggleLanguageDropdown}
                >
                  <img
                    src="/world-wide-web.png"
                    className="w-5 h-5 mr-2 filter invert brightness-120"
                    alt=""
                  />
                  {currentLanguage}
                </button>
                {languageDropdownOpen && (
                  <div
                    className="absolute right-0 top-12 mt-2 w-16 bg-white dark:bg-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu"
                    tabIndex="-1"
                  >
                    <div className="py-1 " role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => handleChangeLanguage("en")}
                      >
                        EN
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => handleChangeLanguage("da")}
                      >
                        DA
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => handleChangeLanguage("ro")}
                      >
                        RO
                      </a>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
