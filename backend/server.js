// const express = require("express");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const cors = require("cors");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const app = express();
// const port = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// //////////////////////////////////////// login

// // Configurăm cheia secretă pentru JWT
// const SECRET_KEY = process.env.SECRET_KEY;

// const users = [
//   {
//     username: "admin",
//     passwordHash: process.env.ADMIN_PASSWORD_HASH, // Parola este deja hash-uită
//   },
// ];

// // Endpoint pentru primirea datelor de contact din formular///////
// app.post("/api/contact", (req, res) => {
//   const { email, subject, message } = req.body;

//   if (!email || !subject || !message) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   // Salvăm datele de contact într-un fișier JSON
//   const contactData = { email, subject, message };
//   const filePath = path.join(__dirname, "contactData.json");

//   fs.readFile(filePath, (err, data) => {
//     if (err && err.code !== "ENOENT") {
//       console.error("Error reading contact data:", err);
//       return res.status(500).json({ message: "Failed to save contact data" });
//     }

//     let contacts = [];
//     if (!err) {
//       try {
//         contacts = JSON.parse(data);
//       } catch (error) {
//         console.error("Error parsing contact data:", error);
//         return res.status(500).json({ message: "Failed to save contact data" });
//       }
//     }

//     contacts.push(contactData);

//     fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
//       if (err) {
//         console.error("Error writing contact data:", err);
//         return res.status(500).json({ message: "Failed to save contact data" });
//       }
//       res.json({ message: "Contact data received successfully" });
//     });
//   });
// });

// // Endpoint to get all contact form messages
// app.get("/api/contact", (req, res) => {
//   // Citirea datelor din fișierul contactData.json
//   fs.readFile("contactData.json", (err, data) => {
//     if (err) {
//       console.error("Error reading contactData.json:", err);
//       return res
//         .status(500)
//         .json({ message: "Failed to read contact messages" });
//     }

//     try {
//       const contactMessages = JSON.parse(data);
//       res.json(contactMessages);
//     } catch (error) {
//       console.error("Error parsing contactData.json:", error);
//       res.status(500).json({ message: "Failed to parse contact messages" });
//     }
//   });
// });

// ////////////////////////////////////

// // Ruta pentru login
// app.post("/api/admin/login", (req, res) => {
//   const { username, password } = req.body;

//   const user = users.find((user) => user.username === username);
//   if (!user) {
//     return res.status(400).json({ message: "Invalid username or password" });
//   }

//   bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Internal Server Error" });
//     }
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid username or password" });
//     }

//     // Generăm un token JWT valid pentru a autentifica utilizatorul
//     const token = jwt.sign({ username: user.username }, SECRET_KEY, {
//       expiresIn: "1h",
//     });

//     res.json({ token });
//   });
// });

// // Middleware pentru a proteja rutele care necesită autentificare
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return res.sendStatus(401); // Unauthorized
//   }

//   jwt.verify(token, SECRET_KEY, (err, user) => {
//     if (err) {
//       console.error(err);
//       return res.sendStatus(403); // Forbidden
//     }
//     req.user = user;
//     next(); // Continuăm către ruta protejată
//   });
// }

// // Exemplu de rută protejată pentru adăugarea unui blog
// app.post("/api/admin/add-blog", authenticateToken, (req, res) => {
//   // Aici poți adăuga logica pentru adăugarea blogului
//   res.json({ message: "Blog added successfully" });
// });

// ///////////////////////////////////////// login

// // Multer configuration for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// // Function to read blogs from JSON file
// function readBlogsFromFile(callback) {
//   fs.readFile("blogs.json", (err, data) => {
//     if (err) {
//       console.error("Error reading blogs.json:", err);
//       return callback(err, null);
//     }

//     try {
//       const blogs = JSON.parse(data);
//       callback(null, blogs);
//     } catch (error) {
//       console.error("Error parsing blogs.json:", error);
//       callback(error, null);
//     }
//   });
// }

// // Function to write blogs to JSON file
// function writeBlogsToFile(blogs, callback) {
//   fs.writeFile("blogs.json", JSON.stringify(blogs, null, 2), (err) => {
//     if (err) {
//       console.error("Error writing to blogs.json:", err);
//       return callback(err);
//     }
//     callback(null);
//   });
// }

// // Function to read newsletter emails from JSON file
// function readNewsletterEmailsFromFile(callback) {
//   fs.readFile("newsletterEmails.json", (err, data) => {
//     if (err) {
//       if (err.code === "ENOENT") {
//         console.error("newsletterEmails.json does not exist");
//         return callback(null, []); // Return empty array if file doesn't exist
//       }
//       console.error("Error reading newsletterEmails.json:", err);
//       return callback(err, null);
//     }

//     try {
//       const emails = JSON.parse(data);
//       callback(null, emails);
//     } catch (error) {
//       console.error("Error parsing newsletterEmails.json:", error);
//       callback(error, null);
//     }
//   });
// }

