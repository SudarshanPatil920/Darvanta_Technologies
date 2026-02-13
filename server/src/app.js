import "dotenv/config";

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(
  cors({
    origin: [
      "https://www.darvantatech.com",
      "https://darvantatech.com",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);


app.use(express.json());

app.use("/api/contact", contactRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
