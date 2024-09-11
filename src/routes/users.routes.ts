import { Router } from "express";
import { handleCreateUser, handleGetUserById, handleGetUsers } from "../controllers/users.controller";

const router = Router();

router.get("/", handleGetUsers);

router.get("/:id", handleGetUserById);

router.post("/", handleCreateUser);

export default router;