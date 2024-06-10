const mongoose = require('mongoose');

// Định nghĩa schema cho mỗi mức độ trong roadmap
const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tests: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  }]
});

// Định nghĩa schema cho roadmap
const roadmapSchema = new mongoose.Schema({
  levels: [levelSchema],
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Tạo model Roadmap
const Roadmap = mongoose.model('Roadmap', roadmapSchema);

module.exports = Roadmap;
