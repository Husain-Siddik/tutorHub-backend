
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// check 
app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "TutorHub API is running",
    });
});

module.exports = app;
