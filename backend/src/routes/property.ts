import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Property } from "../entities/Property";

const propertyRepo = AppDataSource.getRepository(Property);

export const app = Router();

app.get("/", async (req, res) => {
  const props = await propertyRepo.find();
  res.json(props);
});

app.post("/", async (req, res) => {
  const newProp = propertyRepo.create(req.body);
  const result = await propertyRepo.save(newProp);
  res.json(result);
});
app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProp = await propertyRepo.update(id, req.body);
  res.json(updatedProp);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteResult = await propertyRepo.delete(id);
  res.json(deleteResult);
});
