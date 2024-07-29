// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import AOS from "aos";
// import { useTranslation } from "react-i18next";

// import "aos/dist/aos.css";

// function Expertise() {
//   useEffect(() => {
//     AOS.init({
//       duration: 300, // Duration of animations in milliseconds
//     });
//   }, []);

//   const { t } = useTranslation("global");
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       <Navbar />
//       <div className="video-background relative inset-0 overflow-hidden h-80">
//         <h1 className="z-99 absolute top-10 left-20 text-4xl text-blue-500 ">
//           title lorem lorem
//         </h1>
//         <p className="absolute text-gray-300 top-24 left-20  text-2xl">
//           text lorem ipsum dolores random blabla test
//         </p>
//         <video
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//           preload="metadata"
//           poster="./video-poster.jpg"
//         >
//           <source src="./videozmei.mp4" type="video/mp4" />
//           {/* <source src="./zmeivid.webm" type="video/webm" /> */}
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="flex gap-40 p-5 text-gray-300 text-center justify-center">
//         <p>Design</p>
//         <p>Process</p>
//         <p>Technical</p>
//       </div>
//       <hr />

//       <div className="container mx-auto px-4 py-16 space-y-16">
//         <section id="design" className="relative" data-aos="fade-up">
//           <div className="absolute inset-0 w-full h-full  "></div>
//           <div className="relative  gap-8 items-center">
//             <div className="p-8  rounded-lg  order-2 md:order-1">
//               <h2 className="text-4xl font-bold text-blue-500 mb-6">Design</h2>
//               <div className="">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-300">
//                     {t("expertise.design.strategy")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.design.strategy.text")}
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl mt-4 font-semibold text-gray-300">
//                     {t("expertise.design.system")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.design.system.text")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="relative p-8 order-1 md:order-2">
//               <img
//                 src="https://via.placeholder.com/600x500"
//                 alt="Design"
//                 className="rounded-lg shadow-lg"
//               />
//             </div> */}
//           </div>
//         </section>

//         <section id="process" className="relative" data-aos="fade-up">
//           <div className="absolute inset-0 w-full h-full "></div>
//           <div className="relative  gap-8 items-center">
//             {/* <div className="relative p-8 order-2 md:order-1">
//               <img
//                 src="https://via.placeholder.com/600x500"
//                 alt="Process"
//                 className="rounded-lg "
//               />
//             </div> */}
//             <div className="p-8  rounded-lg  order-1 md:order-2">
//               <h2 className="text-4xl font-bold mb-6 text-blue-500">
//                 {t("expertise.process")}
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-300">
//                     {t("expertise.process.agile")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.process.agile.text")}
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-300">
//                     {t("expertise.process.software")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.process.software.text")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section id="technical" className="relative" data-aos="fade-up">
//           <div className="absolute inset-0 w-full h-full  "></div>
//           <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div className="p-8  rounded-lg  order-2 md:order-1">
//               <h2 className="text-4xl font-bold text-blue-500  mb-6">
//                 {t("expertise.technical")}
//               </h2>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-300">
//                     {t("expertise.technical.software")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.technical.software.text")}
//                   </p>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-300">
//                     {t("expertise.technical.architecture")}
//                   </h3>
//                   <p className="text-gray-400 mt-2">
//                     {t("expertise.technical.architecture.text")}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             {/* <div className="relative p-8 order-1 md:order-2">
//               <img
//                 src="https://via.placeholder.com/600x500"
//                 alt="Technical"
//                 className="rounded-lg "
//               />
//             </div> */}
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Expertise;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import AOS from "aos";
// import { useTranslation } from "react-i18next";
// import "aos/dist/aos.css";

// function Expertise() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { t } = useTranslation("global");
//   const location = useLocation();

//   const sections = [
//     {
//       id: "design",
//       title: "Design",
//       content: (
//         <>
//           <h2 className="text-4xl font-bold text-blue-500 mb-6">
//             {t("expertise.design.title")}
//           </h2>
//           <div>
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 {t("expertise.design.strategy")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.strategy.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl mt-4 font-semibold text-gray-300">
//                 {t("expertise.design.system")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.system.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "process",
//       title: "Process",
//       content: (
//         <>
//           <h2 className="text-4xl font-bold mb-6 text-blue-500">
//             {t("expertise.process")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 {t("expertise.process.agile")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.agile.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 {t("expertise.process.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.software.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "technical",
//       title: "Technical",
//       content: (
//         <>
//           <h2 className="text-4xl font-bold text-blue-500 mb-6">
//             {t("expertise.technical")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 {t("expertise.technical.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.software.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold text-gray-300">
//                 {t("expertise.technical.architecture")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.architecture.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 300, // Duration of animations in milliseconds
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === sections.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 8000); // Change section every 8 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [sections.length]);

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       <Navbar />
//       <div className="video-background relative inset-0 overflow-hidden h-80">
//         <h1 className="z-99 absolute top-10 left-20 text-4xl text-blue-500">
//           title lorem lorem
//         </h1>
//         <p className="absolute text-gray-300 top-24 left-20 text-2xl">
//           text lorem ipsum dolores random blabla test
//         </p>
//         <video
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//           preload="metadata"
//           poster="./video-poster.jpg"
//         >
//           <source src="./videozmei.mp4" type="video/mp4" />
//           {/* <source src="./zmeivid.webm" type="video/webm" /> */}
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="flex gap-40 p-5 text-gray-300 text-center justify-center">
//         {sections.map((section, index) => (
//           <button
//             key={section.id}
//             onClick={() => setActiveIndex(index)}
//             className={`p-2 ${
//               activeIndex === index ? "text-blue-500" : "text-gray-300"
//             }`}
//           >
//             {section.title}
//           </button>
//         ))}
//       </div>
//       <hr />
//       <div className="container mx-auto px-4 py-16">
//         <section
//           id={sections[activeIndex].id}
//           className="relative"
//           data-aos="fade-up"
//         >
//           <div className="relative gap-8 items-center">
//             <div className="p-8 rounded-lg">
//               {sections[activeIndex].content}
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Expertise;
////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import AOS from "aos";
// import { useTranslation } from "react-i18next";
// import "aos/dist/aos.css";

