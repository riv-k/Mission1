import express from "express";
const router = express.Router();

// Example endpoint
router.get("/", (req, res) => {
  res.json({ message: "You hit the Azure Vision route!" });
});

export default router;
