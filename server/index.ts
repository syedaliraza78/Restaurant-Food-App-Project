import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js"; // Corrected import path
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
