const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

// POST /api/person - create new person
router.post("/person", async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;

    if (!firstName || !lastName || !age) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const newPerson = new Person({ firstName, lastName, age });
    await newPerson.save();

    res.status(201).json({ success: true, data: newPerson });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/people - get all people
router.get("/people", async (req, res) => {
  try {
    const people = await Person.find();
    res.json({ success: true, data: people });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/person/:id - update person's age
router.put("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { age: 80 },
      { new: true }
    );
    if (!updatedPerson) {
      return res
        .status(404)
        .json({ success: false, message: "Person not found" });
    }
    res.json({ success: true, person: updatedPerson });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
