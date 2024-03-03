import { Router } from "express";
const router = Router();

import { login, register } from "../controllers/authController.js";
import { validateRegsiterInput } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegsiterInput, register);
router.post("/login", login);

export default router;
