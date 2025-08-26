const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "..", "node_modules")));

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
