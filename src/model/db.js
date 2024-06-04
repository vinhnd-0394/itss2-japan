const mongoose = require("mongoose");

// Địa chỉ kết nối MongoDB
// const dbURI = 'mongodb://localhost:27017/toiec-test';
const dbURI =
  "mongodb+srv://lehaison18302:haison18032002@cluster0.8wdj28z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Kết nối với cơ sở dữ liệu
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Kết nối thành công đến MongoDB"))
  .catch((err) => console.error("Lỗi kết nối MongoDB:", err));

// Đảm bảo kết nối không bị ngắt khi ứng dụng chạy trong môi trường sản xuất
mongoose.connection.on("disconnected", () => {
  console.log("Mất kết nối đến MongoDB. Thử lại kết nối...");
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Bắt sự kiện khi kết nối lỗi
mongoose.connection.on("error", (err) => {
  console.error("Lỗi kết nối MongoDB:", err);
});
