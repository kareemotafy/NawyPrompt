import "reflect-metadata";
import { DataSource } from "typeorm";
import { Property } from "./entities/Property";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "devuser",
  password: process.env.DB_PASSWORD || "devpass",
  database: process.env.DB_NAME || "devdb",
  synchronize: true, // ⚠️ auto-create tables in dev
  logging: true,
  entities: [Property],
  migrations: [],
  subscribers: [],
});