// function Expertise() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { t } = useTranslation("global");
//   const location = useLocation();

//   const sections = [
//     {
//       id: "design",
//       title: "Design",
//       content: (
//         <>
//           <h2 className="text-4xl  text-blue-500  mb-4">
//             {t("expertise.design")}
//           </h2>
//           <div>
//             <div>
//               <h3 className="text-2xl  text-gray-300">
//                 {t("expertise.design.strategy")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.strategy.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl mt-4 font text-gray-300">
//                 {t("expertise.design.system")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.system.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "process",
//       title: "Process",
//       content: (
//         <>
//           <h2 className="text-4xl  mb-4 text-blue-500">
//             {t("expertise.process")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font- text-gray-300">
//                 {t("expertise.process.agile")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.agile.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl  text-gray-300">
//                 {t("expertise.process.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.software.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "technical",
//       title: "Technical",
//       content: (
//         <>
//           <h2 className="text-4xl font text-blue-500 mb-4">
//             {t("expertise.technical")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font   text-gray-300">
//                 {t("expertise.technical.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.software.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl  text-gray-300">
//                 {t("expertise.technical.architecture")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.architecture.text")}
//               </p>
//             </div>
//           </div>
//           <div></div>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 300, // Duration of animations in milliseconds
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === sections.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 8000); // Change section every 8 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [sections.length]);

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       <Navbar />
//       <div className=" relative inset-0 overflow-hidden h-80  ml-40   w-1/2">
//         <h1 className="z-99 absolute top-20  md:text-3xl  bg-red-100     text-blue-500 ">
//           {t("expertise.h2")}
//         </h1>
//         {/* <video
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//           preload="metadata"
//           poster="./video-poster.jpg"
//         >
//           <source src="./videozmei.mp4" type="video/mp4" />
//           {/* <source src="./zmeivid.webm" type="video/webm" /> */}
//         {/* </video> */}
//       </div>
//       <div className="relative">
//         <div className="flex gap-10 md:gap-32  justify-center  mt-2 mb-2 text-gray-300   ">
//           {sections.map((section, index) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveIndex(index)}
//               className={` relative ${
//                 activeIndex === index ? "text-blue-500" : "text-gray-300 "
//               } transition-colors duration-300`}
//             >
//               {section.title}
//               {activeIndex === index && (
//                 <span className="absolute left-1/2 transform -translate-x-1/2 top-8 w-full h-1  transition-all duration-300" />
//               )}
//             </button>
//           ))}
//         </div>
//         <hr className="border-gray-700 relative z-10 " />
//       </div>
//       <section
//         id={sections[activeIndex].id}
//         className="w-2/3 ml-40 "
//         data-aos="fade-up"
//       >
//         <div className="relative gap-8 w-3/4 mb-16 items-center">
//           <div className=" rounded-lg mb-24 bg-red-300">
//             {sections[activeIndex].content}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Expertise;

// import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import Footer from "./Footer";
// import Navbar from "./Navbar";
// import AOS from "aos";
// import { useTranslation } from "react-i18next";
// import "aos/dist/aos.css";

// function Expertise() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const { t } = useTranslation("global");
//   const location = useLocation();

