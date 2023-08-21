import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/database.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
const app = express();

// configure dotenv
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());

// database connection
connectDb();

// routes
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(8080, () => {
  console.log(`app running on port ${PORT}`);
});
