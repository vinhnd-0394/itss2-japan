const express = require("express");
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://lehaison18302:haison18032002@cluster0.8wdj28z.mongodb.net/toiec-test?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Toeic application." });
});

app.listen(5000, () => {
  console.log(`
      ################################################
      🚀 Server listening on port: 5000 🚀
      ################################################
    `);
});
