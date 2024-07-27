// import React from "react";
// import "../App.css";

// function AboutUs() {
//   return (
//     <div className=" bg-gradient-blue pt-28 pb-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-base font-semibold tracking-wide text-indigo-400 uppercase">
//             About Us
//           </h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//             Our Story
//           </p>
//         </div>
//         <div className="mt-10">
//           <div className="text-center  max-w-3xl mx-auto text-lg text-gray-200">
//             <p>
//               The founders, <strong>Alex</strong> and <strong>Daniela</strong>,
//               met in Copenhagen and, united by their passion for business,
//               forged a strong friendship that became the foundation of Zmei.
//               Recognizing the opportunity at the intersection of Scandinavian
//               work culture and Romanian technical prowess, they envisioned a
//               company that would address Denmark's IT personnel shortage with
//               top Romanian talent, driving European growth.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;
// import React from "react";
// import "../App.css";
// import sampleImage from "./zmei2poza.png"; // actualizează calea către imaginea ta

// function AboutUs() {
//   return (
//     <div className="relative bg-gradient-blue min-h-screen flex items-center justify-center pt-28 pb-28">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 text-center lg:text-left">
//           <h2 className="text-base font-semibold tracking-wide text-indigo-400 uppercase">
//             About Us
//           </h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
//             Our Story
//           </p>
//           <div className="mt-10">
//             <div className="max-w-3xl mx-auto lg:mx-0 text-lg text-gray-200">
//               <p>
//                 The founders, <strong>Alex</strong> and <strong>Daniela</strong>
//                 , met in Copenhagen and, united by their passion for business,
//                 forged a strong friendship that became the foundation of Zmei.
//                 Recognizing the opportunity at the intersection of Scandinavian
//                 work culture and Romanian technical prowess, they envisioned a
//                 company that would address Denmark's IT personnel shortage with
//                 top Romanian talent, driving European growth.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
//           <img
//             src={sampleImage}
//             alt="Our Story"
//             className="max-w-full h-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";
import "../App.css";
import sampleImage from "./zmei2poza.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);

  const { t, i18n } = useTranslation("global");

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="250"
      className="relative mt-40 mb-40 flex items-center justify-center  ml-20 mr-20 "
    >
      {/* Gradient pentru text */}
      <div className="absolute inset-0 z-0 bg-gradient-blue opacity-50"></div>

      <div className="absolute inset-0 z-0 flex justify-end ">
        <div className="w-2/2 h-full bg-gradient-blue opacity-50"></div>
      </div>

      <div className="relative z-10   mx-auto   justify-center flex flex-col lg:flex-row items-center">
        <div className=" w-4/5   text-center lg:text-left">
          <h2 className="text-base tracking-wide text-blue-500 uppercase">
            {t("aboutus.title")}
          </h2>
          <p className="mt-2 text-3xl leading-8  tracking-tight text-white mb-2 sm:text-4xl">
            Our Story
          </p>
          <div className="w-4/5  ">
            <div className="  text-gray-400 text-lg ">
              <p className="">{t("aboutus.text")}</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <img
            src={sampleImage}
            alt="Our Story"
            className="w-[40vw] h-auto rounded-md shadow-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

// w-[50vw]

export default AboutUs;
