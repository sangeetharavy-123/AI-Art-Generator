import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ status: "Backend working" });
});


app.post("/generate", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // FREE image API (no key, no limits)
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    res.json({ image: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Image generation failed" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});
