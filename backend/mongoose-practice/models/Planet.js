const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  system: { type: mongoose.Schema.Types.ObjectId, ref: "SolarSystem" },
  visitors: [{ type: mongoose.Schema.Types.ObjectId, ref: "Visitor" }],
});

module.exports =
  mongoose.models.Planet || mongoose.model("Planet", planetSchema);
