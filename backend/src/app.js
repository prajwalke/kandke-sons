import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load routes
app.use("/api/contact", contactRoutes);

// Connect to MongoDB
const mongoURI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/kandke_sons";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