//   const sections = [
//     {
//       id: "design",
//       title: "Design",
//       content: (
//         <>
//           <h2 className="text-4xl text-blue-500 mb-4">
//             {t("expertise.design")}
//           </h2>
//           <div>
//             <div>
//               <h3 className="text-2xl text-gray-300">
//                 {t("expertise.design.strategy")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.strategy.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl mt-4 text-gray-300">
//                 {t("expertise.design.system")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.design.system.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "process",
//       title: "Process",
//       content: (
//         <>
//           <h2 className="text-4xl mb-4 text-blue-500">
//             {t("expertise.process")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl text-gray-300">
//                 {t("expertise.process.agile")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.agile.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl text-gray-300">
//                 {t("expertise.process.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.process.software.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//     {
//       id: "technical",
//       title: "Technical",
//       content: (
//         <>
//           <h2 className="text-4xl text-blue-500 mb-4">
//             {t("expertise.technical")}
//           </h2>
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl text-gray-300">
//                 {t("expertise.technical.software")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.software.text")}
//               </p>
//             </div>
//             <div>
//               <h3 className="text-2xl text-gray-300">
//                 {t("expertise.technical.architecture")}
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 {t("expertise.technical.architecture.text")}
//               </p>
//             </div>
//           </div>
//         </>
//       ),
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 300, // Duration of animations in milliseconds
//     });
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) =>
//         prevIndex === sections.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 8000); // Change section every 8 seconds

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [sections.length]);

//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.substring(1));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       <Navbar />
//       <div className="relative inset-0 overflow-hidden h-80">
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-100 ">
//           <h1 className="text-2xl md:text-3xl text-blue-500">
//             {t("expertise.h2")}
//           </h1>
//         </div>

//         <video
//           autoPlay
//           muted
//           loop
//           className="w-full h-full object-cover"
//           preload="metadata"
//           poster="./video-poster.jpg"
//         >
//           <source src="./videozmei.mp4" type="video/mp4" />
//           {/* <source src="./zmeivid.webm" type="video/webm" /> */}
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="relative mt-16 mb-16">
//         <div className="flex gap-10 md:gap-32 justify-center text-gray-300">
//           {sections.map((section, index) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveIndex(index)}
//               className={`relative ${
//                 activeIndex === index ? "text-blue-500" : "text-gray-300"
//               } transition-colors duration-300`}
//             >
//               {section.title}
//               {activeIndex === index && (
//                 <span className="absolute left-1/2 transform -translate-x-1/2 top-8 w-full h-1 bg-blue-500 transition-all duration-300" />
//               )}
//             </button>
//           ))}
//         </div>
//         <hr className="border-gray-700" />
//       </div>
//       <section
//         id={sections[activeIndex].id}
//         className="w-2/3 mx-auto"
//         data-aos="fade-up"
//       >
//         <div className="relative gap-8 w-full mx-auto mb-16 items-center">
//           <div className="rounded-lg  p-6">{sections[activeIndex].content}</div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// }

// export default Expertise;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "aos/dist/aos.css";

function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation("global");
  const location = useLocation();

  const sections = [
    {
      id: "design",
      title: t("expertise.element1"),
      content: (
        <>
          <h2 className="text-4xl text-blue-500 mb-4">
            {t("expertise.design")}
          </h2>
          <div>
            <div>
              <h3 className="text-2xl text-gray-300">
                {t("expertise.design.strategy")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.design.strategy.text")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl mt-4 text-gray-300">
                {t("expertise.design.system")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.design.system.text")}
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "process",
      title: t("expertise.element2"),
      content: (
        <>
          <h2 className="text-4xl mb-4 text-blue-500">
            {t("expertise.process")}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-gray-300">
                {t("expertise.process.agile")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.process.agile.text")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-300">
                {t("expertise.process.software")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.process.software.text")}
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "technical",
      title: t("expertise.element3"),
      content: (
        <>
          <h2 className="text-4xl text-blue-500 mb-4">
            {t("expertise.technical")}
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-gray-300">
                {t("expertise.technical.software")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.technical.software.text")}
              </p>
            </div>
            <div>
              <h3 className="text-2xl text-gray-300">
                {t("expertise.technical.architecture")}
              </h3>
              <p className="text-gray-400 mt-2">
                {t("expertise.technical.architecture.text")}
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animations in milliseconds
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sections.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); // Change section every 8 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [sections.length]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden h-80 bg-gray-900">
        <div className="absolute inset-0 container mx-auto   ">
          <h1 className="text-2xl md:text-3xl text-gray-200 w-1/2 m-4 mt-40 ">
            {t("expertise.h2")}
          </h1>
        </div>
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          preload="metadata"
          poster="./video-poster.jpg"
        >
          <source src="./videozmei.mp4" type="video/mp4" />
          {/* <source src="./zmeivid.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative  ">
        <div className="container mx-auto ">
          <div className="flex gap-10 md:gap-32 justify-center text-gray-300 mb-2 mt-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveIndex(index)}
                className={`relative ${
                  activeIndex === index ? "text-blue-500" : "text-gray-300"
                } transition-colors duration-300`}
              >
                {section.title}
                {activeIndex === index && (
                  <span className="absolute left-1/2 transform -translate-x-1/2 top-8 w-full h-1 bg-blue-500 transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
          <hr className="border-gray-700 mb-8" />
        </div>
      </div>
      <section
        id={sections[activeIndex].id}
        className=" mt-12 mb-40"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4">
          <div className="bg-gray-800 rounded-lg p-6">
            {sections[activeIndex].content}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Expertise;
