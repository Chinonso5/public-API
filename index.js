const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
    res.json({
        email: process.env.EMAIL || "chinonsoizunobi@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: process.env.GITHUB_URL || "https://github.com/Chinonso5/public-API"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
