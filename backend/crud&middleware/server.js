const express = require("express");
const app = express();

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

let counter = 0;
app.use((req, res, next) => {
  counter++;
  req.requestCount = counter;
  next();
});

app.get("/", (req, res) => {
  res.send({
    message: "Welcome!",
    requestCount: req.requestCount,
  });
});

app.get("/about", (req, res) => {
  res.send({
    message: "About Page -",
    requestCount: req.requestCount,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
