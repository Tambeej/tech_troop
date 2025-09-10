const mongoose = require("mongoose");

const solarSystemSchema = new mongoose.Schema({
  starName: { type: String, required: true },
  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
});

module.exports =mongoose.models.SolarSystem || mongoose.model("SolarSystem", solarSystemSchema);