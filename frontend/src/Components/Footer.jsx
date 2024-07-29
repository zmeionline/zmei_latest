// import React, { useState } from "react";
// import "../App.css";
// import { useTranslation } from "react-i18next";

// const Footer = () => {
//   const { t, i18n } = useTranslation("global");

//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/newsletterEmails", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage("Subscription successful!");
//         setEmail("");
//       } else {
//         const errorData = await response.json();
//         setMessage(`Failed to subscribe: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred");
//     }
//   };

//   return (
//     <footer className="relative text-gray-400 bg-green-100  ml-20 mr-20  ">
//       <div className="container    relative z-10">
//         <div className="flex ">
//           <div className="space-between">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               {" "}
//               {t("footer.company")}
//             </h3>

//             {/* //de aici schimbi tu */}
//             <ul>
//               <li className="mb-2">
//                 <a href="/about" className="hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               {/* //de aici schimbi tu */}

//               <li className="mb-2">
//                 <a href="/careers" className="hover:text-white">
//                   Careers
//                 </a>
//               </li>

//               <li className="mb-2">
//                 <a href="/blog" className="hover:text-white">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">
//               {t("footer.contact")}
//             </h3>
//             <p className="mb-4">
//               123 Corporate Blvd <br />
//               Suite 100 <br />
//               City, State, 12345
//             </p>
//             <p className="mb-2">
//               Email:{" "}
//               <a href="mailto:info@company.com" className="hover:text-white">
//                 {t("footer.email")}
//               </a>
//             </p>
//           </div>
//           <div className="">
//             <h3 className="text-white text-lg  font-semibold mb-4">
//               {t("footer.newsletter")}
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 focus:border-white focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full p-2 border  border-blue-700 text-white hover:bg-blue-600  transition-colors duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//             {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
//           </div>
//         </div>
//         <div className="mt-8 pt-6 border-t border-gray-700 text-center">
//           <p>&copy; {new Date().getFullYear()} Zmei. All rights reserved.</p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a href="https://facebook.com" className="hover:text-white">
//               {/* Icon pentru Facebook */}
//             </a>
//             <a href="https://twitter.com" className="hover:text-white">
//               {/* Icon pentru Twitter */}
//             </a>
//             <a href="https://linkedin.com" className="hover:text-white">
//               {/* Icon pentru LinkedIn */}
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useState } from "react";
// import "../App.css";
// import { useTranslation } from "react-i18next";

// const Footer = () => {
//   const { t, i18n } = useTranslation("global");

//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/newsletterEmails", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage("Subscription successful!");
//         setEmail("");
//       } else {
//         const errorData = await response.json();
//         setMessage(`Failed to subscribe: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred");
//     }
//   };

//   return (
//     <footer className="relative text-gray-400 w-5/6 mx-auto   ">
//       <div className="container mx-auto ">
//         <div className="flex justify-between">
//           <div className="flex flex-col">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               {/* {t("footer.company")} */}
//             </h3>
//             <ul>
//               <li className="mb-2">
//                 <a href="/about" className="hover:text-white">
//                   About Us
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/careers" className="hover:text-white">
//                   Careers
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/blog" className="hover:text-white">
//                   Blog
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/careers" className="hover:text-white">
//                   {t("footer.privacy")}
//                 </a>
//               </li>
//               <li className="mb-2">
//                 <a href="/careers" className="hover:text-white">
//                   {t("footer.cookie")}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="flex flex-col">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               {/* {t("footer.contact")} */}
//             </h3>
//             <p className="mb-4">
//               {t("footer.adress")}
//               <br />
//               {t("footer.adress2")}
//             </p>
//             <p className="mb-2">
//               Email:{" "}
//               <a href="mailto:info@company.com" className="hover:text-white">
//                 {t("footer.email")}
//               </a>
//             </p>
//           </div>

//           <div className="flex flex-col">
//             <h3 className="text-white text-lg font-semibold mb-4">
//               {t("footer.newsletter")}
//             </h3>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 focus:border-blue-600 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full p-2 border border-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
//               >
//                 Subscribe
//               </button>
//             </form>
//             {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
//           </div>
//         </div>

//         <div className="mt-8 pt-6 border-t border-gray-700 text-center">
//           <p>&copy; {new Date().getFullYear()} Zmei. All rights reserved.</p>
//           <div className="flex justify-center space-x-4 mt-4">
//             <a href="https://facebook.com" className="hover:text-white">
//               {/* Icon pentru Facebook */}
//             </a>
//             <a href="https://twitter.com" className="hover:text-white">
//               {/* Icon pentru Twitter */}
//             </a>
//             <a href="https://linkedin.com" className="hover:text-white">
//               {/* Icon pentru LinkedIn */}
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import "../App.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation("global");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/newsletterEmails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful!");
        setEmail("");
      } else {
        const errorData = await response.json();
        setMessage(`Failed to subscribe: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  return (
    <footer className="relative text-gray-400 w-5/6 mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">
              {/* {t("footer.company")} */}
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:text-white">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-white">
                  {t("footer.careers")}
                </a>
              </li>
              <li className="mb-2">
                <a href="/blogs" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-white">
                  {t("footer.privacy")}
                </a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:text-white">
                  {t("footer.cookie")}
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">
              {/* {t("footer.contact")} */}
            </h3>
            <p className="">
              {t("footer.adress")}
              <br />
              {t("footer.adress2")}
            </p>
            <p className="mb-4">
              Email:{" "}
              <a href="mailto:info@company.com" className="hover:text-white">
                {t("footer.email")}
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/3 flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">
              {t("footer.newsletter")}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 focus:border-blue-600 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full p-2 border border-blue-700 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="text-sm text-gray-600 mt-2">{message}</p>}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Zmei. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://facebook.com" className="hover:text-white">
              {/* Icon pentru Facebook */}
            </a>
            <a href="https://twitter.com" className="hover:text-white">
              {/* Icon pentru Twitter */}
            </a>
            <a href="https://linkedin.com" className="hover:text-white">
              {/* Icon pentru LinkedIn */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
