// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../../App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function LatestBlog() {
//   useEffect(() => {
//     AOS.init({
//       duration: 500, // durata animațiilor în milisecunde
//     });
//   }, []);

//   const [latestBlog, setLatestBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLatestBlog = async () => {
//       try {
//         const response = await fetch(
//           "https://zmei-final-v2.onrender.com/api/blogs"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0) {
//             // Setăm ultimul blog din lista
//             setLatestBlog(data[data.length - 1]);
//           } else {
//             setError("No blogs found");
//           }
//         } else {
//           setError("Failed to fetch blogs");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         setError("An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLatestBlog();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-8">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-8 text-red-500">{error}</p>;
//   }

//   if (!latestBlog) {
//     return <p className="text-center mt-8">No blogs available.</p>;
//   }

//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-offset="200"
//       className="relative md:mt-6 flex items-center text-white from-gray-800 via-gray-700 to-gray-900"
//     >
//       <div className="w-full pl-4 pr-4 ">
//         <h2 className="text-5xl text-gray-100 tracking-tight mb-8">
//           QA at its finest
//         </h2>
//         <div className="flex flex-col  md:flex-row">
//           <div className="md:w-8/12 w-full mb-8 md:mb-0 ">
//             {latestBlog.imageUrl && (
//               <img
//                 src={`https://zmei-final-v2.onrender.com/${latestBlog.imageUrl}`}
//                 alt={latestBlog.title}
//                 className="w-full h-full object-cover rounded-md shadow-lg"
//               />
//             )}
//           </div>
//           <div className="md:w-4/12 w-full md:ml-4 relative">
//             <h3 className="text-3xl  mb-2 text-gray-100">{latestBlog.title}</h3>
//             <p className="text-gray-400">{latestBlog.textPreview}</p>
//             <Link
//               to={`/blogs/${latestBlog.id}`}
//               className="absolute mt-6 md:mt-0 md:bottom-0 inline-block text-blue-500 rounded-md hover:text-blue-600"
//             >
//               Read the article
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestBlog;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../../App.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

// function LatestBlog() {
//   useEffect(() => {
//     AOS.init({
//       duration: 500, // durata animațiilor în milisecunde
//     });
//   }, []);

//   const [latestBlog, setLatestBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchLatestBlog = async () => {
//       try {
//         const response = await fetch(
//           "https://zmei-final-v2.onrender.com/api/blogs"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0) {
//             // Setăm ultimul blog din lista
//             setLatestBlog(data[data.length - 1]);
//           } else {
//             setError("No blogs found");
//           }
//         } else {
//           setError("Failed to fetch blogs");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         setError("An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLatestBlog();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-8">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-8 text-red-500">{error}</p>;
//   }

//   if (!latestBlog) {
//     return <p className="text-center mt-8">No blogs available.</p>;
//   }

//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-offset="200"
//       className="relative md:mt-6 flex items-center text-white from-gray-800 via-gray-700 to-gray-900"
//     >
//       <div className="w-full pl-4 pr-4 ">
//         <h2 className="text-5xl text-gray-100 tracking-tight mb-8">
//           QA at its finest
//         </h2>
//         <div className="flex flex-col  md:flex-row">
//           <div className="md:w-8/12 w-full mb-8 md:mb-0 ">
//             {latestBlog.imageUrl && (
//               <img
//                 src={`https://zmei-final-v2.onrender.com/uploads/${latestBlog.imageUrl}`}
//                 alt={latestBlog.title}
//                 className="w-full h-full object-cover rounded-md shadow-lg"
//               />
//             )}
//           </div>
//           <div className="md:w-4/12 w-full md:ml-4 relative">
//             <h3 className="text-3xl  mb-2 text-gray-100">{latestBlog.title}</h3>
//             <p className="text-gray-400">{latestBlog.textPreview}</p>
//             <Link
//               to={`/blogs/${latestBlog.id}`}
//               className="absolute mt-6 md:mt-0 md:bottom-0 inline-block text-blue-500 rounded-md hover:text-blue-600"
//             >
//               Read the article
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LatestBlog;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function LatestBlog() {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);
  const { t, i18n } = useTranslation("global");

  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const response = await fetch(
          "https://zmei3-3ae010121032.herokuapp.com//api/blogs"
        );
        if (response.ok) {
          const data = await response.json();
          if (data.length > 0) {
            // Setăm ultimul blog din lista
            setLatestBlog(data[data.length - 1]);
          } else {
            setError("No blogs found");
          }
        } else {
          setError("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlog();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  if (!latestBlog) {
    return <p className="text-center mt-8">No blogs available.</p>;
  }

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="200"
      className="relative md:mt-16 flex items-center text-white  from-gray-800 via-gray-700 to-gray-900"
    >
      <div className="w-full  ml-4 mr-4 mt-3 sm:mt-0  sm:ml-20 sm:mr-20  ">
        <h2 className="w-full md:w-6/12 text-3xl md:text-4xl text-gray-100 tracking-tight mb-4 font-thin">
          {t("aboveBlog.title")}
        </h2>
        <h3 className="mb-10 md:mb-20 text-gray-400 text-lg md:text-lg w-full md:w-4/6">
          {t("aboveBlog.text")}
        </h3>
        <div className="flex flex-col gap-2  md:flex-row">
          <div className="md:w-8/12  w-full  ">
            {latestBlog.imageUrl && (
              <img
                src={
                  latestBlog.imageUrl.startsWith("/uploads/")
                    ? `https://zmei3-3ae010121032.herokuapp.com/${latestBlog.imageUrl}`
                    : `https://zmei3-3ae010121032.herokuapp.com/uploads/${latestBlog.imageUrl}`
                }
                alt={latestBlog.title}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            )}
          </div>
          <div className="md:w-4/12 w-full  relative">
            <h3 className="text-3xl  mb-2 text-gray-100">{latestBlog.title}</h3>
            <p className="text-gray-400">{latestBlog.textPreview}</p>
            <Link
              to={`/blogs/${latestBlog.id}`}
              className="absolute mt-6 md:mt-0 md:bottom-0 inline-block text-blue-500 rounded-md hover:text-blue-600"
            >
              Read the article
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
