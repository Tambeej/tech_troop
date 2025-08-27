const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${req.method} ${req.url}`);
//   next();
// });

// let counter = 0;
// app.use((req, res, next) => {
//   counter++;
//   req.requestCount = counter;
//   next();
// });

// app.get("/", (req, res) => {
//   res.send({
//     message: "Welcome!",
//     requestCount: req.requestCount,
//   });
// });

// app.get("/about", (req, res) => {
//   res.send({
//     message: "About Page -",
//     requestCount: req.requestCount,
//   });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

app.use(express.json());

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" }
];


function validateId(req, res, next) {
  const id = req.params.id;
  if (isNaN(id)) {
    const err = new Error("Invalid ID format. Must be a number.");
    err.status = 400;
    return next(err);
  }
  next();
}

function checkResourceExists(req, res, next) {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  if (!user) {
    const err = new Error("User not found.");
    err.status = 404;
    return next(err);
  }
  req.user = user;
  next();
}

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error"
  });
});


app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
  res.json(req.user);
});

app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});