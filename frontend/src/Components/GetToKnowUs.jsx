// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const GetToKnowUs = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6 text-gray-400 rounded-lg mt-14    mb-40">
//         <h2 className="text-3xl font-bold  mb-4 text-blue-500">
//           Get to Know Us
//         </h2>
//         <p className="text-white-100 text-lg leading-relaxed mb-8">
//           Welcome to our company! We are dedicated to providing the best service
//           possible. Our team is composed of highly skilled professionals who are
//           passionate about what they do. We believe in building strong
//           relationships with our clients and always strive to exceed their
//           expectations. Thank you for taking the time to learn more about us. We
//           look forward to working with you!
//         </p>

//         <div className="mb-8">
//           <h3 className="text-2xl font-semibold  mb-2 text-gray-200">
//             Our Essence
//           </h3>
//           <p className="text-white-100 text-lg leading-relaxed">
//             Our essence lies in our commitment to excellence and integrity. We
//             prioritize quality in everything we do and ensure that our values
//             align with our actions. Our culture is built on a foundation of
//             trust, respect, and a shared goal of delivering the best possible
//             outcomes for our clients.
//           </p>
//         </div>

//         <div className="mb-8">
//           <h3 className="text-2xl font-semibold mb-2 text-gray-300">Ethics</h3>
//           <p className="text-slate-400 text-lg leading-relaxed">
//             Ethics are at the core of our business practices. We adhere to the
//             highest standards of ethical conduct in all our operations and
//             interactions. Our ethical framework guides us in making decisions
//             that are fair, transparent, and beneficial for all stakeholders
//             involved.
//           </p>
//         </div>

//         <div>
//           <h3 className="text-2xl font-semibold text-gray-300  mb-2">
//             Innovation
//           </h3>
//           <p className="text-slate-300 text-lg leading-relaxed">
//             Innovation drives our progress and shapes our future. We embrace
//             change and continuously seek new ways to improve our services and
//             products. Our innovative spirit helps us stay ahead of the curve and
//             deliver solutions that meet the evolving needs of our clients.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default GetToKnowUs;

// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const GetToKnowUs = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 500, // durata animațiilor în milisecunde
//     });
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <div
//         data-aos="fade-up"
//         className="max-w-5xl mx-auto p-8  text-gray-200 rounded-lg mt-14 mb-40 "
//       >
//         <h2 className="text-3xl    mb-6 text-blue-500">Get to Know Us</h2>
//         <p className="text-gray-400 text-lg leading-relaxed mb-12 ">
//           Welcome to our company! We are dedicated to providing the best service
//           possible. Our team is composed of highly skilled professionals who are
//           passionate about what they do. We believe in building strong
//           relationships with our clients and always strive to exceed their
//           expectations. Thank you for taking the time to learn more about us. We
//           look forward to working with you!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-2xl  mb-4 text-blue-500">Our Essence</h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Our essence lies in our commitment to excellence and integrity. We
//               prioritize quality in everything we do and ensure that our values
//               align with our actions. Our culture is built on a foundation of
//               trust, respect, and a shared goal of delivering the best possible
//               outcomes for our clients.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">
//               Ethics
//             </h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Ethics are at the core of our business practices. We adhere to the
//               highest standards of ethical conduct in all our operations and
//               interactions. Our ethical framework guides us in making decisions
//               that are fair, transparent, and beneficial for all stakeholders
//               involved.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">
//               Innovation
//             </h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Innovation drives our progress and shapes our future. We embrace
//               change and continuously seek new ways to improve our services and
//               products. Our innovative spirit helps us stay ahead of the curve
//               and deliver solutions that meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default GetToKnowUs;

// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const GetToKnowUs = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 500, // durata animațiilor în milisecunde
//     });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div
//         data-aos="fade-up"
//         className="max-w-5xl mx-auto p-8 text-gray-200 rounded-lg mt-14 mb-40"
//       >
//         <h2 className="text-3xl mb-6 text-blue-500">Get to Know Us</h2>
//         <p className="text-gray-400 text-lg leading-relaxed mb-12">
//           Welcome to our company! We are dedicated to providing the best service
//           possible. Our team is composed of highly skilled professionals who are
//           passionate about what they do. We believe in building strong
//           relationships with our clients and always strive to exceed their
//           expectations. Thank you for taking the time to learn more about us. We
//           look forward to working with you!
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-in-out transform hover:-translate-y-2">
//             <h3 className="text-2xl mb-4 text-blue-500">Our Essence</h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Our essence lies in our commitment to excellence and integrity. We
//               prioritize quality in everything we do and ensure that our values
//               align with our actions. Our culture is built on a foundation of
//               trust, respect, and a shared goal of delivering the best possible
//               outcomes for our clients.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-in-out transform hover:-translate-y-2">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">
//               Ethics
//             </h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Ethics are at the core of our business practices. We adhere to the
//               highest standards of ethical conduct in all our operations and
//               interactions. Our ethical framework guides us in making decisions
//               that are fair, transparent, and beneficial for all stakeholders
//               involved.
//             </p>
//           </div>

//           <div className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-transform duration-700 ease-in-out transform hover:-translate-y-2">
//             <h3 className="text-2xl font-semibold mb-4 text-blue-500">
//               Innovation
//             </h3>
//             <p className="text-gray-300 text-lg leading-relaxed">
//               Innovation drives our progress and shapes our future. We embrace
//               change and continuously seek new ways to improve our services and
//               products. Our innovative spirit helps us stay ahead of the curve
//               and deliver solutions that meet the evolving needs of our clients.
//             </p>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default GetToKnowUs;

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const GetToKnowUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);

  const { t } = useTranslation("global");

  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto p-8 text-gray-200 rounded-lg mt-14 mb-40"
      >
        <h2 className="text-3xl mb-6 text-blue-500"> {t("knowUs.title")}</h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          {t("knowUs.text")}
        </p>
        <div className="  rounded-lg  duration-300 ">
          <h3 className="text-2xl mb-4 text-blue-500">
            {" "}
            {t("knowUs.essence")}
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t("knowUs.essence.text")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10 mb-10">
          <div className="p-6  bg-gray-800 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              Ethics
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("knowUs.ethics.text")}
            </p>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/50">
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">
              {t("knowUs.innovation")}{" "}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("knowUs.innovation.text")}
            </p>
          </div>
        </div>
        <div className="  rounded-lg  duration-300 mb-8 ">
          <h3 className="text-2xl mb-4 text-blue-500">Vision</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t("knowUs.vision")}
          </p>
        </div>
        <div className="  rounded-lg  duration-300 ">
          <h3 className="text-2xl mb-4 text-blue-500">Mission</h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            {t("knowUs.mission")}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetToKnowUs;
