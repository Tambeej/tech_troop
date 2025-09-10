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
    "mongodb+srv://bejella_db_user:Rm9S!VeT*8$fPrR@cluster0.7qwzo1r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/solarSystemDB ",
    { useNewUrlParser: true }
  )
  .catch((err) => console.log(err));

app.use("/api", personRouter);

const port = 4200;
app.listen(port, function () {
  console.log(`Running on port ${port}`);

  // seed();
});

const Visitor = require("./models/Visitor");
const Planet = require("./models/Planet");
const SolarSystem = require("./models/SolarSystem");

// Create a solar system
async function seed() {
  await Visitor.deleteMany({});
  await Planet.deleteMany({});
  await SolarSystem.deleteMany({});

  const system = new SolarSystem({ starName: "Sun" });
  await system.save();

  const earth = new Planet({ name: "Earth", system: system._id });
  const mars = new Planet({ name: "Mars", system: system._id });
  await earth.save();
  await mars.save();

  // Add planets to system
  system.planets.push(earth._id, mars._id);
  await system.save();

  // Create visitor
  const alice = new Visitor({
    name: "Alice",
    homePlanet: earth._id,
    visitedPlanets: [mars._id],
  });
  await alice.save();

  // Link visitor to planets
  earth.visitors.push(alice._id);
  mars.visitors.push(alice._id);
  await earth.save();
  await mars.save();

  console.log("Seed done");
}
