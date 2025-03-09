import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
// import orderRoutes from "./routes/orders";
import { errorHandler } from "./utils";
import cartRoutes from "./routes/cart";

const app = express();

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
// app.use("/api", orderRoutes);

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
