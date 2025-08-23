import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AppDataSource } from "./data-source";

dotenv.config();
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // your Next.js frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // allow cookies if needed
  })
);
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/properties", require("./routes/property").app);

AppDataSource.initialize()
  .then(async () => {
    console.log("✅ Data Source has been initialized!");

    app.get("/", (req, res) => res.send("Backend API running"));

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error initializing data source:", err);
  });
