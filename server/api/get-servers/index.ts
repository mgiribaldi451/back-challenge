import express, { Router } from "express";
import controller from "./controller";
const router: Router = express.Router();

router.get("/", controller.getServers);

export default router;
