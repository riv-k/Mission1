import dotenv from "dotenv";
dotenv.config();

const apiKeyCheck = (req, res, next) => {
    const key = req.headers["x-api-key"];
    if (key !== process.env.API_KEY) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
};

export default apiKeyCheck;
