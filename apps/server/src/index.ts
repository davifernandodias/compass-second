import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
import cartRoutes from "./routes/cart";
import { errorHandler } from "./utils";
import cors from "cors";
import { db } from "@repo/db/client"; 

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
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

server.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080");
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

// Exporte tanto o server quanto o db
export { server, db };