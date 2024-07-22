// import React, { useState } from "react";

// function BlogForm() {
//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");
//   const [text, setText] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [additionalText, setAdditionalText] = useState("");
//   const [image, setImage] = useState(null);
//   const [extraImage, setExtraImage] = useState(null); // stare pentru imaginea extra
//   const [message, setMessage] = useState("");
//   const [textPreview, setTextPreview] = useState(""); // stare pentru text preview

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     if (title) formData.append("title", title);
//     if (author) formData.append("author", author);
//     if (date) formData.append("date", date);
//     if (text) formData.append("text", text);
//     if (subtitle) formData.append("subtitle", subtitle);
//     if (additionalText) formData.append("additionalText", additionalText);
//     if (image) formData.append("image", image);
//     if (extraImage) formData.append("extraImage", extraImage); // adăugarea imaginii extra la datele trimise
//     if (textPreview) formData.append("textPreview", textPreview); // adăugarea text preview la datele trimise

//     try {
//       const response = await fetch("http://localhost:5000/api/blogs", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         setMessage("Blog added successfully!");
//         // Resetarea stării după trimiterea cu succes
//         setTitle("");
//         setAuthor("");
//         setDate("");
//         setText("");
//         setSubtitle("");
//         setAdditionalText("");
//         setImage(null);
//         setExtraImage(null); // resetarea stării pentru imaginea extra
//         setTextPreview(""); // resetarea stării pentru text preview
//       } else {
//         const errorData = await response.json();
//         setMessage(`Failed to add blog: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred");
//     }
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.files[0]);
//   };

//   const handleExtraImageChange = (event) => {
//     setExtraImage(event.target.files[0]);
//   };

//   const handleViewEmails = () => {
//     window.open("http://localhost:5000/newsletterEmails", "_blank");
//   };

//   const handleViewContactMessages = () => {
//     window.open("http://localhost:5000/api/contact", "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gray-800 flex justify-center items-center">
//       <div className="max-w-4xl w-full bg-white p-6 rounded-md shadow-md">
//         <h2 className="text-3xl font-semibold text-center text-blue-950 mb-6">
//           Add New Blog bossule
//         </h2>

//         <label
//           htmlFor="image-upload"
//           className="block text-sm font-medium text-gray-700"
//         >
//           Upload Main Image
//         </label>
//         <input
//           id="image-upload"
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//         />

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="Author"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="text"
//             placeholder="Date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <textarea
//             placeholder="Text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-40 resize-none"
//           />
//           <input
//             type="text"
//             placeholder="Subtitle"
//             value={subtitle}
//             onChange={(e) => setSubtitle(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />

//           <label
//             htmlFor="extra-image-upload"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Upload Extra Image
//           </label>
//           <input
//             id="extra-image-upload"
//             type="file"
//             accept="image/*"
//             onChange={handleExtraImageChange}
//             className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />

//           <textarea
//             placeholder="Additional Text"
//             value={additionalText}
//             onChange={(e) => setAdditionalText(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-24 resize-none"
//           />
//           <textarea
//             placeholder="Text Preview" // noul câmp pentru text preview
//             value={textPreview}
//             onChange={(e) => setTextPreview(e.target.value)}
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-24 resize-none"
//           />

//           <div className="flex space-x-4">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
//               onClick={handleViewEmails}
//             >
//               View Newsletter Emails
//             </button>
//             <button
//               type="button"
//               className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
//               onClick={handleViewContactMessages}
//             >
//               View Contact Messages
//             </button>
//           </div>
//         </form>
//         {message && <p className="text-sm text-gray-600 mt-4">{message}</p>}
//       </div>
//     </div>
//   );
// }

// export default BlogForm;

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [additionalText, setAdditionalText] = useState("");
  const [image, setImage] = useState(null);
  const [extraImage, setExtraImage] = useState(null);
  const [message, setMessage] = useState("");
  const [textPreview, setTextPreview] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    if (title) formData.append("title", title);
    if (author) formData.append("author", author);
    if (date) formData.append("date", date);
    if (text) formData.append("text", text);
    if (subtitle) formData.append("subtitle", subtitle);
    if (additionalText) formData.append("additionalText", additionalText);
    if (image) formData.append("image", image);
    if (extraImage) formData.append("extraImage", extraImage);
    if (textPreview) formData.append("textPreview", textPreview);

    try {
      const response = await fetch("http://localhost:5000/api/blogs", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setMessage("Blog added successfully!");
        setTitle("");
        setAuthor("");
        setDate("");
        setText("");
        setSubtitle("");
        setAdditionalText("");
        setImage(null);
        setExtraImage(null);
        setTextPreview("");
      } else {
        const errorData = await response.json();
        setMessage(`Failed to add blog: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred");
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleExtraImageChange = (event) => {
    setExtraImage(event.target.files[0]);
  };

  const handleViewEmails = () => {
    window.open("http://localhost:5000/newsletterEmails", "_blank");
  };

  const handleViewContactMessages = () => {
    window.open("http://localhost:5000/api/contact", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="max-w-4xl w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-center text-blue-950 mb-6">
          Add New Blog
        </h2>

        <label
          htmlFor="image-upload"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Main Image
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <ReactQuill
            value={text}
            onChange={setText}
            className="bg-white"
            placeholder="Text"
            theme="snow"
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <label
            htmlFor="extra-image-upload"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Extra Image
          </label>
          <input
            id="extra-image-upload"
            type="file"
            accept="image/*"
            onChange={handleExtraImageChange}
            className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />

          <ReactQuill
            value={additionalText}
            onChange={setAdditionalText}
            className="bg-white"
            placeholder="Additional Text"
            theme="snow"
          />
          <ReactQuill
            value={textPreview}
            onChange={setTextPreview}
            className="bg-white"
            placeholder="Text Preview"
            theme="snow"
          />

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
              onClick={handleViewEmails}
            >
              View Newsletter Emails
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              onClick={handleViewContactMessages}
            >
              View Contact Messages
            </button>
          </div>
        </form>
        {message && <p className="text-sm text-gray-600 mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default BlogForm;
