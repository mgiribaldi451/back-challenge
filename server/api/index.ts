import express, { Express } from "express";
import getServers from "./get-servers";
import postServers from "./post-server";
import getMetrics from "./metrics";

const app: Express = express();
app.use("/get-servers", getServers);
app.use("/post-server", postServers);
app.use("/metrics", getMetrics);

export default app;
