const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
// app.use(express.static(path.join(__dirname, "..", "node_modules")));

const store = [
  { name: "table", inventory: 3, price: 800 },
  { name: "chair", inventory: 16, price: 120 },
  { name: "couch", inventory: 1, price: 1200 },
  { name: "picture frame", inventory: 31, price: 70 },
];

app.get("/", function (request, response) {
  response.send("Server is up and running smoothly");
});

app.get("/priceCheck/:name", function (request, response) {
  let itemName = request.params.name;
  let item = store.find((item) => item.name === itemName);
  let itemPrice = item ? item.price : null;
  response.send({ price: itemPrice });
});

app.get("/buy/:name", function (request, response) {
  let itemName = request.params.name;
  let item = store.find((item) => item.name === itemName);
  if (item && item.inventory > 0) {
    item.inventory -= 1;
    response.send(item);
  } else if (item) {
    response.send({ message: "Out of stock", item });
  } else {
    response.status(404).send({ message: "Item not found" });
  }
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
