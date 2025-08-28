// const express = require("express");
// const app = express();

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

// app.use(express.json());

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" }
// ];

// function validateId(req, res, next) {
//   const id = req.params.id;
//   if (isNaN(id)) {
//     const err = new Error("Invalid ID format. Must be a number.");
//     err.status = 400;
//     return next(err);
//   }
//   next();
// }

// function checkResourceExists(req, res, next) {
//   const id = parseInt(req.params.id, 10);
//   const user = users.find((u) => u.id === id);
//   if (!user) {
//     const err = new Error("User not found.");
//     err.status = 404;
//     return next(err);
//   }
//   req.user = user;
//   next();
// }

// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(err.status || 500).json({
//     error: err.message || "Internal Server Error"
//   });
// });

// app.get("/users", (req, res) => {
//   res.json(users);
// });

// app.get("/users/:id", validateId, checkResourceExists, (req, res) => {
//   res.json(req.user);
// });

// app.post("/users", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     return res.status(400).json({ error: "Name is required" });
//   }
//   const newUser = {
//     id: users.length + 1,
//     name
//   };
//   users.push(newUser);
//   res.status(201).json(newUser);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const { body, validationResult } = require("express-validator");
const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const app = express();
app.use(express.json());

let posts = [];
let comments = [];
let postIdCounter = 1;
let commentIdCounter = 1;

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const postSchema = {
  type: "object",
  required: ["title", "content", "tags"],
  properties: {
    title: { type: "string", minLength: 5, maxLength: 100 },
    content: { type: "string", minLength: 10, maxLength: 1000 },
    category: { type: "string", minLength: 3, maxLength: 50 },
    tags: {
      type: "array",
      items: { type: "string" },
      minItems: 1,
    },
  },
  additionalProperties: false,
};
const validatePost = ajv.compile(postSchema);

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
    );
  });
  next();
});

const rateLimitMap = new Map();
app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const window = 60 * 1000;
  const maxRequests = 10;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, []);
  }
  const timestamps = rateLimitMap.get(ip);

  while (timestamps.length && now - timestamps[0] > window) {
    timestamps.shift();
  }

  if (timestamps.length >= maxRequests) {
    return res.status(429).json({ error: "Too many requests" });
  }

  timestamps.push(now);
  next();
});

app.use((req, res, next) => {
  if (["POST", "PUT"].includes(req.method)) {
    if (req.headers["content-type"] !== "application/json") {
      return res
        .status(415)
        .json({ error: "Content-Type must be application/json" });
    }
  }
  next();
});

app.use((req, res, next) => {
  const oldJson = res.json;
  res.json = function (data) {
    return oldJson.call(this, { success: true, data });
  };
  next();
});

app.post("/posts", (req, res, next) => {
  const valid = validatePost(req.body);
  if (!valid) {
    return res.status(400).json({
      success: false,
      error: ajv.errorsText(validatePost.errors),
    });
  }
  const newPost = { id: postIdCounter++, ...req.body };
  posts.push(newPost);
  res.status(201).json(newPost);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post(
  "/posts/:postId/comments",
  [
    body("content")
      .isLength({ min: 5, max: 500 })
      .withMessage("Content 5-500 chars"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const postId = parseInt(req.params.postId, 10);
    const post = posts.find((p) => p.id === postId);
    if (!post) {
      return res.status(404).json({ success: false, error: "Post not found" });
    }

    const newComment = {
      id: commentIdCounter++,
      postId,
      content: req.body.content,
      email: req.body.email,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  }
);

app.get("/posts/:postId/comments", (req, res) => {
  const postId = parseInt(req.params.postId, 10);
  if (isNaN(postId)) {
    return res.status(400).json({ success: false, error: "Invalid postId" });
  }
  const postComments = comments.filter((c) => c.postId === postId);
  res.json(postComments);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
