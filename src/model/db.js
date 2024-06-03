const mongoose = require('mongoose');

// Địa chỉ kết nối MongoDB
const dbURI = 'mongodb://localhost:27017/toiec-test';

// Kết nối với cơ sở dữ liệu
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Kết nối thành công đến MongoDB'))
.catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Đảm bảo kết nối không bị ngắt khi ứng dụng chạy trong môi trường sản xuất
mongoose.connection.on('disconnected', () => {
  console.log('Mất kết nối đến MongoDB. Thử lại kết nối...');
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

// Bắt sự kiện khi kết nối lỗi
mongoose.connection.on('error', err => {
  console.error('Lỗi kết nối MongoDB:', err);
});
