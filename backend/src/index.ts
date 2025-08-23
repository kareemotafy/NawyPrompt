import express from "express";
import dotenv from "dotenv";
import { AppDataSource } from "./data-source";
import { Property } from "./entities/Property";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(async () => {
    console.log("✅ Data Source has been initialized!");

    app.get("/", (req, res) => res.send("Backend API running"));

    app.get("/properties", async (req, res) => {
      const repo = AppDataSource.getRepository(Property);
      const props = await repo.find();
      res.json(props);
    });

    app.post("/properties", async (req, res) => {
      const repo = AppDataSource.getRepository(Property);
      const newProp = repo.create(req.body);
      const result = await repo.save(newProp);
      res.json(result);
    });
    app.patch("/properties/:id", async (req, res) => {
      const repo = AppDataSource.getRepository(Property);
      const { id } = req.params;
      const updatedProp = await repo.update(id, req.body);
      res.json(updatedProp);
    });

    app.delete("/properties/:id", async (req, res) => {
      const repo = AppDataSource.getRepository(Property);
      const { id } = req.params;
      const deleteResult = await repo.delete(id);
      res.json(deleteResult);
    });

    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error initializing data source:", err);
  });
