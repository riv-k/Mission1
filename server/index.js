import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import apiKeyCheck from "./middleware/apiKeyCheck.js";
import azureRoutes from "./routes/azureRoutes.js";
import googleRoutes from "./routes/googleRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public root route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// Health check
app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

// Private routes
app.use("/azure", apiKeyCheck, azureRoutes);
app.use("/google", apiKeyCheck, googleRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
