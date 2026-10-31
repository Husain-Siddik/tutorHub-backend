
require("dotenv").config();

const app = require("./app");
const prisma = require("./config/db");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        // Database connection
        await prisma.$connect();

        console.log("PostgreSQL connected successfully!");
        console.log("Prisma Client connected successfully!");

        // Start server
        app.listen(PORT, () => {
            console.log(`TutorHub server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();

