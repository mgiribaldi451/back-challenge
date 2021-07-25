import express, { Router } from "express";
import controller from "./metrics-controller";
const router: Router = express.Router();

router.get("/", controller.getMetrics);

export default router;