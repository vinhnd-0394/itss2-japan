const express = require("express");
const mongoose = require("mongoose");
// const db = require('./db'); // Import module db.js

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Toeic application." });
});

// Chờ kết nối thành công với cơ sở dữ liệu MongoDB trước khi khởi động máy chủ
mongoose.connection.once("open", () => {
  app.listen(5000, () => {
    console.log(`
      ################################################
      🚀 Server listening on port: 5000 🚀
      ################################################
    `);
  });
});

// Xử lý lỗi kết nối MongoDB
mongoose.connection.on("error", (err) => {
  console.error("Lỗi kết nối MongoDB:", err);
});
