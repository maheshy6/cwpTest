import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import destinationRoute from "./routes/destination.route.js";
import userRoute from "./routes/user.route.js";
import tripRoute from "./routes/itinerary.route.js";
import { createServer } from "http";

const app = express();

// Middleware and Routes
app.use(express.json());
app.use("/api", destinationRoute);
app.use("/api/users", userRoute);
app.use("/api/users/trips", tripRoute);

// MongoDB Setup
mongoose
  .connect(process.env.MONGODB_CLOUD_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Export the app for Vercel
const server = createServer(app);
export default server;
