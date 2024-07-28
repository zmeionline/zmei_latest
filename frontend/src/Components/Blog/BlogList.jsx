// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "../../App.css";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// function BlogList() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch(
//           "https://zmei-final-v2-zdqj.onrender.com/api/blogs"
//         );
//         if (response.ok) {
//           const data = await response.json();
//           // Reverse the blogs array to display the most recent first
//           console.log(data); // Adaugă acest console.log pentru a vedea ce conține data
//           setBlogs(data.reverse());
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

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-8">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-8 text-red-500">{error}</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen polka-background py-12">
//         <div className="max-w-4xl mx-auto ">
//           <h2 className="text-3xl  text-gray-200 mb-6">News & Articles</h2>
//           {blogs.map((blog) => (
//             <div key={blog.id} className="mb-8">
//               <div className="flex flex-col md:flex-row ">
//                 {blog.imageUrl && (
//                   <img
//                     src={
//                       blog.imageUrl.startsWith("/uploads/")
//                         ? `https://zmei-final-v2-zdqj.onrender.com${blog.imageUrl}`
//                         : `https://zmei-final-v2-zdqj.onrender.com/uploads/${blog.imageUrl}`
//                     }
//                     alt={blog.title}
//                     className="w-full md:w-1/3 h-40 object-cover rounded-sm mb-4 md:mb-0 md:mr-4"
//                   />
//                 )}
//                 <div className="flex-1">
//                   <h3 className="text-2xl font-semibold text-gray-200 mb-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-400 mb-4">
//                     {blog.text.slice(0, 150)}...
//                   </p>
//                   <Link
//                     to={`/blogs/${blog.id}`}
//                     className="inline-block text-blue-500  hover:text-blue-700 focus:outline-none focus:bg-blue-600"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//               <hr className="border-t border-gray-700 mt-7" />
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default BlogList;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          "https://zmei-final-v2-zdqj.onrender.com/api/blogs"
        );
        if (response.ok) {
          const data = await response.json();
          setBlogs(data.reverse());
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

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen polka-background py-12  pl-4 pr-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-gray-200 mb-6">News & Articles</h2>
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-8">
              <div className="flex flex-col md:flex-row">
                {blog.imageUrl && (
                  <img
                    src={
                      blog.imageUrl.startsWith("/uploads/")
                        ? `https://zmei-final-v2-zdqj.onrender.com${blog.imageUrl}`
                        : `https://zmei-final-v2-zdqj.onrender.com/uploads/${blog.imageUrl}`
                    }
                    alt={blog.title}
                    className="w-full md:w-1/3 h-40 object-cover rounded-sm mb-4 md:mb-0 md:mr-4"
                  />
                )}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-200 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {blog.text.slice(0, 150)}...
                    </p>
                  </div>
                  <div>
                    <Link
                      to={`/blogs/${blog.id}`}
                      className="inline-block text-blue-500 hover:text-blue-700 focus:outline-none focus:bg-blue-600"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="border-t border-gray-700 mt-7" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogList;
