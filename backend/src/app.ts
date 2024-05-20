import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  })
);

app.use(express.json());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

export default app;
