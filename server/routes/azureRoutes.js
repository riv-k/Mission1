import express from "express";
import multer from "multer";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

// Example endpoint
router.post("/test", (req, res) => {
  res.json({ message: "You hit the Azure Vision route!" });
});

// POST /azure
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No image uploaded" });

    const response = await axios.post(
      `${process.env.AZURE_PREDICTION_ENDPOINT}/customvision/v3.0/Prediction/${process.env.AZURE_PROJECT_ID}/classify/iterations/${process.env.AZURE_ITERATION_NAME}/image`,
      req.file.buffer,
      {
        headers: {
          "Content-Type": "application/octet-stream",
          "Prediction-Key": process.env.AZURE_PREDICTION_KEY,
        },
      }
    );

    // Pick the predictions
    const predictions = response.data.predictions;

    res.json({ predictions });
  } catch (error) {
    console.error("Azure prediction error:", error.message);
    res.status(500).json({ error: "Failed to identify vehicle" });
  }
});

export default router;
