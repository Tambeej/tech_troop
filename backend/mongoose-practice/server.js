// Server setup
const express = require("express");
const app = express();

const Person = require("./models/Person");
app.use(express.json()); 
// const api = require("./server/routes/api");
const personRouter = require("./routes/personRoutes");

// Mongoose setup
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://bejella_db_user:Rm9S!VeT*8$fPrR@cluster0.7qwzo1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/peopleDB ",
    { useNewUrlParser: true }
  ).catch((err) => console.log(err));

app.use("/api", personRouter);

const port = 4200;
app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
