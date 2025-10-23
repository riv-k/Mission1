import express from "express";
const router = express.Router();

// Example endpoint
router.get("/", (req, res) => {
    res.json({ message: "You hit the Google AI route!" });
});


export default router;
