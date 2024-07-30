// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     "We turn the challenges of your digital journey into opportunities",
//     "Vi forvandler udfordringerne på din digitale rejse til muligheder",
//     "Transformăm provocările călătoriei tale digitale în oportunități",
//   ];
//   const { t, i18n } = useTranslation("global");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000); // Change text every 4 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-8">
//       <div className="lg:flex-col lg:items-center">
//         <div className="w-full lg:w-1/2 ">
//           {/* <div className="relative bg-black h-48 lg:h-56 xl:h-64 2xl:h-72 overflow-hidden rounded-lg"> */}
//           <div className=" overflow-hidden rounded-lg">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className={` w-fulltransition-opacity duration-700 ease-in-out ${
//                   index === activeIndex ? "opacity-100" : "opacity-0"
//                 }`}
//               >
//                 {/* <p className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] text-left leading-tight p-4"> */}
//                 <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] text-left leading-tight p-4">
//                   {item}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="">
//           <p className="">{t("email.text")}</p>
//         </div>
//         <button className="mt-6 text-2xs hover:text-blue-800">read more</button>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     "We turn the challenges of your digital journey into opportunities",
//     "Vi forvandler udfordringerne på din digitale rejse til muligheder",
//     "Transformăm provocările călătoriei tale digitale în oportunități",
//   ];
//   const { t } = useTranslation("global");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000); // Change text every 4 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="  ">
//       <div className=" ">
//         <div className=" ">
//           {" "}
//           {/* Adjust height as needed */}
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={` ${
//                 index === activeIndex ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <p className="text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] text-left leading-tight ">
//                 {item}
//               </p>
//             </div>
//           ))}
//         </div>
//         <div className=" ">
//           <p className="font-inter text-gray-900">{t("email.text")}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     "We turn the challenges of your digital journey into opportunities",
//     "Vi forvandler udfordringerne på din digitale rejse til muligheder",
//     "Transformăm provocările călătoriei tale digitale în oportunități",
//   ];
//   const { t } = useTranslation("global");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 4000); // Change text every 4 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="relative w-full h-full left-20 bg-red-800  ">
//       {/* Video background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//       >
//         <source src="path_to_your_video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Text container */}
//       <div className="bg-red-200">
//         {/* Carousel text */}
//         <div className="relative">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={`absolute bg-red-400 transition-opacity duration-1000 ${
//                 index === activeIndex ? "opacity-100" : "opacity-0"
//               }`}
//               style={{ width: "100%" }} // Ensures all texts are of the same width
//             >
//               <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] text-left leading-tight">
//                 {item}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Additional text */}
//         <div className="absolute top-50 text-left bg-red-500 ">
//           <p className="font-inter text-gray-900">{t("email.text")}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     "We turn the challenges of your digital journey into opportunities",
//     "Vi forvandler udfordringerne på din digitale rejse til muligheder",
//     "Transformăm provocările călătoriei tale digitale în oportunități",
//   ];
//   const { t } = useTranslation("global");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000); // Change text every 8 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="bg-red-200">
//       {/* Video background */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         autoPlay
//         muted
//         loop
//       >
//         <source src="path_to_your_video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Text container */}
//       <div className=" flex flex-col    ">
//         {/* Carousel text */}
//         <div className="">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className={` transition-opacity duration-1000 ${
//                 index === activeIndex ? "opacity-100" : "opacity-0"
//               }`}
//               style={{ width: "100%" }} // Ensures all texts are of the same width
//             >
//               <p className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] t">
//                 {item}
//               </p>
//             </div>
//           ))}
//         </div>
//         {/* Additional text */}
//         <div className="   bg-red-100 ">
//           <p className=" text-gray-900  ">{t("email.text")}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Carousel;

// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// function Carousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const items = [
//     "We turn the challenges of your digital journey into opportunities",
//     "Vi forvandler udfordringerne på din digitale rejse til muligheder",
//     "Transformăm provocările călătoriei tale digitale în oportunități",
//   ];
//   const { t } = useTranslation("global");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change text every 8 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [items.length]);

//   return (
//     <div className="   ">
//       <div className="bg-blue-200 absolute left-20 w-5/12 top-40 lg:top-60 ">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 flex items-center transition-opacity duration-1000  ${
//               index === activeIndex ? "opacity-100" : "opacity-0"
//             }`}
//             style={{ width: "100%" }} // Ensures all texts are of the same width
//           >
//             <p className="text-5xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#060a1a] to-[#09379c] text-left ">
//               {item}
//             </p>
//           </div>
//         ))}
//       </div>
//       <p className=" absolute left-20  lg:top-72  mt-8  text-xl font-inter text-gray-900">
//         {t("email.text")}
//       </p>
//       <p className="absolute left-20 top-60 lg:top-80  font-bold   mt-10 text-1xl cursor pointer text-blue-950   ">
//         read more ↓
//       </p>
//     </div>
//   );
// }

// export default Carousel;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Carousel({ scrollToAboutUs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    "We turn the challenges of your digital journey into opportunities",
    "Vi forvandler udfordringerne på din digitale rejse til muligheder",
    "Transformăm provocările călătoriei tale digitale în oportunități",
  ];
  const { t } = useTranslation("global");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [items.length]);

  return (
    <div className="">
      <div className=" absolute sm:left-20 left-4 w-full   sm:w-5/12 top-80 sm:top-40 lg:top-60">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute  inset-0 flex items-center transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ width: "100%" }} // Ensures all texts are of the same width
          >
            <p className="sm:text-5xl text-4xl  font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#060a1a] to-[#09379c] text-left">
              {item}
            </p>
          </div>
        ))}
      </div>
      <p className="absolute   left-4 top-80 mt-20 mr-10 sm:mr-0  sm:top-0  sm:left-20 lg:top-72 sm:mt-8 text-xl font-inter text-gray-900">
        {t("email.text")}
      </p>
      <p
        className="absolute sm:left-20 left-4 sm:top-60 top-80 mt-40 lg:top-80 font-bold sm:mt-10 text-1xl cursor-pointer text-blue-950"
        onClick={scrollToAboutUs}
      >
        read more ↓
      </p>
    </div>
  );
}

export default Carousel;
