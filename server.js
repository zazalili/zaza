const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Streaming Site!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});