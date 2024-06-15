const express = require("express");
const router = express.Router();
const Roadmap = require("../model/roadmap.model");
router.get("/", async function (req, res) {
  try {
    const roadMaps = await Roadmap.find({});
    res.status(200).json(roadMaps);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving road maps", err });
  }
});
module.exports = router;
