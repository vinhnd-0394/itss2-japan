const express = require("express");
const router = express.Router();
const User = require("../model/user.model");
router.get("/", async function (req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
  res.send("Get all users");
});
router.get("/:userId", async function (req, res) {
  try {
    const users = await User.find({ email: req.params.email });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error });
  }
  res.send("Get all users");
});
//
module.exports = router;
