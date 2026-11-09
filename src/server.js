const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Halo! Toko Retail sudah menyala!');
});

app.listen(3000, () => {
  console.log('✅ Server jalan di http://localhost:3000');
});