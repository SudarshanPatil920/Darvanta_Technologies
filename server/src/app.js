import "dotenv/config";

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
    credentials: true
  })
);

app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