// // Function to write newsletter emails to JSON file
// function writeEmailsToFile(emails, callback) {
//   fs.writeFile(
//     "newsletterEmails.json",
//     JSON.stringify(emails, null, 2),
//     (err) => {
//       if (err) {
//         console.error("Error writing to newsletterEmails.json:", err);
//         return callback(err);
//       }
//       callback(null);
//     }
//   );
// }

// // Initialize newsletter emails array
// let newsletterEmails = [];

// // Endpoint to get all subscribed emails
// app.get("/newsletterEmails", (req, res) => {
//   readNewsletterEmailsFromFile((err, emails) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Failed to read newsletter emails" });
//     }
//     res.json({ newsletterEmails: emails });
//   });
// });

// // Route to handle POST requests to /newsletterEmails
// app.post("/newsletterEmails", (req, res) => {
//   const { email } = req.body;

//   if (!email || typeof email !== "string" || !email.includes("@")) {
//     return res.status(400).json({ message: "Invalid email address" });
//   }

//   readNewsletterEmailsFromFile((err, emails) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ message: "Failed to read newsletter emails" });
//     }

//     // Check if email already exists
//     if (emails.includes(email)) {
//       return res.status(400).json({ message: "Email already subscribed" });
//     }

//     emails.push(email);

//     writeEmailsToFile(emails, (err) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ message: "Failed to save newsletter email" });
//       }
//       res.status(201).json({ message: "Email subscribed successfully" });
//     });
//   });
// });

// // Endpoint to get all blogs
// app.get("/api/blogs", (req, res) => {
//   readBlogsFromFile((err, blogs) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to read blogs" });
//     }
//     res.json(blogs);
//   });
// });

// // Endpoint to get a specific blog by ID
// app.get("/api/blogs/:id", (req, res) => {
//   const blogId = parseInt(req.params.id);
//   readBlogsFromFile((err, blogs) => {
//     if (err) {
//       return res.status(500).json({ message: "Failed to read blogs" });
//     }

//     const blog = blogs.find((b) => b.id === blogId);

//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     res.json(blog);
//   });
// });

// app.post(
//   "/api/blogs",
//   upload.fields([{ name: "image" }, { name: "extraImage" }]),
//   (req, res) => {
//     if (!req.body.title || !req.body.text) {
//       return res.status(400).json({ message: "Title and text are required" });
//     }

//     const newBlog = {
//       id: Date.now(),
//       title: req.body.title,
//       text: req.body.text,
//       subtitle: req.body.subtitle || "",
//       additionalText: req.body.additionalText || "",
//       author: req.body.author || "",
//       date: req.body.date || "",
//       imageUrl: req.files.image
//         ? `/uploads/${req.files.image[0].filename}`
//         : null,
//       extraImageUrl: req.files.extraImage
//         ? `/uploads/${req.files.extraImage[0].filename}`
//         : null, // noul câmp pentru imaginea suplimentară
//       textPreview: req.body.textPreview || "", // adăugarea câmpului textPreview
//     };
//     readBlogsFromFile((err, blogs) => {
//       if (err) {
//         return res.status(500).json({ message: "Failed to read blogs" });
//       }

//       blogs.push(newBlog);

//       writeBlogsToFile(blogs, (err) => {
//         if (err) {
//           return res.status(500).json({ message: "Failed to save blog" });
//         }
//         res.status(201).json(newBlog);
//       });
//     });
//   }
// );

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error("Error:", err);
//   res.status(500).json({ message: "Something went wrong" });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//////////////////////////////////////// login

// Configurăm cheia secretă pentru JWT
const SECRET_KEY = process.env.SECRET_KEY;

const users = [
  {
    username: "admin",
    passwordHash: process.env.ADMIN_PASSWORD_HASH, // Parola este deja hash-uită
  },
];

// Endpoint pentru primirea datelor de contact din formular///////
app.post("/api/contact", (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Salvăm datele de contact într-un fișier JSON
  const contactData = { email, subject, message };
  const filePath = path.join(__dirname, "contactData.json");

  fs.readFile(filePath, (err, data) => {
    if (err && err.code !== "ENOENT") {
      console.error("Error reading contact data:", err);
      return res.status(500).json({ message: "Failed to save contact data" });
    }

    let contacts = [];
    if (!err) {
      try {
        contacts = JSON.parse(data);
      } catch (error) {
        console.error("Error parsing contact data:", error);
        return res.status(500).json({ message: "Failed to save contact data" });
      }
    }

    contacts.push(contactData);

    fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        console.error("Error writing contact data:", err);
        return res.status(500).json({ message: "Failed to save contact data" });
      }
      res.json({ message: "Contact data received successfully" });
    });
  });
});

// Endpoint to get all contact form messages
app.get("/api/contact", (req, res) => {
  // Citirea datelor din fișierul contactData.json
  fs.readFile("contactData.json", (err, data) => {
    if (err) {
      console.error("Error reading contactData.json:", err);
      return res
        .status(500)
        .json({ message: "Failed to read contact messages" });
    }

    try {
      const contactMessages = JSON.parse(data);
      res.json(contactMessages);
    } catch (error) {
      console.error("Error parsing contactData.json:", error);
      res.status(500).json({ message: "Failed to parse contact messages" });
    }
  });
});

////////////////////////////////////

