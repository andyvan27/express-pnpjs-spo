import { Router } from "express";
import { handleGetItems } from "../controllers/library.controller";

const router = Router();

router.get("/items", handleGetItems);

export default router;