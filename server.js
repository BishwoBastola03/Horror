require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Extract image URLs from the .env file
const images = JSON.parse(process.env.IMAGE_URLS);

// Endpoint to fetch a random image URL
app.get('/api/images', async (req, res) => {
  try {
    // Choose a random image URL from the array
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex].url;

    // Return the image URL
    res.json({ imageUrl });
  } catch (error) {
    console.error("Error while fetching image URL:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
