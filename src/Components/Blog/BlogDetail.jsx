// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import Footer from "../Footer";

// function BlogDetail() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
//         if (response.ok) {
//           const data = await response.json();
//           setBlog(data);
//         } else {
//           setError("Failed to fetch blog");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         setError("An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]);

//   // Function to replace the special sequence with <br>
//   const formatTextWithNewline = (text) => {
//     const newlineSymbol = "[[newline]]"; // Use the sequence '[[newline]]'
//     return text.split(newlineSymbol).join("<br>");
//   };

//   if (loading) {
//     return <p className="text-center mt-8">Loading...</p>;
//   }

//   if (error) {
//     return <p className="text-center mt-8 text-red-500">{error}</p>;
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto mt-8 text-slate-300 mb-20 p-6 md:p-0">
//         {blog && (
//           <div>
//             {blog.imageUrl && (
//               <img
//                 src={`http://localhost:5000${blog.imageUrl}`}
//                 alt={blog.title}
//                 className="w-full h-90 object-cover object-center mb-6"
//               />
//             )}

//             <h2 className="text-3xl border-l-4 text-slate-300 border-l-blue-500 font-semibold mb-4 pl-2">
//               {blog.title}
//             </h2>
//             {blog.author && <p className="mt-2">Author: {blog.author}</p>}
//             {blog.date && (
//               <p className="pb-2">
//                 Published on: {new Date(blog.date).toLocaleDateString()}
//               </p>
//             )}
//             {/* Use dangerouslySetInnerHTML for text */}
//             <p
//               className="text-gray-600"
//               dangerouslySetInnerHTML={{
//                 __html: formatTextWithNewline(blog.text),
//               }}
//             ></p>
//             {blog.subtitle && (
//               <h3 className="text-xl font-semibold mt-4 mb-6">
//                 {blog.subtitle}
//               </h3>
//             )}

//             {blog.extraImageUrl && (
//               <div className="h-full">
//                 <img
//                   src={`http://localhost:5000${blog.extraImageUrl}`}
//                   alt={`${blog.title} extra image`}
//                   className="w-full h-90 object-cover object-center mb-6"
//                 />
//               </div>
//             )}
//             {blog.additionalText && (
//               <p
//                 className="text-gray-600"
//                 dangerouslySetInnerHTML={{
//                   __html: formatTextWithNewline(blog.additionalText),
//                 }}
//               ></p>
//             )}
//           </div>
//         )}
//         <div className="text-end mt-20">
//           <button
//             onClick={() => navigate("/blogs")}
//             className=" text-white rounded hover:text-blue-700"
//           >
//             Back to Blogs
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default BlogDetail;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBlog(data);
        } else {
          setError("Failed to fetch blog");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const formatTextWithNewline = (text) => {
    const newlineSymbol = "[[newline]]";
    return text.split(newlineSymbol).join("<br>");
  };

  if (loading) {
    return <p className="text-center mt-8">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-8 text-red-500">{error}</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-8 text-slate-300 mb-20 p-6 md:p-0">
        {blog && (
          <div>
            {blog.imageUrl && (
              <img
                src={`http://localhost:5000${blog.imageUrl}`}
                alt={blog.title}
                className="w-full h-90 object-cover object-center mb-6"
              />
            )}

            <h2 className="text-3xl border-l-4 text-slate-300 border-l-blue-500 font-semibold mb-4 pl-2">
              {blog.title}
            </h2>
            {blog.author && <p className="mt-2">Author: {blog.author}</p>}
            {blog.date && (
              <p className="pb-2">
                Published on: {new Date(blog.date).toLocaleDateString()}
              </p>
            )}
            <p
              className="text-gray-600"
              dangerouslySetInnerHTML={{
                __html: formatTextWithNewline(blog.text),
              }}
            ></p>
            {blog.subtitle && (
              <h3 className="text-xl font-semibold mt-4 mb-6">
                {blog.subtitle}
              </h3>
            )}

            {blog.extraImageUrl && (
              <div className="h-full">
                <img
                  src={`http://localhost:5000${blog.extraImageUrl}`}
                  alt={`${blog.title} extra image`}
                  className="w-full h-90 object-cover object-center mb-6"
                />
              </div>
            )}
            {blog.additionalText && (
              <p
                className="text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: formatTextWithNewline(blog.additionalText),
                }}
              ></p>
            )}
          </div>
        )}
        <div className="text-end mt-20">
          <button
            onClick={() => navigate("/blogs")}
            className=" text-white rounded hover:text-blue-700"
          >
            Back to Blogs
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;
