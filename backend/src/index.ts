import "dotenv/config.js";

import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import { errorHandler } from "./utils/error-handler.js";
import { db } from "./db/connection.js";
import cors from "cors"

const app = express();

if (!process.env.API_URL_FRONTEND)
  throw new Error("Missing POSTGRES_URL environment variable!");

app.use(express.json());
const corsOptions = {
  origin: `${process.env.API_URL_FRONTEND}`,
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};
app.use(cors(corsOptions));


app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handle(err, res);
});

const server = createServer(app);

server.listen(process.env.API_PORT, () => {
  console.log("Servidor iniciado na porta " + process.env.API_PORT);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error({ promise, reason }, "Unhandled Rejection");
});

process.on("uncaughtException", (error) => {
  console.error({ error }, "Uncaught Exception");

  server.close(() => {
    console.info("Server closed");
    process.exit(1);
  });
});

export { server, db };