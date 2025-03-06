import { Hono } from "hono";
import { handle } from "hono/vercel";
import { hc } from "hono/client";

import { logger } from "hono/logger";

const app = new Hono().basePath("/api");

app.use(logger());

const routes = app

type AppType = typeof routes;

const client = hc<AppType>("http://localhost:3000/");

export { app, handle, type AppType, hc, client };