// Ruta pentru login
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  bcrypt.compare(password, user.passwordHash, (err, isMatch) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generăm un token JWT valid pentru a autentifica utilizatorul
    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  });
});

// Middleware pentru a proteja rutele care necesită autentificare
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.error(err);
      return res.sendStatus(403); // Forbidden
    }
    req.user = user;
    next(); // Continuăm către ruta protejată
  });
}

// Exemplu de rută protejată pentru adăugarea unui blog
app.post("/api/admin/add-blog", authenticateToken, (req, res) => {
  // Aici poți adăuga logica pentru adăugarea blogului
  res.json({ message: "Blog added successfully" });
});

///////////////////////////////////////// login

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Function to read blogs from JSON file
function readBlogsFromFile(callback) {
  fs.readFile("blogs.json", (err, data) => {
    if (err) {
      console.error("Error reading blogs.json:", err);
      return callback(err, null);
    }

    try {
      const blogs = JSON.parse(data);
      callback(null, blogs);
    } catch (error) {
      console.error("Error parsing blogs.json:", error);
      callback(error, null);
    }
  });
}

// Function to write blogs to JSON file
function writeBlogsToFile(blogs, callback) {
  fs.writeFile("blogs.json", JSON.stringify(blogs, null, 2), (err) => {
    if (err) {
      console.error("Error writing to blogs.json:", err);
      return callback(err);
    }
    callback(null);
  });
}

// Function to read newsletter emails from JSON file
function readNewsletterEmailsFromFile(callback) {
  fs.readFile("newsletterEmails.json", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("newsletterEmails.json does not exist");
        return callback(null, []); // Return empty array if file doesn't exist
      }
      console.error("Error reading newsletterEmails.json:", err);
      return callback(err, null);
    }

    try {
      const emails = JSON.parse(data);
      callback(null, emails);
    } catch (error) {
      console.error("Error parsing newsletterEmails.json:", error);
      callback(error, null);
    }
  });
}

// Function to write newsletter emails to JSON file
function writeEmailsToFile(emails, callback) {
  fs.writeFile(
    "newsletterEmails.json",
    JSON.stringify(emails, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing to newsletterEmails.json:", err);
        return callback(err);
      }
      callback(null);
    }
  );
}

// Initialize newsletter emails array
let newsletterEmails = [];

// Endpoint to get all subscribed emails
app.get("/newsletterEmails", (req, res) => {
  readNewsletterEmailsFromFile((err, emails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Failed to read newsletter emails" });
    }
    res.json({ newsletterEmails: emails });
  });
});

// Route to handle POST requests to /newsletterEmails
app.post("/newsletterEmails", (req, res) => {
  const { email } = req.body;

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  readNewsletterEmailsFromFile((err, emails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Failed to read newsletter emails" });
    }

    // Check if email already exists
    if (emails.includes(email)) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    emails.push(email);

    writeEmailsToFile(emails, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to save newsletter email" });
      }
      res.status(201).json({ message: "Email subscribed successfully" });
    });
  });
});

// Endpoint to get all blogs
app.get("/api/blogs", (req, res) => {
  readBlogsFromFile((err, blogs) => {
    if (err) {
      return res.status(500).json({ message: "Failed to read blogs" });
    }
    res.json(blogs);
  });
});

// Endpoint to get a specific blog by ID
app.get("/api/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  readBlogsFromFile((err, blogs) => {
    if (err) {
      return res.status(500).json({ message: "Failed to read blogs" });
    }

    const blog = blogs.find((b) => b.id === blogId);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  });
});

app.post(
  "/api/blogs",
  upload.fields([{ name: "image" }, { name: "extraImage" }]),
  (req, res) => {
    if (!req.body.title || !req.body.text) {
      return res.status(400).json({ message: "Title and text are required" });
    }

    const newBlog = {
      id: Date.now(),
      title: req.body.title,
      text: req.body.text,
      subtitle: req.body.subtitle || "",
      additionalText: req.body.additionalText || "",
      author: req.body.author || "",
      date: req.body.date || "",
      imageUrl: req.files.image
        ? `/uploads/${req.files.image[0].filename}`
        : null,
      extraImageUrl: req.files.extraImage
        ? `/uploads/${req.files.extraImage[0].filename}`
        : null, // noul câmp pentru imaginea suplimentară
      textPreview: req.body.textPreview || "", // adăugarea câmpului textPreview
    };
    readBlogsFromFile((err, blogs) => {
      if (err) {
        return res.status(500).json({ message: "Failed to read blogs" });
      }

      blogs.push(newBlog);

      writeBlogsToFile(blogs, (err) => {
        if (err) {
          return res.status(500).json({ message: "Failed to save blog" });
        }
        res.status(201).json(newBlog);
      });
    });
  }
);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ message: "Something went wrong" });
});

// Endpoint pentru a obține locația IP
app.get("/api/ip-location", async (req, res) => {
  try {
    const response = await axios.get(`https://freeipapi.com/api/json`);
    console.log("IP Location Data:", response.data); // Log IP location data in console
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching IP location data:", error);
    res.status(500).json({ message: "Failed to fetch IP location data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
