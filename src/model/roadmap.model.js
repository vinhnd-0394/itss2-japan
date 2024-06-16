const mongoose = require("mongoose");

const roadmapSchema = new mongoose.Schema(
  {
    level: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    }
  },
  {
    collection: "Roadmap",
  }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);

module.exports = Roadmap;
