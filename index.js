const express = require('express');
const app = express();
const port = 3000;

const images = [
  "https://tinyurl.com/282gbkfx",
  "https://tinyurl.com/22p7xxdp",
  "https://tinyurl.com/2yf73b6t",
  // ... Add more URLs as needed
];

app.get('/random-image', (req, res) => {
  const randomIndex = Math.floor(Math.random() * images.length);
  const imageUrl = images[randomIndex];
  res.json({ imageUrl });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});