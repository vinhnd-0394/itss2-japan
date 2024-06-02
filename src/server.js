const express = require('express');

const app = express();

// var corsOptions = {
//   origin: "*",
// };

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Toeic application.' });
});

app.listen(5000, () => {
  console.log(`
    ################################################
    🚀 Server listening on port: 5000 🚀
    ################################################
  `);
});
