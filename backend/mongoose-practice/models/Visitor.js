const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  homePlanet: { type: mongoose.Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
});

module.exports = mongoose.models.Visitor || mongoose.model("Visitor", visitorSchema);
