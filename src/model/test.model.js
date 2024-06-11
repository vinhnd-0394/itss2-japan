const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
  ],
});

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    sections: [sectionSchema],
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
