// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Navbar() {
//   const { t, i18n } = useTranslation("global");

//   const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
//   const [dropdownStates, setDropdownStates] = useState({
//     knowus: false,
//     expertise: false,
//     careers: false,
//     contact: false,
//   });

//   const dropdownRefs = {
//     knowus: useRef(null),
//     expertise: useRef(null),
//     careers: useRef(null),
//     contact: useRef(null),
//   };

//   const navigate = useNavigate();

//   const toggleDropdown = (key) => {
//     setDropdownStates((prevState) => {
//       const newState = Object.keys(prevState).reduce((acc, curr) => {
//         acc[curr] = curr === key ? !prevState[curr] : false;
//         return acc;
//       }, {});
//       return newState;
//     });
//   };

//   const handleClickOutside = (event) => {
//     if (
//       !dropdownRefs.knowus.current.contains(event.target) &&
//       !dropdownRefs.expertise.current.contains(event.target) &&
//       !dropdownRefs.careers.current.contains(event.target) &&
//       !dropdownRefs.contact.current.contains(event.target)
//     ) {
//       setDropdownStates({
//         knowus: false,
//         expertise: false,
//         careers: false,
//         contact: false,
//       });
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
//       label: t("navbar.knowuss"),
//       key: "knowus",
//       options: [
//         { name: "Our Essence", route: "/GetToKnowUs" },
//         { name: "Ethics", route: "/GetToKnowUs" },
//         { name: "Innovation", route: "/GetToKnowUs" },
//       ],
//     },
//     {
//       label: t("navbar.expertise"),
//       key: "expertise",
//       options: [
//         { name: "Design", route: "/expertise" },
//         { name: "Process", route: "/expertise#process" },
//         { name: "Technical", route: "/expertise#technical" },
//       ],
//     },
//     {
//       label: t("navbar.careers"),
//       key: "careers",
//       options: [
//         { name: "Workplace Culture", route: "/careers#workplaceculture" },
//         { name: "Available Jobs", route: "/careers#availablejobs" },
//       ],
//     },
//     {
//       label: t("navbar.contactus"),
//       key: "contact",
//       options: [
//         { name: "Contact Form", route: "/contactUs" },
//         { name: "Locations", route: "/contactUs/locations" },
//       ],
//     },
//   ];

//   const handleNavigation = (route) => {
//     setIsMainDropdownOpen(false);
//     navigate(route);
//   };

//   return (
//     <>
//       <nav className=" border-gray-200 font-sans  dark:border-gray-700 relative z-1 ml-20 mr-20">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src="./zmeibun.png" className="h-5" alt="Zmei logo" />
//           </Link>
//           <button
//             data-collapse-toggle="navbar-multi-level"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
//             className={`w-full md:block  md:w-auto ${
//               isMainDropdownOpen ? "block" : "hidden"
//             }`}
//             id="navbar-multi-level"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
//               {menuItems.map((item, index) => (
//                 <li
//                   className="relative"
//                   key={index}
//                   ref={dropdownRefs[item.key]}
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
//                   <div
//                     className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
//                       dropdownStates[item.key] ? "block" : "hidden"
//                     } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//                   >
//                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                       {item.options.map((option, subIndex) => (
//                         <li key={subIndex}>
//                           <Link
//                             to={option.route}
//                             className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                             onClick={() => handleNavigation(option.route)}
//                           >
//                             {option.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               ))}
//               {/* Blog Menu Item */}
//               <li>
//                 <Link
//                   to="/blogs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   Blog
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

