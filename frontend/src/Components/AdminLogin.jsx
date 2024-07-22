// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function AdminLogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const credentials = { username, password };

//     try {
//       // Simulăm o cerere de login către server (de exemplu, pentru demo)
//       // Aici ar trebui să faci cererea reală către serverul tău
//       if (username === "admin" && password === "password") {
//         // Dacă autentificarea este reușită, nu facem nimic aici
//         // Ci doar redirecționăm utilizatorul folosind Link
//       } else {
//         setError("Username or password is incorrect");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setError("An error occurred");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
//         <h2 className="text-3xl font-semibold text-center mb-6">Admin Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//           />
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Login
//           </button>
//         </form>
//         {/* Link pentru a naviga către pagina de dashboard */}
//         <div className="mt-4 text-center">
//           <Link to="/admin/dashboard" className="text-blue-500 hover:underline">
//             Go to Admin Dashboard
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const credentials = { username, password };

    try {
      const response = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("adminToken", data.token); // Salvează token-ul în localStorage
        navigate("/admin/add-blog"); // Redirecționează către dashboard
      } else {
        setError("Username or password is incorrect");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
