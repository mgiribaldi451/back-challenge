import express, { Router } from "express";
import controller from "./post-controller";
const router: Router = express.Router();

router.post("/", controller.postServers);

export default router;