////////
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Navbar() {
//   const { t, i18n } = useTranslation("global");

//   const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
//   const [dropdownStates, setDropdownStates] = useState({
//     knowus: false,
//     careers: false,
//     contact: false,
//   });

//   const dropdownRefs = {
//     knowus: useRef(null),
//     careers: useRef(null),
//     contact: useRef(null),
//   };

//   const navigate = useNavigate();

//   const toggleDropdown = (key) => {
//     setDropdownStates((prevState) => {
//       const newState = Object.keys(prevState).reduce((acc, curr) => {
//         acc[curr] = curr === key ? !prevState[curr] : false;
//         return acc;
//       }, {});
//       return newState;
//     });
//   };

//   const handleClickOutside = (event) => {
//     if (
//       !dropdownRefs.knowus.current.contains(event.target) &&
//       !dropdownRefs.careers.current.contains(event.target) &&
//       !dropdownRefs.contact.current.contains(event.target)
//     ) {
//       setDropdownStates({
//         knowus: false,
//         careers: false,
//         contact: false,
//       });
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
//       label: t("navbar.knowuss"),
//       key: "knowus",
//       options: [
//         { name: "Our Essence", route: "/GetToKnowUs" },
//         { name: "Ethics", route: "/GetToKnowUs" },
//         { name: "Innovation", route: "/GetToKnowUs" },
//       ],
//     },
//     {
//       label: t("navbar.careers"),
//       key: "careers",
//       options: [
//         { name: "Workplace Culture", route: "/careers#workplaceculture" },
//         { name: "Available Jobs", route: "/careers#availablejobs" },
//       ],
//     },
//     {
//       label: t("navbar.contactus"),
//       key: "contact",
//       options: [
//         { name: "Contact Form", route: "/contactUs" },
//         { name: "Locations", route: "/contactUs/locations" },
//       ],
//     },
//   ];

//   const handleNavigation = (route) => {
//     setIsMainDropdownOpen(false);
//     navigate(route);
//   };

//   return (
//     <>
//       <nav className=" border-gray-200 font-sans  dark:border-gray-700 relative z-1 ml-4 md:ml-20 mr-4 md:mr-20">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src="./zmeibun.png" className="h-5" alt="Zmei logo" />
//           </Link>

//           <button
//             data-collapse-toggle="navbar-multi-level"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
//             className={`w-full md:block  md:w-auto ${
//               isMainDropdownOpen ? "block" : "hidden"
//             }`}
//             id="navbar-multi-level"
//           >
//             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
//               <li>
//                 <Link
//                   to="/expertise"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   {t("navbar.expertise")}
//                 </Link>
//               </li>

//               {menuItems.map((item, index) => (
//                 <li
//                   className="relative"
//                   key={index}
//                   ref={dropdownRefs[item.key]}
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
//                   <div
//                     className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
//                       dropdownStates[item.key] ? "block" : "hidden"
//                     } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
//                   >
//                     <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
//                       {item.options.map((option, subIndex) => (
//                         <li key={subIndex}>
//                           <Link
//                             to={option.route}
//                             className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                             onClick={() => handleNavigation(option.route)}
//                           >
//                             {option.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </li>
//               ))}
//               {/* Blog Menu Item */}
//               <li>
//                 <Link
//                   to="/blogs"
//                   className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               {/* Expertise Menu Item */}
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
  const { t } = useTranslation("global");

  const [isMainDropdownOpen, setIsMainDropdownOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    knowus: false,
    contact: false,
  });

  const dropdownRefs = {
    knowus: useRef(null),
    contact: useRef(null),
  };

  const navigate = useNavigate();

  const toggleDropdown = (key) => {
    setDropdownStates((prevState) => {
      const newState = Object.keys(prevState).reduce((acc, curr) => {
        acc[curr] = curr === key ? !prevState[curr] : false;
        return acc;
      }, {});
      return newState;
    });
  };

  const handleClickOutside = (event) => {
    if (
      !dropdownRefs.knowus.current.contains(event.target) &&
      !dropdownRefs.contact.current.contains(event.target)
    ) {
      setDropdownStates({
        knowus: false,
        contact: false,
      });
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
      label: t("navbar.knowuss"),
      key: "knowus",
      options: [
        { name: "Our Essence", route: "/GetToKnowUs" },
        { name: "Ethics", route: "/GetToKnowUs" },
        { name: "Innovation", route: "/GetToKnowUs" },
      ],
    },
    {
      label: t("navbar.contactus"),
      key: "contact",
      options: [
        { name: "Contact Form", route: "/contactUs" },
        { name: "Locations", route: "/contactUs/locations" },
      ],
    },
  ];

  const handleNavigation = (route) => {
    setIsMainDropdownOpen(false);
    navigate(route);
  };

  return (
    <>
      <nav className="border-gray-200 font-sans dark:border-gray-700 relative z-10 ml-4 md:ml-20 mr-4 md:mr-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./zmeibun.png" className="h-5" alt="Zmei logo" />
          </Link>

          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-multi-level"
            aria-expanded={isMainDropdownOpen ? "true" : "false"}
            onClick={() => setIsMainDropdownOpen(!isMainDropdownOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${
                isMainDropdownOpen ? "rotate-0" : "rotate-180"
              }`}
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
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMainDropdownOpen ? "block" : "hidden"
            }`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              <li>
                <Link
                  to="/expertise"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                >
                  {t("navbar.expertise")}
                </Link>
              </li>

              {menuItems.map((item) => (
                <li
                  className="relative"
                  key={item.key}
                  ref={dropdownRefs[item.key]}
                >
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                  >
                    {item.label}
                    {item.key === "knowus" || item.key === "contact" ? (
                      <svg
                        className={`w-2.5 h-2.5 ms-2.5 ${
                          dropdownStates[item.key] ? "rotate-0" : "rotate-180"
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
                    ) : null}
                  </button>
                  {/* Dropdown menu */}
                  {item.key === "knowus" && (
                    <div
                      className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
                        dropdownStates[item.key] ? "block" : "hidden"
                      } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.options.map((option, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={option.route}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handleNavigation(option.route)}
                            >
                              {option.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.key === "contact" && (
                    <div
                      className={`absolute z-10 top-12 left-1/2 transform -translate-x-1/2 ${
                        dropdownStates[item.key] ? "block" : "hidden"
                      } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {item.options.map((option, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={option.route}
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              onClick={() => handleNavigation(option.route)}
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

              <li>
                <Link
                  to="/careers"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                >
                  {t("navbar.careers")}
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="flex items-center justify-between w-full py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-800 md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
