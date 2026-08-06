require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();

const showRoutes = require("./routes/showRoutes.js");


app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Breaking Bad API is up and running!' });
});

app.use('/' , showRoutes);

app.listen(PORT, () => {
  console.log(`Server is cooking on http://localhost:${PORT}`);
});