// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const positions = [
//   {
//     title: "Software Engineer",
//     location: "San Francisco, CA",
//     description:
//       "We are looking for a skilled software engineer with experience in full-stack development...",
//   },
//   {
//     title: "Product Manager",
//     location: "New York, NY",
//     description:
//       "We are seeking an experienced product manager to help define and build innovative products...",
//   },
//   {
//     title: "UX Designer",
//     location: "Remote",
//     description:
//       "Join our team as a UX Designer to create intuitive and beautiful user experiences...",
//   },
// ];

// function Careers() {
//   useEffect(() => {
//     AOS.init({
//       duration: 300, // durata animațiilor în milisecunde
//     });
//   }, []);

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
//       {/* <div className="absolute right-[-600px] top-[-400px] w-full h-full rotate-90   bg-gradient-blue"></div> */}

//       <div data-aos="fade-up" className="py-8 pt-10 pb-20">
//         <div className="max-w-screen-lg mx-auto px-4">
//           <section data-aos="fade-up" id="workplaceculture" className="mb-12">
//             <h3 className="text-2xl font- text-blue-600 mb-4">
//               Workplace Culture
//             </h3>
//             <p className="text-slate-300">
//               At Zmei, we cultivate an informal yet professional environment
//               where we encourage everyone to bring their whole selves to work.
//               We believe that embracing our entire selves is essential for
//               achieving excellence.
//             </p>
//           </section>
//           <section className="mb-12">
//             {/* <h2 className="text-3xl font-bold text-slate-200 mb-6">Careers</h2> */}
//             <h3 className="text-2xl font-semibold text-gray-200 mb-4">
//               Open Positions
//             </h3>
//             <div className="space-y-6">
//               {positions.map((position, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-700 p-4 rounded-lg shadow-sm"
//                 >
//                   <h4 className="text-xl text-blue-600 font-semibold">
//                     {position.title}
//                   </h4>
//                   <p className="text-slate-300">{position.location}</p>
//                   <p className="text-slate-300 mt-2">{position.description}</p>
//                   <button class=" mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-300 hover:bg-gray-900 rounded-lg group ">
//                     <span class="relative px-5 py-2.5 transition-all ease-in duration-75 border border-blue-400 rounded-md group-hover:bg-opacity-0">
//                       Apply now
//                     </span>
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//       <div />
//       <Footer />
//     </>
//   );
// }

// export default Careers;

// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const positions = [
//   {
//     title: "Software Engineer",
//     location: "San Francisco, CA",
//     description:
//       "We are looking for a skilled software engineer with experience in full-stack development...",
//   },
//   {
//     title: "Product Manager",
//     location: "New York, NY",
//     description:
//       "We are seeking an experienced product manager to help define and build innovative products...",
//   },
//   {
//     title: "UX Designer",
//     location: "Remote",
//     description:
//       "Join our team as a UX Designer to create intuitive and beautiful user experiences...",
//   },
// ];

// function Careers() {
//   useEffect(() => {
//     AOS.init({
//       duration: 300, // durata animațiilor în milisecunde
//     });
//   }, []);

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

//       <div data-aos="fade-up" className="py-8 pt-10 pb-20">
//         <div className="max-w-screen-lg mx-auto px-4">
//           <section data-aos="fade-up" id="workplaceculture" className="mb-12">
//             <h3 className="text-2xl  text-blue-600 mb-4">Workplace Culture</h3>
//             <p className="text-slate-300 text-lg">
//               At Zmei, we cultivate an informal yet professional environment
//               where we encourage everyone to bring their whole selves to work.
//               We believe that embracing our entire selves is essential for
//               achieving excellence.
//             </p>
//           </section>
//           <section className="mb-12">
//             <h3 className="text-2xl font-normal  text-gray-200 mb-3">
//               Open Positions
//             </h3>
//             <h2 className="text-xl  text-gray-300 mb-6">
//               Are you looking for an exciting role that will both challenge and
//               inspire you? Look no further.
//             </h2>
//             <div className="space-y-6">
//               {positions.map((position, index) => (
//                 <div
//                   key={index}
//                   className="border border-gray-700 p-4 rounded-lg shadow-sm"
//                 >
//                   <h4 className="text-xl text-blue-600 font-semibold">
//                     {position.title}
//                   </h4>
//                   <p className="text-slate-300">{position.location}</p>
//                   <p className="text-slate-300 mt-2">{position.description}</p>
//                   <button
//                     type="button"
//                     className="w-32 rounded-md p-2 border  border-gray-600 hover:border-blue-600 text-white hover:bg-blue-600 transition-colors duration-300 mt-2"
//                   >
//                     Apply now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Careers;

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const positions = [
  {
    title: "Software Engineer",
    location: "San Francisco, CA",
    description:
      "We are looking for a skilled software engineer with experience in full-stack development...",
  },
  {
    title: "Product Manager",
    location: "New York, NY",
    description:
      "We are seeking an experienced product manager to help define and build innovative products...",
  },
  {
    title: "UX Designer",
    location: "Remote",
    description:
      "Join our team as a UX Designer to create intuitive and beautiful user experiences...",
  },
];

function Careers() {
  useEffect(() => {
    AOS.init({
      duration: 300, // durata animațiilor în milisecunde
    });
  }, []);

  const location = useLocation();

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

      <div data-aos="fade-up" className="py-8 pt-10 pb-20">
        <div className="max-w-screen-lg mx-auto px-4">
          <section data-aos="fade-up" id="workplaceculture" className="mb-12">
            <h3 className="text-2xl text-blue-600 mb-4">Workplace Culture</h3>
            <p className="text-slate-300 text-lg">
              At Zmei, we cultivate an informal yet professional environment
              where we encourage everyone to bring their whole selves to work.
              We believe that embracing our entire selves is essential for
              achieving excellence.
            </p>
          </section>
          <section className="mb-12">
            <h3 className="text-2xl font-normal text-gray-200 mb-3">
              Open Positions
            </h3>
            <h2 className="text-xl text-gray-300 mb-6">
              Are you looking for an exciting role that will both challenge and
              inspire you? Look no further.
            </h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className=" bg-gray-800 p-4 rounded-lg shadow-sm"
                >
                  <h4 className="text-xl text-blue-600 font-semibold">
                    {position.title}
                  </h4>
                  <p className="text-slate-300">{position.location}</p>
                  <p className="text-slate-300 mt-2">{position.description}</p>
                  <button
                    type="button"
                    className="w-32 rounded-md p-2 border border-gray-600 hover:border-blue-600 text-white hover:bg-blue-600 transition-colors duration-300 mt-2"
                  >
                    Apply now
                  </button>
                </div>
              ))}
            </div>
            <div className="border border-gray-700 p-4 rounded-lg shadow-sm mt-12">
              <p className="text-slate-300 text-lg">
                We currently have no open positions. Please check back soon or
                subscribe to our newsletter and LinkedIn for updates on future
                opportunities.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
