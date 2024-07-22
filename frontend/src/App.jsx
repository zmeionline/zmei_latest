// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import TermsAndConditions from "./Components/TermsAndConditions";
// import ReadMore from "./Components/ReadMore";
// import ContactForm from "./Components/ContactForm";
// import Expertise from "./Components/Expertise";
// import Careers from "./Components/Careers";
// import BlogForm from "./Components/Blog/BlogForm";
// import BlogList from "./Components/Blog/BlogList";
// import BlogDetail from "./Components/Blog/BlogDetail";
// import GetToKnowUs from "./Components/GetToKnowUs";
// import AdminLogin from "./Components/AdminLogin";
// import { Navigate } from "react-router-dom";

// const PrivateRoute = ({ element }) => {
//   const adminToken = localStorage.getItem("adminToken");
//   return adminToken ? element : <Navigate to="/admin/login" />;
// };

// function App() {
//   return (
//     <BrowserRouter basename={import.meta.env.BASE_URL}>
//       <Routes>
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route
//           path="/admin/add-blog"
//           element={<PrivateRoute element={<BlogForm />} />}
//         />

//         <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
//         <Route path="/" element={<Homepage />} />
//         <Route path="/read-more" element={<ReadMore />} />
//         <Route path="/contactUs" element={<ContactForm />} />
//         <Route path="/gettoknowus" element={<GetToKnowUs />} />
//         <Route path="/expertise" element={<Expertise />} />
//         <Route path="/careers" element={<Careers />} />
//         <Route path="/blogs" element={<BlogList />} />
//         <Route path="/blogs/:id" element={<BlogDetail />} />
//         <Route path="/adminlogin" element={<AdminLogin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Components/Homepage";
import TermsAndConditions from "./Components/TermsAndConditions";
import ReadMore from "./Components/ReadMore";
import ContactForm from "./Components/ContactForm";
import Expertise from "./Components/Expertise";
import Careers from "./Components/Careers";
import BlogForm from "./Components/Blog/BlogForm";
import BlogList from "./Components/Blog/BlogList";
import BlogDetail from "./Components/Blog/BlogDetail";
import GetToKnowUs from "./Components/GetToKnowUs";
import AdminLogin from "./Components/AdminLogin";
import { useEffect } from "react";

const PrivateRoute = ({ element }) => {
  const adminToken = localStorage.getItem("adminToken");
  return adminToken ? element : <Navigate to="/admin/login" />;
};

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.iubenda.com/cs/iubenda_cs.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* Rute publice */}
        <Route path="/" element={<Homepage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/contactUs" element={<ContactForm />} />
        <Route path="/gettoknowus" element={<GetToKnowUs />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />

        {/* Ruta pentru login */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Ruta protejată pentru adăugarea de bloguri */}
        <Route
          path="/admin/add-blog"
          element={<PrivateRoute element={<BlogForm />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
