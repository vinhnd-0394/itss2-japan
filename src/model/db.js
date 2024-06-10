const mongoose = require("mongoose");

// Connection URI
const uri =
  "mongodb+srv://lehaison18302:haison18032002@cluster0.8wdj28z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});
