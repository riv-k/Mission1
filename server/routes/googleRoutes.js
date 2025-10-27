import express from "express";
const router = express.Router();

// Example endpoint
router.post("/", (req, res) => {
    res.json({ message: "You hit the Google AI route!" });
});


export default router;
