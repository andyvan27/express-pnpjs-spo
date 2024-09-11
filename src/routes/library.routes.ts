import { Router } from "express";
import { handleGetItems, handleGetItemsByFilter, handleGetItemsByCAML } from "../controllers/library.controller.js";

const router = Router();

router.get("/items", handleGetItems);
router.get("/items/:filter", handleGetItemsByFilter);
router.get("/items/caml/:filter", handleGetItemsByCAML);

export default router;