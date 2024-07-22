import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function LatestBlog() {
  useEffect(() => {
    AOS.init({
      duration: 500, // durata animațiilor în milisecunde
    });
  }, []);

  const [latestBlog, setLatestBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLatestBlog = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
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
      className="relative md:mt-6 flex items-center text-white from-gray-800 via-gray-700 to-gray-900"
    >
      <div className="w-full pl-4 pr-4 ">
        <h2 className="text-5xl text-gray-100 tracking-tight mb-8">
          QA at its finest
        </h2>
        <div className="flex flex-col  md:flex-row">
          <div className="md:w-8/12 w-full mb-8 md:mb-0 ">
            {latestBlog.imageUrl && (
              <img
                src={`http://localhost:5000${latestBlog.imageUrl}`}
                alt={latestBlog.title}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            )}
          </div>
          <div className="md:w-4/12 w-full md:ml-4 relative">
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
