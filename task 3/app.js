require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const episodeRoutes = require("./routes/episodeRoutes");
const seasonRoutes = require("./routes/seasonRoutes");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/episodes" , episodeRoutes);
app.use("/api/seasons" , seasonRoutes);

PORT = process.env.PORT || 5000;
app.listen(PORT , () => {
    console.log(`Server running on PORT ${PORT}`);
});