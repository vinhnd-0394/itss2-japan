const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    ltype: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "Tests",
  }
);

const Test = mongoose.model("Tests", testSchema);

module.exports = Test;
