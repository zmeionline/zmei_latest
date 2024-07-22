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

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Carousel() {
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
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [items.length]);

  return (
    <div className="md:ml-20 md:mr-20 p-6 md:p-0 ">
      <div className="lg:flex lg:flex-col ">
        <div className="relative w-full  md:w-1/2 h-20">
          {" "}
          {/* Adjust height as needed */}
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out  flex items-center ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-4xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-[#06151a] to-[#09379c] text-left leading-tight ">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 w-1/2 text-start ">
          <p className="font-inter text-gray-900">{t("email.text")}</p>
        </div>
      </div>
      <button className="mt-6 text-xs flex text-left   hover:text-blue-800">
        read more
      </button>
    </div>
  );
}

export default Carousel;
